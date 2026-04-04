@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=DM+Mono:wght@400;500&display=swap');

/* ── Tokens ──────────────────────────────────────────────────────────────── */
:root {
  --navy:    #0A1628;
  --navy2:   #0F2040;
  --navy3:   #152B55;
  --teal:    #00C9A7;
  --teal2:   #00A38A;
  --gold:    #F4A83A;
  --gold2:   #D4891A;
  --red:     #E5534B;
  --green:   #3DD68C;
  --blue:    #4B9EFF;
  --purple:  #9B6DFF;
  --white:   #FFFFFF;
  --off:     #F0F4FF;
  --muted:   #8899BB;
  --border:  rgba(255,255,255,0.08);
  --card:    rgba(255,255,255,0.04);
  --card2:   rgba(255,255,255,0.07);
  --shadow:  0 4px 24px rgba(0,0,0,0.35);
  --radius:  14px;
  --radius-sm: 8px;
  --font-head: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'DM Mono', monospace;
  --sidebar-w: 260px;
  --topbar-h: 64px;
  --transition: 0.22s cubic-bezier(0.4,0,0.2,1);
}

/* ── Reset ───────────────────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-body);
  background: var(--navy);
  color: var(--white);
  min-height: 100vh;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
a { color: var(--teal); text-decoration: none; }
a:hover { color: var(--teal2); }
button { cursor: pointer; font-family: var(--font-body); }
input, textarea, select { font-family: var(--font-body); }
img { max-width: 100%; }

/* ── Background mesh ─────────────────────────────────────────────────────── */
.bg-mesh {
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
  background:
    radial-gradient(ellipse 60% 50% at 15% 10%, rgba(0,201,167,0.06) 0%, transparent 60%),
    radial-gradient(ellipse 50% 60% at 85% 80%, rgba(75,158,255,0.05) 0%, transparent 60%),
    radial-gradient(ellipse 40% 40% at 50% 50%, rgba(244,168,58,0.03) 0%, transparent 60%);
}

/* ── Auth pages ──────────────────────────────────────────────────────────── */
.auth-wrap {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  padding: 2rem; position: relative;
}
.auth-card {
  background: var(--navy2);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 3rem;
  width: 100%; max-width: 440px;
  box-shadow: var(--shadow);
  position: relative; z-index: 1;
}
.auth-logo {
  display: flex; align-items: center; gap: 12px; margin-bottom: 2.5rem;
}
.auth-logo-mark {
  width: 44px; height: 44px; border-radius: 12px;
  background: linear-gradient(135deg, var(--teal), var(--blue));
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-head); font-weight: 800; font-size: 1.1rem;
}
.auth-logo-text { font-family: var(--font-head); font-weight: 700; font-size: 1.1rem; }
.auth-logo-sub { font-size: 0.72rem; color: var(--muted); letter-spacing: 0.08em; }
.auth-title { font-family: var(--font-head); font-size: 1.7rem; font-weight: 700; margin-bottom: 0.4rem; }
.auth-sub { color: var(--muted); font-size: 0.9rem; margin-bottom: 2rem; line-height: 1.5; }

/* ── Form controls ───────────────────────────────────────────────────────── */
.form-group { margin-bottom: 1.2rem; }
.form-label { display: block; font-size: 0.82rem; font-weight: 600; color: var(--muted); letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 0.5rem; }
.form-input {
  width: 100%; background: rgba(255,255,255,0.05);
  border: 1px solid var(--border); border-radius: var(--radius-sm);
  padding: 0.8rem 1rem; color: var(--white); font-size: 0.95rem;
  transition: border-color var(--transition), box-shadow var(--transition);
  outline: none;
}
.form-input::placeholder { color: var(--muted); }
.form-input:focus { border-color: var(--teal); box-shadow: 0 0 0 3px rgba(0,201,167,0.12); }
.form-input:disabled { opacity: 0.5; cursor: not-allowed; }

/* ── Buttons ─────────────────────────────────────────────────────────────── */
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  padding: 0.8rem 1.6rem; border-radius: var(--radius-sm); font-weight: 600;
  font-size: 0.9rem; border: none; transition: all var(--transition); white-space: nowrap;
}
.btn-primary {
  background: linear-gradient(135deg, var(--teal), var(--blue));
  color: var(--navy); width: 100%; margin-top: 0.5rem;
}
.btn-primary:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(0,201,167,0.35); }
.btn-primary:active { transform: translateY(0); }
.btn-ghost { background: transparent; color: var(--muted); border: 1px solid var(--border); }
.btn-ghost:hover { border-color: var(--teal); color: var(--teal); background: rgba(0,201,167,0.06); }
.btn-gold { background: var(--gold); color: var(--navy); }
.btn-gold:hover { background: var(--gold2); transform: translateY(-1px); }
.btn-sm { padding: 0.5rem 1rem; font-size: 0.82rem; }
.btn-icon { padding: 0.6rem; border-radius: 8px; }
.btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none !important; }

/* ── App shell ───────────────────────────────────────────────────────────── */
.app-shell { display: flex; min-height: 100vh; position: relative; }

/* ── Sidebar ─────────────────────────────────────────────────────────────── */
.sidebar {
  width: var(--sidebar-w); background: var(--navy2);
  border-right: 1px solid var(--border);
  display: flex; flex-direction: column;
  position: fixed; top: 0; left: 0; bottom: 0; z-index: 100;
  transition: transform var(--transition);
}
.sidebar-logo {
  padding: 1.5rem 1.5rem 1rem;
  display: flex; align-items: center; gap: 10px;
  border-bottom: 1px solid var(--border);
}
.logo-mark {
  width: 36px; height: 36px; border-radius: 9px; flex-shrink: 0;
  background: linear-gradient(135deg, var(--teal), var(--blue));
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-head); font-weight: 800; font-size: 0.9rem; color: var(--navy);
}
.logo-text { font-family: var(--font-head); font-weight: 700; font-size: 0.95rem; line-height: 1.2; }
.logo-text span { display: block; font-size: 0.65rem; color: var(--muted); font-weight: 400; letter-spacing: 0.06em; }
.sidebar-nav { padding: 1rem 0.75rem; flex: 1; overflow-y: auto; }
.nav-section-label {
  font-size: 0.65rem; font-weight: 700; color: var(--muted); letter-spacing: 0.1em;
  text-transform: uppercase; padding: 0.75rem 0.75rem 0.4rem;
}
.nav-item {
  display: flex; align-items: center; gap: 10px;
  padding: 0.65rem 0.75rem; border-radius: var(--radius-sm);
  color: var(--muted); font-size: 0.88rem; font-weight: 500;
  transition: all var(--transition); cursor: pointer; text-decoration: none;
  border: none; background: none; width: 100%; text-align: left;
}
.nav-item:hover { background: var(--card2); color: var(--white); }
.nav-item.active { background: rgba(0,201,167,0.12); color: var(--teal); }
.nav-item svg { width: 18px; height: 18px; flex-shrink: 0; }
.nav-item .badge {
  margin-left: auto; background: var(--red); color: white;
  border-radius: 50px; padding: 1px 7px; font-size: 0.68rem; font-weight: 700;
}
.nav-item .badge.gold { background: var(--gold); color: var(--navy); }
.sidebar-user {
  padding: 1rem 1.25rem; border-top: 1px solid var(--border);
  display: flex; align-items: center; gap: 10px;
}
.user-avatar {
  width: 34px; height: 34px; border-radius: 50%; flex-shrink: 0;
  background: linear-gradient(135deg, var(--purple), var(--blue));
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 0.8rem;
}
.user-info { flex: 1; min-width: 0; }
.user-name { font-size: 0.82rem; font-weight: 600; truncate: true; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.user-role { font-size: 0.68rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.06em; }
.btn-signout { background: none; border: none; color: var(--muted); padding: 4px; border-radius: 6px; transition: color var(--transition); }
.btn-signout:hover { color: var(--red); }
.btn-signout svg { width: 16px; height: 16px; }

/* ── Main content ────────────────────────────────────────────────────────── */
.main-content {
  margin-left: var(--sidebar-w); flex: 1; display: flex; flex-direction: column; min-height: 100vh;
}
.topbar {
  height: var(--topbar-h); background: rgba(10,22,40,0.8); backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 2rem; position: sticky; top: 0; z-index: 50;
}
.topbar-title { font-family: var(--font-head); font-size: 1rem; font-weight: 700; }
.topbar-actions { display: flex; align-items: center; gap: 12px; }
.notif-btn {
  position: relative; background: var(--card); border: 1px solid var(--border);
  border-radius: 8px; padding: 7px; color: var(--muted); transition: all var(--transition);
  display: flex; align-items: center;
}
.notif-btn:hover { color: var(--white); border-color: var(--teal); }
.notif-btn svg { width: 18px; height: 18px; }
.notif-dot {
  position: absolute; top: 5px; right: 5px;
  width: 7px; height: 7px; border-radius: 50%; background: var(--red);
  border: 1.5px solid var(--navy);
}
.page-body { padding: 2rem; flex: 1; position: relative; z-index: 1; }

/* ── Cards ───────────────────────────────────────────────────────────────── */
.card {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1.5rem;
  transition: border-color var(--transition), box-shadow var(--transition);
}
.card:hover { border-color: rgba(255,255,255,0.14); }
.card-title { font-family: var(--font-head); font-size: 0.85rem; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.5rem; }

/* ── Stat cards ──────────────────────────────────────────────────────────── */
.stat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem; }
.stat-card {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1.4rem 1.5rem;
  display: flex; flex-direction: column; gap: 0.4rem;
  transition: all var(--transition);
}
.stat-card:hover { border-color: rgba(255,255,255,0.14); transform: translateY(-2px); }
.stat-icon {
  width: 36px; height: 36px; border-radius: 9px;
  display: flex; align-items: center; justify-content: center; margin-bottom: 0.4rem;
}
.stat-icon svg { width: 18px; height: 18px; }
.stat-value { font-family: var(--font-head); font-size: 2rem; font-weight: 800; line-height: 1; }
.stat-label { font-size: 0.82rem; color: var(--muted); }
.stat-change { font-size: 0.75rem; margin-top: 2px; }
.stat-change.up { color: var(--green); }
.stat-change.neutral { color: var(--muted); }

/* ── Progress bar ────────────────────────────────────────────────────────── */
.progress-bar-wrap { background: rgba(255,255,255,0.07); border-radius: 50px; overflow: hidden; height: 6px; }
.progress-bar-fill {
  height: 100%; border-radius: 50px;
  background: linear-gradient(90deg, var(--teal), var(--blue));
  transition: width 0.8s cubic-bezier(0.4,0,0.2,1);
}
.progress-bar-fill.gold { background: linear-gradient(90deg, var(--gold), var(--gold2)); }

/* ── Week cards ──────────────────────────────────────────────────────────── */
.weeks-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem; }
.week-card {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1.4rem;
  cursor: pointer; transition: all var(--transition); position: relative; overflow: hidden;
  text-decoration: none; display: block; color: var(--white);
}
.week-card::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
  background: var(--border); transition: background var(--transition);
}
.week-card:hover { border-color: rgba(255,255,255,0.2); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
.week-card.available::before { background: var(--teal); }
.week-card.in_progress::before { background: var(--gold); }
.week-card.completed::before { background: var(--green); }
.week-card.locked { opacity: 0.45; cursor: not-allowed; }
.week-card.locked:hover { transform: none; box-shadow: none; }
.week-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 0.75rem; }
.week-num { font-family: var(--font-mono); font-size: 0.72rem; color: var(--muted); margin-bottom: 4px; }
.week-title { font-family: var(--font-head); font-size: 1rem; font-weight: 700; line-height: 1.3; }
.week-badge {
  padding: 3px 10px; border-radius: 50px; font-size: 0.68rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.06em; white-space: nowrap;
}
.badge-locked { background: rgba(255,255,255,0.07); color: var(--muted); }
.badge-available { background: rgba(0,201,167,0.15); color: var(--teal); }
.badge-in_progress { background: rgba(244,168,58,0.15); color: var(--gold); }
.badge-completed { background: rgba(61,214,140,0.15); color: var(--green); }
.week-meta { display: flex; gap: 1rem; margin-top: 0.75rem; font-size: 0.78rem; color: var(--muted); }
.week-meta span { display: flex; align-items: center; gap: 4px; }
.week-meta svg { width: 13px; height: 13px; }

/* ── Module/Task view ────────────────────────────────────────────────────── */
.module-header {
  background: linear-gradient(135deg, var(--navy2), var(--navy3));
  border: 1px solid var(--border); border-radius: var(--radius);
  padding: 2rem; margin-bottom: 1.5rem; position: relative; overflow: hidden;
}
.module-header::after {
  content: ''; position: absolute; right: -40px; top: -40px;
  width: 180px; height: 180px; border-radius: 50%;
  background: radial-gradient(circle, rgba(0,201,167,0.08) 0%, transparent 70%);
}
.module-tag { font-family: var(--font-mono); font-size: 0.72rem; color: var(--teal); letter-spacing: 0.1em; margin-bottom: 0.5rem; text-transform: uppercase; }
.module-title { font-family: var(--font-head); font-size: 1.8rem; font-weight: 800; margin-bottom: 0.5rem; }
.module-desc { color: var(--muted); font-size: 0.9rem; max-width: 600px; line-height: 1.6; }
.module-stats { display: flex; gap: 1.5rem; margin-top: 1.2rem; }
.module-stat { display: flex; flex-direction: column; }
.module-stat-val { font-family: var(--font-head); font-weight: 700; font-size: 1.1rem; }
.module-stat-lbl { font-size: 0.72rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.06em; }

.tasks-list { display: flex; flex-direction: column; gap: 0.75rem; }
.task-item {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1.2rem 1.5rem;
  display: flex; align-items: center; gap: 1rem;
  transition: all var(--transition);
}
.task-item:hover { border-color: rgba(255,255,255,0.14); }
.task-check {
  width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
  border: 2px solid var(--border); display: flex; align-items: center; justify-content: center;
  transition: all var(--transition);
}
.task-check.done { background: var(--green); border-color: var(--green); }
.task-check.done svg { width: 14px; height: 14px; color: var(--navy); }
.task-info { flex: 1; }
.task-title { font-weight: 600; font-size: 0.92rem; margin-bottom: 2px; }
.task-meta { font-size: 0.78rem; color: var(--muted); }
.task-actions { display: flex; gap: 8px; }

/* ── Submission form ─────────────────────────────────────────────────────── */
.submission-area {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1.5rem; margin-top: 1rem;
}
.submission-textarea {
  width: 100%; min-height: 140px; background: rgba(255,255,255,0.04);
  border: 1px solid var(--border); border-radius: var(--radius-sm);
  padding: 0.9rem 1rem; color: var(--white); font-size: 0.9rem;
  resize: vertical; outline: none; transition: border-color var(--transition);
  line-height: 1.6;
}
.submission-textarea:focus { border-color: var(--teal); }
.submission-textarea::placeholder { color: var(--muted); }

/* ── Artifacts ───────────────────────────────────────────────────────────── */
.artifacts-filters { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
.filter-chip {
  padding: 0.4rem 1rem; border-radius: 50px; font-size: 0.8rem; font-weight: 600;
  background: var(--card); border: 1px solid var(--border); color: var(--muted);
  cursor: pointer; transition: all var(--transition);
}
.filter-chip:hover, .filter-chip.active { background: rgba(0,201,167,0.12); border-color: var(--teal); color: var(--teal); }
.artifacts-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; }
.artifact-card {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1.2rem;
  display: flex; flex-direction: column; gap: 0.75rem;
  transition: all var(--transition);
}
.artifact-card:hover { border-color: rgba(255,255,255,0.16); transform: translateY(-2px); }
.artifact-icon {
  width: 40px; height: 40px; border-radius: 10px;
  display: flex; align-items: center; justify-content: center; font-size: 1.1rem;
  flex-shrink: 0;
}
.artifact-header { display: flex; align-items: flex-start; gap: 0.75rem; }
.artifact-code { font-family: var(--font-mono); font-size: 0.68rem; color: var(--teal); margin-bottom: 3px; }
.artifact-title { font-weight: 600; font-size: 0.9rem; line-height: 1.3; }
.artifact-desc { font-size: 0.8rem; color: var(--muted); line-height: 1.5; flex: 1; }
.artifact-footer { display: flex; align-items: center; justify-content: space-between; }
.artifact-cat {
  padding: 2px 8px; border-radius: 4px; font-size: 0.68rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.06em;
}
.cat-policy { background: rgba(155,109,255,0.15); color: var(--purple); }
.cat-reference { background: rgba(75,158,255,0.15); color: var(--blue); }
.cat-template { background: rgba(0,201,167,0.15); color: var(--teal); }
.cat-simulation { background: rgba(244,168,58,0.15); color: var(--gold); }
.cat-character { background: rgba(61,214,140,0.15); color: var(--green); }

/* ── Table ───────────────────────────────────────────────────────────────── */
.data-table { width: 100%; border-collapse: separate; border-spacing: 0; }
.data-table th {
  font-size: 0.72rem; font-weight: 700; color: var(--muted); text-transform: uppercase;
  letter-spacing: 0.08em; padding: 0.75rem 1rem; text-align: left;
  border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.02);
}
.data-table td { padding: 0.9rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 0.88rem; vertical-align: middle; }
.data-table tr:hover td { background: rgba(255,255,255,0.02); }
.data-table tr:last-child td { border-bottom: none; }

/* ── Modals ──────────────────────────────────────────────────────────────── */
.modal-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.7);
  backdrop-filter: blur(4px); z-index: 500;
  display: flex; align-items: center; justify-content: center;
  padding: 1rem; opacity: 0; pointer-events: none; transition: opacity var(--transition);
}
.modal-overlay.open { opacity: 1; pointer-events: all; }
.modal {
  background: var(--navy2); border: 1px solid var(--border);
  border-radius: 20px; padding: 2rem; width: 100%; max-width: 560px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  transform: translateY(20px); transition: transform var(--transition);
  max-height: 90vh; overflow-y: auto;
}
.modal-overlay.open .modal { transform: translateY(0); }
.modal-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 1.5rem; }
.modal-title { font-family: var(--font-head); font-size: 1.2rem; font-weight: 700; }
.modal-close { background: none; border: none; color: var(--muted); padding: 4px; border-radius: 6px; transition: color var(--transition); }
.modal-close:hover { color: var(--white); }
.modal-close svg { width: 20px; height: 20px; }

/* ── Notification panel ──────────────────────────────────────────────────── */
.notif-panel {
  position: fixed; top: var(--topbar-h); right: 0; width: 360px; height: calc(100vh - var(--topbar-h));
  background: var(--navy2); border-left: 1px solid var(--border);
  z-index: 200; transform: translateX(100%); transition: transform var(--transition);
  display: flex; flex-direction: column;
}
.notif-panel.open { transform: translateX(0); }
.notif-panel-head { padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; }
.notif-panel-title { font-family: var(--font-head); font-weight: 700; font-size: 0.95rem; }
.notif-list { flex: 1; overflow-y: auto; padding: 0.5rem; }
.notif-item {
  padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 4px;
  display: flex; gap: 0.75rem; cursor: pointer; transition: background var(--transition);
}
.notif-item:hover { background: var(--card2); }
.notif-item.unread { background: rgba(0,201,167,0.05); }
.notif-dot2 { width: 8px; height: 8px; border-radius: 50%; background: var(--teal); flex-shrink: 0; margin-top: 6px; }
.notif-dot2.read { background: transparent; border: 1px solid var(--border); }
.notif-item-title { font-size: 0.85rem; font-weight: 600; margin-bottom: 2px; }
.notif-item-body { font-size: 0.78rem; color: var(--muted); line-height: 1.4; }
.notif-item-time { font-size: 0.7rem; color: var(--muted); margin-top: 4px; }

/* ── Certificate ─────────────────────────────────────────────────────────── */
.cert-page {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  padding: 2rem; background: var(--navy);
}
.cert-container {
  background: linear-gradient(135deg, #0F2040, #152B55);
  border: 1px solid rgba(0,201,167,0.3);
  border-radius: 20px; padding: 4rem; max-width: 860px; width: 100%;
  text-align: center; position: relative; overflow: hidden;
  box-shadow: 0 0 80px rgba(0,201,167,0.1);
}
.cert-container::before {
  content: ''; position: absolute; inset: 8px; border-radius: 14px;
  border: 1px solid rgba(0,201,167,0.12); pointer-events: none;
}
.cert-logo { font-family: var(--font-head); font-size: 0.8rem; color: var(--teal); letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 2rem; }
.cert-title { font-family: var(--font-head); font-size: 1rem; font-weight: 700; color: var(--muted); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.5rem; }
.cert-heading { font-family: var(--font-head); font-size: 2.8rem; font-weight: 800; margin-bottom: 0.5rem; background: linear-gradient(135deg, var(--white), var(--teal)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.cert-sub { color: var(--muted); margin-bottom: 2rem; }
.cert-name { font-family: var(--font-head); font-size: 2rem; font-weight: 800; color: var(--teal); border-bottom: 1px solid rgba(0,201,167,0.3); padding-bottom: 0.75rem; display: inline-block; margin-bottom: 1.5rem; }
.cert-desc { color: var(--muted); font-size: 0.9rem; line-height: 1.6; max-width: 500px; margin: 0 auto 2rem; }
.cert-meta { display: flex; justify-content: center; gap: 3rem; margin-bottom: 2.5rem; }
.cert-meta-item { text-align: center; }
.cert-meta-val { font-family: var(--font-head); font-size: 1.2rem; font-weight: 700; }
.cert-meta-lbl { font-size: 0.7rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; }
.cert-code { font-family: var(--font-mono); font-size: 0.75rem; color: var(--muted); background: rgba(255,255,255,0.04); padding: 0.4rem 0.8rem; border-radius: 6px; display: inline-block; }

/* ── Instructor dashboard ────────────────────────────────────────────────── */
.mentee-row { display: flex; align-items: center; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid var(--border); }
.mentee-row:last-child { border-bottom: none; }
.mentee-avatar { width: 38px; height: 38px; border-radius: 50%; background: linear-gradient(135deg, var(--purple), var(--blue)); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem; flex-shrink: 0; }
.mentee-info { flex: 1; min-width: 0; }
.mentee-name { font-weight: 600; font-size: 0.9rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mentee-email { font-size: 0.75rem; color: var(--muted); }
.mentee-stats { display: flex; gap: 1.5rem; flex-shrink: 0; }
.mentee-stat { text-align: right; }
.mentee-stat-val { font-family: var(--font-head); font-weight: 700; font-size: 0.9rem; }
.mentee-stat-lbl { font-size: 0.65rem; color: var(--muted); text-transform: uppercase; }
.score-pill {
  padding: 2px 10px; border-radius: 50px; font-size: 0.75rem; font-weight: 700;
}
.score-high { background: rgba(61,214,140,0.15); color: var(--green); }
.score-mid { background: rgba(244,168,58,0.15); color: var(--gold); }
.score-low { background: rgba(229,83,75,0.15); color: var(--red); }
.score-none { background: var(--card); color: var(--muted); }

/* ── Toast ───────────────────────────────────────────────────────────────── */
.toast-container { position: fixed; bottom: 2rem; right: 2rem; z-index: 9999; display: flex; flex-direction: column; gap: 0.5rem; }
.toast {
  background: var(--navy2); border: 1px solid var(--border);
  border-radius: var(--radius-sm); padding: 0.9rem 1.2rem;
  display: flex; align-items: center; gap: 0.75rem;
  font-size: 0.88rem; box-shadow: var(--shadow);
  animation: slideUp 0.3s ease; max-width: 340px;
}
.toast.success { border-left: 3px solid var(--green); }
.toast.error { border-left: 3px solid var(--red); }
.toast.info { border-left: 3px solid var(--teal); }
@keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

/* ── Loading ─────────────────────────────────────────────────────────────── */
.loader { display: flex; align-items: center; justify-content: center; padding: 3rem; }
.spinner { width: 32px; height: 32px; border: 3px solid var(--border); border-top-color: var(--teal); border-radius: 50%; animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.skeleton { background: linear-gradient(90deg, var(--card) 25%, var(--card2) 50%, var(--card) 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: var(--radius-sm); }
@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

/* ── Utilities ───────────────────────────────────────────────────────────── */
.flex { display: flex; }
.flex-col { display: flex; flex-direction: column; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.gap-1 { gap: 0.5rem; }
.gap-2 { gap: 1rem; }
.gap-3 { gap: 1.5rem; }
.mt-1 { margin-top: 0.5rem; }
.mt-2 { margin-top: 1rem; }
.mt-3 { margin-top: 1.5rem; }
.mb-2 { margin-bottom: 1rem; }
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
.text-muted { color: var(--muted); }
.text-teal { color: var(--teal); }
.text-gold { color: var(--gold); }
.text-green { color: var(--green); }
.text-red { color: var(--red); }
.text-sm { font-size: 0.82rem; }
.text-xs { font-size: 0.72rem; }
.font-mono { font-family: var(--font-mono); }
.font-head { font-family: var(--font-head); }
.font-bold { font-weight: 700; }
.truncate { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.hidden { display: none !important; }
.w-full { width: 100%; }
.section-title { font-family: var(--font-head); font-size: 1.1rem; font-weight: 700; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; }
.section-title svg { width: 18px; height: 18px; color: var(--teal); }

/* ── Responsive ──────────────────────────────────────────────────────────── */
@media (max-width: 900px) {
  .sidebar { transform: translateX(-100%); }
  .sidebar.mobile-open { transform: translateX(0); }
  .main-content { margin-left: 0; }
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
  .stat-grid { grid-template-columns: 1fr 1fr; }
  .weeks-grid { grid-template-columns: 1fr; }
  .mentee-stats { display: none; }
  .hamburger { display: flex !important; }
}
.hamburger { display: none; background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 7px; color: var(--muted); align-items: center; }
.hamburger svg { width: 18px; height: 18px; }

/* ── Enhanced animations ─────────────────────────────────────────────────── */
@keyframes fadeIn  { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
@keyframes fadeInLeft { from { opacity:0; transform:translateX(-16px); } to { opacity:1; transform:translateX(0); } }
@keyframes pulse  { 0%,100% { opacity:1; } 50% { opacity:0.6; } }
@keyframes glow   { 0%,100% { box-shadow:0 0 8px rgba(0,201,167,0.2); } 50% { box-shadow:0 0 20px rgba(0,201,167,0.45); } }
@keyframes countUp { from { opacity:0; transform:scale(0.8); } to { opacity:1; transform:scale(1); } }

.fade-in  { animation: fadeIn 0.4s ease both; }
.fade-in-1 { animation: fadeIn 0.4s 0.05s ease both; }
.fade-in-2 { animation: fadeIn 0.4s 0.12s ease both; }
.fade-in-3 { animation: fadeIn 0.4s 0.18s ease both; }
.fade-in-4 { animation: fadeIn 0.4s 0.24s ease both; }
.stat-value { animation: countUp 0.5s ease both; }

/* ── Announcement cards ──────────────────────────────────────────────────── */
.announcement-card {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1.3rem 1.5rem;
  transition: all var(--transition); margin-bottom: 0.75rem;
}
.announcement-card:hover { border-color: rgba(255,255,255,0.14); }
.announcement-card.pinned { border-left: 3px solid var(--gold); background: rgba(244,168,58,0.04); }
.ann-header { display:flex; align-items:flex-start; justify-content:space-between; gap:1rem; margin-bottom:0.5rem; }
.ann-title { font-family:var(--font-head); font-weight:700; font-size:1rem; }
.ann-meta { font-size:0.75rem; color:var(--muted); margin-top:2px; }
.ann-body { font-size:0.88rem; line-height:1.65; color:var(--off); }
.ann-week-tag { padding:2px 10px; border-radius:50px; font-size:0.68rem; font-weight:700; background:rgba(75,158,255,0.12); color:var(--blue); }
.pin-badge { font-size:0.68rem; font-weight:700; background:rgba(244,168,58,0.15); color:var(--gold); padding:2px 8px; border-radius:4px; }

/* ── Glossary ────────────────────────────────────────────────────────────── */
.glossary-grid { display:grid; grid-template-columns: repeat(auto-fill, minmax(320px,1fr)); gap:0.75rem; }
.glossary-card {
  background: var(--card); border:1px solid var(--border); border-radius:var(--radius);
  padding:1.1rem 1.3rem; transition: all var(--transition);
}
.glossary-card:hover { border-color: rgba(255,255,255,0.14); transform:translateY(-1px); }
.glossary-term { font-family:var(--font-mono); font-size:0.85rem; font-weight:700; color:var(--teal); margin-bottom:4px; }
.glossary-def  { font-size:0.82rem; line-height:1.6; color:var(--off); }
.glossary-cat  { display:inline-block; margin-top:8px; padding:2px 8px; border-radius:4px; font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; }
.gloss-controls   { background:rgba(136,153,187,0.12); color:var(--muted); }
.gloss-methodology{ background:rgba(0,201,167,0.12); color:var(--teal); }
.gloss-regulatory { background:rgba(155,109,255,0.12); color:var(--purple); }
.gloss-frameworks { background:rgba(75,158,255,0.12); color:var(--blue); }
.gloss-access     { background:rgba(61,214,140,0.12); color:var(--green); }
.gloss-change     { background:rgba(244,168,58,0.12); color:var(--gold); }
.gloss-cyber      { background:rgba(229,83,75,0.12); color:var(--red); }
.gloss-infra      { background:rgba(75,158,255,0.12); color:var(--blue); }
.gloss-systems    { background:rgba(155,109,255,0.12); color:var(--purple); }
.gloss-resilience { background:rgba(61,214,140,0.12); color:var(--green); }
.gloss-general    { background:rgba(136,153,187,0.12); color:var(--muted); }

/* ── Profile page ────────────────────────────────────────────────────────── */
.avatar-picker { display:flex; gap:8px; flex-wrap:wrap; margin-top:0.5rem; }
.avatar-swatch {
  width:32px; height:32px; border-radius:50%; cursor:pointer;
  border:2px solid transparent; transition:all 0.2s;
}
.avatar-swatch.selected { border-color: var(--white); transform:scale(1.15); }

/* ── Leaderboard ─────────────────────────────────────────────────────────── */
.lb-row {
  display:flex; align-items:center; gap:1rem; padding:0.9rem 1.2rem;
  border-radius:var(--radius-sm); transition:background var(--transition);
}
.lb-row:hover { background:var(--card2); }
.lb-row.me { background:rgba(0,201,167,0.07); border:1px solid rgba(0,201,167,0.2); border-radius:var(--radius-sm); }
.lb-rank { width:32px; text-align:center; font-family:var(--font-mono); font-size:0.85rem; color:var(--muted); flex-shrink:0; }
.lb-avatar { width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.82rem; flex-shrink:0; }
.lb-name { flex:1; font-weight:600; font-size:0.9rem; }
.lb-prog { display:flex; flex-direction:column; gap:4px; width:140px; flex-shrink:0; }
.lb-score { width:56px; text-align:right; flex-shrink:0; }

/* ── Progress ring ───────────────────────────────────────────────────────── */
.progress-ring { transform: rotate(-90deg); }
.progress-ring-bg { fill:none; stroke:rgba(255,255,255,0.07); }
.progress-ring-fill { fill:none; stroke:url(#ringGrad); stroke-linecap:round; transition:stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1); }

/* ── Week timeline (in module view) ─────────────────────────────────────── */
.timeline { position:relative; padding-left:2rem; }
.timeline::before { content:''; position:absolute; left:7px; top:0; bottom:0; width:1px; background:var(--border); }
.tl-item { position:relative; margin-bottom:1.2rem; }
.tl-dot {
  position:absolute; left:-2rem; top:4px;
  width:14px; height:14px; border-radius:50%;
  background:var(--navy2); border:2px solid var(--border);
  transition:all var(--transition);
}
.tl-dot.done  { background:var(--green); border-color:var(--green); }
.tl-dot.active{ background:var(--gold);  border-color:var(--gold); animation:glow 2s infinite; }
.tl-content { font-size:0.88rem; }
.tl-title { font-weight:600; margin-bottom:2px; }
.tl-meta  { font-size:0.75rem; color:var(--muted); }

/* ── Empty states ────────────────────────────────────────────────────────── */
.empty-state { text-align:center; padding:3rem 2rem; }
.empty-state-icon { font-size:3rem; margin-bottom:1rem; display:block; }
.empty-state-title { font-family:var(--font-head); font-size:1.1rem; font-weight:700; margin-bottom:0.4rem; }
.empty-state-desc  { color:var(--muted); font-size:0.88rem; line-height:1.5; margin-bottom:1.5rem; }

/* ── Search input focus ring ─────────────────────────────────────────────── */
.search-wrap { position:relative; }
.search-wrap .search-icon { position:absolute; left:12px; top:50%; transform:translateY(-50%); color:var(--muted); width:16px; height:16px; pointer-events:none; }
.search-wrap input { padding-left:2.4rem; }

/* ── Tabs (enhanced) ─────────────────────────────────────────────────────── */
.tab-bar { display:flex; gap:4px; background:var(--card); border:1px solid var(--border); border-radius:10px; padding:4px; width:fit-content; margin-bottom:1.5rem; }
.tab-btn { padding:6px 18px; border-radius:7px; font-size:0.85rem; font-weight:600; border:none; cursor:pointer; transition:all var(--transition); color:var(--muted); background:transparent; }
.tab-btn.active { background:linear-gradient(135deg,var(--teal),var(--blue)); color:var(--navy); }
.tab-btn:hover:not(.active) { color:var(--white); background:var(--card2); }

/* ── Score doughnut ──────────────────────────────────────────────────────── */
.score-ring-wrap { position:relative; display:inline-flex; align-items:center; justify-content:center; }
.score-ring-label { position:absolute; font-family:var(--font-head); font-weight:800; font-size:1.3rem; }

/* ── Scrollbar ───────────────────────────────────────────────────────────── */
::-webkit-scrollbar { width:6px; height:6px; }
::-webkit-scrollbar-track { background:transparent; }
::-webkit-scrollbar-thumb { background:rgba(255,255,255,0.1); border-radius:3px; }
::-webkit-scrollbar-thumb:hover { background:rgba(255,255,255,0.2); }

/* ── Selection ───────────────────────────────────────────────────────────── */
::selection { background:rgba(0,201,167,0.25); color:var(--white); }

/* ── Focus visible ───────────────────────────────────────────────────────── */
:focus-visible { outline:2px solid var(--teal); outline-offset:2px; border-radius:4px; }

/* ── Print enhancements ──────────────────────────────────────────────────── */
@media print {
  .bg-mesh, .sidebar, .topbar, .toast-container, .notif-panel { display:none!important; }
  .main-content { margin-left:0!important; }
  body { background:white; color:black; }
}

/* ── PWA standalone ──────────────────────────────────────────────────────── */
@media (display-mode: standalone) {
  .topbar { padding-top:env(safe-area-inset-top); }
}
