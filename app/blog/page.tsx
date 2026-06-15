import type { Metadata } from 'next'
import { client } from '@/lib/sanity'
import Link from 'next/link'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Expert strategies, tips and news for Amazon sellers and eCommerce brands — PPC, listing SEO, A+ Content, account management and growth.',
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    url: '/blog',
    title: 'Amazon & eCommerce Insights',
    description: 'Expert strategies, tips and news for Amazon sellers and eCommerce brands.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon & eCommerce Insights',
    description: 'Expert strategies, tips and news for Amazon sellers and eCommerce brands.',
  },
}

async function getPosts() {
  return client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, excerpt, category, publishedAt,
    "coverImage": coverImage.asset->url
  }`)
}

export default async function BlogPage() {
  const posts = await getPosts()
  return (
    <main className="min-h-screen bg-ink-950 pt-24 pb-20">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-400 mb-4">Blog</span>
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl">Amazon & eCommerce Insights</h1>
          <p className="mt-4 text-white/55 max-w-xl mx-auto">Expert strategies, tips and news for Amazon sellers and eCommerce brands.</p>
        </div>
        {posts.length === 0 ? (
          <div className="text-center text-white/40 py-20">No posts yet. Add your first post in the Sanity Studio.</div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any) => (
              <Link key={post._id} href={`/blog/${post.slug.current}`}
                className="group flex flex-col rounded-2xl border border-white/5 bg-white/[0.03] overflow-hidden hover:border-brand-500/30 transition-colors">
                {post.coverImage && (
                  <div className="aspect-video overflow-hidden">
                    <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  </div>
                )}
                <div className="flex flex-col flex-1 p-6">
                  {post.category && (
                    <span className="text-xs font-semibold text-brand-400 uppercase tracking-widest mb-3">{post.category}</span>
                  )}
                  <h2 className="font-display text-lg font-bold text-white mb-3 group-hover:text-brand-300 transition-colors line-clamp-2">{post.title}</h2>
                  {post.excerpt && <p className="text-sm text-white/55 line-clamp-3 flex-1">{post.excerpt}</p>}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-white/30">{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''}</span>
                    <span className="text-xs font-semibold text-brand-400 group-hover:text-brand-300">Read more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
