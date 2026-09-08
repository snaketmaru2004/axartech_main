'use client'

import { motion } from 'framer-motion'
import TechStackItems from '@/components/tech-stack'

export default function TechStack() {
    return (
        <section id="tech-stack" className="py-32 bg-[#030712] relative overflow-hidden">
            {/* Ambient Background Lights */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-grid-pattern-sm opacity-[0.03]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712]" />

            <div className="container-pro relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-24 flex flex-col items-center"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold tracking-wider uppercase text-xs mb-6 backdrop-blur-md shadow-glow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                        Our Tech Ecosystem
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white mb-6 tracking-tight">
                        Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-gradient pb-2">Next-Gen</span> Stack
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
                        We leverage the most advanced, enterprise-grade technologies to construct digital platforms that scale limitlessly.
                    </p>
                </motion.div>

                <div className="py-8 md:py-12 relative">
                    {/* Decorative border line behind the tech stack items */}
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-y-1/2 hidden md:block" />
                    
                    <div className="relative z-10 bg-slate-900/30 backdrop-blur-md border border-white/5 rounded-[3rem] p-8 md:p-16 shadow-2xl">
                        <TechStackItems />
                    </div>
                </div>
            </div>
        </section>
    )
}
