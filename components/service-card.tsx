'use client'

import { motion } from 'framer-motion'
import { ArrowRight, LucideIcon } from 'lucide-react'
import { useState } from 'react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay: number
}

export default function ServiceCard({ icon: Icon, title, description, delay }: ServiceCardProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const box = card.getBoundingClientRect()
    const x = e.clientX - box.left
    const y = e.clientY - box.top
    const centerX = box.width / 2
    const centerY = box.height / 2
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    setRotate({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-50px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        rotateX: rotate.x,
        rotateY: rotate.y,
        transition: 'transform 0.1s ease-out'
      }}
      className="group relative p-10 rounded-[2.5rem] bg-slate-900/40 backdrop-blur-2xl border border-slate-800/80 hover:border-blue-500/40 transition-all duration-500 h-full flex flex-col shadow-2xl hover:shadow-glow-lg overflow-hidden card-magnetic"
    >
      {/* Premium Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Floating Particles (CSS only for performance) */}
      <div className="absolute top-12 right-12 w-2 h-2 bg-blue-400/40 rounded-full blur-[1px] group-hover:animate-float opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-24 left-12 w-3 h-3 bg-purple-400/30 rounded-full blur-[1px] group-hover:animate-float animation-delay-2s opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-emerald-400/30 rounded-full blur-[1px] group-hover:animate-float animation-delay-1s opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Morphing Icon Container */}
        <div className="w-20 h-20 mb-8 relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="w-full h-full rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-center group-hover:animate-morph group-hover:border-blue-400/50 transition-all duration-500 shadow-xl relative z-10 backdrop-blur-sm">
            <Icon className="text-blue-500 group-hover:text-blue-300 transition-colors duration-500 group-hover:scale-110" size={36} />
          </div>
        </div>

        {/* Title with Gradient Effect */}
        <h3 className="text-3xl font-display font-bold text-white mb-5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 mb-10 leading-relaxed flex-grow text-[1.1rem] font-light group-hover:text-slate-300 transition-colors duration-300">
          {description}
        </p>

        {/* Action Button - Premium Style */}
        <div className="mt-auto">
          <div className="flex items-center justify-start gap-3 text-blue-500 font-bold group-hover:gap-5 transition-all duration-500 cursor-pointer text-sm uppercase tracking-[0.2em] group/btn">
            <span className="relative overflow-hidden py-1">
              Explore More
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-500" />
            </span>
            <div className="p-3 rounded-full border border-blue-500/20 bg-blue-500/5 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-glow group-hover:scale-110">
              <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shine Effect */}
      <div className="absolute -inset-x-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover:animate-shimmer" />

      {/* Animated Corner Accents */}
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue-500/0 group-hover:border-blue-500/40 transition-all duration-700 rounded-tr-[2.5rem] opacity-0 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-purple-500/0 group-hover:border-purple-500/40 transition-all duration-700 rounded-bl-[2.5rem] opacity-0 group-hover:opacity-100" />
    </motion.div>
  )
}
