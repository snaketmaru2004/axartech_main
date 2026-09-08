'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { LayoutGrid, Globe, Smartphone, ChevronRight } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'

const categories = ['All', 'Web', 'Mobile'] as const

const projectsList = [
  {
    no: '01',
    title: 'Vigyat AgroStore',
    type: 'Web',
    category: 'E-Commerce Platform',
    impact: '100k+ Active Farmers • +140% Conversions',
    desc: 'A comprehensive digital marketplace for agricultural supplies with integrated knowledge-sharing for farmers. Scaled to high user traffic with optimized conversion paths.',
    image: '/projects/vigyat.png',
    tags: ['Next.js', 'React', 'MongoDB', 'Node.js', 'TailwindCSS'],
    delay: 0.1
  },
  {
    no: '02',
    title: 'JK Tissues',
    type: 'Web',
    category: 'Corporate B2B Showcase',
    impact: 'Enterprise Inquiries +210% • Sub-Second Speed',
    desc: 'Premium product catalog and brand showcase platform for a leading tissue manufacturer, focusing on enterprise client onboarding and B2B ordering requests.',
    image: '/projects/jk-tissues.png',
    tags: ['React', 'Vite', 'Framer Motion', 'TailwindCSS', 'SEO Engine'],
    delay: 0.2
  },
  {
    no: '03',
    title: 'Developer Portfolio',
    type: 'Web',
    category: 'Personal Branding & UX',
    impact: 'Fluid 60FPS Three.js • Modern Narrative',
    desc: 'Cutting-edge portfolio site with heavy interactive elements, fluid spring transitions, and modern structural visual storytelling for technical showcases.',
    image: '/projects/sanket-portfolio.png',
    tags: ['Next.js', 'React', 'Three.js', 'TailwindCSS', 'Aesthetics'],
    delay: 0.3
  },
  {
    no: '04',
    title: 'SwiftPay Mobile App',
    type: 'Mobile',
    category: 'FinTech Banking',
    impact: 'Instant Settlement API • Biometric Auth',
    desc: 'A high-performance iOS and Android digital banking companion featuring instant settlements, biometric authentication, and interactive account analytics charts.',
    image: '/projects/logo.svg',
    tags: ['React Native', 'Expo', 'Reanimated', 'Redux Toolkit', 'FastAPI'],
    delay: 0.4
  },
  {
    no: '05',
    title: 'ActiveTrack Fitness',
    type: 'Mobile',
    category: 'Health & IoT Systems',
    impact: 'Real-Time BLE Sync • Low Battery Footprint',
    desc: 'Cross-platform mobile application interfacing with Bluetooth wearable device sensors to calculate realtime user metrics, stats, and calorie burning logs.',
    image: '/projects/logo-new.svg',
    tags: ['React Native', 'Expo', 'IoT Ble', 'Zustand', 'Node.js'],
    delay: 0.5
  }
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Web' | 'Mobile'>('All')

  const filteredProjects = projectsList.filter(
    (p) => activeFilter === 'All' || p.type === activeFilter
  )

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200 relative overflow-hidden">
      <Navigation />
      
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] right-[-10%] w-[550px] h-[550px] bg-purple-600/5 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />
      </div>

      <main className="relative z-10 pt-32 pb-24">
        {/* Header */}
        <section className="px-4 pb-12 text-center">
          <div className="container-pro">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-200 backdrop-blur-md shadow-glow-sm"
            >
              <div className="flex h-2 w-2 rounded-full bg-blue-400 animate-ping" />
              <span>Our Work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mb-6 max-w-4xl text-4xl font-display font-extrabold sm:text-6xl md:text-7xl leading-tight"
            >
              Showcasing Real
              <span className="text-gradient-primary block mt-2">Product Outcomes</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-300 font-light"
            >
              A selection of web, mobile, and B2B products designed and developed to high technical standards.
            </motion.p>
          </div>
        </section>

        {/* Filter Navigation */}
        <section className="px-4 pb-12">
          <div className="container-pro flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2 p-1.5 rounded-full border border-slate-800 bg-slate-900/60 backdrop-blur-md shadow-xl"
            >
              {categories.map((cat) => {
                const active = activeFilter === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`relative rounded-full px-7 py-2.5 text-sm font-bold transition-all duration-300 ${
                      active ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="filter-indicator"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-glow"
                        transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {cat === 'All' && <LayoutGrid size={16} />}
                      {cat === 'Web' && <Globe size={16} />}
                      {cat === 'Mobile' && <Smartphone size={16} />}
                      {cat}
                    </span>
                  </button>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 pb-20">
          <div className="container-pro">
            <motion.div 
              layout 
              className="grid gap-8 md:grid-cols-2"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((p) => (
                  <motion.article
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    key={p.title}
                    className="group relative p-8 rounded-[2.5rem] bg-slate-900/40 backdrop-blur-2xl border border-slate-800/80 hover:border-blue-500/40 transition-all duration-500 flex flex-col shadow-2xl hover:shadow-glow-lg overflow-hidden card-magnetic"
                  >
                    {/* Hover Glow overlays */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Floating particle */}
                    <div className="absolute top-10 right-10 w-2.5 h-2.5 bg-blue-400/45 rounded-full blur-[1px] group-hover:animate-float opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Meta information */}
                      <div className="flex justify-between items-center mb-6">
                        <span className="px-3.5 py-1.5 rounded-full bg-slate-950 border border-slate-800 text-xs font-bold text-slate-400 uppercase tracking-wider">
                          {p.category}
                        </span>
                        <span className="text-sm font-bold font-display text-slate-600 dark:text-slate-500">
                          {p.no}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl font-display font-extrabold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                        {p.title}
                      </h3>

                      {/* Impact Highlight */}
                      {p.impact && (
                        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold w-fit">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          <span>{p.impact}</span>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-slate-400 mb-8 leading-relaxed font-light group-hover:text-slate-300 transition-colors">
                        {p.desc}
                      </p>

                      {/* Tags list */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {p.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-3 py-1 rounded-lg border border-slate-800/80 bg-slate-950/40 text-xs font-semibold text-slate-300 group-hover:border-blue-500/20 group-hover:text-blue-300 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Shimmer sweep */}
                    <div className="absolute -inset-x-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover:animate-shimmer" />

                    {/* Card border lines */}
                    <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-blue-500/0 group-hover:border-blue-500/30 transition-all duration-500 rounded-tr-[2.5rem] opacity-0 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-purple-500/0 group-hover:border-purple-500/30 transition-all duration-500 rounded-bl-[2.5rem] opacity-0 group-hover:opacity-100" />
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="px-4">
          <div className="container-pro">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] border border-blue-500/20 bg-gradient-to-br from-blue-950/30 via-slate-900/40 to-purple-950/20 p-12 md:p-16 text-center shadow-2xl overflow-hidden group"
            >
              {/* Radial glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <h2 className="mb-4 text-3xl font-display font-extrabold md:text-5xl text-white">
                  Want results like these?
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-slate-300 text-lg font-light leading-relaxed">
                  Let&apos;s collaborate to conceptualize your digital interface and bring your development projects to fruition.
                </p>
                <Button asChild size="lg" className="rounded-full bg-blue-600 px-10 text-white font-bold hover:bg-blue-500 shadow-glow transition-all duration-300 hover:scale-105 active:scale-95 leading-none group/btn">
                  <Link href="/contact" className="inline-flex items-center gap-3">
                    Start Dialogue
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
