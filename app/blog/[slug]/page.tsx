import type { Metadata } from 'next'
import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 60

async function getPost(slug: string) {
  return client.fetch(`*[_type == "post" && slug.current == $slug][0] {
    _id, title, excerpt, category, publishedAt, body,
    "coverImage": coverImage.asset->url
  }`, { slug })
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0] {
    title, excerpt, publishedAt, "coverImage": coverImage.asset->url
  }`, { slug: params.slug })

  if (!post) return { title: 'Post not found' }

  const url = `/blog/${params.slug}`
  const description = post.excerpt || undefined
  const images = post.coverImage
    ? [{ url: post.coverImage, width: 1600, height: 900, alt: post.title }]
    : undefined

  return {
    title: post.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description,
      publishedTime: post.publishedAt,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) notFound()
  return (
    <main className="min-h-screen bg-ink-950 pt-24 pb-20">
      <div className="container-px mx-auto max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-brand-300 mb-8 transition-colors">← Back to Blog</Link>
        {post.category && <span className="inline-block text-xs font-semibold text-brand-400 uppercase tracking-widest mb-4">{post.category}</span>}
        <h1 className="font-display text-3xl font-bold text-white md:text-4xl mb-4">{post.title}</h1>
        {post.publishedAt && <p className="text-sm text-white/30 mb-8">{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>}
        {post.coverImage && <img src={post.coverImage} alt={post.title} className="w-full rounded-2xl mb-10 aspect-video object-cover"/>}
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-a:text-brand-400">
          {post.body && <PortableText value={post.body}/>}
        </div>
      </div>
    </main>
  )
}
