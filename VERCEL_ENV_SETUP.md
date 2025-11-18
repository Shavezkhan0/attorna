# Vercel Environment Variables Setup

This project requires the following environment variables to be set in your Vercel project for Payload CMS to work properly.

## Required Environment Variables

### 1. `PAYLOAD_SECRET`
A secret key used by Payload CMS for encryption and security. This should be a long, random string.

**How to generate:**
- You can use any random string generator
- Or run: `openssl rand -base64 32` in your terminal
- Or use an online generator: https://generate-secret.vercel.app/32

**Example:** `your-super-secret-key-here-at-least-32-characters-long`

### 2. `DATABASE_URI`
Your PostgreSQL database connection string.

**Format:** `postgresql://username:password@host:port/database`

**Example:** `postgresql://user:password@db.example.com:5432/attorna`

**Where to get it:**
- If using Vercel Postgres: Go to your Vercel project → Storage → Postgres → Connection String
- If using external PostgreSQL: Get the connection string from your database provider
- If using a service like Supabase, Neon, or Railway: Check their dashboard for the connection string

## How to Set Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Click on **Settings**
3. Click on **Environment Variables** in the left sidebar
4. Click **Add New**
5. Add each variable:
   - **Key:** `PAYLOAD_SECRET`
   - **Value:** Your generated secret key
   - **Environment:** Select all (Production, Preview, Development)
   - Click **Save**
6. Repeat for `DATABASE_URI`

## After Setting Variables

1. **Redeploy your application** - Vercel will automatically redeploy when you add environment variables, or you can manually trigger a redeploy from the Deployments tab
2. Wait for the deployment to complete
3. Try accessing `/admin` again

## Troubleshooting

If you still see a 500 error after setting the variables:

1. **Check the deployment logs** in Vercel to see the exact error
2. **Verify the connection string** format is correct
3. **Ensure your database is accessible** from Vercel's IP addresses (if using IP restrictions)
4. **Check that the database exists** and is running

## Local Development

For local development, create a `.env` file in the root directory:

```env
PAYLOAD_SECRET=your-local-secret-key
DATABASE_URI=postgresql://localhost:5432/attorna
```

**Note:** Never commit your `.env` file to Git. It's already in `.gitignore`.

