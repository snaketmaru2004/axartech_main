'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import BrandLogo from '@/components/brand-logo'
import { Mail, Phone, Instagram, Linkedin, Github, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Web Development', href: '/services' },
    { label: 'Mobile Applications', href: '/services' },
    { label: 'UI/UX Design', href: '/services' },
    { label: 'AI & Automation', href: '/services' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ],
}

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/axartech.it', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-slate-800 bg-slate-950 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container-pro relative z-10 py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <BrandLogo />
            <p className="mt-6 max-w-md text-slate-400 leading-relaxed text-[0.95rem]">
              AxarTech builds professional websites, apps, and software systems designed to improve growth, operations, and digital presence.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a href="mailto:axartech.it@gmail.com" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                  <Mail size={18} className="text-blue-500" />
                </div>
                <span className="text-sm font-medium">axartech.it@gmail.com</span>
              </a>
              <a href="tel:+919099739708" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                  <Phone size={18} className="text-emerald-500" />
                </div>
                <span className="text-sm font-medium">+91 90997 39708</span>
              </a>
            </div>

            {/* Social links */}
            <div className="mt-8 flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl border border-slate-800 flex items-center justify-center text-slate-400 hover:border-blue-500/50 hover:text-white hover:bg-blue-500/10 transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-7 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-white">{group}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-[0.95rem]">
                        {link.label}
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter / Quick CTA */}
            <div>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-white">Start a Project</h3>
              <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                Ready to build something great? Let's talk about your next project.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 transition-all hover:scale-105 active:scale-95"
              >
                Get in Touch
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/60 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-slate-500">
            © {year} AxarTech. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <a href="https://www.instagram.com/axartech.it?igsh=bWR6aWRqbXVhcW9j" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
