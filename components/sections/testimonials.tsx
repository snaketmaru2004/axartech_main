'use client'

import { motion } from 'framer-motion'
import TestimonialSlider from '@/components/testimonial-slider'

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-[#030712] relative overflow-hidden">
            <div className="container-pro relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Success Stories</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                        What Our <span className="text-gradient-primary">Clients Say</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Don't just take our word for it—see what our partners have to say about working with AxarTech.
                    </p>
                </motion.div>

                <TestimonialSlider />
            </div>
        </section>
    )
}
