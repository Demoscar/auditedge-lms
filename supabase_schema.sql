-- ============================================================
-- AuditEdge LMS — Supabase Schema
-- Run this in your Supabase SQL Editor
-- ============================================================

-- Profiles table (extends auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'mentee' CHECK (role IN ('mentee', 'instructor')),
  avatar_url TEXT,
  cohort TEXT DEFAULT '2024',
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  last_active TIMESTAMPTZ DEFAULT NOW()
);

-- Progress table — one row per user per week
CREATE TABLE progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  week_number INTEGER NOT NULL CHECK (week_number BETWEEN 1 AND 10),
  status TEXT NOT NULL DEFAULT 'locked' CHECK (status IN ('locked','available','in_progress','completed')),
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  score INTEGER CHECK (score BETWEEN 0 AND 100),
  UNIQUE(user_id, week_number)
);

-- Task submissions
CREATE TABLE submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  week_number INTEGER NOT NULL,
  task_id TEXT NOT NULL,
  task_title TEXT NOT NULL,
  content TEXT,
  file_url TEXT,
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  reviewed_at TIMESTAMPTZ,
  score INTEGER CHECK (score BETWEEN 0 AND 100),
  feedback TEXT,
  status TEXT DEFAULT 'submitted' CHECK (status IN ('submitted','reviewed','needs_revision'))
);

-- Artifacts (files hosted on Google Drive or GitHub)
CREATE TABLE artifacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  file_url TEXT NOT NULL,
  file_type TEXT NOT NULL,
  week_unlock INTEGER DEFAULT 1,
  size_kb INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Notifications
CREATE TABLE notifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  type TEXT DEFAULT 'info' CHECK (type IN ('info','success','warning','feedback')),
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Certificates
CREATE TABLE certificates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE UNIQUE,
  issued_at TIMESTAMPTZ DEFAULT NOW(),
  final_score INTEGER,
  certificate_code TEXT UNIQUE DEFAULT 'AE-' || upper(substring(gen_random_uuid()::text, 1, 8))
);

-- ── Row Level Security ────────────────────────────────────────────────────────
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE artifacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;

-- Profiles: users see own, instructors see all
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Instructors can view all profiles" ON profiles FOR SELECT USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'instructor')
);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

-- Progress: users see own, instructors see all
CREATE POLICY "Users can view own progress" ON progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own progress" ON progress FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Instructors can view all progress" ON progress FOR SELECT USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'instructor')
);
CREATE POLICY "Instructors can update all progress" ON progress FOR UPDATE USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'instructor')
);

-- Submissions: users see own, instructors see all
CREATE POLICY "Users can manage own submissions" ON submissions FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Instructors can view all submissions" ON submissions FOR SELECT USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'instructor')
);
CREATE POLICY "Instructors can update submissions" ON submissions FOR UPDATE USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'instructor')
);

-- Artifacts: all authenticated users can view
CREATE POLICY "Authenticated users can view artifacts" ON artifacts FOR SELECT TO authenticated USING (true);

-- Notifications: users see own
CREATE POLICY "Users see own notifications" ON notifications FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Instructors can insert notifications" ON notifications FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'instructor')
);

-- Certificates: users see own, instructors see all
CREATE POLICY "Users see own certificate" ON certificates FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Instructors see all certificates" ON certificates FOR SELECT USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'instructor')
);

-- ── Trigger: auto-create profile on signup ────────────────────────────────────
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, full_name, email, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'role', 'mentee')
  );
  -- Initialise progress rows for all 10 weeks
  INSERT INTO progress (user_id, week_number, status)
  SELECT NEW.id, w, CASE WHEN w = 1 THEN 'available' ELSE 'locked' END
  FROM generate_series(1, 10) w;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- ── Update last_active on login ──────────────────────────────────────────────
CREATE OR REPLACE FUNCTION update_last_active()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE profiles SET last_active = NOW() WHERE id = NEW.id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ── Seed artifacts data ───────────────────────────────────────────────────────
INSERT INTO artifacts (code, title, category, description, file_url, file_type, week_unlock, size_kb) VALUES
('REF-001','IT Audit Universe','Reference','Master catalogue of all 29 auditable entities at AuditEdge Corp with risk ratings and audit frequency.','https://drive.google.com/your-link','docx',1,45),
('REF-002','AuditEdge Corp Org Chart','Reference','Organisational structure showing reporting lines for IT, Finance, and Compliance.','https://drive.google.com/your-link','docx',1,32),
('REF-003','Prior Year Audit Workpapers FY2023','Reference','FY2023 ITGC audit workpapers with open findings and management responses.','https://drive.google.com/your-link','docx',2,88),
('REF-004','IT Risk Register','Reference','Current IT risk register with likelihood and impact ratings.','https://drive.google.com/your-link','docx',1,41),
('REF-005','IT Policy Library Index','Reference','Index of all 12 IT policies with owners, approval dates, and review status.','https://drive.google.com/your-link','docx',1,29),
('REF-006','Character Briefs — IT Team','Reference','Profiles of 7 AuditEdge Corp IT staff you will interact with during the simulation.','https://drive.google.com/your-link','docx',1,67),
('REF-007','Vendor Register & SOC 2 Tracker','Reference','Vendor risk tiers and SOC 2 report collection status.','https://drive.google.com/your-link','docx',5,38),
('REF-008','CloudSafe Contract Summary','Reference','Key terms of the CloudSafe managed security contract including SLAs and termination clauses.','https://drive.google.com/your-link','docx',5,31),
('REF-009','SOC 2 Evidence Package','Reference','Evidence package for SOC 2 readiness assessment across all Trust Services Criteria.','https://drive.google.com/your-link','docx',5,95),
('REF-010','Security Exception Register','Reference','Active security exceptions including MFA exemptions and compensating controls.','https://drive.google.com/your-link','docx',3,27),
('REF-011','Incident Response Plan','Reference','AuditEdge Corp IRP with playbooks for data breach, ransomware, and insider threat.','https://drive.google.com/your-link','docx',8,54),
('REF-012','IT Audit Universe Detail','Reference','Detailed version of the audit universe with system descriptions and control owners.','https://drive.google.com/your-link','docx',2,43),
('POL-SEC-001','Information Security Policy','Policy','Master information security policy covering objectives, scope, and governance structure.','https://drive.google.com/your-link','docx',1,38),
('POL-SEC-002','Access Control Policy','Policy','Policy governing user access provisioning, review, and deprovisioning.','https://drive.google.com/your-link','docx',2,41),
('POL-SEC-003','Encryption & Key Management Policy','Policy','Policy covering data encryption standards and cryptographic key lifecycle.','https://drive.google.com/your-link','docx',5,39),
('POL-SEC-004','Incident Response Policy','Policy','Policy defining incident classification, escalation, and response procedures.','https://drive.google.com/your-link','docx',8,36),
('POL-SEC-005','Patch Management Policy','Policy','Policy governing vulnerability and patch management timelines by severity.','https://drive.google.com/your-link','docx',8,33),
('POL-SEC-006','Password & Authentication Standards','Policy','Standards for password complexity, MFA requirements, and service account controls.','https://drive.google.com/your-link','docx',3,29),
('POL-SEC-007','Network Security Policy','Policy','Policy covering network segmentation, firewall rules, and DMZ architecture.','https://drive.google.com/your-link','docx',2,34),
('POL-HR-001','Acceptable Use Policy','Policy','Policy governing acceptable use of AuditEdge Corp IT systems and data.','https://drive.google.com/your-link','docx',1,28),
('POL-ITGC-001','Change Management Policy','Policy','Policy governing normal, standard, and emergency change management processes.','https://drive.google.com/your-link','docx',3,42),
('POL-DG-001','Data Classification Policy','Policy','Policy defining data classification tiers and handling requirements.','https://drive.google.com/your-link','docx',5,31),
('POL-BCM-001','Business Continuity Policy','Policy','Policy covering BCP and DR requirements including testing frequency.','https://drive.google.com/your-link','docx',10,37),
('POL-VRM-001','Vendor Risk Management Policy','Policy','Policy governing third-party risk assessment and ongoing vendor monitoring.','https://drive.google.com/your-link','docx',5,33),
('AD-EXPORT','AD User Export — Nov 2024','Simulation Data','Active Directory user export showing all accounts, groups, and last login dates.','https://drive.google.com/your-link','csv',2,63),
('SN-CHANGELOG','ServiceNow Change Log Aug–Nov 2024','Simulation Data','Full change management log covering 150 change tickets over 90 days.','https://drive.google.com/your-link','csv',3,50),
('WD-TERMINATIONS','Workday Termination Report 2024','Simulation Data','HR termination records for all 40 leavers in the 6-month review period.','https://drive.google.com/your-link','csv',2,14),
('VPN-CERTS','VPN Certificate Registry Nov 2024','Simulation Data','VPN certificate registry showing all active certificates and associated users.','https://drive.google.com/your-link','csv',2,17),
('AWS-CLOUDTRAIL','AWS CloudTrail Export Oct–Nov 2024','Simulation Data','CloudTrail log export for the AWS environment including IAM role assumptions.','https://drive.google.com/your-link','json',8,248),
('VULN-SCAN','Vulnerability Scan Report Nov 2024','Simulation Data','Nessus vulnerability scan results for all in-scope systems.','https://drive.google.com/your-link','pdf',8,19),
('CLOUDSAFE-SOC2','CloudSafe SOC 2 Type II Report 2023–2024','Simulation Data','CloudSafe managed security SOC 2 Type II report covering Apr 2023 – Mar 2024.','https://drive.google.com/your-link','docx',5,17),
('TMPL-AUD-001','Planning Memo Template','Template','Audit planning memo template with all six required components.','https://drive.google.com/your-link','docx',1,10),
('TMPL-AUD-002','Walkthrough Template','Template','Control walkthrough documentation template.','https://drive.google.com/your-link','docx',2,10),
('TMPL-AUD-003','TOE Workpaper Template','Template','Test of Operating Effectiveness workpaper with population, sample, and exception documentation.','https://drive.google.com/your-link','docx',2,11),
('TMPL-AUD-004','Audit Finding Template','Template','C/C/C/E/R format finding template with management response section.','https://drive.google.com/your-link','docx',3,10),
('TMPL-AUD-005','Risk & Control Matrix Template','Template','RCM template linking risks to controls to test procedures.','https://drive.google.com/your-link','docx',1,12),
('TMPL-AUD-006','Audit Report Template','Template','Formal audit report template with executive summary and findings sections.','https://drive.google.com/your-link','docx',4,13),
('TMPL-AUD-007','Vendor Risk Assessment Template','Template','Vendor risk assessment questionnaire and scoring template.','https://drive.google.com/your-link','docx',5,11),
('TMPL-AUD-008','SOC 2 Gap Analysis Template','Template','SOC 2 readiness gap analysis template across all five Trust Services Criteria.','https://drive.google.com/your-link','docx',5,12),
('TMPL-AUD-009','NIST CSF Assessment Template','Template','NIST CSF maturity scoring template for all five functions.','https://drive.google.com/your-link','docx',8,11),
('TMPL-AUD-010','Audit Committee Briefing Template','Template','Executive briefing template for Audit Committee presentation.','https://drive.google.com/your-link','docx',10,13),
('CHAR-001','David Kim — CISO','Character Brief','Character brief for David Kim, Chief Information Security Officer.','https://drive.google.com/your-link','docx',1,11),
('CHAR-002','Sandra Liu — App Dev Manager','Character Brief','Character brief for Sandra Liu, Application Development Manager.','https://drive.google.com/your-link','docx',1,11),
('CHAR-003','Derek Osei — Cloud Infrastructure Lead','Character Brief','Character brief for Derek Osei, Cloud Infrastructure Lead.','https://drive.google.com/your-link','docx',1,11),
('CHAR-004','Priya Nair — IT Security Manager','Character Brief','Character brief for Priya Nair, IT Security Manager.','https://drive.google.com/your-link','docx',1,10),
('CHAR-005','Tracy Cole — Help Desk Manager','Character Brief','Character brief for Tracy Cole, Help Desk Manager.','https://drive.google.com/your-link','docx',1,10),
('CHAR-006','Marcus Webb — CIO','Character Brief','Character brief for Marcus Webb, Chief Information Officer.','https://drive.google.com/your-link','docx',1,11),
('CHAR-007','James Thornton — IT Compliance Officer','Character Brief','Character brief for James Thornton, IT Compliance Officer.','https://drive.google.com/your-link','docx',1,10);

-- ── Announcements (instructor posts visible to all) ───────────────────────────
CREATE TABLE announcements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  author_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  pinned BOOLEAN DEFAULT FALSE,
  week_tag INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
CREATE POLICY "All authenticated can read announcements" ON announcements FOR SELECT TO authenticated USING (true);
CREATE POLICY "Instructors can manage announcements" ON announcements FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'instructor')
);

-- ── Glossary terms ────────────────────────────────────────────────────────────
CREATE TABLE glossary (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  term TEXT NOT NULL UNIQUE,
  definition TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'General',
  related_week INTEGER
);
ALTER TABLE glossary ENABLE ROW LEVEL SECURITY;
CREATE POLICY "All authenticated can read glossary" ON glossary FOR SELECT TO authenticated USING (true);
CREATE POLICY "Instructors can manage glossary" ON glossary FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'instructor')
);

-- ── Seed glossary ─────────────────────────────────────────────────────────────
INSERT INTO glossary (term, definition, category, related_week) VALUES
('ITGC','IT General Controls — the foundational layer of IT controls covering logical access, change management, computer operations, and program development. ITGCs must be effective before application-level controls can be relied upon.','Controls',2),
('ITAC','IT Application Controls — controls embedded within a specific application to protect the accuracy, completeness, and integrity of data processing. Examples include input validation, automated calculations, and interface controls.','Controls',7),
('ELC','Entity-Level Controls — company-wide controls such as tone at the top, governance structures, and IT policies that create an environment in which individual controls are more likely to operate effectively.','Controls',5),
('TOD','Test of Design — an audit test that asks whether a control is capable of preventing or detecting a risk if it operates as described. Conducted through walkthroughs and inquiry.','Methodology',2),
('TOE','Test of Operating Effectiveness — an audit test that asks whether a control actually operated as designed, consistently, throughout the review period. Conducted through attribute testing on a sample.','Methodology',2),
('SOX','Sarbanes-Oxley Act (2002) — US legislation requiring management and external auditors to assess the effectiveness of internal controls over financial reporting. Section 404 is the primary driver of ITGC testing.','Regulatory',3),
('SOC 2','System and Organization Controls 2 — an audit standard addressing security, availability, processing integrity, confidentiality, and privacy at a service organisation. Type II reports test controls over a period (minimum 6 months).','Regulatory',5),
('SOD','Segregation of Duties — a control principle requiring that no single individual can control all phases of a transaction. For example, the person who creates a vendor should not also be the person who approves payments to that vendor.','Controls',2),
('RBAC','Role-Based Access Control — an access management approach in which users are assigned roles, and roles define access entitlements. Reduces provisioning errors and simplifies periodic access reviews.','Access Management',3),
('UAR','User Access Review — a periodic process in which managers certify that each team member''s system access is still appropriate. Required by SOX, SOC 2 (CC6.3), and PCI DSS.','Access Management',3),
('CAB','Change Advisory Board — a group responsible for reviewing and approving changes to production IT systems before implementation. All Normal Changes must receive CAB approval prior to deployment.','Change Management',4),
('PIR','Post-Implementation Review — a review conducted after a change is deployed to production, confirming that the change achieved its objective and that no unintended consequences occurred.','Change Management',4),
('NIST CSF','National Institute of Standards and Technology Cybersecurity Framework — a maturity framework for managing cybersecurity risk organised into five functions: Identify, Protect, Detect, Respond, and Recover.','Frameworks',9),
('ISO 27001','International standard for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS). Organisations can be certified against it by an accredited body.','Frameworks',9),
('SIEM','Security Information and Event Management — a system (such as Splunk) that aggregates log data from across the IT environment and applies rules to detect anomalous or suspicious activity in real time.','Cybersecurity',8),
('VPN','Virtual Private Network — a technology that creates an encrypted tunnel between a remote user''s device and the corporate network. Auditors verify that VPN certificates are revoked on termination.','Infrastructure',2),
('DMZ','Demilitarised Zone — an isolated network segment hosting internet-facing systems (web servers, API gateways), separated from the internal network by a second firewall to limit the impact of a perimeter breach.','Infrastructure',2),
('MFA','Multi-Factor Authentication — authentication using two or more factors from different categories (something you know, have, or are). Required by SOC 2 (CC6.1), NIST CSF, and PCI DSS v4.0 for privileged access.','Access Management',3),
('ERP','Enterprise Resource Planning — an integrated platform managing core business processes (finance, HR, supply chain). The ERP is always in scope for SOX ITGC because it drives financial reporting.','Systems',1),
('CVSS','Common Vulnerability Scoring System — a standardised framework for rating the severity of software vulnerabilities on a scale of 0 to 10. CVSS 9.0–10.0 = Critical; 7.0–8.9 = High.','Cybersecurity',8),
('C/C/C/E/R','Condition / Criteria / Cause / Effect / Recommendation — the five-element structure for documenting an audit finding. Each element is required for a complete and defensible finding.','Methodology',4),
('PCAOB','Public Company Accounting Oversight Board — the US body that sets auditing standards for public companies. AS 2201 governs how external auditors assess ITGC effectiveness under SOX Section 404.','Regulatory',3),
('RCM','Risk and Control Matrix — a document mapping each identified risk to the control(s) that mitigate it, and then to the specific test procedures that will validate those controls. The backbone of the audit programme.','Methodology',2),
('WAF','Web Application Firewall — a security control that monitors and filters HTTP traffic between a web application and the internet, protecting against common attacks such as SQL injection and cross-site scripting.','Cybersecurity',8),
('IRP','Incident Response Plan — a documented procedure defining how the organisation identifies, contains, investigates, and recovers from security incidents. Required by SOC 2 (CC7.3) and ISO 27001 (A.5.26).','Cybersecurity',8),
('BCP','Business Continuity Plan — a plan ensuring that critical business processes can continue during and after a disruptive event. Linked to the DR plan and tested at defined intervals.','Resilience',10),
('DR','Disaster Recovery — the process of restoring IT systems and data after a disruptive event. DR plans must be tested periodically — untested DR plans are a common audit finding.','Resilience',10);
