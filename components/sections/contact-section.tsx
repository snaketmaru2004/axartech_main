'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setStatus({ type: null, message: '' })
        
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            
            const data = await res.json()
            
            if (!res.ok) throw new Error(data.error || 'Something went wrong')
            
            setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' })
            setFormData({ name: '', email: '', subject: '', message: '' })
        } catch (error: any) {
            setStatus({ type: 'error', message: error.message || 'Failed to send message' })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <section id="contact" className="py-24 bg-[#030712] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-pro relative z-10 px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Contact Us</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                        Let's Build Something <span className="text-gradient-primary">Great</span> Together
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Have a project in mind or just want to say hi? We'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-6">
                            {[
                              { icon: Mail, title: 'Email Us', value: 'axartech.it@gmail.com', href: 'mailto:axartech.it@gmail.com', colorClass: 'bg-blue-500/10 text-blue-500 group-hover:bg-blue-500' },
                              { icon: Phone, title: 'Call Us', value: '+91 90997 39708', href: 'tel:+919099739708', colorClass: 'bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500' },
                              { icon: Instagram, title: 'Follow Us', value: '@axartech.it', href: 'https://www.instagram.com/axartech.it', colorClass: 'bg-purple-500/10 text-purple-500 group-hover:bg-purple-500' },
                            ].map((item, i) => (
                              <motion.a
                                key={i}
                                href={item.href}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group flex items-center gap-5 p-5 rounded-2xl bg-slate-900/50 border border-slate-800/60 hover:border-slate-700 transition-all duration-300"
                              >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center group-hover:text-white transition-all duration-300 shrink-0 ${item.colorClass}`}>
                                    <item.icon size={24} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-slate-500 text-sm mb-1 uppercase tracking-widest font-semibold">{item.title}</p>
                                    <p className="text-white text-lg font-medium">{item.value}</p>
                                </div>
                                <ArrowUpRight className="text-slate-700 group-hover:text-white transition-colors" size={20} />
                              </motion.a>
                            ))}
                        </div>

                        {/* Social links */}
                        <div className="mt-10 flex gap-4">
                            {[
                                { icon: Instagram, href: 'https://www.instagram.com/axartech.it' },
                                { icon: Linkedin, href: '#' },
                                { icon: Github, href: '#' }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="w-12 h-12 rounded-2xl border border-slate-800 flex items-center justify-center text-slate-400 hover:border-blue-500/50 hover:text-white hover:bg-blue-500/10 transition-all duration-300"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>

                        {/* Trust indicator */}
                        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                            <p className="text-blue-100 text-sm font-medium">
                              We typically respond within 2 hours during business hours.
                            </p>
                          </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-slate-900/50 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-slate-800 shadow-2xl relative overflow-hidden group">
                            {/* Shine sweep */}
                            <div className="absolute -inset-x-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/3 to-transparent skew-x-[-25deg] group-hover:animate-shimmer" />
                            
                            <h3 className="text-2xl font-display font-bold text-white mb-2">Send us a message</h3>
                            <p className="text-slate-400 text-sm mb-8">Fill in the details and we'll get back to you shortly.</p>
                            
                            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-300 ml-1">Name</label>
                                        <Input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            className="bg-slate-950 border-slate-800 focus:border-blue-500 rounded-xl h-14 text-white placeholder:text-slate-600"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-300 ml-1">Email</label>
                                        <Input
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            type="email"
                                            placeholder="your@email.com"
                                            className="bg-slate-950 border-slate-800 focus:border-blue-500 rounded-xl h-14 text-white placeholder:text-slate-600"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-300 ml-1">Subject</label>
                                    <Input
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What's this about?"
                                        className="bg-slate-950 border-slate-800 focus:border-blue-500 rounded-xl h-14 text-white placeholder:text-slate-600"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-300 ml-1">Message</label>
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project..."
                                        className="bg-slate-950 border-slate-800 focus:border-blue-500 rounded-xl min-h-[150px] pt-4 text-white placeholder:text-slate-600"
                                        required
                                    />
                                </div>
                                {status.message && (
                                    <div className={`p-4 rounded-xl text-sm ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                                        {status.message}
                                    </div>
                                )}
                                <Button type="submit" disabled={isSubmitting} size="lg" className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl h-14 text-lg font-bold shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] group">
                                    <span className="inline-flex items-center gap-3">
                                      {isSubmitting ? 'Sending...' : 'Send Message'}
                                      <Send className={`h-5 w-5 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'}`} />
                                    </span>
                                </Button>
                            </form>
                        </div>
                        
                        {/* Decorative ring */}
                        <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border border-blue-500/10 rounded-[2.5rem]" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
