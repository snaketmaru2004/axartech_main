'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Mail, Phone, Instagram, MapPin, CheckCircle2, Send, ChevronRight } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const contactDetails = [
  {
    icon: Mail,
    label: 'Email Support',
    value: 'axartech.it@gmail.com',
    href: 'mailto:axartech.it@gmail.com',
    desc: 'Get in touch for project inquiries, technical specs, and partnerships.'
  },
  {
    icon: Phone,
    label: 'Direct Phone',
    value: '+91 90997 39708',
    href: 'tel:+919099739708',
    desc: 'Speak with our development lead for rapid consultations and strategy.'
  },
  {
    icon: Instagram,
    label: 'Instagram Direct',
    value: '@axartech.it',
    href: 'https://instagram.com/axartech.it',
    desc: 'Follow our design showcase, visual tech reels, and daily updates.'
  }
]

const partnerReasons = [
  'Transparent, timezone-aligned communication',
  'Iterative, sprint-based predictably scheduled updates',
  'Production-grade secure engineering standards',
  'Post-deployment operational care and support'
]

function ContactFormInner() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const plan = searchParams.get('plan')
    const timeline = searchParams.get('timeline')
    const est = searchParams.get('est')
    
    if (plan || timeline || est) {
      const generatedMsg = `Hi AxarTech team, I'd like to request a formal proposal for "${plan || 'Custom Solution'}". Estimated timeline: ${timeline || 'N/A'}, Target scope: ${est || 'N/A'}. Let's discuss details.`
      setFormData(prev => ({
        ...prev,
        service: plan?.includes('Mobile') ? 'Mobile App Development' : plan?.includes('AI') ? 'Automation' : 'Website Development',
        message: generatedMsg
      }))
    }
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setSubmitted(false)
    }, 2500)
  }

  const services = ['Website Development', 'Mobile App Development', 'UI/UX Design', 'Automation', 'SEO Solutions']

  return (
    <div className="rounded-[2.5rem] border border-slate-800/80 bg-slate-900/40 backdrop-blur-2xl p-8 md:p-10 shadow-2xl hover:border-blue-500/20 transition-colors">
      <h2 className="text-3xl font-display font-bold text-white mb-6">Project Inquiry</h2>

      {submitted && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-300 flex items-center gap-3 backdrop-blur-md shadow-lg"
        >
          <CheckCircle2 className="text-emerald-400 shrink-0" size={20} />
          <span>Message sent successfully. We will analyze your inputs and reply shortly.</span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="h-12 border-slate-800 bg-slate-950/60 text-white rounded-xl focus:border-blue-500 focus-visible:ring-blue-500/40" 
          />
          <Input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="h-12 border-slate-800 bg-slate-950/60 text-white rounded-xl focus:border-blue-500 focus-visible:ring-blue-500/40" 
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Input 
            type="tel" 
            name="phone" 
            placeholder="Your Phone (Optional)" 
            value={formData.phone} 
            onChange={handleChange} 
            className="h-12 border-slate-800 bg-slate-950/60 text-white rounded-xl focus:border-blue-500 focus-visible:ring-blue-500/40" 
          />
          <div className="relative">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="h-12 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 text-sm text-slate-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/40 transition-all cursor-pointer appearance-none"
            >
              <option value="" className="bg-slate-950 text-slate-400">Select Service Type</option>
              {services.map((service) => (
                <option key={service} value={service} className="bg-slate-950 text-white">{service}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
              <ChevronRight className="rotate-90" size={16} />
            </div>
          </div>
        </div>

        <Textarea
          name="message"
          placeholder="Tell us about your project goals or integration request..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="resize-none border-slate-800 bg-slate-950/60 text-white rounded-xl focus:border-blue-500 focus-visible:ring-blue-500/40"
        />

        <Button type="submit" className="h-13 w-full rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-glow hover:scale-[1.01] active:scale-95 text-base inline-flex items-center gap-3">
          Send Inquiry Message
          <Send size={16} />
        </Button>
      </form>
    </div>
  )
}

export default function Contact() {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200 relative overflow-hidden">
      <Navigation />
      
      {/* Background ambient elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[15%] right-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-[30%] left-[-10%] w-[550px] h-[550px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />
      </div>

      <main className="relative z-10 pt-32 pb-24">
        {/* Header */}
        <section className="px-4 pb-12 text-center">
          <div className="container-pro">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-200 backdrop-blur-md shadow-glow-sm"
            >
              <div className="flex h-2 w-2 rounded-full bg-blue-400 animate-ping" />
              <span>Contact Us</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mb-6 max-w-4xl text-4xl font-display font-extrabold sm:text-6xl md:text-7xl leading-tight"
            >
              Let&apos;s Build Your Next
              <span className="text-gradient-primary block mt-2">Digital Product</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-300 font-light"
            >
              Share your project specs or operational problems, and we will formulate a structured execution blueprint.
            </motion.p>
          </div>
        </section>

        {/* Form and Info Section */}
        <section className="px-4 pb-20">
          <div className="container-pro grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Form card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Suspense fallback={<div className="h-96 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 animate-pulse" />}>
                <ContactFormInner />
              </Suspense>
            </motion.div>

            {/* Info and reasons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Detail cards */}
              <div className="space-y-4">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon
                  return (
                    <a
                      key={detail.label}
                      href={detail.href}
                      target={detail.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="group relative p-6 rounded-2xl bg-slate-900/40 backdrop-blur-2xl border border-slate-800/80 hover:border-blue-500/30 transition-all duration-300 flex items-start gap-5 shadow-lg overflow-hidden card-magnetic"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-center group-hover:border-blue-400/40 transition-colors shadow-md relative z-10">
                        <Icon className="text-blue-500 group-hover:text-blue-300 transition-colors" size={20} />
                      </div>
                      
                      <div className="relative z-10">
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">{detail.label}</p>
                        <p className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-1">{detail.value}</p>
                        <p className="text-xs text-slate-400 font-light leading-relaxed">{detail.desc}</p>
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Why Partner card */}
              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-5">Why Partner With AxarTech</h3>
                <ul className="space-y-3.5">
                  {partnerReasons.map((reason) => (
                    <li key={reason} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={16} />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
