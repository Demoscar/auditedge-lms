# Setup Guide — AuditEdge LMS

## Step 1: Create a Supabase Project
1. Go to https://supabase.com and sign up (free)
2. Create a new project — name it "auditedge-lms"
3. Wait for it to provision (~2 minutes)

## Step 2: Run the Database Schema
1. In your Supabase project, go to SQL Editor
2. Open the file `supabase_schema.sql` from this repository
3. Paste the entire contents into the SQL Editor and click Run
4. You should see "Success" — this creates all tables, policies, and triggers

## Step 3: Configure Authentication
1. Go to Authentication → Settings
2. Enable "Email" provider (already on by default)
3. Set Site URL to your GitHub Pages URL (e.g. https://yourusername.github.io/auditedge-lms)
4. Add the same URL to "Redirect URLs"

## Step 4: Get Your API Keys
1. Go to Settings → API
2. Copy your "Project URL" and "anon public" key
3. Open `js/supabase.js`
4. Replace `YOUR_PROJECT_ID` in the URL
5. Replace `YOUR_ANON_KEY` with your anon key

## Step 5: Upload Artifacts to Google Drive
1. Create a folder called "AuditEdge Artifacts" in Google Drive
2. Upload all artifact files (.docx, .csv, .pdf, .json)
3. Right-click each file → Share → "Anyone with the link can view"
4. Copy each share link
5. In Supabase → Table Editor → artifacts table, update the `file_url` for each artifact

## Step 6: Deploy to GitHub Pages
1. Create a new GitHub repository (e.g. `auditedge-lms`)
2. Push all files from this folder to the repository
3. Go to repo Settings → Pages → Source: Deploy from branch → main → / (root)
4. Your site will be live at: https://yourusername.github.io/auditedge-lms

## Step 7: Create the Instructor Account
1. In Supabase → Authentication → Users → Invite User
2. Enter the instructor email address
3. In User Metadata, add: `{"role": "instructor", "full_name": "Your Name"}`
4. The instructor receives an email and sets their password on your site

## Step 8: Invite Participants
1. In Supabase → Authentication → Users → Invite User
2. Enter each participant's email
3. Leave role as "mentee" in metadata (default)
4. Participants receive an invitation email with a link to set their password

## That's it! The platform is ready.

## Total cost: £0 / $0
- Supabase Free: 500MB database, 50,000 monthly active users
- GitHub Pages: Free, unlimited
- Google Drive: Free, 15GB storage
