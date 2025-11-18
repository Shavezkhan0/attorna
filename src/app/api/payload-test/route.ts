import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Step 1: Check environment variables
    const hasSecret = !!process.env.PAYLOAD_SECRET
    const hasDatabaseUri = !!process.env.DATABASE_URI

    if (!hasSecret || !hasDatabaseUri) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Missing environment variables',
          details: {
            hasSecret,
            hasDatabaseUri,
          },
        },
        { status: 500 },
      )
    }

    // Step 2: Try to import config
    let config
    try {
      // Use the configured alias
      config = await import('@payload-config')
    } catch (configError: any) {
      return NextResponse.json(
        {
          status: 'config_import_error',
          message: 'Failed to import Payload config',
          error: configError?.message || 'Unknown error',
          errorName: configError?.name,
          stack: configError?.stack,
        },
        { status: 500 },
      )
    }

    // Step 3: Try to get the config (it might be a promise or direct export)
    let payloadConfig
    try {
      payloadConfig = config.default || config
      // If it's a function/promise, await it
      if (typeof payloadConfig === 'function' || payloadConfig instanceof Promise) {
        payloadConfig = await payloadConfig
      }
    } catch (configError: any) {
      return NextResponse.json(
        {
          status: 'config_error',
          message: 'Failed to resolve Payload config',
          error: configError?.message || 'Unknown error',
          stack: configError?.stack,
        },
        { status: 500 },
      )
    }

    // Step 4: Try to initialize Payload
    let payload
    try {
      const { getPayload } = await import('payload')
      payload = await getPayload({ config: payloadConfig })
    } catch (payloadError: any) {
      return NextResponse.json(
        {
          status: 'payload_init_error',
          message: 'Failed to initialize Payload',
          error: payloadError?.message || 'Unknown error',
          errorName: payloadError?.name,
          stack: payloadError?.stack,
          details: {
            hasSecret,
            hasDatabaseUri,
            databaseUriPreview: process.env.DATABASE_URI
              ? `${process.env.DATABASE_URI.substring(0, 30)}...`
              : 'not set',
          },
        },
        { status: 500 },
      )
    }

    // Step 5: Try to query the database
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
          errorName: dbError?.name,
          stack: dbError?.stack,
          details: {
            hasSecret,
            hasDatabaseUri,
            databaseUriPreview: process.env.DATABASE_URI
              ? `${process.env.DATABASE_URI.substring(0, 30)}...`
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
        status: 'unexpected_error',
        message: error?.message || 'Unknown error',
        errorType: error?.name || 'Error',
        stack: error?.stack,
        details: {
          hasSecret: !!process.env.PAYLOAD_SECRET,
          hasDatabaseUri: !!process.env.DATABASE_URI,
          nodeEnv: process.env.NODE_ENV,
        },
      },
      { status: 500 },
    )
  }
}
