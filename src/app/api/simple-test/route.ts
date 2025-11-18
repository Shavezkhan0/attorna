import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Just test basic functionality without importing Payload
    return NextResponse.json({
      status: 'ok',
      message: 'API route is working',
      env: {
        hasSecret: !!process.env.PAYLOAD_SECRET,
        hasDatabaseUri: !!process.env.DATABASE_URI,
        nodeEnv: process.env.NODE_ENV,
      },
      timestamp: new Date().toISOString(),
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        status: 'error',
        message: error?.message || 'Unknown error',
        stack: error?.stack,
      },
      { status: 500 },
    )
  }
}

