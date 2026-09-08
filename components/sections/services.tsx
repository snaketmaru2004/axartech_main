'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ServiceCard from '@/components/service-card'
import { LucideIcon } from 'lucide-react'

interface Service {
    icon: LucideIcon
    title: string
    description: string
    delay: number
}

export default function Services({ services }: { services: Service[] }) {
    return (
        <section id="services" className="py-16 md:py-24 bg-[#030712] relative overflow-hidden">
            {/* Ambient background glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-pro relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-20"
                >
                    <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                        Custom <span className="text-gradient-primary">Solutions</span> for Your Business
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        We combine technical brilliance with creative thinking to deliver products that make a real difference.
                    </p>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: 80 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-8"
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Button variant="outline" size="lg" asChild className="border-slate-700 bg-white/5 text-white hover:bg-white/10 rounded-full px-12 py-7 text-lg font-semibold transition-all hover:scale-105 active:scale-95 leading-none shadow-xl group">
                        <Link href="/services" className="inline-flex items-center gap-3">
                          Discover All Our Services
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
