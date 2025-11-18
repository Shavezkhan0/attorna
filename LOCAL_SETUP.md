# Local Development Setup

## Database Connection Error Fix

If you're seeing `ECONNRESET` or connection errors, you need to set up a PostgreSQL database.

## Option 1: Use Docker (Recommended for Local Development)

1. **Start PostgreSQL with Docker:**
   ```bash
   docker-compose up -d postgres
   ```

2. **Create a `.env` file in the root directory:**
   ```env
   PAYLOAD_SECRET=your-secret-key-here-min-32-characters
   DATABASE_URI=postgresql://postgres:postgres@localhost:5432/attorna
   NEXT_PUBLIC_SERVER_URL=http://localhost:3000
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```

## Option 2: Install PostgreSQL Locally

1. **Install PostgreSQL:**
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql` or download from postgresql.org
   - Linux: `sudo apt-get install postgresql` (Ubuntu/Debian)

2. **Create a database:**
   ```bash
   # Connect to PostgreSQL
   psql -U postgres
   
   # Create database
   CREATE DATABASE attorna;
   
   # Exit
   \q
   ```

3. **Create a `.env` file:**
   ```env
   PAYLOAD_SECRET=your-secret-key-here-min-32-characters
   DATABASE_URI=postgresql://postgres:your-password@localhost:5432/attorna
   NEXT_PUBLIC_SERVER_URL=http://localhost:3000
   ```

## Option 3: Use Cloud Database (Same as Production)

Use the same database connection string from Vercel:

1. **Get your database connection string from Vercel:**
   - Go to Vercel Dashboard → Your Project → Storage → Postgres
   - Copy the connection string

2. **Create a `.env` file:**
   ```env
   PAYLOAD_SECRET=your-secret-key-here
   DATABASE_URI=your-vercel-postgres-connection-string
   NEXT_PUBLIC_SERVER_URL=http://localhost:3000
   ```

## Generate PAYLOAD_SECRET

You can generate a secret key using:
- Online: https://generate-secret.vercel.app/32
- Terminal: `openssl rand -base64 32`
- Node.js: `node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"`

## Verify Connection

After setting up, test the connection:
1. Start the dev server: `pnpm dev`
2. Visit: `http://localhost:3000/admin`
3. You should be able to create your first admin user

## Troubleshooting

### Error: "ECONNRESET" or "Connection refused"
- Make sure PostgreSQL is running
- Check if the port 5432 is available
- Verify the connection string format: `postgresql://user:password@host:port/database`
- Check if the database exists

### Error: "Authentication failed"
- Verify the username and password in your connection string
- Check PostgreSQL authentication settings

### Error: "Database does not exist"
- Create the database first: `CREATE DATABASE attorna;`

