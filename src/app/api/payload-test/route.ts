import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET() {
  try {
    // Try to initialize Payload
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    // Try to query the database
    try {
      await payload.find({
        collection: 'users',
        limit: 1,
      })
    } catch (dbError: any) {
      return NextResponse.json(
        {
          status: 'database_error',
          message: 'Payload initialized but database query failed',
          error: dbError?.message || 'Unknown database error',
          stack: process.env.NODE_ENV === 'development' ? dbError?.stack : undefined,
          details: {
            hasSecret: !!process.env.PAYLOAD_SECRET,
            hasDatabaseUri: !!process.env.DATABASE_URI,
            databaseUriPreview: process.env.DATABASE_URI
              ? `${process.env.DATABASE_URI.substring(0, 20)}...`
              : 'not set',
          },
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      status: 'ok',
      message: 'Payload CMS is working correctly',
      collections: payloadConfig.collections?.map((c: any) => c.slug) || [],
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        status: 'error',
        message: error?.message || 'Unknown error',
        errorType: error?.name || 'Error',
        stack: process.env.NODE_ENV === 'development' ? error?.stack : undefined,
        details: {
          hasSecret: !!process.env.PAYLOAD_SECRET,
          hasDatabaseUri: !!process.env.DATABASE_URI,
          databaseUriPreview: process.env.DATABASE_URI
            ? `${process.env.DATABASE_URI.substring(0, 20)}...`
            : 'not set',
          nodeEnv: process.env.NODE_ENV,
        },
        commonIssues: [
          'Database connection string is invalid',
          'Database server is not accessible',
          'Database does not exist',
          'Database credentials are incorrect',
          'Network/firewall blocking connection',
          'Payload config has an error',
        ],
      },
      { status: 500 },
    )
  }
}
