'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Hero from '@/components/sections/hero'
import Services from '@/components/sections/services'
import AboutSection from '@/components/sections/about-section'
import TechStack from '@/components/sections/tech-stack'
import Process from '@/components/sections/process'
import PortfolioShowcase from '@/components/sections/portfolio-showcase'
import BlogFeed from '@/components/sections/blog-feed'
import Testimonials from '@/components/sections/testimonials'
import WhyPartner from '@/components/sections/why-partner'
import ContactSection from '@/components/sections/contact-section'
import CTA from '@/components/sections/cta'
import { Code2, Bot, Smartphone, BarChart3, Globe, Search } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Design',
    description: 'Bespoke, conversion-optimized interfaces that capture your brand essence and engage users.',
    delay: 0.1,
  },
  {
    icon: Code2,
    title: 'Web Engineering',
    description: 'High-performance, scalable web architectures built with modern frameworks for ultimate speed.',
    delay: 0.2,
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    description: 'Custom AI integration and workflow automation to eliminate repetitive tasks and scale operations.',
    delay: 0.3,
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Premium iOS and Android experiences designed for seamless performance and user intuition.',
    delay: 0.4,
  },
  {
    icon: BarChart3,
    title: 'Data Intelligence',
    description: 'Advanced analytics and machine learning models to turn your data into competitive advantages.',
    delay: 0.5,
  },
  {
    icon: Search,
    title: 'Digital Scaling',
    description: 'Strategic SEO and performance marketing to dominate search results and drive organic growth.',
    delay: 0.6,
  },
];

const whyReasons = [
  {
    number: '01',
    title: 'Proven Expertise',
    description: 'We bring years of experience building robust, scalable digital products across various industries.'
  },
  {
    number: '02',
    title: 'Agile Delivery',
    description: 'Our sprint-based methodology ensures fast, predictable execution with constant feedback loops.'
  },
  {
    number: '03',
    title: 'Future-Proof',
    description: 'We use cutting-edge tech stacks and scalable architecture that grows seamlessly with your business.'
  },
  {
    number: '04',
    title: 'Design First',
    description: 'Every solution we build starts with premium UI/UX design to drive deeper user engagement and conversions.'
  },
  {
    number: '05',
    title: 'Dedicated Support',
    description: 'We provide 24/7 technical stability, maintenance, and continuous optimization long after deployment.'
  }
];

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <Navigation />
      
      <main className="flex flex-col flex-1 overflow-hidden">
        <Hero mounted={mounted} />
        <Services services={services} />
        <AboutSection />
        <Process />
        <TechStack />
        <PortfolioShowcase />
        <BlogFeed />
        <WhyPartner reasons={whyReasons} />
        <Testimonials />
        <CTA />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
