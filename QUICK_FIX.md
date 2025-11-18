# Quick Fix for Database Connection

## The Problem
Password authentication is failing for your Neon database. This usually means:
1. The password in your connection string is wrong
2. Special characters in password aren't URL-encoded
3. You're using the wrong connection string type

## Solution: Use Local Database (Easiest)

### Step 1: Install PostgreSQL Locally

**Option A: Using Chocolatey (Windows)**
```powershell
choco install postgresql
```

**Option B: Download Installer**
- Download from: https://www.postgresql.org/download/windows/
- Install with default settings
- Remember the password you set during installation

### Step 2: Create Database

Open PowerShell as Administrator and run:
```powershell
# Connect to PostgreSQL (use the password you set during installation)
psql -U postgres

# Create database
CREATE DATABASE attorna;

# Exit
\q
```

### Step 3: Update .env File

Open your `.env` file and update it:

```env
PAYLOAD_SECRET=your-secret-key-here-min-32-characters
DATABASE_URI=postgresql://postgres:YOUR_PASSWORD@localhost:5432/attorna
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

Replace `YOUR_PASSWORD` with the password you set during PostgreSQL installation.

### Step 4: Restart Dev Server

```powershell
pnpm dev
```

## Alternative: Fix Neon Connection String

If you want to keep using Neon:

### Step 1: Get Fresh Connection String

1. Go to https://console.neon.tech
2. Select your project
3. Click **Connection Details**
4. Copy the **Connection String** (NOT the pooler connection)
5. It should look like:
   ```
   postgresql://neondb_owner:password@ep-xxx-xxx.region.aws.neon.tech/neondb?sslmode=require
   ```

### Step 2: URL-Encode Special Characters

If your password has special characters, encode them:
- `@` → `%40`
- `#` → `%23`
- `$` → `%24`
- `%` → `%25`
- `&` → `%26`
- `+` → `%2B`
- `=` → `%3D`
- `?` → `%3F`
- `/` → `%2F`
- `:` → `%3A`

**Example:**
```
Password: my@pass#123
Encoded: my%40pass%23123
```

### Step 3: Update .env

```env
PAYLOAD_SECRET=your-secret-key
DATABASE_URI=postgresql://neondb_owner:ENCODED_PASSWORD@ep-xxx-xxx.region.aws.neon.tech/neondb?sslmode=require
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### Step 4: Test Connection

Run the test script:
```powershell
node test-db-connection.js
```

## Generate PAYLOAD_SECRET

```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## Still Not Working?

1. Make sure `.env` file is in the project root (same folder as `package.json`)
2. Restart your terminal/IDE after changing `.env`
3. Check that PostgreSQL is running (if using local)
4. Verify the connection string format is correct

