'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Globe, Smartphone, Palette, Cpu, TrendingUp, ShieldCheck, ChevronRight, ArrowRight } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'

const servicesList = [
  { 
    no: '01', 
    title: 'Website Development', 
    icon: Globe,
    points: ['Business websites & Portals', 'E-commerce systems', 'Admin panels & Dashboards'],
    desc: 'High-performance, secure web applications engineered with modern stacks for ultimate speed and scalability.',
    delay: 0.1
  },
  { 
    no: '02', 
    title: 'Mobile Applications', 
    icon: Smartphone,
    points: ['Cross-platform apps (React Native/Expo)', 'Mobile performance optimization', 'App store deployment support'],
    desc: 'Bespoke iOS and Android mobile solutions tailored to match client requirements and provide fluid user interactions.',
    delay: 0.2
  },
  { 
    no: '03', 
    title: 'UI/UX Design', 
    icon: Palette,
    points: ['Wireframing & Prototyping', 'Modern design systems', 'Usability refinement & Auditing'],
    desc: 'Intuitive design architecture created to enhance user engagement, retention, and brand fidelity.',
    delay: 0.3
  },
  { 
    no: '04', 
    title: 'Workflow Automation', 
    icon: Cpu,
    points: ['Custom business logic workflows', 'API third-party integrations', 'Operational task automation'],
    desc: 'Tailored AI integrations and business process automations designed to eliminate manual bottlenecks.',
    delay: 0.4
  },
  { 
    no: '05', 
    title: 'SEO Solutions', 
    icon: TrendingUp,
    points: ['On-page & Technical SEO audits', 'Content keyword strategy', 'Search presence analytics reporting'],
    desc: 'Growth-focused organic search marketing designed to rank key pages and drive inbound conversions.',
    delay: 0.5
  },
  { 
    no: '06', 
    title: 'Support & Maintenance', 
    icon: ShieldCheck,
    points: ['Scheduled maintenance audits', 'Critical security updates', 'Continuous design & tech tweaks'],
    desc: 'Post-launch operations support ensuring that your digital platforms remain online, secure, and updated 24/7.',
    delay: 0.6
  },
]

function ServicePageCard({ service }: { service: typeof servicesList[0] }) {
  const Icon = service.icon
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const box = card.getBoundingClientRect()
    const x = e.clientX - box.left
    const y = e.clientY - box.top
    const centerX = box.width / 2
    const centerY = box.height / 2
    const rotateX = (y - centerY) / 12
    const rotateY = (centerX - x) / 12
    setRotate({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: service.delay }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        rotateX: rotate.x,
        rotateY: rotate.y,
        transition: 'transform 0.1s ease-out'
      }}
      className="group relative p-8 rounded-[2rem] bg-slate-900/40 backdrop-blur-2xl border border-slate-800/80 hover:border-blue-500/40 transition-all duration-500 flex flex-col shadow-2xl hover:shadow-glow-lg overflow-hidden card-magnetic"
    >
      {/* Glow Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Floating particles */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-blue-400/40 rounded-full blur-[1px] group-hover:animate-float opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-20 left-10 w-3 h-3 bg-purple-400/30 rounded-full blur-[1px] group-hover:animate-float animation-delay-2s opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header containing no. and icon */}
        <div className="flex justify-between items-start mb-6">
          <div className="w-16 h-16 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-center group-hover:animate-morph group-hover:border-blue-400/50 transition-all duration-500 shadow-xl relative z-10 backdrop-blur-sm">
            <Icon className="text-blue-500 group-hover:text-blue-300 transition-colors duration-500 group-hover:scale-110" size={28} />
          </div>
          <span className="text-sm font-bold font-display text-slate-600 dark:text-slate-500 group-hover:text-blue-400/70 select-none">
            {service.no}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 mb-6 leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-300">
          {service.desc}
        </p>

        {/* List points */}
        <ul className="space-y-2.5 mb-8 mt-auto">
          {service.points.map((point) => (
            <li key={point} className="flex items-center gap-2.5 text-sm text-slate-300 group-hover:text-slate-200 transition-colors">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-glow" />
              {point}
            </li>
          ))}
        </ul>

        {/* CTA link */}
        <div className="pt-4 border-t border-slate-800/80 group-hover:border-blue-500/20 transition-colors duration-500">
          <div className="flex items-center gap-2 text-blue-500 font-bold text-xs uppercase tracking-[0.2em] group/btn">
            <span className="relative overflow-hidden py-1">
              Explore More
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-500" />
            </span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Decorative Sweep */}
      <div className="absolute -inset-x-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover:animate-shimmer" />

      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-blue-500/0 group-hover:border-blue-500/30 transition-all duration-500 rounded-tr-[2rem] opacity-0 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-purple-500/0 group-hover:border-purple-500/30 transition-all duration-500 rounded-bl-[2rem] opacity-0 group-hover:opacity-100" />
    </motion.article>
  )
}

export default function Services() {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200 relative overflow-hidden">
      <Navigation />
      
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[15%] left-[-5%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-[15%] right-[-5%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />
      </div>

      <main className="relative z-10 pt-32 pb-24">
        {/* Header */}
        <section className="px-4 pb-16 text-center">
          <div className="container-pro">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-200 backdrop-blur-md shadow-glow-sm"
            >
              <div className="flex h-2 w-2 rounded-full bg-blue-400 animate-ping" />
              <span>What We Offer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mb-6 max-w-4xl text-4xl font-display font-extrabold sm:text-6xl md:text-7xl leading-tight"
            >
              Specialized Solutions for a
              <span className="text-gradient-primary block mt-2">Digital-First World</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-300 font-light"
            >
              We blend design intuition and engineering depth to construct scalable software assets that deliver measurable results.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 pb-20">
          <div className="container-pro">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {servicesList.map((service) => (
                <ServicePageCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
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
                  Have a specific vision in mind?
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-slate-300 text-lg font-light leading-relaxed">
                  Share your technical parameters or product goals, and we will formulate a precise roadmap and delivery execution strategy.
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
