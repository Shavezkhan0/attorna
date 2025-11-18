# Troubleshooting 500 Error on /admin

If you're getting a 500 Internal Server Error when accessing `/admin`, follow these steps:

## Step 1: Check Environment Variables

Visit this diagnostic endpoint:
```
https://attorna-topaz.vercel.app/api/admin-check
```

This will tell you which environment variables are missing.

## Step 2: Set Environment Variables in Vercel

### Required Variables:

1. **PAYLOAD_SECRET**
   - Generate a secret: https://generate-secret.vercel.app/32
   - Or run: `openssl rand -base64 32`
   - Add in Vercel: Settings → Environment Variables

2. **DATABASE_URI**
   - Format: `postgresql://username:password@host:port/database`
   - If using Vercel Postgres:
     - Go to Vercel Dashboard → Your Project → Storage → Postgres
     - Click "Connect" or "View Connection String"
     - Copy the connection string
   - If using external PostgreSQL (Supabase, Neon, Railway, etc.):
     - Get the connection string from your database provider's dashboard

### How to Add in Vercel:

1. Go to your Vercel project dashboard
2. Click **Settings**
3. Click **Environment Variables** in the left sidebar
4. Click **Add New**
5. Add each variable:
   - **Key:** `PAYLOAD_SECRET`
   - **Value:** Your generated secret
   - **Environment:** Select all (Production, Preview, Development)
   - Click **Save**
6. Repeat for `DATABASE_URI`

## Step 3: Redeploy

After adding environment variables:
- Vercel will automatically redeploy, OR
- Go to Deployments tab and click "Redeploy" on the latest deployment

## Step 4: Check Vercel Logs

If still getting errors:

1. Go to Vercel Dashboard → Your Project → Deployments
2. Click on the latest deployment
3. Click on **Functions** tab
4. Look for error messages in the logs
5. Common errors:
   - "PAYLOAD_SECRET is missing"
   - "DATABASE_URI is missing"
   - "Connection refused" (database connection issue)
   - "Invalid connection string" (wrong DATABASE_URI format)

## Step 5: Verify Database Connection

Make sure:
- Your PostgreSQL database is running
- The connection string is correct
- Your database allows connections from Vercel's IP addresses (if using IP restrictions)
- The database exists and is accessible

## Common Issues:

### Issue: "Environment variable not found"
**Solution:** Make sure you added the variable and selected all environments (Production, Preview, Development)

### Issue: "Connection timeout"
**Solution:** Check if your database allows external connections and if firewall rules are set correctly

### Issue: "Invalid connection string"
**Solution:** Verify the format: `postgresql://user:password@host:port/database`

### Issue: "Database does not exist"
**Solution:** Create the database first, or use an existing database name in your connection string

## Still Having Issues?

1. Check the Vercel function logs for the exact error message
2. Verify environment variables are set correctly
3. Test the database connection string locally
4. Make sure you're using PostgreSQL (not MongoDB) - this project uses `@payloadcms/db-postgres`

