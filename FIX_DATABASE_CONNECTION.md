# Fix Database Connection Error

## Current Error
```
password authentication failed for user 'neondb_owner'
```

This means your Neon database connection string has incorrect credentials.

## Solution

### Step 1: Get the Correct Connection String from Neon

1. Go to your Neon dashboard: https://console.neon.tech
2. Select your project
3. Go to **Connection Details** or **Connection String**
4. Copy the **Connection String** (not the connection pooler string)
5. It should look like:
   ```
   postgresql://username:password@ep-xxx-xxx.region.aws.neon.tech/dbname?sslmode=require
   ```

### Step 2: Update Your `.env` File

Open your `.env` file and update the `DATABASE_URI`:

```env
PAYLOAD_SECRET=your-secret-key-here
DATABASE_URI=postgresql://username:password@ep-xxx-xxx.region.aws.neon.tech/dbname?sslmode=require
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

**Important Notes:**
- Use the **direct connection string**, not the pooler connection string
- Make sure the password is correct (copy it exactly from Neon)
- The connection string should include `?sslmode=require` for SSL

### Step 3: Verify Connection String Format

The format should be:
```
postgresql://[username]:[password]@[host]:[port]/[database]?[params]
```

Common issues:
- ❌ Missing password
- ❌ Wrong username
- ❌ Special characters in password not URL-encoded
- ❌ Using pooler connection string instead of direct connection

### Step 4: URL-Encode Special Characters

If your password has special characters, they need to be URL-encoded:
- `@` becomes `%40`
- `#` becomes `%23`
- `$` becomes `%24`
- `%` becomes `%25`
- `&` becomes `%26`
- `+` becomes `%2B`
- `=` becomes `%3D`
- `?` becomes `%3F`

Example:
```
# Password: my@pass#123
# Encoded: my%40pass%23123
postgresql://user:my%40pass%23123@host/db
```

### Step 5: Alternative - Use Local Database

If you prefer to use a local database for development:

1. **Start PostgreSQL with Docker:**
   ```bash
   docker-compose up -d postgres
   ```

2. **Update `.env`:**
   ```env
   PAYLOAD_SECRET=your-secret-key-here
   DATABASE_URI=postgresql://postgres:postgres@localhost:5432/attorna
   NEXT_PUBLIC_SERVER_URL=http://localhost:3000
   ```

3. **Restart dev server:**
   ```bash
   pnpm dev
   ```

### Step 6: Reset Neon Password (If Needed)

If you're not sure about the password:

1. Go to Neon Dashboard
2. Go to your project settings
3. Reset the database password
4. Copy the new connection string
5. Update your `.env` file

## Test the Connection

After updating your `.env` file:

1. Restart your dev server:
   ```bash
   pnpm dev
   ```

2. Visit: `http://localhost:3000/admin`

3. If it works, you'll see the Payload CMS admin login page

## Still Having Issues?

1. **Check your `.env` file exists** in the project root
2. **Verify the connection string** by testing it with a PostgreSQL client
3. **Check Neon dashboard** to ensure the database is active
4. **Try the direct connection string** instead of pooler connection

