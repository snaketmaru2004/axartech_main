'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const projects = [
    {
        title: 'Vigyat AgroStore',
        category: 'E-Commerce Platform',
        description: 'A comprehensive digital marketplace for agricultural supplies with integrated knowledge-sharing for farmers.',
        image: '/projects/vigyat.png',
    },
    {
        title: 'JK Tissues',
        category: 'Corporate Showcase',
        description: 'Premium product catalog and brand platform for leading tissue manufacturers, focusing on B2B excellence.',
        image: '/projects/jk-tissues.png',
    },
    {
        title: 'Developer Portfolio',
        category: 'Personal Branding',
        description: 'Cutting-edge portfolio site with interactive experiences, showcasing full-stack engineering expertise.',
        image: '/projects/sanket-portfolio.png',
    },
]

export default function PortfolioShowcase() {
    return (
        <section className="py-24 bg-[#030712] relative overflow-hidden">
            <div className="container-pro relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Our Portfolio</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Our Recent <span className="text-gradient-primary">Projects</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Discover how we've helped businesses transform their digital presence with custom-built solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full md:w-auto flex justify-center md:justify-start"
                    >
                        <Button variant="outline" asChild className="w-full md:w-auto border-slate-700 bg-white/5 text-white hover:bg-white/10 rounded-full px-8 py-6">
                            <Link href="/portfolio" className="flex items-center justify-center gap-2">
                                All Projects <ArrowRight size={18} />
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-500"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                                
                                {/* Shine Sweep */}
                                <div className="absolute -inset-x-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover:animate-shimmer" />
                            </div>

                            <div className="p-8 relative">
                                <div className="mb-4">
                                    <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-2 block">{project.category}</span>
                                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">{project.title}</h3>
                                </div>
                                <p className="text-slate-400 leading-relaxed mb-0 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                                    {project.description}
                                </p>
                            </div>

                            {/* Border Glow Overlay */}
                            <div className="absolute inset-0 pointer-events-none border border-white/0 group-hover:border-blue-500/20 rounded-3xl transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
