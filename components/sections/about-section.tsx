'use client'

import { motion } from 'framer-motion'
import { Target, Eye, ShieldCheck, Zap, Globe, Users, TrendingUp, Award } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To help ambitious businesses launch, scale, and optimize digital products with measurable outcomes.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To become the most reliable product engineering partner for startups and growth-stage teams worldwide.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: ShieldCheck,
    title: 'Why AxarTech',
    description: 'We combine strategic thinking, robust engineering, and clear communication from kickoff to launch.',
    gradient: 'from-emerald-500 to-teal-500',
  },
]

const points = [
  { icon: Globe, text: 'Global Client Reach', value: '10+' },
  { icon: Users, text: 'Cross-Functional Team', value: '15+' },
  { icon: Zap, text: 'Fast Delivery Cycles', value: '2x' },
  { icon: ShieldCheck, text: 'Security-First Builds', value: '100%' },
]

const achievements = [
  { icon: TrendingUp, label: 'Revenue Growth', value: '340%' },
  { icon: Award, label: 'Client Retention', value: '98%' },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-slate-950 py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-pro relative z-10">
        <div className="mb-24 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 block text-sm font-semibold uppercase tracking-wider text-blue-500">About AxarTech</span>
            <h2 className="mb-8 text-3xl font-display font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              Product-Led Technology
              <span className="block text-gradient-primary mt-2">Built for Real Growth</span>
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-slate-300 max-w-xl">
              AxarTech is a modern software studio focused on web platforms, mobile apps, and custom systems that solve real business bottlenecks.
              We deliver fast, reliable, and maintainable products your team can scale with confidence.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors shrink-0">
                    <point.icon size={22} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{point.value}</p>
                    <p className="text-sm text-slate-400 font-medium">{point.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="group relative aspect-auto lg:aspect-square overflow-hidden rounded-[3rem] border border-slate-700/50 bg-gradient-to-br from-blue-600/20 via-slate-900 to-cyan-500/10 p-8 sm:p-10">
              <div className="absolute inset-0 bg-grid-pattern-sm opacity-20" />
              <div className="absolute -right-10 top-10 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="absolute -left-14 bottom-8 h-52 w-52 rounded-full bg-cyan-400/15 blur-3xl" />

              {/* Shine effect */}
              <div className="absolute -inset-x-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] group-hover:animate-shimmer" />

              <div className="relative z-10 flex flex-col h-full justify-center">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-4 text-[4.5rem] sm:text-[7rem] md:text-[9rem] font-display font-black leading-none text-white/[0.04]"
                >
                  2026
                </motion.div>
                <div className="text-2xl font-display font-bold text-white mb-3">Built with Focus</div>
                <p className="max-w-xs text-slate-300 leading-relaxed text-[0.95rem]">
                  Every project is planned with clear milestones, business goals, and performance KPIs.
                </p>
                
                {/* Achievement badges */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  {achievements.map((a, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-950/50 border border-slate-700/50 backdrop-blur-sm"
                    >
                      <a.icon size={18} className="text-blue-400" />
                      <div>
                        <p className="text-lg font-bold text-white leading-tight">{a.value}</p>
                        <p className="text-xs text-slate-500">{a.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              </div>
              
              {/* Decorative ring */}
              <div className="absolute -z-10 -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-full h-full border border-blue-500/10 rounded-[3rem]" />
            </div>

            {/* Floating card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 sm:mt-0 sm:absolute sm:-bottom-8 sm:-left-8 rounded-2xl border border-slate-700 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl z-20"
            >
              <p className="mb-1 text-4xl font-bold text-white">5+</p>
              <p className="text-sm font-medium text-slate-400">Successful Launches</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Mission / Vision / Why Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-slate-700 overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />
              
              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} p-[1px]`}>
                <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                  <feature.icon size={26} className="text-white" />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-display font-bold text-white">{feature.title}</h3>
              <p className="leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">{feature.description}</p>
              
              {/* Animated bottom bar */}
              <div className="mt-6 h-0.5 rounded-full bg-slate-800 overflow-hidden">
                <div className={`h-full w-0 group-hover:w-full bg-gradient-to-r ${feature.gradient} transition-all duration-700 rounded-full`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
