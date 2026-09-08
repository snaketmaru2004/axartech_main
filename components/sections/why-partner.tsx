'use client'

import { motion } from 'framer-motion'

interface Reason {
    number: string
    title: string
    description: string
}

export default function WhyPartner({ reasons }: { reasons: Reason[] }) {
    return (
        <section className="py-24 bg-slate-900/30 border-y border-slate-800/50 overflow-hidden relative">
            {/* Subtle light effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="container-pro relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Why Choose Us</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                        Why Partner <span className="text-gradient-primary">With Us</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        We don't just build software; we build long-term success for your brand.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-3xl bg-slate-900 border border-slate-800/80 hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
                        >
                            {/* Gradient Border Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Background Number */}
                            <motion.p 
                                whileHover={{ rotate: 360, scale: 1.2 }}
                                transition={{ duration: 0.8 }}
                                className="text-6xl font-black text-white/5 mb-6 font-display group-hover:text-blue-500/10 transition-colors pointer-events-none"
                            >
                                {reason.number}
                            </motion.p>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{reason.title}</h3>
                            <p className="text-[0.95rem] text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{reason.description}</p>
                            
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-8 h-8 bg-blue-500/10 rounded-bl-3xl scale-0 group-hover:scale-100 transition-transform duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
