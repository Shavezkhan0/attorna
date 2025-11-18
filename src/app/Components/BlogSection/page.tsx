'use client'

import React, { useState, useEffect, Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { FaFacebookF, FaPinterestP, FaXTwitter, FaClock, FaUser } from 'react-icons/fa6'
import PageTitle from '../../utils/PageTitle/PageTitle'
import {
  getBlogPosts,
  getBlogPostBySlug,
  formatDate,
  formatDateShort,
  getImageUrl,
  extractTextFromLexical,
  type PayloadBlogPost,
} from '@/lib/payload'

// Transform Payload blog post to component's expected format
interface BlogPostDisplay {
  id: number
  title: string
  author: string
  date: string
  categories: string
  tags: string
  comments: string
  image: string
  heading: string
  excerpt: string
  body?: any // Rich text JSON from Payload
  slug?: string
}

const BlogContent = () => {
  const searchParams = useSearchParams()
  const slugFromUrl = searchParams.get('slug')

  const [comment, setComment] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
    saveInfo: false,
  })

  const [blogPosts, setBlogPosts] = useState<BlogPostDisplay[]>([])
  const [selectedPost, setSelectedPost] = useState<BlogPostDisplay | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Transform Payload blog post to display format
  const transformBlogPost = (post: PayloadBlogPost): BlogPostDisplay => {
    return {
      id: post.id,
      title: post.title,
      author: post.author || 'Admin', // Use author from Payload, default to 'Admin' if not set
      date: formatDate(post.publishedAt || post.createdAt),
      categories: 'Blog', // Default since not in Payload schema
      tags: 'General', // Default since not in Payload schema
      comments: 'no comments',
      image: getImageUrl(post.heroImage),
      heading: post.title, // Use title as heading
      excerpt: post.excerpt || extractTextFromLexical(post.body).substring(0, 150) + '...',
      body: post.body, // Store rich text JSON
      slug: post.slug,
    }
  }

  // Fetch blog posts from Payload CMS
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true)
        setError(null)

        // If slug is in URL, fetch that specific post first
        if (slugFromUrl) {
          const specificPost = await getBlogPostBySlug(slugFromUrl)
          if (specificPost) {
            const transformedPost = transformBlogPost(specificPost)
            setSelectedPost(transformedPost)
          }
        }

        // Fetch all posts for sidebar and related posts
        const payloadPosts = await getBlogPosts()

        if (payloadPosts.length === 0) {
          setError('No blog posts found. Please add some posts in Payload CMS admin.')
          setLoading(false)
          return
        }

        // Transform Payload posts to display format
        const transformedPosts = payloadPosts.map(transformBlogPost)
        setBlogPosts(transformedPosts)

        // Set selected post: use slug from URL if available, otherwise first post
        if (slugFromUrl) {
          const postBySlug = transformedPosts.find((post) => post.slug === slugFromUrl)
          if (postBySlug) {
            setSelectedPost(postBySlug)
          } else if (transformedPosts.length > 0) {
            setSelectedPost(transformedPosts[0])
          }
        } else if (transformedPosts.length > 0) {
          setSelectedPost(transformedPosts[0])
        }
      } catch (err) {
        console.error('Error fetching blog posts:', err)
        setError('Failed to load blog posts. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [slugFromUrl])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Comment submitted:', comment)
    // Reset form
    setComment({
      name: '',
      email: '',
      website: '',
      message: '',
      saveInfo: false,
    })
  }

  // Get recent articles (exclude selected post)
  const recentArticles = blogPosts.filter((post) => post.id !== selectedPost?.id)

  // Get related posts (exclude selected, take 2)
  const relatedPosts = blogPosts
    .filter((post) => post.id !== selectedPost?.id)
    .slice(0, 2)
    .map((post) => ({
      title: post.title,
      date: post.date,
      author: post.author,
      image: post.image,
      slug: post.slug,
    }))

  const tags = [
    'ANTITRUST',
    'BANKRUPTCY',
    'EMPLOYMENT',
    'FAMILY',
    'GENERAL PRACTICE',
    'IMMIGRATION',
    'LAW',
    'NONPROFIT',
    'PERSONAL INJURY',
    'PROPERTY',
  ]

  const practiceAreas = [
    'Family Violence',
    'Giving Million Air Its Wings',
    'Accident Insurance',
    "Making Sure It's Closed",
    'Public Company Fraud',
    'Nighmare on Wall Street',
  ]

  // Render simple rich text content from Lexical JSON
  const renderRichText = (body: any) => {
    if (!body || !body.root) return null

    const renderNode = (node: any, index: number): React.ReactNode => {
      if (!node) return null

      switch (node.type) {
        case 'heading':
          const level = node.tag || 'h2'
          const headingProps = {
            key: index,
            className: 'text-2xl md:text-3xl font-serif text-[#2d1f13] font-normal mb-6 mt-12',
            children: node.children?.map((child: any, i: number) => renderNode(child, i)),
          }
          if (level === 'h1') return <h1 {...headingProps} />
          if (level === 'h2') return <h2 {...headingProps} />
          if (level === 'h3') return <h3 {...headingProps} />
          if (level === 'h4') return <h4 {...headingProps} />
          if (level === 'h5') return <h5 {...headingProps} />
          if (level === 'h6') return <h6 {...headingProps} />
          return <h2 {...headingProps} />
        case 'paragraph':
          return (
            <p key={index} className="text-[#6b5d4f] text-base leading-relaxed mb-6">
              {node.children?.map((child: any, i: number) => renderNode(child, i))}
            </p>
          )
        case 'quote':
          return (
            <blockquote
              key={index}
              className="bg-[#f9f6f2] border-l-4 border-[#b8956f] p-8 mb-8 italic text-[#8a7a6a]"
            >
              {node.children?.map((child: any, i: number) => renderNode(child, i))}
            </blockquote>
          )
        case 'list':
          const ListTag = node.listType === 'number' ? 'ol' : 'ul'
          return (
            <ListTag
              key={index}
              className={`space-y-3 mb-8 ${node.listType === 'number' ? 'pl-6 list-decimal' : 'pl-6 list-disc'}`}
            >
              {node.children?.map((child: any, i: number) => renderNode(child, i))}
            </ListTag>
          )
        case 'listitem':
          return (
            <li key={index} className="text-[#6b5d4f]">
              {node.children?.map((child: any, i: number) => renderNode(child, i))}
            </li>
          )
        case 'text':
          const text = node.text || ''
          if (node.bold) {
            return (
              <strong key={index} className="text-[#2d1f13]">
                {text}
              </strong>
            )
          }
          if (node.italic) {
            return <em key={index}>{text}</em>
          }
          return <span key={index}>{text}</span>
        default:
          return node.children?.map((child: any, i: number) => renderNode(child, i))
      }
    }

    return <>{body.root.children?.map((node: any, index: number) => renderNode(node, index))}</>
  }

  // Loading state
  if (loading) {
    return (
      <div className="w-full bg-[#f5f0ea]">
        <PageTitle title="Blog" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <div className="text-center">
            <p className="text-[#8a7a6a]">Loading blog posts...</p>
          </div>
        </div>
      </div>
    )
  }

  // Error state
  if (error || !selectedPost) {
    return (
      <div className="w-full bg-[#f5f0ea]">
        <PageTitle title="Blog" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error || 'No blog posts found'}</p>
            <p className="text-[#8a7a6a] text-sm">
              Please add blog posts in the{' '}
              <Link href="/admin/collections/blog-posts" className="text-[#b8956f] hover:underline">
                Payload CMS admin panel
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-[#f5f0ea]">
      <PageTitle title="Blog" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        {/* Article Header - Full Width */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2d1f13] font-normal mb-6 leading-tight">
            {selectedPost.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#8a7a6a]">
            <span>{selectedPost.author}</span>
            <span>·</span>
            <span>{selectedPost.categories}</span>
            <span>·</span>
            <span>{selectedPost.tags}</span>
            <span>·</span>
            <span>{selectedPost.comments}</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-8">
            {/* Featured Image */}
            {selectedPost.image && (
              <div className="relative h-[400px] md:h-[500px] mb-12">
                <Image
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  fill
                  className="object-cover transition-opacity duration-500"
                  key={selectedPost.id}
                  unoptimized={selectedPost.image.startsWith('/media/')}
                  onError={(e) => {
                    console.error('Image failed to load:', selectedPost.image)
                    // Fallback to placeholder
                    e.currentTarget.src =
                      '/Case-Studies-images/image-from-rawpixel-id-515848-jpeg-700x450.jpg'
                  }}
                />
              </div>
            )}

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              {/* Render rich text body from Payload */}
              {selectedPost.body ? (
                renderRichText(selectedPost.body)
              ) : (
                <>
                  {/* Fallback: Show excerpt if body is not available */}
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2d1f13] font-normal mb-6">
                    {selectedPost.heading}
                  </h2>
                  <p className="text-[#6b5d4f] text-base leading-relaxed mb-6">
                    {selectedPost.excerpt}
                  </p>
                </>
              )}

              {/* Previous Post Link */}
              {recentArticles.length > 0 && (
                <div className="border-t border-[#e0d5c7] pt-8 mb-12">
                  <p className="text-[#8a7a6a] text-xs uppercase tracking-wider mb-3">
                    PREVIOUS POST
                  </p>
                  <Link
                    href={recentArticles[0].slug ? `/blog/${recentArticles[0].slug}` : '#'}
                    className="text-[#b8956f] hover:text-[#a67f5a] text-lg font-medium transition-colors"
                  >
                    {recentArticles[0].title}
                  </Link>
                </div>
              )}

              {/* Share and Tags Section */}
              <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-t border-b border-[#e0d5c7] mb-12">
                {/* Social Share */}
                <div className="flex items-center gap-4">
                  <span className="text-[#2d1f13] font-medium">0 SHARES</span>
                  <div className="flex gap-3">
                    <button className="text-[#8a7a6a] hover:text-[#b8956f] transition-colors">
                      <FaFacebookF size={16} />
                    </button>
                    <button className="text-[#8a7a6a] hover:text-[#b8956f] transition-colors">
                      <FaPinterestP size={16} />
                    </button>
                    <button className="text-[#8a7a6a] hover:text-[#b8956f] transition-colors">
                      <FaXTwitter size={16} />
                    </button>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#b8956f] text-white text-xs uppercase px-4 py-2 font-medium">
                    ANTITRUST
                  </span>
                  <span className="bg-[#b8956f] text-white text-xs uppercase px-4 py-2 font-medium">
                    FAMILY
                  </span>
                  <span className="bg-[#b8956f] text-white text-xs uppercase px-4 py-2 font-medium">
                    IMMIGRATION
                  </span>
                </div>
              </div>

              {/* Related Posts */}
              <div className="mb-16">
                <h3 className="text-2xl md:text-3xl font-serif text-[#b8956f] font-normal mb-8">
                  Related Posts
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedPosts.map((post, index) => (
                    <div key={index} className="group">
                      {post.image && (
                        <div className="relative h-[250px] mb-4 overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            unoptimized={post.image.startsWith('/media/')}
                            onError={(e) => {
                              e.currentTarget.src =
                                '/Case-Studies-images/image-from-rawpixel-id-515848-jpeg-700x450.jpg'
                            }}
                          />
                        </div>
                      )}
                      <h4 className="text-[#2d1f13] text-lg font-serif font-normal mb-3 group-hover:text-[#b8956f] transition-colors">
                        <Link href={post.slug ? `/blog/${post.slug}` : '#'}>{post.title}</Link>
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-[#8a7a6a]">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.author}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comment Section */}
              <div>
                <h3 className="text-2xl md:text-3xl font-serif text-[#b8956f] font-normal mb-8">
                  Leave a Reply
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Comment Textarea */}
                  <textarea
                    placeholder="Comment*"
                    value={comment.message}
                    onChange={(e) => setComment({ ...comment, message: e.target.value })}
                    className="w-full px-6 py-4 bg-white border border-[#e0d5c7] text-[#2d1f13] placeholder:text-[#9b9b9b] focus:outline-none focus:border-[#b8956f] transition-colors min-h-[200px]"
                    required
                  />

                  {/* Name, Email, Website Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <input
                      type="text"
                      placeholder="Name*"
                      value={comment.name}
                      onChange={(e) => setComment({ ...comment, name: e.target.value })}
                      className="px-6 py-4 bg-white border border-[#e0d5c7] text-[#2d1f13] placeholder:text-[#9b9b9b] focus:outline-none focus:border-[#b8956f] transition-colors"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email*"
                      value={comment.email}
                      onChange={(e) => setComment({ ...comment, email: e.target.value })}
                      className="px-6 py-4 bg-white border border-[#e0d5c7] text-[#2d1f13] placeholder:text-[#9b9b9b] focus:outline-none focus:border-[#b8956f] transition-colors"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Website"
                      value={comment.website}
                      onChange={(e) => setComment({ ...comment, website: e.target.value })}
                      className="px-6 py-4 bg-white border border-[#e0d5c7] text-[#2d1f13] placeholder:text-[#9b9b9b] focus:outline-none focus:border-[#b8956f] transition-colors"
                    />
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="saveInfo"
                      checked={comment.saveInfo}
                      onChange={(e) => setComment({ ...comment, saveInfo: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <label htmlFor="saveInfo" className="text-[#6b5d4f] text-sm">
                      Save my name, email, and website in this browser for the next time I comment.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-[#b8956f] hover:bg-[#a67f5a] text-white uppercase text-sm font-bold tracking-wider px-10 py-4 transition-colors duration-300 rounded-full"
                  >
                    POST COMMENT
                  </button>
                </form>
              </div>
            </article>
          </div>

          {/* Sidebar - Right Side */}
          <aside className="lg:col-span-4 space-y-12">
            {/* Recent Articles Widget */}
            <div>
              <h3 className="text-2xl font-serif text-[#2d1f13] font-normal mb-6">
                Recent Articles
              </h3>

              <div className="space-y-6">
                {blogPosts.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => setSelectedPost(article)}
                    className={`flex gap-4 group cursor-pointer transition-all ${
                      selectedPost.id === article.id
                        ? 'opacity-100'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    {article.image && (
                      <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                          unoptimized={article.image.startsWith('/media/')}
                          onError={(e) => {
                            e.currentTarget.src =
                              '/Case-Studies-images/image-from-rawpixel-id-515848-jpeg-700x450.jpg'
                          }}
                        />
                      </div>
                    )}
                    <div>
                      <h4
                        className={`text-sm font-medium mb-2 group-hover:text-[#b8956f] transition-colors leading-tight ${
                          selectedPost.id === article.id ? 'text-[#b8956f]' : 'text-[#2d1f13]'
                        }`}
                      >
                        {article.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-[#8a7a6a]">
                        <FaClock size={10} />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#8a7a6a] mt-1">
                        <FaUser size={10} />
                        <span>{article.author}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tag Cloud Widget */}
            <div>
              <h3 className="text-2xl font-serif text-[#2d1f13] font-normal mb-6">Tag Cloud</h3>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="bg-[#b8956f] hover:bg-[#a67f5a] text-white text-xs uppercase px-4 py-2 font-medium transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Practice Areas Widget */}
            <div>
              <h3 className="text-2xl font-serif text-[#2d1f13] font-normal mb-6">
                Practice Areas
              </h3>

              <ul className="space-y-4">
                {practiceAreas.map((area, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-[#2d1f13] hover:text-[#b8956f] transition-colors text-sm"
                    >
                      <span className="text-[#b8956f]">→</span>
                      {area}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

const Blog = () => {
  return (
    <Suspense
      fallback={
        <div className="w-full bg-[#f5f0ea]">
          <PageTitle title="Blog" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
            <div className="text-center">
              <p className="text-[#8a7a6a]">Loading...</p>
            </div>
          </div>
        </div>
      }
    >
      <BlogContent />
    </Suspense>
  )
}

export default Blog
