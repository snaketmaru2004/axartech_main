'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const latestPosts = [
  {
    title: "Revolutionizing Agriculture: How Vigyat AgroStore Scaled 300%",
    excerpt: "Discover the journey behind Vigyat AgroStore and how digital transformation is changing the landscape for farmers across India.",
    date: "April 20, 2026",
    image: "/projects/vigyat.png",
    slug: "vigyat-case-study"
  },
  {
    title: "Mastering Next.js 15: What Developers Need to Know",
    excerpt: "Insights from the development of high-performance portfolios and enterprise-grade web applications.",
    date: "April 15, 2026",
    image: "/projects/sanket-portfolio.png",
    slug: "mastering-nextjs-15"
  }
]

export default function BlogFeed() {
  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden">
      <div className="container-pro relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Latest News</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Insights & <span className="text-gradient-primary">Updates</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Stay tuned with our latest case studies, technology trends, and industry insights.
            </p>
          </motion.div>

          <Button variant="outline" asChild className="border-slate-700 bg-white/5 text-white hover:bg-white/10 rounded-full px-8 py-6">
            <Link href="/blog" className="flex items-center gap-2">
              All Articles <ArrowRight size={18} />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {latestPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="relative w-full md:w-48 h-48 md:h-auto rounded-2xl overflow-hidden shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 text-slate-500 text-xs mb-3">
                  <Calendar size={14} className="text-blue-500" />
                  {post.date}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-blue-500 text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all">
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
