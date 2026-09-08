'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import BrandLogo from '@/components/brand-logo'
import ThemeToggle from '@/components/theme-toggle'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

export default function Navigation() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 flex justify-center ${
        scrolled ? 'pt-4' : 'pt-6'
      }`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'mx-4 w-[calc(100%-2rem)] max-w-5xl rounded-full border border-slate-200/60 bg-white/80 px-6 py-3 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60 dark:shadow-[0_0_40px_-10px_rgba(37,99,235,0.2)]'
            : 'container-pro w-full gap-3 bg-transparent py-2'
        }`}
      >
        <BrandLogo />

        <div className="hidden items-center gap-1 md:flex">
          <div className="flex items-center gap-1 rounded-full border border-slate-200/50 bg-white/50 p-1 backdrop-blur-md dark:border-white/5 dark:bg-white/5">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                    active
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-500 px-6 font-semibold text-white shadow-glow hover:scale-105 transition-all duration-300">
            <Link href="/contact">Book Call</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="relative h-10 w-10 flex flex-col items-center justify-center rounded-xl border border-slate-300 bg-white dark:border-slate-800 dark:bg-slate-900 md:hidden overflow-hidden group"
        >
          <div className="flex flex-col gap-1.5 w-5">
            <motion.span 
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-full bg-slate-900 dark:bg-white rounded-full transition-transform" 
            />
            <motion.span 
              animate={menuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
              className="h-0.5 w-full bg-slate-900 dark:bg-white rounded-full transition-all" 
            />
            <motion.span 
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-full bg-slate-900 dark:bg-white rounded-full transition-transform" 
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at top right)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 -z-10 flex flex-col justify-center bg-white/95 backdrop-blur-3xl dark:bg-slate-950/95 md:hidden px-8 pt-20"
          >
            <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
              <div className="flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-3 text-4xl font-display font-bold tracking-tight transition-colors ${
                        pathname === item.href
                          ? 'text-blue-600 dark:text-blue-500'
                          : 'text-slate-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.1 + navItems.length * 0.1, duration: 0.5, ease: 'easeOut' }}
                className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium text-sm uppercase tracking-widest">Theme</span>
                  <ThemeToggle />
                </div>
                
                <Button asChild className="w-full rounded-full bg-blue-600 py-7 text-lg font-semibold text-white shadow-glow hover:bg-blue-500 active:scale-95 transition-all">
                  <Link href="/contact" onClick={() => setMenuOpen(false)}>Book a Call</Link>
                </Button>
              </motion.div>
            </div>
            
            {/* Background decorative element */}
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
