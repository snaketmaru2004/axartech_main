'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  Sparkles, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  Code, 
  ArrowRight 
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface FAQItem {
  id: string
  category: 'Process' | 'Engineering' | 'Pricing' | 'Support'
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    id: '1',
    category: 'Process',
    question: 'How does your sprint and milestone delivery cycle work?',
    answer: 'We operate on transparent 2-week agile sprints. Every sprint kicks off with agreed backlog priorities and concludes with a live staging demo. You get a private Slack channel, bi-weekly video progress reviews, and direct access to your lead engineers and designers.'
  },
  {
    id: '2',
    category: 'Engineering',
    question: 'What tech stacks and frameworks do you build with?',
    answer: 'We focus on high-performance, modern engineering ecosystems. For web apps and SaaS, we build with Next.js 15, React, TypeScript, TailwindCSS, Node.js, and PostgreSQL/MongoDB. For mobile, we use React Native & Expo. For AI workloads, we build with Python, LangChain, Claude/OpenAI APIs, and Vector DBs.'
  },
  {
    id: '3',
    category: 'Process',
    question: 'Do we own the full source code and intellectual property?',
    answer: 'Yes, 100%. Upon milestone completion and final handoff, you retain complete and exclusive ownership of all source code, design system Figma assets, infrastructure scripts, and intellectual property without any vendor lock-in.'
  },
  {
    id: '4',
    category: 'Pricing',
    question: 'How do you structure project pricing and payment schedules?',
    answer: 'We offer two flexible models: Fixed-Scope Milestone Pricing (ideal for well-defined MVPs and builds with 30-40-30% milestone disbursements) or Dedicated Engineering Pods (monthly sprint retainers for ongoing feature scaling and technical iterations).'
  },
  {
    id: '5',
    category: 'Support',
    question: 'What happens after our product is deployed to production?',
    answer: 'Every custom build includes a complimentary 30-day warranty period covering bug fixes, stability monitoring, and performance tuning. After that, we offer monthly SLA support packages for active feature development, security updates, and cloud cost optimization.'
  },
  {
    id: '6',
    category: 'Engineering',
    question: 'Can you integrate custom AI models and existing enterprise APIs?',
    answer: 'Absolutely. We regularly integrate custom LLM agents, automated document processing, vector search, third-party ERPs, CRM databases (Salesforce, HubSpot), and payment gateways (Stripe, Razorpay) with enterprise security protocols.'
  }
]

const categories = ['All', 'Process', 'Engineering', 'Pricing', 'Support'] as const

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [openId, setOpenId] = useState<string | null>('1')

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleItem = (id: string) => {
    setOpenId(prev => prev === id ? null : id)
  }

  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden" id="faq">
      {/* Ambient background light */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-pro relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            Everything you need to know about our engineering approach, turnaround times, and delivery standards.
          </motion.p>
        </div>

        {/* Filters & Search */}
        <div className="max-w-4xl mx-auto mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-1.5 p-1 rounded-2xl bg-slate-900/80 border border-slate-800">
            {categories.map((cat) => {
              const active = activeCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                    active 
                      ? 'bg-blue-600 text-white shadow-glow-sm' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id
              return (
                <motion.div
                  layout
                  key={faq.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-slate-900/90 border-blue-500/50 shadow-glow-sm' 
                      : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-bold text-blue-400 uppercase tracking-wider shrink-0">
                        {faq.category}
                      </span>
                      <span className="text-base sm:text-lg font-display font-semibold text-white">
                        {faq.question}
                      </span>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen 
                        ? 'bg-blue-600 border-blue-500 text-white rotate-180' 
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}>
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed font-light">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </AnimatePresence>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
              <p className="text-slate-400 text-sm">No matching questions found for "{searchQuery}".</p>
              <Button 
                variant="ghost" 
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-3 text-blue-400 text-xs hover:text-blue-300"
              >
                Reset Search
              </Button>
            </div>
          )}
        </div>

        {/* Bottom Question Prompt */}
        <div className="max-w-4xl mx-auto mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-purple-950/40 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <MessageSquare size={20} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Have a specific or custom technical question?</h4>
              <p className="text-xs text-slate-400">Our senior engineering leads respond within 12 business hours.</p>
            </div>
          </div>
          <Button asChild size="sm" className="rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shrink-0 shadow-glow-sm">
            <Link href="/contact" className="flex items-center gap-2">
              Ask Our Engineers <ArrowRight size={14} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
