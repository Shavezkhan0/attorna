'use client'

import { useEffect } from 'react'

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Admin Error:', error)
  }, [error])

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ color: '#dc2626', marginBottom: '1rem' }}>Admin Error</h1>
      <p style={{ marginBottom: '1rem', color: '#6b7280' }}>
        There was an error loading the Payload CMS admin panel.
      </p>

      <div
        style={{
          backgroundColor: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: '0.5rem',
          padding: '1rem',
          marginBottom: '1rem',
        }}
      >
        <h2 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Common Issues:
        </h2>
        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: '#991b1b' }}>
          <li>
            Missing{' '}
            <code
              style={{
                backgroundColor: '#fee2e2',
                padding: '0.125rem 0.25rem',
                borderRadius: '0.25rem',
              }}
            >
              PAYLOAD_SECRET
            </code>{' '}
            environment variable
          </li>
          <li>
            Missing{' '}
            <code
              style={{
                backgroundColor: '#fee2e2',
                padding: '0.125rem 0.25rem',
                borderRadius: '0.25rem',
              }}
            >
              DATABASE_URI
            </code>{' '}
            environment variable
          </li>
          <li>Invalid PostgreSQL connection string</li>
          <li>Database connection timeout or network issue</li>
        </ul>
      </div>

      <div
        style={{
          backgroundColor: '#f0f9ff',
          border: '1px solid #bae6fd',
          borderRadius: '0.5rem',
          padding: '1rem',
          marginBottom: '1rem',
        }}
      >
        <h2 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          How to Fix:
        </h2>
        <ol style={{ listStyle: 'decimal', paddingLeft: '1.5rem', color: '#0c4a6e' }}>
          <li>Go to your Vercel project dashboard</li>
          <li>Navigate to Settings → Environment Variables</li>
          <li>
            Add{' '}
            <code
              style={{
                backgroundColor: '#dbeafe',
                padding: '0.125rem 0.25rem',
                borderRadius: '0.25rem',
              }}
            >
              PAYLOAD_SECRET
            </code>{' '}
            with a random secret key
          </li>
          <li>
            Add{' '}
            <code
              style={{
                backgroundColor: '#dbeafe',
                padding: '0.125rem 0.25rem',
                borderRadius: '0.25rem',
              }}
            >
              DATABASE_URI
            </code>{' '}
            with your PostgreSQL connection string
          </li>
          <li>Redeploy your application</li>
        </ol>
      </div>

      {error.message && (
        <div
          style={{
            backgroundColor: '#1f2937',
            color: '#f3f4f6',
            borderRadius: '0.5rem',
            padding: '1rem',
            marginBottom: '1rem',
            fontFamily: 'monospace',
            fontSize: '0.875rem',
          }}
        >
          <strong>Error Details:</strong>
          <pre style={{ marginTop: '0.5rem', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            {error.message}
          </pre>
        </div>
      )}

      <button
        onClick={reset}
        style={{
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '0.5rem',
          padding: '0.75rem 1.5rem',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '500',
        }}
      >
        Try Again
      </button>
    </div>
  )
}
