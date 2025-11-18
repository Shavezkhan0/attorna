// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { BlogPosts } from './collections/BlogPosts'
import { CaseStudies } from './collections/CaseStudies'
import { HeroSections } from './collections/HeroSections'
import { TeamMembers } from './collections/TeamMembers'
import { Testimonials } from './collections/Testimonials'
import { SiteGlobals } from './globals/SiteGlobals'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Validate required environment variables
const payloadSecret = process.env.PAYLOAD_SECRET
const databaseUri = process.env.DATABASE_URI

if (!payloadSecret) {
  console.error(
    '⚠️  PAYLOAD_SECRET environment variable is missing. Please set it in your Vercel environment variables.',
  )
}

if (!databaseUri) {
  console.error(
    '⚠️  DATABASE_URI environment variable is missing. Please set your PostgreSQL connection string in Vercel environment variables.',
  )
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    BlogPosts,
    CaseStudies,
    HeroSections,
    TeamMembers,
    Testimonials,
  ],
  globals: [SiteGlobals],
  editor: lexicalEditor(),
  secret: payloadSecret || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: databaseUri || '',
    },
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
