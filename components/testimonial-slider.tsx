'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

interface Testimonial {
  name: string
  company: string
  text: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sanket Maru',
    company: 'Full Stack Developer',
    text: 'Building high-performance digital solutions requires a deep understanding of both technology and user experience. AxarTech consistently delivers that balance, ensuring products are not just functional but also future-proof.',
    rating: 5,
    avatar: 'SM',
  },
  {
    name: 'Vigyat Representative',
    company: 'Vigyat AgroStore',
    text: 'The digital transformation of our agriculture marketplace has been a game-changer. The integrated knowledge-base and seamless product search have significantly improved our engagement with the farming community.',
    rating: 5,
    avatar: 'VA',
  },
  {
    name: 'JK Tissues Lead',
    company: 'JK Tissues Manufacturing',
    text: 'Our corporate display needed a professional and modern touch to match our market position. AxarTech delivered a premium showcase that perfectly communicates our brand values and product quality to our B2B partners.',
    rating: 5,
    avatar: 'JK',
  }
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    autoPlayRef.current = setInterval(() => {
      if (!isPaused) next()
    }, 5000)
  }, [isPaused, next])

  useEffect(() => {
    startAutoPlay()
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [startAutoPlay])

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-10 bg-dots-pattern" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-pro relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Client <span className="text-gradient-primary">Reviews</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" 
          />
        </motion.div>

        {/* Testimonial Card */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative p-10 md:p-16 rounded-[3rem] bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl shadow-3xl group overflow-hidden"
            >
              {/* Decorative Quote Icon Large */}
              <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none">
                <Quote size={240} className="text-blue-500" />
              </div>

              <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start text-center lg:text-left">
                {/* Avatar Section */}
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-[2rem] blur-2xl group-hover:bg-blue-500/30 transition-all duration-500" />
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl md:text-4xl font-bold shadow-2xl relative z-10 border border-white/10"
                  >
                    {testimonials[current].avatar}
                  </motion.div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-slate-900 rounded-xl border border-slate-700 flex items-center justify-center z-20">
                    <Star className="text-amber-400 fill-amber-400" size={18} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1">
                  <div className="flex gap-1 justify-center lg:justify-start mb-6">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} className="text-amber-400 fill-amber-400" size={24} />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl lg:text-3xl text-slate-100 mb-10 leading-relaxed font-medium italic">
                    "{testimonials[current].text}"
                  </blockquote>

                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                      <h4 className="text-2xl font-display font-bold text-white mb-1">{testimonials[current].name}</h4>
                      <p className="text-blue-400 font-semibold tracking-wide uppercase text-sm">{testimonials[current].company}</p>
                    </div>
                    
                    {/* Navigation Buttons inside card for mobile-friendly view */}
                    <div className="flex gap-3">
                      <button
                        onClick={prev}
                        className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-glow-sm"
                        aria-label="Previous"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={next}
                        className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-glow-sm"
                        aria-label="Next"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Shine effect */}
              <div className="absolute -inset-x-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] group-hover:animate-shimmer" />
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-12 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  index === current 
                    ? 'w-12 bg-gradient-to-r from-blue-500 to-purple-500 shadow-glow' 
                    : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
