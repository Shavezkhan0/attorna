/**
 * Utility functions for fetching data from Payload CMS
 */

const API_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

export interface PayloadBlogPost {
  id: number
  title: string
  slug: string
  status: 'draft' | 'published'
  excerpt?: string | null
  author?: string | null
  heroImage?:
    | {
        id: number
        url?: string | null
        alt?: string
        filename?: string | null
      }
    | number
    | null
  body: any // Lexical rich text JSON
  publishedAt?: string | null
  updatedAt: string
  createdAt: string
}

/**
 * Fetch all published blog posts from Payload CMS
 */
export async function getBlogPosts(): Promise<PayloadBlogPost[]> {
  try {
    const response = await fetch(
      `${API_URL}/api/blog-posts?where[status][equals]=published&limit=100&depth=2&sort=-publishedAt`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store', // Always fetch fresh data
      },
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch blog posts: ${response.statusText}`)
    }

    const data = await response.json()
    return data.docs || []
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

/**
 * Fetch a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<PayloadBlogPost | null> {
  try {
    const response = await fetch(
      `${API_URL}/api/blog-posts?where[slug][equals]=${slug}&limit=1&depth=2`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      },
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch blog post: ${response.statusText}`)
    }

    const data = await response.json()
    return data.docs?.[0] || null
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

/**
 * Format date from ISO string to readable format
 */
export function formatDate(dateString: string | null | undefined): string {
  if (!dateString) return ''

  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return date.toLocaleDateString('en-US', options).toUpperCase()
}

/**
 * Format date to short format (e.g., "February 28, 2019")
 */
export function formatDateShort(dateString: string | null | undefined): string {
  if (!dateString) return ''

  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return date.toLocaleDateString('en-US', options)
}

/**
 * Get image URL from Payload media object
 */
export function getImageUrl(heroImage: PayloadBlogPost['heroImage']): string {
  if (!heroImage) {
    // Default placeholder image
    return '/Case-Studies-images/image-from-rawpixel-id-515848-jpeg-700x450.jpg'
  }

  if (typeof heroImage === 'number') {
    // If it's just an ID, we need to fetch the media separately
    // For now, return placeholder
    return '/Case-Studies-images/image-from-rawpixel-id-515848-jpeg-700x450.jpg'
  }

  if (heroImage && typeof heroImage === 'object' && 'url' in heroImage) {
    const url = heroImage.url
    const filename = (heroImage as any).filename

    if (!url) {
      // If no URL but we have filename, construct the path
      if (filename) {
        return `/media/${filename}`
      }
      return '/Case-Studies-images/image-from-rawpixel-id-515848-jpeg-700x450.jpg'
    }

    // If URL is already a full URL (http:// or https://), return as-is
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url
    }

    // If URL starts with /media/, it's a Payload media file - ensure it's accessible
    // Payload serves media files from /media/ directory
    if (url.startsWith('/media/')) {
      return url
    }

    // If URL starts with /, it's already an absolute path (like /Case-Studies-images/...)
    if (url.startsWith('/')) {
      return url
    }

    // If it's a relative path without leading slash, construct full path
    // For Payload media, files are typically served from /media/filename
    if (filename) {
      return `/media/${filename}`
    }

    // Fallback: assume it's a Payload media file and prepend /media/
    return `/media/${url}`
  }

  return '/Case-Studies-images/image-from-rawpixel-id-515848-jpeg-700x450.jpg'
}

/**
 * Extract plain text from Lexical rich text JSON
 * Simple implementation - you might want to use @payloadcms/richtext-lexical/react
 * for proper rich text rendering
 */
export function extractTextFromLexical(lexicalJSON: any): string {
  if (!lexicalJSON || !lexicalJSON.root) return ''

  let text = ''
  const traverse = (node: any) => {
    if (node.text) {
      text += node.text
    }
    if (node.children) {
      node.children.forEach(traverse)
    }
  }

  traverse(lexicalJSON.root)
  return text.trim()
}

export interface PayloadTeamMember {
  id: number
  name: string
  position?: string | null
  bio?: string | null
  photo?:
    | {
        id: number
        url?: string | null
        alt?: string
        filename?: string | null
      }
    | number
    | null
  socialLinks?:
    | {
        platform: string
        url: string
        id?: string | null
      }[]
    | null
  updatedAt: string
  createdAt: string
}

/**
 * Fetch all team members from Payload CMS
 */
export async function getTeamMembers(): Promise<PayloadTeamMember[]> {
  try {
    const response = await fetch(`${API_URL}/api/team-members?limit=100&depth=2&sort=createdAt`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Always fetch fresh data
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch team members: ${response.statusText}`)
    }

    const data = await response.json()
    return data.docs || []
  } catch (error) {
    console.error('Error fetching team members:', error)
    return []
  }
}

/**
 * Get image URL from Payload media object (for team member photos)
 */
export function getTeamMemberPhotoUrl(photo: PayloadTeamMember['photo']): string {
  if (!photo) {
    // Default placeholder image
    return '/OutTeam/img02.jpg'
  }

  if (typeof photo === 'number') {
    // If it's just an ID, we need to fetch the media separately
    // For now, return placeholder
    return '/OutTeam/img02.jpg'
  }

  if (photo && typeof photo === 'object' && 'url' in photo) {
    const url = photo.url
    const filename = (photo as any).filename

    if (!url) {
      // If no URL but we have filename, construct the path
      if (filename) {
        return `/media/${filename}`
      }
      return '/OutTeam/img02.jpg'
    }

    // If URL is already a full URL (http:// or https://), return as-is
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url
    }

    // If URL starts with /media/, it's a Payload media file
    if (url.startsWith('/media/')) {
      return url
    }

    // If URL starts with /, it's already an absolute path
    if (url.startsWith('/')) {
      return url
    }

    // If it's a relative path without leading slash, construct full path
    if (filename) {
      return `/media/${filename}`
    }

    // Fallback: assume it's a Payload media file and prepend /media/
    return `/media/${url}`
  }

  return '/OutTeam/img02.jpg'
}

export interface PayloadTestimonial {
  id: number
  clientName: string
  clientTitle?: string | null
  testimonial: string
  avatar?:
    | {
        id: number
        url?: string | null
        alt?: string
        filename?: string | null
      }
    | number
    | null
  order?: number | null
  updatedAt: string
  createdAt: string
}

/**
 * Fetch all testimonials from Payload CMS
 */
export async function getTestimonials(): Promise<PayloadTestimonial[]> {
  try {
    const response = await fetch(`${API_URL}/api/testimonials?limit=100&depth=2&sort=order`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Always fetch fresh data
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch testimonials: ${response.statusText}`)
    }

    const data = await response.json()
    return data.docs || []
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

/**
 * Get image URL from Payload media object (for testimonial avatars)
 */
export function getTestimonialAvatarUrl(avatar: PayloadTestimonial['avatar']): string {
  if (!avatar) {
    // Default placeholder image
    return '/clien_say-images/client1-150x150.jpg'
  }

  if (typeof avatar === 'number') {
    // If it's just an ID, we need to fetch the media separately
    // For now, return placeholder
    return '/clien_say-images/client1-150x150.jpg'
  }

  if (avatar && typeof avatar === 'object' && 'url' in avatar) {
    const url = avatar.url
    const filename = (avatar as any).filename

    if (!url) {
      // If no URL but we have filename, construct the path
      if (filename) {
        return `/media/${filename}`
      }
      return '/clien_say-images/client1-150x150.jpg'
    }

    // If URL is already a full URL (http:// or https://), return as-is
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url
    }

    // If URL starts with /media/, it's a Payload media file
    if (url.startsWith('/media/')) {
      return url
    }

    // If URL starts with /, it's already an absolute path
    if (url.startsWith('/')) {
      return url
    }

    // If it's a relative path without leading slash, construct full path
    if (filename) {
      return `/media/${filename}`
    }

    // Fallback: assume it's a Payload media file and prepend /media/
    return `/media/${url}`
  }

  return '/clien_say-images/client1-150x150.jpg'
}
