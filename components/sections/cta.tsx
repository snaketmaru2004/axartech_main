'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTA() {
    return (
        <section className="py-24 bg-[#030712] relative overflow-hidden">
            <div className="container-pro relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative p-12 md:p-24 rounded-[3rem] bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 overflow-hidden text-center shadow-2xl shadow-blue-500/20"
                >
                    {/* Abstract Shapes */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-[100px] -ml-48 -mb-48" />
                    
                    {/* Floating gradient orbs */}
                    <motion.div
                      animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-20 left-20 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl"
                    />
                    <motion.div
                      animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-20 right-40 w-40 h-40 bg-purple-400/15 rounded-full blur-3xl"
                    />

                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 bg-grid-pattern-sm opacity-[0.05]" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        {/* Badge */}
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          viewport={{ once: true }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8 text-sm font-semibold text-white/90"
                        >
                          <Sparkles size={16} className="text-amber-300" />
                          Limited Slots Available This Month
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-[1.1]">
                            Ready to transform your{' '}
                            <span className="relative inline-block">
                              <span className="relative z-10">digital vision</span>
                              <span className="absolute bottom-1 left-0 w-full h-3 bg-white/15 rounded-full -z-0" />
                            </span>?
                        </h2>
                        <p className="text-blue-100 text-xl md:text-2xl mb-12 leading-relaxed opacity-90 max-w-2xl mx-auto">
                            Partner with AxarTech today and let's create something extraordinary together. Your success is our mission.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                            <Button size="lg" asChild className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 rounded-full px-10 py-7 text-lg font-bold shadow-xl transition-all hover:scale-105 active:scale-95 leading-none group">
                                <Link href="/contact" className="inline-flex items-center gap-3">
                                  Get Started Now
                                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto border-white/30 bg-white/5 text-white hover:bg-white/10 rounded-full px-10 py-7 text-lg font-bold backdrop-blur-sm transition-all hover:scale-105 active:scale-95 leading-none">
                                <Link href="/services">View Services</Link>
                            </Button>
                        </div>
                        
                        {/* Trust badges */}
                        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-white/60">
                          {['No Commitment', 'Free Consultation', '24-Hour Response'].map((text, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                              {text}
                            </div>
                          ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
