'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp, MessageCircle, PhoneCall, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function FloatingActionBar() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100
        setScrollProgress(currentProgress)
      }
      setIsVisible(window.scrollY > 280)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Radius for circle progress
  const radius = 18
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 p-1.5 rounded-full bg-slate-950/80 border border-slate-800/80 backdrop-blur-xl shadow-2xl shadow-blue-950/40"
        >
          {/* Quick Chat / Consult Button */}
          <Link
            href="/contact"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-glow-sm transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            <Sparkles size={14} className="text-blue-200 animate-pulse" />
            <span className="hidden sm:inline">Start Project</span>
            <span className="sm:hidden">Talk</span>
          </Link>

          {/* Scroll to Top with Circular Progress Indicator */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="relative w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95 group"
          >
            {/* SVG Progress Circle */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5">
              <circle
                cx="19"
                cy="19"
                r={radius}
                className="text-slate-800 stroke-current"
                strokeWidth="2.5"
                fill="transparent"
              />
              <circle
                cx="19"
                cy="19"
                r={radius}
                className="text-blue-500 stroke-current transition-all duration-150"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            <ArrowUp size={15} className="relative z-10 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
