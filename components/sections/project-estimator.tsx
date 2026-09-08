'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Sparkles, 
  Layers, 
  Clock, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sliders, 
  Smartphone, 
  Globe, 
  Bot, 
  Database,
  Zap,
  Check
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface ProjectType {
  id: string
  title: string
  icon: any
  baseWeeks: number
  basePriceUSD: number
  description: string
  stack: string[]
}

const projectTypes: ProjectType[] = [
  {
    id: 'web-app',
    title: 'Web Application & SaaS',
    icon: Globe,
    baseWeeks: 4,
    basePriceUSD: 2500,
    description: 'Custom full-stack web platforms, portals, SaaS dashboards, and e-commerce architectures.',
    stack: ['Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS']
  },
  {
    id: 'mobile-app',
    title: 'Cross-Platform Mobile App',
    icon: Smartphone,
    baseWeeks: 5,
    basePriceUSD: 3000,
    description: 'Native-feel iOS & Android applications with offline sync, push notifications, and device APIs.',
    stack: ['React Native', 'Expo', 'Redux / Zustand', 'FastAPI', 'Firebase / Supabase']
  },
  {
    id: 'ai-automation',
    title: 'AI Agent & Automation',
    icon: Bot,
    baseWeeks: 3,
    basePriceUSD: 2000,
    description: 'LLM fine-tuning, automated operational pipelines, custom RAG search, and intelligent chatbots.',
    stack: ['Python', 'LangChain', 'OpenAI / Claude API', 'Vector DB', 'FastAPI']
  },
  {
    id: 'enterprise',
    title: 'Enterprise Cloud System',
    icon: Database,
    baseWeeks: 8,
    basePriceUSD: 5000,
    description: 'High-throughput microservices, robust API gateways, automated CI/CD, and multi-tenant security.',
    stack: ['Kubernetes', 'Docker', 'AWS / GCP', 'GraphQL', 'Redis', 'Kafka']
  }
]

interface FeatureOption {
  id: string
  name: string
  weeks: number
  price: number
  category: string
}

const featureOptions: FeatureOption[] = [
  { id: 'auth', name: 'Multi-Role Auth & SSO (OAuth, 2FA)', weeks: 1, price: 400, category: 'Security' },
  { id: 'payments', name: 'Stripe / Razorpay Payments & Invoicing', weeks: 1, price: 500, category: 'Commerce' },
  { id: 'realtime', name: 'Real-Time WebSockets & Push Alerts', weeks: 1, price: 450, category: 'Performance' },
  { id: 'ai-assistant', name: 'Custom AI Assistant & Smart Analytics', weeks: 2, price: 900, category: 'AI' },
  { id: 'cms', name: 'Headless CMS & Dynamic Blog System', weeks: 1, price: 350, category: 'Content' },
  { id: 'multilang', name: 'Multi-Language i18n Localization', weeks: 1, price: 300, category: 'Global' },
  { id: 'analytics', name: 'Custom Telemetry & Executive Dashboard', weeks: 1, price: 400, category: 'Data' },
  { id: 'devops', name: 'Production DevOps, CI/CD & Terraform', weeks: 1, price: 500, category: 'Infrastructure' }
]

const timelines = [
  { id: 'standard', name: 'Standard Sprint', multiplier: 1.0, label: 'Optimized velocity with regular bi-weekly milestones' },
  { id: 'accelerated', name: 'Fast-Track Delivery', multiplier: 1.25, label: 'Dedicated parallel engineering pods for rapid launch' }
]

export default function ProjectEstimator() {
  const [selectedType, setSelectedType] = useState<string>('web-app')
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['auth', 'payments', 'analytics'])
  const [selectedTimeline, setSelectedTimeline] = useState<string>('standard')

  const currentType = projectTypes.find(t => t.id === selectedType) || projectTypes[0]

  const toggleFeature = (id: string) => {
    setSelectedFeatures(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  const selectedFeaturesData = featureOptions.filter(f => selectedFeatures.includes(f.id))
  
  const additionalWeeks = selectedFeaturesData.reduce((acc, curr) => acc + curr.weeks, 0)
  const totalWeeks = Math.max(2, Math.round((currentType.baseWeeks + additionalWeeks * 0.75)))
  
  const additionalPrice = selectedFeaturesData.reduce((acc, curr) => acc + curr.price, 0)
  const timelineMult = timelines.find(t => t.id === selectedTimeline)?.multiplier || 1.0
  const estimatedCost = Math.round((currentType.basePriceUSD + additionalPrice) * timelineMult)

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden" id="estimator">
      {/* Background glowing aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-pro relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles size={14} className="animate-spin-slow" />
            <span>Interactive Scope Calculator</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Estimate Your <span className="text-gradient-primary">Project Scope</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            Configure your technical requirements to get an instant realistic timeline and cost projection tailored to modern standards.
          </motion.p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Project Type */}
            <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-glow-sm">
                  1
                </span>
                <h3 className="text-xl font-display font-bold text-white">Select Product Architecture</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectTypes.map((type) => {
                  const Icon = type.icon
                  const active = selectedType === type.id
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type.id)}
                      className={`text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                        active
                          ? 'border-blue-500 bg-blue-950/40 shadow-glow-sm scale-[1.02]'
                          : 'border-slate-800 bg-slate-950/50 hover:border-slate-700 hover:bg-slate-900/50'
                      }`}
                    >
                      <div>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                          active ? 'bg-blue-600 text-white shadow-glow-sm' : 'bg-slate-800 text-slate-400'
                        }`}>
                          <Icon size={20} />
                        </div>
                        <h4 className="font-bold text-white text-base mb-1">{type.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{type.description}</p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                        <span>Base: ~{type.baseWeeks} weeks</span>
                        {active && <span className="text-blue-400 font-semibold flex items-center gap-1"><Check size={14} /> Selected</span>}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 2: Feature Add-ons */}
            <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-glow-sm">
                    2
                  </span>
                  <h3 className="text-xl font-display font-bold text-white">Select Features & Modules</h3>
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  {selectedFeatures.length} chosen
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {featureOptions.map((feat) => {
                  const active = selectedFeatures.includes(feat.id)
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex items-center justify-between gap-3 ${
                        active
                          ? 'border-blue-500/80 bg-blue-900/30 text-white'
                          : 'border-slate-800/80 bg-slate-950/40 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${
                          active ? 'bg-blue-600 border-blue-500 text-white' : 'border-slate-700 bg-slate-900'
                        }`}>
                          {active && <Check size={12} strokeWidth={3} />}
                        </div>
                        <span className="text-xs font-semibold truncate">{feat.name}</span>
                      </div>
                      <span className="text-[11px] text-blue-400/90 font-mono shrink-0">+{feat.weeks}w</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 3: Velocity & Delivery */}
            <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-glow-sm">
                  3
                </span>
                <h3 className="text-xl font-display font-bold text-white">Delivery Velocity</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {timelines.map((timeline) => {
                  const active = selectedTimeline === timeline.id
                  return (
                    <button
                      key={timeline.id}
                      type="button"
                      onClick={() => setSelectedTimeline(timeline.id)}
                      className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                        active
                          ? 'border-blue-500 bg-blue-950/40 shadow-glow-sm'
                          : 'border-slate-800 bg-slate-950/40 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-white text-sm">{timeline.name}</span>
                        {timeline.id === 'accelerated' && (
                          <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-bold uppercase">
                            Fast
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400">{timeline.label}</p>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Output / Summary Sticky Card (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div 
              layout
              className="p-8 rounded-[2.5rem] bg-gradient-to-br from-slate-900/90 via-slate-900/95 to-blue-950/40 border border-blue-500/30 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
            >
              {/* Top ambient highlight */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
                <div>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block">Real-time Scope</span>
                  <h3 className="text-2xl font-display font-bold text-white mt-1">Estimate Summary</h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold flex items-center gap-1.5">
                  <Zap size={13} className="text-blue-400" />
                  <span>Interactive</span>
                </div>
              </div>

              {/* Metrics Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <Clock size={14} className="text-blue-400" />
                    <span>Estimated Duration</span>
                  </div>
                  <div className="text-2xl font-display font-extrabold text-white">
                    ~{totalWeeks} <span className="text-sm font-sans font-normal text-slate-400">Weeks</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    <span>Project Investment</span>
                  </div>
                  <div className="text-2xl font-display font-extrabold text-white">
                    ${estimatedCost.toLocaleString()} <span className="text-xs font-sans font-normal text-slate-400">est.</span>
                  </div>
                </div>
              </div>

              {/* Stack Recommendation */}
              <div className="mb-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                  Recommended Tech Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentType.stack.map(tech => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Included Deliverables */}
              <div className="mb-8 space-y-2 border-t border-slate-800/80 pt-5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                  <span>Complete responsive UI/UX system & source repository</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                  <span>30-day post-launch warranty & stability SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                  <span>CI/CD automated deployment pipelines</span>
                </div>
              </div>

              {/* Call to action */}
              <Button 
                asChild
                size="lg"
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-base shadow-glow transition-all duration-300 hover:scale-[1.02]"
              >
                <Link 
                  href={`/contact?plan=${encodeURIComponent(currentType.title)}&timeline=${totalWeeks}w&est=$${estimatedCost}`}
                  className="flex items-center justify-center gap-2"
                >
                  Request Exact Proposal
                  <ArrowRight size={18} />
                </Link>
              </Button>

              <p className="text-[11px] text-center text-slate-400 mt-4 leading-relaxed">
                * Estimates are guideline projections. Final deliverables and quotes are confirmed post technical discovery call.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
