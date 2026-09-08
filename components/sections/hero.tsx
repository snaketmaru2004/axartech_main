'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowRight, CheckCircle2, Rocket, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ParticleBackground = dynamic(() => import('@/components/particle-background'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-slate-950" />,
})

const trustPoints = [
  'Fast launch cycles',
  'Scalable architecture',
  'Transparent communication',
]

const quickStats = [
  { value: '50+', label: 'Delivered Systems' },
  { value: '99.8%', label: 'Uptime & Reliability' },
  { value: '< 0.5s', label: 'Average Load Latency' },
  { value: '100%', label: 'IP & Code Ownership' },
]

export default function Hero({ mounted }: { mounted: boolean }) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-4 pt-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-16 top-20 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[130px] animate-pulse-glow" />
        <div className="absolute -right-20 bottom-[-40px] h-[520px] w-[520px] rounded-full bg-purple-500/15 blur-[130px] animate-pulse-glow" />
        <div className="absolute inset-0 bg-grid-pattern-sm opacity-10" />
        
        {/* Floating Geometric Shapes */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] w-24 h-24 border border-blue-500/20 rounded-2xl backdrop-blur-[1px] hidden lg:block" 
        />
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[10%] w-32 h-32 border border-purple-500/20 rounded-full backdrop-blur-[1px] hidden lg:block" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[30%] w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl" 
        />
      </div>

      <ParticleBackground />

      <div className="container-pro relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={mounted ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-5 py-2 text-xs sm:text-sm font-semibold text-emerald-300 backdrop-blur-md shadow-glow-sm"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <span>Available for New Projects</span>
              <span className="hidden sm:inline text-emerald-500/60">•</span>
              <span className="hidden sm:inline text-slate-300">Fast 2-Week Sprints</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-8 text-4xl font-display font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1]"
            >
              We Build Digital Solutions
              <span className="relative block text-gradient-primary py-2">
                That Define The Future
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.2, delay: 1 }}
                  className="absolute bottom-0 left-0 h-[4px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mb-10 max-w-2xl text-xl leading-[1.6] text-slate-300 md:text-2xl font-light"
            >
              AxarTech is a premium digital agency that crafts high-performance web experiences and intelligent automation for scale-stage companies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mb-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
            >
              <Button
                size="lg"
                asChild
                className="h-14 rounded-full bg-blue-600 px-10 text-lg font-bold text-white shadow-glow hover:scale-[1.05] hover:bg-blue-500 transition-all duration-300 shimmer"
              >
                <Link href="/contact" className="inline-flex items-center gap-3">
                  Start Building
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-14 rounded-full border-slate-700 bg-slate-900/40 px-10 text-lg font-bold text-slate-100 backdrop-blur-xl hover:bg-slate-800 transition-all duration-300"
              >
                <Link href="/portfolio">Our Portfolio</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="inline-flex items-center gap-3 text-sm font-medium text-slate-400 hover:text-blue-300 transition-colors cursor-default"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  {point}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={mounted ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="rounded-[3rem] border border-slate-700/50 bg-slate-900/40 p-10 shadow-3xl backdrop-blur-3xl relative group overflow-hidden">
              {/* Shine effect on card */}
              <div className="absolute -inset-x-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] group-hover:animate-shimmer" />
              
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-1">Company Vitals</h3>
                  <p className="text-sm text-slate-500 font-medium">Real-time performance metrics</p>
                </div>
                <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                  <ShieldCheck className="h-6 w-6 text-blue-400" />
                </div>
              </div>

              <div className="space-y-6">
                {quickStats.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={mounted ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className="flex items-center justify-between rounded-[1.5rem] border border-slate-700/50 bg-slate-950/40 px-6 py-4 hover:border-blue-500/30 transition-colors group/stat"
                  >
                    <span className="text-base text-slate-400 group-hover/stat:text-slate-300 transition-colors font-medium">{stat.label}</span>
                    <span className="text-3xl font-bold text-white tracking-tight">{stat.value}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 p-5 text-sm leading-relaxed text-blue-100 font-medium relative overflow-hidden">
                <div className="relative z-10 flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  Validated by industry leaders for predictable delivery and engineering excellence.
                </div>
              </div>
            </div>
            
            {/* Decorative elements behind card */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border border-blue-500/20 rounded-[3rem]" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}

