'use client'

import { motion } from 'framer-motion'

const techs = [
  { name: 'Next.js', icon: '⚡', color: 'from-slate-400 to-white' },
  { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
  { name: 'Node.js', icon: '🟢', color: 'from-emerald-400 to-green-500' },
  { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-blue-500' },
  { name: 'TypeScript', icon: 'TS', color: 'from-blue-400 to-blue-600' },
  { name: 'Tailwind', icon: '🌊', color: 'from-cyan-400 to-teal-500' },
  { name: 'MongoDB', icon: '🍃', color: 'from-emerald-400 to-green-600' },
  { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-400 to-indigo-500' },
]

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
      {techs.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.06 }}
          whileHover={{ y: -12, scale: 1.05 }}
          viewport={{ once: true }}
          className="group flex flex-col items-center"
        >
          <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4">
            {/* Glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} blur-xl rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
            
            <div className="relative w-full h-full rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-slate-700 transition-all duration-300 shadow-xl overflow-hidden">
              {/* Subtle gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />
              
              <span className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                {tech.icon}
              </span>
            </div>
          </div>
          <span className="text-slate-500 font-semibold text-sm group-hover:text-white transition-colors duration-300">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
