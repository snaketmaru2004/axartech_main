'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Palette, Code2, ShieldCheck, Rocket, HeartHandshake } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'We dive deep into your business goals, target audience, and technical requirements to create a comprehensive project roadmap.',
    icon: Lightbulb,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description: 'Our design team creates stunning wireframes and interactive prototypes that bring your vision to life before development begins.',
    icon: Palette,
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Using agile methodologies, we build your solution with clean, scalable code and regular progress updates.',
    icon: Code2,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    number: '04',
    title: 'Quality Assurance',
    description: 'Rigorous testing including performance, security, and user experience checks ensure a flawless final product.',
    icon: ShieldCheck,
    color: 'from-orange-500 to-amber-500',
  },
  {
    number: '05',
    title: 'Launch & Deployment',
    description: 'Seamless deployment to production with comprehensive training and documentation for your team.',
    icon: Rocket,
    color: 'from-blue-600 to-indigo-500',
  },
  {
    number: '06',
    title: 'Support & Growth',
    description: 'Ongoing maintenance, performance monitoring, and continuous improvements to keep your solution ahead of the curve.',
    icon: HeartHandshake,
    color: 'from-rose-500 to-pink-500',
  },
]

export default function ProcessTimeline() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="relative h-full p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-500 overflow-hidden">
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />
              
              {/* Step number watermark */}
              <div className="absolute -top-4 -right-4 text-[8rem] font-black text-white/[0.02] leading-none pointer-events-none select-none group-hover:text-white/[0.04] transition-colors duration-500">
                {step.number}
              </div>

              {/* Icon with gradient ring */}
              <div className="relative mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-[1px]`}>
                  <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center group-hover:bg-slate-800 transition-colors duration-300">
                    <step.icon className="text-white" size={28} />
                  </div>
                </div>
                
                {/* Connecting dot on top */}
                <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-br ${step.color} border-2 border-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100`} />
              </div>

              {/* Step label */}
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                  Step {step.number}
                </span>
                <div className={`h-px flex-1 bg-gradient-to-r ${step.color} opacity-20`} />
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-blue-100 transition-colors">
                {step.title}
              </h3>

              <p className="text-slate-400 leading-relaxed text-[0.95rem] group-hover:text-slate-300 transition-colors">
                {step.description}
              </p>

              {/* Bottom progress bar */}
              <div className="mt-8 h-1 rounded-full bg-slate-800 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1.2, delay: index * 0.15 }}
                  className={`h-full rounded-full bg-gradient-to-r ${step.color}`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
