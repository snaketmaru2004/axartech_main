'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight, ChevronLeft, BookOpen, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'

const blogPosts = [
  {
    title: "Revolutionizing Agriculture: How Vigyat AgroStore Scaled 300%",
    excerpt: "Discover the journey behind Vigyat AgroStore and how digital transformation is changing the landscape for farmers across India.",
    image: "/projects/vigyat.png",
    date: "April 20, 2026",
    readTime: "5 min read",
    tag: "Case Study",
    slug: "vigyat-case-study",
    delay: 0.1
  },
  {
    title: "The Importance of Digital Presence for Manufacturing Systems",
    excerpt: "JK Tissues sets a new standard for B2B manufacturing portals. Learn why every industrial business needs a digital showcase.",
    image: "/projects/jk-tissues.png",
    date: "April 18, 2026",
    readTime: "4 min read",
    tag: "Business",
    slug: "manufacturing-digital-presence",
    delay: 0.2
  },
  {
    title: "Mastering Next.js 15: What Developers Need to Know",
    excerpt: "Insights from the development of high-performance portfolios and enterprise-grade web applications.",
    image: "/projects/sanket-portfolio.png",
    date: "April 15, 2026",
    readTime: "7 min read",
    tag: "Technology",
    slug: "mastering-nextjs-15",
    delay: 0.3
  }
]

export default function BlogPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200 relative overflow-hidden">
      <Navigation />
      
      {/* Background ambient animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[15%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />
      </div>

      <main className="relative z-10 pt-32 pb-24">
        <div className="container-pro">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="inline-flex items-center gap-2 text-blue-500 mb-8 hover:text-blue-400 group transition-all text-sm font-semibold uppercase tracking-wider">
                <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
              </Link>
              
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-200 backdrop-blur-md shadow-glow-sm">
                <div className="flex h-2 w-2 rounded-full bg-blue-400 animate-ping" />
                <BookOpen size={14} />
                <span>Latest Insights</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-6 uppercase tracking-tight leading-none">
                Latest <span className="text-gradient-primary">Insights</span> & News
              </h1>
              <p className="text-slate-400 text-xl font-light leading-relaxed">
                Stay updated with the latest trends, frameworks, and case studies in modern web development, UI design, and business automation.
              </p>
            </motion.div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: post.delay }}
                className="group flex flex-col bg-slate-900/40 border border-slate-800/80 rounded-[2.5rem] overflow-hidden hover:border-blue-500/40 transition-all duration-500 shadow-2xl hover:shadow-glow-lg relative card-magnetic"
              >
                {/* Glow Background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Cover Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-[2.5rem]">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 rounded-full bg-blue-600/90 text-white text-xs font-bold backdrop-blur-md uppercase tracking-wider shadow-md">
                      {post.tag}
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-8 flex-1 flex flex-col relative z-10">
                  <div className="flex items-center gap-4 text-slate-500 text-xs font-semibold mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-blue-500" />
                      {post.date}
                    </div>
                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                    <div className="flex items-center gap-1.5">
                      <Clock size={13} className="text-purple-500" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed mb-8 line-clamp-3 text-sm font-light">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-800/80 group-hover:border-blue-500/20 transition-colors duration-500">
                    <Button variant="link" asChild className="p-0 text-blue-500 hover:text-blue-400 group/btn no-underline hover:no-underline">
                      <Link href={`/blog/${post.slug}`} className="flex items-center gap-2 font-bold uppercase tracking-wider text-xs leading-none">
                        Read Story <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Shimmer sweep */}
                <div className="absolute -inset-x-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover:animate-shimmer" />

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-blue-500/0 group-hover:border-blue-500/30 transition-all duration-500 rounded-tr-[2.5rem] opacity-0 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-purple-500/0 group-hover:border-purple-500/30 transition-all duration-500 rounded-bl-[2.5rem] opacity-0 group-hover:opacity-100" />
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
