// Test database connection
// Run with: node test-db-connection.js
// First install: pnpm add pg dotenv

import('dotenv').then((dotenv) => {
  dotenv.default.config()
  
  return import('pg')
}).then((pg) => {
  const { Client } = pg.default

  const connectionString = process.env.DATABASE_URI

  if (!connectionString) {
    console.error('❌ DATABASE_URI is not set in .env file')
    process.exit(1)
  }

  console.log('Testing database connection...')
  console.log('Connection string preview:', connectionString.substring(0, 50) + '...')

  const client = new Client({
    connectionString: connectionString,
  })

  client.connect()
    .then(() => {
      console.log('✅ Successfully connected to database!')
      return client.query('SELECT version()')
    })
    .then((result) => {
      console.log('Database version:', result.rows[0].version)
      return client.end()
    })
    .then(() => {
      process.exit(0)
    })
    .catch((error) => {
      console.error('❌ Connection failed:')
      console.error('Error:', error.message)
      console.error('Code:', error.code)
      
      if (error.message.includes('password authentication failed')) {
        console.log('\n💡 Tips to fix:')
        console.log('1. Check your Neon dashboard for the correct connection string')
        console.log('2. Make sure you\'re using the DIRECT connection string (not pooler)')
        console.log('3. If password has special characters, they need to be URL-encoded:')
        console.log('   @ → %40, # → %23, $ → %24, % → %25, & → %26')
        console.log('4. Try resetting the password in Neon dashboard')
        console.log('5. Or use local database: postgresql://postgres:postgres@localhost:5432/attorna')
      }
      
      client.end().catch(() => {})
      process.exit(1)
    })
}).catch((err) => {
  console.error('Error loading modules:', err.message)
  console.log('\nInstall dependencies first:')
  console.log('pnpm add pg dotenv')
  process.exit(1)
})

