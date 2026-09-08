'use client'

import { motion } from 'framer-motion'
import { Award, Clock, Heart, Sparkles, CheckCircle2, ChevronRight, Zap, Target } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'

const achievements = [
  { 
    icon: Award,
    number: '5+', 
    label: 'Projects Completed',
    desc: 'High-performance web applications and enterprise products delivered successfully.',
    delay: 0.1
  },
  { 
    icon: Clock,
    number: '3+', 
    label: 'Years Experience',
    desc: 'Deep industry experience designing and developing modern digital infrastructure.',
    delay: 0.2
  },
  { 
    icon: Heart,
    number: '100%', 
    label: 'Client Commitment',
    desc: 'Dedicated technical alignment, regular delivery check-ins, and continuous support.',
    delay: 0.3
  },
]

const values = [
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We combine design clarity and technical depth to solve real business challenges with modern solutions.',
  },
  {
    icon: Target,
    title: 'Execution',
    description: 'Structured sprint delivery with clear milestones, regular updates, and measurable outcomes.',
  },
  {
    icon: CheckCircle2,
    title: 'Collaboration',
    description: 'We act as an extension of your team, making communication transparent and feedback loops immediate.',
  },
  {
    icon: Sparkles,
    title: 'Quality First',
    description: 'Robust QA processes, scalable architecture, and clean, maintainable code are our standard.',
  },
]

export default function About() {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200 relative overflow-hidden">
      <Navigation />
      
      {/* Ambient background animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />
      </div>

      <main className="relative z-10 pt-32 pb-24">
        {/* Hero Section */}
        <section className="px-4 pb-16 text-center">
          <div className="container-pro">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-200 backdrop-blur-md shadow-glow-sm"
            >
              <div className="flex h-2 w-2 rounded-full bg-blue-400 animate-ping" />
              <span>Who We Are</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mb-6 max-w-4xl text-4xl font-display font-extrabold sm:text-6xl md:text-7xl leading-tight"
            >
              A Next-Gen Agency Focused on
              <span className="text-gradient-primary block mt-2">Technical Excellence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-300 font-light"
            >
              We build scalable digital products by combining visual design precision, modern web/mobile engineering, and conversion-focused architecture.
            </motion.p>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="px-4 pb-20">
          <div className="container-pro">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {achievements.map((a) => {
                const Icon = a.icon;
                return (
                  <motion.div
                    key={a.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: a.delay }}
                    viewport={{ once: true }}
                    className="group relative p-8 rounded-[2rem] bg-slate-900/40 backdrop-blur-2xl border border-slate-800/80 hover:border-blue-500/40 transition-all duration-500 shadow-2xl hover:shadow-glow-lg overflow-hidden card-magnetic"
                  >
                    {/* Glow background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Float particles */}
                    <div className="absolute top-8 right-8 w-2 h-2 bg-blue-400/40 rounded-full blur-[1px] group-hover:animate-float opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-14 h-14 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-blue-400/50 transition-all duration-500 shadow-lg">
                        <Icon className="text-blue-500 group-hover:text-blue-300 transition-colors" size={24} />
                      </div>
                      
                      <p className="mb-2 text-5xl font-display font-extrabold text-white group-hover:text-gradient-primary transition-all duration-300">
                        {a.number}
                      </p>
                      
                      <p className="mb-3 text-lg font-semibold text-slate-100">{a.label}</p>
                      <p className="text-sm text-slate-400 leading-relaxed font-light">{a.desc}</p>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-blue-500/0 group-hover:border-blue-500/30 transition-all duration-500 rounded-tr-[2rem] opacity-0 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-purple-500/0 group-hover:border-purple-500/30 transition-all duration-500 rounded-bl-[2rem] opacity-0 group-hover:opacity-100" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-4 pb-24">
          <div className="container-pro">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Our Culture</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Our Core Values</h2>
              <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full w-20" />
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <motion.article
                    key={v.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative p-8 rounded-3xl bg-slate-900/40 backdrop-blur-2xl border border-slate-800/80 hover:border-blue-500/30 hover:scale-[1.03] transition-all duration-500 shadow-xl overflow-hidden"
                  >
                    {/* Glass modern overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-center group-hover:border-blue-400/40 transition-colors">
                          <Icon className="text-blue-500 group-hover:text-blue-300 transition-colors" size={20} />
                        </div>
                        <motion.span 
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                          className="text-sm font-bold font-display text-slate-600 dark:text-slate-500 group-hover:text-blue-400/70 select-none cursor-default"
                        >
                          0{idx + 1}
                        </motion.span>
                      </div>

                      <h3 className="mb-3 text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {v.title}
                      </h3>
                      
                      <p className="text-sm text-slate-400 leading-relaxed font-light group-hover:text-slate-300 transition-colors">
                        {v.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
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
              {/* Shifting radial glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <h2 className="mb-4 text-3xl font-display font-extrabold md:text-5xl text-white">
                  Let&apos;s Build Something Extraordinary Together
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-slate-300 text-lg font-light leading-relaxed">
                  We stand ready to guide you from initial project definition to deployment and continuous growth.
                </p>
                <Button asChild size="lg" className="rounded-full bg-blue-600 px-10 text-white font-bold hover:bg-blue-500 shadow-glow transition-all duration-300 hover:scale-105 active:scale-95 leading-none group/btn">
                  <Link href="/contact" className="inline-flex items-center gap-3">
                    Start Your Project
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
