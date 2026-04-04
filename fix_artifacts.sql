-- ============================================================
-- AuditEdge LMS — Artifact Data Fix
-- Run this in Supabase SQL Editor to replace all artifact
-- records with the correct titles, codes, and descriptions
-- that match the actual simulation kit files.
-- ============================================================

-- Step 1: Clear all existing artifact records
DELETE FROM artifacts;

-- Step 2: Insert correct artifact data matching actual files
INSERT INTO artifacts (code, title, category, description, file_url, file_type, week_unlock, size_kb) VALUES

-- ── CHARACTER BRIEFS (7) ─────────────────────────────────────────────────────
('CHAR-001', 'Marcus Webb — CIO',
 'Character Brief',
 'Character brief for Marcus Webb, Chief Information Officer. Your primary sponsor and escalation point for the SOX ITGC engagement.',
 'https://drive.google.com/your-link', 'docx', 1, 11),

('CHAR-002', 'Priya Nair — IT Security Manager',
 'Character Brief',
 'Character brief for Priya Nair, IT Security Manager. Key contact for logical access controls, MFA exceptions, and the security exception register.',
 'https://drive.google.com/your-link', 'docx', 1, 11),

('CHAR-003', 'Derek Osei — Cloud Infrastructure Lead',
 'Character Brief',
 'Character brief for Derek Osei, Cloud Infrastructure Lead. Your contact for AWS environment, CloudTrail configuration, and the S3 public access finding.',
 'https://drive.google.com/your-link', 'docx', 1, 11),

('CHAR-004', 'Sandra Liu — App Dev Manager',
 'Character Brief',
 'Character brief for Sandra Liu, Application Development Manager. Key contact for change management testing and the ServiceNow change log.',
 'https://drive.google.com/your-link', 'docx', 1, 10),

('CHAR-005', 'James Thornton — IT Compliance Officer',
 'Character Brief',
 'Character brief for James Thornton, IT Compliance Officer. Responsible for the IT governance framework, vendor SOC 2 tracker, and policy library.',
 'https://drive.google.com/your-link', 'docx', 1, 10),

('CHAR-006', 'Ravi Menon — Database Administrator',
 'Character Brief',
 'Character brief for Ravi Menon, Database Administrator. Key contact for database access controls and the shared DBA account finding.',
 'https://drive.google.com/your-link', 'docx', 1, 11),

('CHAR-007', 'Tracy Cole — Help Desk Manager',
 'Character Brief',
 'Character brief for Tracy Cole, Help Desk Manager. Your contact for access provisioning processes and the VPN certificate revocation gap.',
 'https://drive.google.com/your-link', 'docx', 1, 10),

-- ── REFERENCE DOCUMENTS (12) ─────────────────────────────────────────────────
('REF-001', 'AuditEdge Corp IT Environment Overview',
 'Reference',
 'Overview of the AuditEdge Corp IT environment including all key systems, their criticality ratings, and deployment type (cloud/on-premises).',
 'https://drive.google.com/your-link', 'docx', 1, 45),

('REF-002', 'IT Audit Methodology Overview',
 'Reference',
 'AuditEdge internal IT audit methodology document covering planning, fieldwork, reporting, and follow-up standards.',
 'https://drive.google.com/your-link', 'docx', 1, 32),

('REF-003', 'IT Risk Universe Template',
 'Reference',
 'Master template for documenting and rating IT risks across all four ITGC domains used in the FY2024 engagement.',
 'https://drive.google.com/your-link', 'docx', 1, 38),

('REF-004', 'IAM Policy Configuration Document',
 'Reference',
 'AWS IAM policy configuration reference document showing role assignments, permission boundaries, and service account configurations.',
 'https://drive.google.com/your-link', 'docx', 2, 41),

('REF-005', 'Week 1 Knowledge Check',
 'Reference',
 'Self-assessment knowledge check for Week 1 covering IT environment fundamentals and the AuditEdge Corp system landscape.',
 'https://drive.google.com/your-link', 'docx', 1, 29),

('REF-006', 'ITGC Framework Quiz',
 'Reference',
 'Quiz covering IT General Controls framework concepts including the four ITGC domains, TOD vs TOE, and control classifications.',
 'https://drive.google.com/your-link', 'docx', 2, 35),

('REF-007', 'Prior Year ITGC Workpapers FY2023',
 'Reference',
 'FY2023 ITGC audit workpapers including open findings, management responses, and areas flagged for expanded FY2024 scope.',
 'https://drive.google.com/your-link', 'docx', 2, 88),

('REF-008', 'CloudSafe Contract Summary',
 'Reference',
 'Key terms of the CloudSafe managed security services contract including SLAs, termination clauses, and subservice organisation disclosures.',
 'https://drive.google.com/your-link', 'docx', 5, 31),

('REF-009', 'SOC 2 Evidence Artifacts Package',
 'Reference',
 'Evidence package for the SOC 2 readiness assessment covering all five Trust Services Criteria with supporting documentation.',
 'https://drive.google.com/your-link', 'docx', 5, 95),

('REF-010', 'IT Audit Universe',
 'Reference',
 'Master catalogue of all 29 auditable IT entities at AuditEdge Corp with risk ratings, audit frequency, and FY2024 in-scope status.',
 'https://drive.google.com/your-link', 'docx', 1, 43),

('REF-011', 'Security Exception Register & Vendor Risk Register',
 'Reference',
 'Active security exceptions including the MFA mainframe exemption, and vendor risk register with Tier 1/2/3 classifications and SOC 2 collection status.',
 'https://drive.google.com/your-link', 'docx', 3, 27),

('REF-012', 'Incident Response Plan',
 'Reference',
 'AuditEdge Corp Incident Response Plan with playbooks for data breach, ransomware, insider threat, and cloud compromise scenarios.',
 'https://drive.google.com/your-link', 'docx', 8, 54),

-- ── POLICIES (12) ────────────────────────────────────────────────────────────
('POL-SEC-001', 'Information Security Policy',
 'Policy',
 'Master information security policy covering objectives, scope, governance structure, and compliance requirements.',
 'https://drive.google.com/your-link', 'docx', 1, 38),

('POL-SEC-002', 'Access Control Policy',
 'Policy',
 'Policy governing user access provisioning, periodic review, and deprovisioning including least privilege and RBAC requirements.',
 'https://drive.google.com/your-link', 'docx', 2, 41),

('POL-SEC-003', 'Encryption & Key Management Policy',
 'Policy',
 'Policy covering data encryption standards, cryptographic key lifecycle management, and key storage requirements.',
 'https://drive.google.com/your-link', 'docx', 5, 39),

('POL-SEC-004', 'Incident Response Policy',
 'Policy',
 'Policy defining incident classification, escalation procedures, notification requirements, and post-incident review obligations.',
 'https://drive.google.com/your-link', 'docx', 8, 36),

('POL-SEC-005', 'Patch Management Policy',
 'Policy',
 'Policy governing vulnerability and patch management timelines by CVSS severity rating across all in-scope systems.',
 'https://drive.google.com/your-link', 'docx', 8, 33),

('POL-SEC-006', 'Password & Authentication Standards',
 'Policy',
 'Standards for password complexity, MFA requirements by account type, and service account authentication controls.',
 'https://drive.google.com/your-link', 'docx', 3, 29),

('POL-SEC-007', 'Network Security Policy',
 'Policy',
 'Policy covering network segmentation requirements, firewall rule standards, DMZ architecture, and VPN access controls.',
 'https://drive.google.com/your-link', 'docx', 2, 34),

('POL-HR-001', 'Acceptable Use Policy',
 'Policy',
 'Policy governing acceptable use of AuditEdge Corp IT systems, data, and network resources by all staff and contractors.',
 'https://drive.google.com/your-link', 'docx', 1, 28),

('POL-ITGC-001', 'Change Management Policy',
 'Policy',
 'Policy governing normal, standard, and emergency change management processes including CAB approval requirements and PIR obligations.',
 'https://drive.google.com/your-link', 'docx', 3, 42),

('POL-DG-001', 'Data Classification Policy',
 'Policy',
 'Policy defining data classification tiers (Confidential, Internal, Public) and handling requirements for each tier.',
 'https://drive.google.com/your-link', 'docx', 5, 31),

('POL-BCM-001', 'Business Continuity Policy',
 'Policy',
 'Policy covering BCP and DR requirements, recovery time objectives (RTO), recovery point objectives (RPO), and DR test frequency.',
 'https://drive.google.com/your-link', 'docx', 10, 37),

('POL-VRM-001', 'Vendor Risk Management Policy',
 'Policy',
 'Policy governing third-party vendor risk assessment, ongoing monitoring, and SOC 2 report collection requirements by vendor tier.',
 'https://drive.google.com/your-link', 'docx', 5, 33),

-- ── TEMPLATES (10) ───────────────────────────────────────────────────────────
('TMPL-AUD-001', 'Planning Memo Template',
 'Template',
 'Audit engagement planning memo template covering all six required components: background, scope, risk summary, team, prior findings, and approvals.',
 'https://drive.google.com/your-link', 'docx', 1, 10),

('TMPL-AUD-002', 'Risk & Controls Matrix Template',
 'Template',
 'RCM template linking identified risks to the controls that mitigate them and the specific test procedures that will validate those controls.',
 'https://drive.google.com/your-link', 'docx', 1, 12),

('TMPL-AUD-003', 'Walkthrough & Inquiry Memo Template',
 'Template',
 'Template for documenting control walkthroughs and management inquiry sessions during the Test of Design phase.',
 'https://drive.google.com/your-link', 'docx', 2, 10),

('TMPL-AUD-004', 'Attribute Test Workpaper Template',
 'Template',
 'TOE workpaper template with fields for population, sample size, selection method, criteria, and individual item results including exception documentation.',
 'https://drive.google.com/your-link', 'docx', 2, 11),

('TMPL-AUD-005', 'Audit Finding Template',
 'Template',
 'C/C/C/E/R format finding template with sections for Condition, Criteria, Cause, Effect, Recommendation, and Management Response.',
 'https://drive.google.com/your-link', 'docx', 3, 10),

('TMPL-AUD-006', 'SOC 2 Gap Assessment Template',
 'Template',
 'SOC 2 readiness gap analysis template structured across all five Trust Services Criteria with current state, target state, and gap columns.',
 'https://drive.google.com/your-link', 'docx', 5, 12),

('TMPL-AUD-007', 'NIST CSF Maturity Scoring Template',
 'Template',
 'NIST CSF maturity scoring template for all five functions (Identify, Protect, Detect, Respond, Recover) with current and target level scoring.',
 'https://drive.google.com/your-link', 'docx', 8, 11),

('TMPL-AUD-008', 'Audit Report Template',
 'Template',
 'Formal audit report template with executive summary, scope and methodology, findings summary table, and detailed findings sections.',
 'https://drive.google.com/your-link', 'docx', 4, 13),

('TMPL-AUD-009', 'Workpaper Review Note Template',
 'Template',
 'Template for documenting Audit Manager review notes on completed workpapers including sign-off and any required follow-up actions.',
 'https://drive.google.com/your-link', 'docx', 3, 11),

('TMPL-AUD-010', 'Portfolio Cover Memo Template',
 'Template',
 'Cover memo template for the Week 10 capstone portfolio submission summarising all completed deliverables and key findings.',
 'https://drive.google.com/your-link', 'docx', 10, 13),

-- ── SIMULATION DATA (7) ──────────────────────────────────────────────────────
('AD-EXPORT', 'AD User Export — Nov 2024',
 'Simulation Data',
 'Active Directory user export showing all 1,400 employee accounts, group memberships, last login dates, and account status. Contains the terminated user access exceptions.',
 'https://drive.google.com/your-link', 'csv', 2, 63),

('SN-CHANGELOG', 'ServiceNow Change Log Aug–Nov 2024',
 'Simulation Data',
 'Full change management log covering 150 change tickets over 90 days including Normal, Standard, and Emergency changes with CAB approval dates.',
 'https://drive.google.com/your-link', 'csv', 3, 50),

('WD-TERMINATIONS', 'Workday Termination Report 2024',
 'Simulation Data',
 'HR termination records for all 40 leavers in the 6-month review period including termination dates and exit types.',
 'https://drive.google.com/your-link', 'csv', 2, 14),

('VPN-CERTS', 'VPN Certificate Registry Nov 2024',
 'Simulation Data',
 'VPN certificate registry showing all active certificates, associated user accounts, issue dates, and expiry dates. Contains the 3 terminated-employee certificate exceptions.',
 'https://drive.google.com/your-link', 'csv', 2, 17),

('AWS-CLOUDTRAIL', 'AWS CloudTrail Export Oct–Nov 2024',
 'Simulation Data',
 'CloudTrail log export for the AuditEdge AWS environment including IAM role assumptions, S3 access events, and the anomalous Tor exit node activity.',
 'https://drive.google.com/your-link', 'json', 8, 248),

('VULN-SCAN', 'Vulnerability Scan Report Nov 2024',
 'Simulation Data',
 'Nessus vulnerability scan results for all in-scope systems including the critical Outlook vulnerability affecting 847 workstations (CVSS 9.8).',
 'https://drive.google.com/your-link', 'pdf', 8, 19),

('CLOUDSAFE-SOC2', 'CloudSafe SOC 2 Type II Report 2023–2024',
 'Simulation Data',
 'CloudSafe managed security SOC 2 Type II report covering Apr 2023 to Mar 2024. Seven months old at time of review — the vendor monitoring gap finding.',
 'https://drive.google.com/your-link', 'docx', 5, 17),

-- ── PROGRAMME DOCUMENT (1) ───────────────────────────────────────────────────
('PROG-001', 'IT Audit Skillternship Programme Document',
 'Reference',
 'The full 10-week IT Audit Skillternship programme document including week-by-week objectives, deliverables, assessment criteria, and portfolio requirements.',
 'https://drive.google.com/your-link', 'docx', 1, 180);

