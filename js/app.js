// Shared icons SVG helper
const Icons = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>`,
  modules: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>`,
  artifacts: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>`,
  cert: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>`,
  signout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20,6 9,17 4,12"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>`,
  tasks: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  award: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23,4 23,10 17,10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
};

function renderSidebar(activePage, profile) {
  const initial = (profile?.full_name || 'U').charAt(0).toUpperCase();
  const isInstructor = profile?.role === 'instructor';
  return `
  <div class="sidebar" id="sidebar">
    <div class="sidebar-logo">
      <div class="logo-mark">AE</div>
      <div class="logo-text">AuditEdge<span>IT Audit Skillternship</span></div>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-section-label">Main</div>
      ${isInstructor ? `
        <a href="instructor.html" class="nav-item ${activePage==='instructor'?'active':''}">
          ${Icons.users}<span>Instructor Dashboard</span>
        </a>
        <a href="artifacts.html" class="nav-item ${activePage==='artifacts'?'active':''}">
          ${Icons.artifacts}<span>Artifact Library</span>
        </a>
      ` : `
        <a href="dashboard.html" class="nav-item ${activePage==='dashboard'?'active':''}">
          ${Icons.home}<span>Dashboard</span>
        </a>
        <a href="modules.html" class="nav-item ${activePage==='modules'?'active':''}">
          ${Icons.modules}<span>Programme Weeks</span>
        </a>
        <a href="artifacts.html" class="nav-item ${activePage==='artifacts'?'active':''}">
          ${Icons.artifacts}<span>Artifact Library</span>
        </a>
        <div class="nav-section-label" style="margin-top:0.5rem">My Progress</div>
        <a href="submissions.html" class="nav-item ${activePage==='submissions'?'active':''}">
          ${Icons.tasks}<span>My Submissions</span>
        </a>
        <a href="certificate.html" class="nav-item ${activePage==='certificate'?'active':''}">
          ${Icons.cert}<span>Certificate</span>
        </a>
      `}
    </nav>
    <div class="sidebar-user">
      <div class="user-avatar">${initial}</div>
      <div class="user-info">
        <div class="user-name">${profile?.full_name || 'Loading...'}</div>
        <div class="user-role">${isInstructor ? 'Instructor' : 'Mentee'}</div>
      </div>
      <button class="btn-signout" onclick="signOut()" title="Sign out">${Icons.signout}</button>
    </div>
  </div>
  <!-- Mobile overlay -->
  <div id="sidebarOverlay" onclick="closeSidebar()" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:99;backdrop-filter:blur(2px)"></div>
  `;
}

function renderTopbar(title, profile, unreadCount = 0) {
  return `
  <div class="topbar">
    <div style="display:flex;align-items:center;gap:12px">
      <button class="hamburger btn-icon btn-ghost" onclick="toggleSidebar()" id="hamburgerBtn">${Icons.menu}</button>
      <span class="topbar-title">${title}</span>
    </div>
    <div class="topbar-actions">
      <button class="notif-btn" onclick="toggleNotifs()" id="notifBtn">
        ${Icons.bell}
        ${unreadCount > 0 ? `<span class="notif-dot"></span>` : ''}
      </button>
    </div>
  </div>
  `;
}

function toast(msg, type = 'info') {
  const c = document.getElementById('toastContainer');
  if (!c) return;
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<span>${msg}</span>`;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}

function toggleSidebar() {
  const s = document.getElementById('sidebar');
  const o = document.getElementById('sidebarOverlay');
  s.classList.toggle('mobile-open');
  if (o) o.style.display = s.classList.contains('mobile-open') ? 'block' : 'none';
}
function closeSidebar() {
  const s = document.getElementById('sidebar');
  const o = document.getElementById('sidebarOverlay');
  s.classList.remove('mobile-open');
  if (o) o.style.display = 'none';
}

function toggleNotifs() {
  const p = document.getElementById('notifPanel');
  if (p) p.classList.toggle('open');
}

function scoreClass(score) {
  if (score === null || score === undefined) return 'score-none';
  if (score >= 75) return 'score-high';
  if (score >= 50) return 'score-mid';
  return 'score-low';
}

function scoreLabel(score) {
  if (score === null || score === undefined) return '—';
  return score + '%';
}

function fileTypeIcon(type) {
  const icons = { docx:'📄', pdf:'📋', csv:'📊', json:'💾', xlsx:'📈', pptx:'📑' };
  return icons[type] || '📁';
}

function catClass(cat) {
  const map = {
    'Policy':'cat-policy','Reference':'cat-reference','Template':'cat-template',
    'Simulation Data':'cat-simulation','Character Brief':'cat-character'
  };
  return map[cat] || 'cat-reference';
}

function weekData() {
  return [
    { n:1, title:"Onboarding & IT Environment", desc:"Review AuditEdge Corp's IT landscape, meet your team, complete the Audit Universe orientation.", tasks:["Complete the pre-engagement IT environment review","Review all Character Briefs for your key contacts","Study the IT Audit Universe and confirm FY2024 scope","Submit: IT Environment Summary (500 words)"], days:5 },
    { n:2, title:"SOX ITGC Planning", desc:"Develop your planning memo, confirm scope, map in-scope systems to financial statement line items.", tasks:["Draft the FY2024 ITGC Planning Memo (TMPL-AUD-001)","Review FY2023 prior year workpapers for open findings","Complete the Risk & Control Matrix for logical access","Submit: Approved Planning Memo"], days:5 },
    { n:3, title:"Logical Access Testing", desc:"Test user provisioning, deprovisioning, VPN certificate management, and privileged access reviews.", tasks:["Perform AD user export analysis — identify terminated accounts","Cross-reference VPN certificate registry against termination report","Test privileged access review completeness","Draft Finding: Logical Access exceptions (C/C/C/E/R format)","Submit: Logical Access TOE Workpaper"], days:7 },
    { n:4, title:"Change Management Testing", desc:"Test Normal, Standard, and Emergency change controls using the ServiceNow change log.", tasks:["Analyse 90-day ServiceNow change log (150 tickets)","Select and test sample of 25 changes against criteria","Identify Emergency Change approval timing exceptions","Draft Finding: Change Management exceptions","Submit: Change Management TOE Workpaper + Findings"], days:7 },
    { n:5, title:"SOC 2 Readiness — Part 1", desc:"Evaluate Entity-Level Controls and CC1/CC2 Trust Services Criteria for SOC 2 readiness.", tasks:["Review IT policy library against SOC 2 CC requirements","Assess ELC maturity: tone at top, governance, monitoring","Review vendor SOC 2 collection programme and CloudSafe report","Submit: SOC 2 Gap Analysis Part 1 (TMPL-AUD-008)"], days:7 },
    { n:6, title:"SOC 2 Readiness — Part 2", desc:"Evaluate access management, change management, and incident response against SOC 2 criteria.", tasks:["Test CC6 (Logical and Physical Access) controls","Test CC8 (Change Management) SOC 2 criteria","Review CloudSafe SOC 2 Type II report and note exceptions","Submit: SOC 2 Gap Analysis Part 2 + Vendor Risk Memo"], days:7 },
    { n:7, title:"Interim Audit Report", desc:"Consolidate all ITGC and SOC 2 findings into an interim report for management review.", tasks:["Consolidate all findings to date in C/C/C/E/R format","Assign risk ratings (Critical / High / Medium / Low)","Draft management action plans for top 3 findings","Submit: Interim Audit Report (TMPL-AUD-006)"], days:7 },
    { n:8, title:"Cybersecurity Review — Cloud", desc:"Review AWS CloudTrail logs, analyse the S3 public access finding, and assess cloud security posture.", tasks:["Analyse AWS CloudTrail export for anomalous events","Identify the Tor exit node IAM role assumption incident","Review S3 bucket public access configuration findings","Submit: Cloud Security Review Workpaper"], days:7 },
    { n:9, title:"Cybersecurity Review — NIST CSF", desc:"Complete NIST CSF maturity assessment for all five functions and the vulnerability management review.", tasks:["Complete NIST CSF scoring for all 5 functions (TMPL-AUD-009)","Review vulnerability scan — prioritise critical findings","Assess Incident Response Plan against NIST Respond/Recover","Submit: NIST CSF Gap Assessment"], days:7 },
    { n:10, title:"Capstone — Audit Committee Briefing", desc:"Synthesise the entire programme into a final Audit Committee briefing. Present your key findings and recommendations.", tasks:["Finalise all open workpapers and findings documentation","Prepare executive summary of all significant findings","Build Audit Committee briefing deck (TMPL-AUD-010)","Record or present your 10-minute Audit Committee briefing","Submit: Complete portfolio + Audit Committee Briefing"], days:10 }
  ];
}

// ── Avatar colour swatches ────────────────────────────────────────────────────
const AVATAR_COLORS = [
  ['7B2D8B','E8D5FF'],['1F4E79','D6EAF8'],['0D6E8C','CCF5F0'],
  ['B8860B','FEF9E7'],['1A6B3A','E9F7EF'],['AE2012','FFE5E3'],
  ['4361EE','E8EDFF'],['560BAD','EDE3FF']
];

function getAvatarStyle(colorPair) {
  if (!colorPair) return 'background:linear-gradient(135deg,#7B2D8B,#4361EE)';
  return `background:linear-gradient(135deg,#${colorPair[0]},#${colorPair[1]})`;
}

// ── Richer glossary category → CSS class map ─────────────────────────────────
function glossCatClass(cat) {
  const map = {
    'Controls':'gloss-controls','Methodology':'gloss-methodology',
    'Regulatory':'gloss-regulatory','Frameworks':'gloss-frameworks',
    'Access Management':'gloss-access','Change Management':'gloss-change',
    'Cybersecurity':'gloss-cyber','Infrastructure':'gloss-infra',
    'Systems':'gloss-systems','Resilience':'gloss-resilience'
  };
  return map[cat] || 'gloss-general';
}

// ── Progress ring SVG ─────────────────────────────────────────────────────────
function progressRing(pct, size=96, stroke=7, color='url(#ringGrad)') {
  const r = (size-stroke*2)/2;
  const circ = 2*Math.PI*r;
  const offset = circ - (pct/100)*circ;
  return `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <defs>
      <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00C9A7"/>
        <stop offset="100%" stop-color="#4B9EFF"/>
      </linearGradient>
    </defs>
    <circle class="progress-ring-bg" cx="${size/2}" cy="${size/2}" r="${r}" stroke-width="${stroke}" transform="rotate(-90 ${size/2} ${size/2})"/>
    <circle class="progress-ring-fill" cx="${size/2}" cy="${size/2}" r="${r}" stroke-width="${stroke}"
      stroke="${color}" stroke-dasharray="${circ}" stroke-dashoffset="${offset}"
      transform="rotate(-90 ${size/2} ${size/2})" style="fill:none;stroke-linecap:round"/>
  </svg>`;
}

// ── Relative time (extended) ──────────────────────────────────────────────────
function formatDate(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'});
}

// ── Download table as CSV ─────────────────────────────────────────────────────
function downloadCSV(rows, filename) {
  const csv = rows.map(r => r.map(c => `"${String(c||'').replace(/"/g,'""')}"`).join(',')).join('\n');
  const a = document.createElement('a');
  a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
  a.download = filename;
  a.click();
}

// ── Debounce ──────────────────────────────────────────────────────────────────
function debounce(fn, ms=300) {
  let t; return (...args) => { clearTimeout(t); t = setTimeout(()=>fn(...args), ms); };
}

// ── Shared page shell builder ─────────────────────────────────────────────────
async function buildShell(pageName, titleText) {
  const auth = await requireAuth(); if (!auth) return null;
  const { profile, user } = auth;
  const notifs = await getNotifications(user.id);
  const unread = notifs.filter(n=>!n.read).length;
  document.getElementById('sidebarContainer').innerHTML = renderSidebar(pageName, profile);
  document.getElementById('topbarContainer').innerHTML  = renderTopbar(titleText, profile, unread);
  renderNotifsPanel(notifs);
  document.getElementById('appShell').style.opacity = '1';
  return { auth, profile, user, notifs };
}

function renderNotifsPanel(notifs) {
  const list = document.getElementById('notifList');
  if (!list) return;
  if (!notifs.length) {
    list.innerHTML = `<div class="empty-state"><span class="empty-state-icon">🔔</span><div class="empty-state-desc">No notifications yet</div></div>`;
    return;
  }
  list.innerHTML = notifs.map(n => `
    <div class="notif-item ${n.read?'':'unread'}" onclick="readNotif('${n.id}',this)">
      <div class="notif-dot2 ${n.read?'read':''}"></div>
      <div>
        <div class="notif-item-title">${n.title}</div>
        <div class="notif-item-body">${n.body}</div>
        <div class="notif-item-time">${timeAgo(n.created_at)}</div>
      </div>
    </div>`).join('');
}

async function readNotif(id, el) {
  await markNotificationRead(id);
  el.classList.remove('unread');
  el.querySelector('.notif-dot2')?.classList.add('read');
}

// ── Sidebar nav additions ─────────────────────────────────────────────────────
// Override renderSidebar to include new pages
const _origRenderSidebar = renderSidebar;
function renderSidebar(activePage, profile) {
  const initial = (profile?.full_name||'U').charAt(0).toUpperCase();
  const isInstructor = profile?.role === 'instructor';
  return `
  <div class="sidebar" id="sidebar">
    <div class="sidebar-logo">
      <div class="logo-mark">AE</div>
      <div class="logo-text">AuditEdge<span>IT Audit Skillternship</span></div>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-section-label">Main</div>
      ${isInstructor ? `
        <a href="instructor.html" class="nav-item ${activePage==='instructor'?'active':''}">${Icons.users}<span>Instructor Dashboard</span></a>
        <a href="artifacts.html" class="nav-item ${activePage==='artifacts'?'active':''}">${Icons.artifacts}<span>Artifact Library</span></a>
        <a href="announcements.html" class="nav-item ${activePage==='announcements'?'active':''}">${Icons.mail}<span>Announcements</span></a>
        <a href="glossary.html" class="nav-item ${activePage==='glossary'?'active':''}">${Icons.tasks}<span>Glossary</span></a>
      ` : `
        <a href="dashboard.html" class="nav-item ${activePage==='dashboard'?'active':''}">${Icons.home}<span>Dashboard</span></a>
        <a href="modules.html" class="nav-item ${activePage==='modules'?'active':''}">${Icons.modules}<span>Programme Weeks</span></a>
        <a href="artifacts.html" class="nav-item ${activePage==='artifacts'?'active':''}">${Icons.artifacts}<span>Artifact Library</span></a>
        <div class="nav-section-label" style="margin-top:0.5rem">Community</div>
        <a href="announcements.html" class="nav-item ${activePage==='announcements'?'active':''}">${Icons.mail}<span>Announcements</span></a>
        <a href="leaderboard.html" class="nav-item ${activePage==='leaderboard'?'active':''}">${Icons.star}<span>Leaderboard</span></a>
        <a href="glossary.html" class="nav-item ${activePage==='glossary'?'active':''}">${Icons.tasks}<span>Glossary</span></a>
        <div class="nav-section-label" style="margin-top:0.5rem">My Account</div>
        <a href="submissions.html" class="nav-item ${activePage==='submissions'?'active':''}">${Icons.chart}<span>My Submissions</span></a>
        <a href="certificate.html" class="nav-item ${activePage==='certificate'?'active':''}">${Icons.cert}<span>Certificate</span></a>
        <a href="profile.html" class="nav-item ${activePage==='profile'?'active':''}">${Icons.users}<span>My Profile</span></a>
      `}
    </nav>
    <div class="sidebar-user">
      <div class="user-avatar" style="background:linear-gradient(135deg,#7B2D8B,#4361EE)">${initial}</div>
      <div class="user-info">
        <div class="user-name">${profile?.full_name||'Loading...'}</div>
        <div class="user-role">${isInstructor?'Instructor':'Mentee'}</div>
      </div>
      <button class="btn-signout" onclick="signOut()" title="Sign out">${Icons.signout}</button>
    </div>
  </div>
  <div id="sidebarOverlay" onclick="closeSidebar()" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:99;backdrop-filter:blur(2px)"></div>`;
}
