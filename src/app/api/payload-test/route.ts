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
      const configModule = await import('@payload-config')
      config = configModule.default || configModule
    } catch (configError: any) {
      return NextResponse.json(
        {
          status: 'config_import_error',
          message: 'Failed to import Payload config',
          error: String(configError?.message || 'Unknown error'),
          errorName: configError?.name || 'Error',
          errorCode: configError?.code,
          stack: String(configError?.stack || 'No stack trace'),
          cause: configError?.cause ? String(configError.cause) : undefined,
        },
        { status: 500 },
      )
    }

    // Step 3: Try to get the config (it might be a promise or direct export)
    let payloadConfig
    try {
      payloadConfig = config
      // If it's a function/promise, await it
      if (typeof payloadConfig === 'function') {
        payloadConfig = await payloadConfig()
      } else if (payloadConfig instanceof Promise) {
        payloadConfig = await payloadConfig
      }
    } catch (configError: any) {
      return NextResponse.json(
        {
          status: 'config_error',
          message: 'Failed to resolve Payload config',
          error: String(configError?.message || 'Unknown error'),
          errorName: configError?.name || 'Error',
          stack: String(configError?.stack || 'No stack trace'),
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
      // Extract more detailed error information
      const errorDetails: any = {
        hasSecret,
        hasDatabaseUri,
        databaseUriPreview: process.env.DATABASE_URI
          ? `${process.env.DATABASE_URI.substring(0, 30)}...`
          : 'not set',
      }

      // Try to extract database-specific error info
      if (payloadError?.message) {
        errorDetails.errorMessage = String(payloadError.message)
      }
      if (payloadError?.code) {
        errorDetails.errorCode = payloadError.code
      }
      if (payloadError?.errno) {
        errorDetails.errno = payloadError.errno
      }
      if (payloadError?.syscall) {
        errorDetails.syscall = payloadError.syscall
      }

      return NextResponse.json(
        {
          status: 'payload_init_error',
          message: 'Failed to initialize Payload',
          error: String(payloadError?.message || 'Unknown error'),
          errorName: payloadError?.name || 'Error',
          errorCode: payloadError?.code,
          stack: String(payloadError?.stack || 'No stack trace'),
          details: errorDetails,
          commonCauses: [
            'Database connection string is invalid',
            'Database server is not accessible from Vercel',
            'Database credentials are incorrect',
            'Database does not exist',
            'Network timeout or firewall blocking connection',
          ],
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
    // Catch any unexpected errors
    return NextResponse.json(
      {
        status: 'unexpected_error',
        message: String(error?.message || 'Unknown error'),
        errorType: error?.name || 'Error',
        errorCode: error?.code,
        stack: String(error?.stack || 'No stack trace'),
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
