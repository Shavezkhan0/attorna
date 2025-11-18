import { NextResponse } from 'next/server'

export async function GET() {
  const checks = {
    payloadSecret: {
      exists: !!process.env.PAYLOAD_SECRET,
      length: process.env.PAYLOAD_SECRET?.length || 0,
    },
    databaseUri: {
      exists: !!process.env.DATABASE_URI,
      hasPostgres: process.env.DATABASE_URI?.includes('postgres') || false,
      length: process.env.DATABASE_URI?.length || 0,
    },
  }

  const allGood = checks.payloadSecret.exists && checks.databaseUri.exists

  return NextResponse.json(
    {
      status: allGood ? 'ok' : 'error',
      checks,
      message: allGood
        ? 'Environment variables are configured correctly.'
        : 'Some environment variables are missing. Please check your Vercel environment variables.',
      instructions: {
        payloadSecret: checks.payloadSecret.exists
          ? '✅ PAYLOAD_SECRET is set'
          : '❌ PAYLOAD_SECRET is missing. Add it in Vercel Settings → Environment Variables.',
        databaseUri: checks.databaseUri.exists
          ? '✅ DATABASE_URI is set'
          : '❌ DATABASE_URI is missing. Add your PostgreSQL connection string in Vercel Settings → Environment Variables.',
      },
    },
    { status: allGood ? 200 : 500 },
  )
}

