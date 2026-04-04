# AuditEdge IT Audit Skillternship — LMS

## File Structure
- index.html          → Login / Accept Invite page
- dashboard.html      → Participant dashboard
- module.html         → Module/week view with tasks
- artifact.html       → Artifact library
- certificate.html    → Certificate generation
- instructor.html     → Instructor dashboard
- css/style.css       → Global styles
- js/supabase.js      → Supabase client + auth helpers
- js/app.js           → Shared app logic
- js/dashboard.js     → Dashboard logic
- js/instructor.js    → Instructor dashboard logic
- js/certificate.js   → Certificate generation
- _config.yml         → GitHub Pages config

## Setup Instructions
1. Create a Supabase project at supabase.com (free)
2. Run the SQL schema in supabase/schema.sql
3. Update js/supabase.js with your project URL and anon key
4. Enable Email auth in Supabase Auth settings
5. Push to GitHub and enable GitHub Pages
