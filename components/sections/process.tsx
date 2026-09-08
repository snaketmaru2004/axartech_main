'use client'

import { motion } from 'framer-motion'
import ProcessTimeline from '@/components/process-timeline'

export default function Process() {
    return (
        <section id="process" className="py-24 bg-[#030712] relative overflow-hidden">
            <div className="container-pro relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Our Roadmap</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                        Our Proven <span className="text-gradient-primary">Process</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        From initial concept to final deployment, we follow a transparent and agile process.
                    </p>
                </motion.div>

                <div className="py-8 md:py-12">
                    <ProcessTimeline />
                </div>
            </div>
        </section>
    )
}
