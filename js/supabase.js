const SUPABASE_URL = 'https://rvumieiwkjjnqvxuetqo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2dW1pZWl3a2pqbnF2eHVldHFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMDMyNzksImV4cCI6MjA5MDc3OTI3OX0.11bI7jS14pHGC4Fn4yv6RI5gsBQCp0JBxLfZjriNebQ';
const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function getUser() {
  const { data: { user } } = await sb.auth.getUser();
  return user;
}
async function getProfile(userId) {
  const { data, error } = await sb.from('profiles').select('*').eq('id', userId).single();
  if (error) throw error;
  return data;
}
async function signOut() {
  await sb.auth.signOut();
  window.location.href = 'index.html';
}
async function requireAuth(requireInstructor = false) {
  const user = await getUser();
  if (!user) { window.location.href = 'index.html'; return null; }
  const profile = await getProfile(user.id);
  if (requireInstructor && profile.role !== 'instructor') { window.location.href = 'dashboard.html'; return null; }
  await sb.from('profiles').update({ last_active: new Date().toISOString() }).eq('id', user.id);
  return { user, profile };
}
async function getProgress(userId) {
  const { data } = await sb.from('progress').select('*').eq('user_id', userId).order('week_number');
  return data || [];
}
async function getSubmissions(userId) {
  const { data } = await sb.from('submissions').select('*').eq('user_id', userId).order('submitted_at', { ascending: false });
  return data || [];
}
async function getNotifications(userId) {
  const { data } = await sb.from('notifications').select('*').eq('user_id', userId).order('created_at', { ascending: false }).limit(20);
  return data || [];
}
async function markNotificationRead(id) {
  await sb.from('notifications').update({ read: true }).eq('id', id);
}
async function getArtifacts(weekUnlock) {
  let q = sb.from('artifacts').select('*').order('category').order('code');
  if (weekUnlock !== undefined) q = q.lte('week_unlock', weekUnlock);
  const { data } = await q;
  return data || [];
}
function calcOverallProgress(rows) {
  return Math.round((rows.filter(r => r.status === 'completed').length / 10) * 100);
}
function calcAvgScore(rows) {
  const s = rows.filter(r => r.score !== null);
  if (!s.length) return null;
  return Math.round(s.reduce((a, r) => a + r.score, 0) / s.length);
}
function currentWeek(rows) {
  return rows.find(r => r.status === 'in_progress') || rows.find(r => r.status === 'available') || rows[0];
}
function timeAgo(d) {
  if (!d) return 'Never';
  const diff = Date.now() - new Date(d).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return 'Just now';
  if (m < 60) return m + 'm ago';
  const h = Math.floor(m / 60);
  if (h < 24) return h + 'h ago';
  const dy = Math.floor(h / 24);
  if (dy < 7) return dy + 'd ago';
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}
