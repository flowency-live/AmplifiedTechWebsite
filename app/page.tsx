'use client'

import { ArrowRight, Zap, Building2, FileSpreadsheet, LineChart, CheckCircle2, Sparkles, Eye, Target, Clock } from 'lucide-react'
import { Button } from '@/components/Button'
import { CalendlyButton } from '@/components/CalendlyButton'
import { Container } from '@/components/Container'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-navy via-navy-light to-navy">
        {/* Gradient Orbs */}
        <div className="absolute top-20 -right-20 w-96 h-96 bg-purple/30 rounded-full blur-3xl animate-glow" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-purple-light text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Fast SME Digital Enablement</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Your Business Operating System{' '}
              <span className="gradient-text">— Built Fast</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Most SMEs run on spreadsheets and heroics. We build the digital capability you should have had years ago — in days, not months.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <CalendlyButton size="lg" className="group">
                Book free discovery
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </CalendlyButton>
              <Link href="/services">
                <Button size="lg" variant="outline">
                  See what we can build
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* SME CTO Positioning Section */}
      <section className="py-16 md:py-20 bg-navy border-b border-primary/20">
        <Container>
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              We're Your <span className="gradient-text">SME CTO + Delivery Team</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
                You don't get consultants. You don't get slide decks.
              </p>
              <p className="text-2xl md:text-3xl font-bold gradient-text">
                You get outcomes, capability, and digital assets.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We act as the SME equivalent of an internal CTO and delivery team — bringing clarity to your operations, building the tools you're missing, and giving you the digital capability to scale fast.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Spreadsheet CTA Section */}
      <section className="py-16 md:py-20 bg-navy-light border-b border-primary/20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-purple/10 via-primary/10 to-purple/10 border border-primary/30 backdrop-blur">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                    <FileSpreadsheet className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Running your £3M business in Excel?
                  </h2>
                  <p className="text-lg text-foreground/70">
                    Send us your worst spreadsheet. We'll show you what it could become.
                  </p>
                  <a
                    href="mailto:spreadsheets@amplified.co.uk"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-semibold"
                  >
                    <span>spreadsheets@amplified.co.uk</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Problems Section */}
      <section className="py-20 md:py-32 bg-navy">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                The Real <span className="gradient-text">Problems</span>
              </h2>
              <p className="text-xl text-foreground/60">
                If your business is held together by good people compensating for bad systems, you'll recognize these
              </p>
            </div>

            <div className="grid gap-6">
              {[
                {
                  title: 'Running everything on spreadsheets',
                  description: 'Data everywhere, truth nowhere, constant firefighting.',
                },
                {
                  title: 'No clear visibility of margin or performance',
                  description: 'You cannot improve what you cannot see.',
                },
                {
                  title: 'Admin is eating your day',
                  description: 'Copy-paste, approvals, chasing people, updating files, re-entering data.',
                },
                {
                  title: 'Systems that do not talk to each other',
                  description: 'Double handling, mistakes, operational drag.',
                },
                {
                  title: 'You do not know where AI genuinely fits',
                  description: 'Everything sounds impressive but nothing feels practical.',
                },
              ].map((problem, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center mt-1">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">{problem.title}</h3>
                    <p className="text-foreground/60">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <p className="text-xl font-semibold gradient-text">
                We fix all of this — fast, without disrupting your business.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Clarity + Speed + Capability Section */}
      <section className="py-20 md:py-32 bg-navy-light relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="gradient-text">Clarity + Speed + Capability</span>
              </h2>
              <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
                This is our moat. This is why we win. This is what you get.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Clarity</h3>
                <p className="text-foreground/70 leading-relaxed">
                  You see the truth, the blockers, the priorities, the economics. Dashboards, insights, visibility, and transparency replace guesswork and firefighting.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Speed</h3>
                <p className="text-foreground/70 leading-relaxed">
                  We build in days what others take months to overthink. No bureaucracy. No endless discovery phases. No transformation theatre.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Capability</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Every engagement leaves you with a new system, not a PDF. You get tools, automation, data — real capability that makes you stronger.
                </p>
              </div>
            </div>

            <div className="text-center p-8 rounded-3xl bg-gradient-to-r from-purple/10 to-primary/10 border border-primary/30">
              <p className="text-xl font-semibold">
                Nobody else competing in SME tech even gets near this.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Four Core Capabilities */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-navy to-navy-light relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple/10 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                What we do
              </h2>
              <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
                We help SMEs diagnose, design, and deliver practical digital capability at speed
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Mini ERP and Custom Tools */}
              <div className="p-6 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 space-y-6 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-purple flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Mini ERP & Custom Tools</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Purpose-built systems for CRM, scheduling, quoting, job tracking, time tracking, stock, invoicing, or anything unique to your operations.
                  </p>
                </div>
              </div>

              {/* Websites, Apps, Portals */}
              <div className="p-6 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 space-y-6 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-purple flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Websites, Apps & Portals</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Modern, fast, mobile-friendly. Designed, built and deployed quickly with content you can update yourself.
                  </p>
                </div>
              </div>

              {/* Automation */}
              <div className="p-6 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 space-y-6 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-purple flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Automation & Workflow</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Turn repetitive work into automated workflows. Eliminate copy-paste, manual approvals, spreadsheet chaos, and operational drag.
                  </p>
                </div>
              </div>

              {/* Dashboards */}
              <div className="p-6 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 space-y-6 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-purple flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Dashboards & Visibility</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Real-time insight into margin, delivery, cost, performance, blockers and opportunity. Replace twenty spreadsheets with a single source of truth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-navy-light">
        <Container>
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                Why SMEs choose <span className="gradient-text">us</span>
              </h2>
              <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                Days, not months. Tools, not slide decks. Capability, not consultancy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'We discover the problem and build solutions in the same session',
                'You get a working prototype before you spend anything',
                'You only pay if you want to keep it',
                'We use AI to build fast — but never let it over-engineer or hallucinate',
                'We challenge assumptions and tell you the truth',
                'We build your way — not force you into someone else's framework',
                'We focus on value, visibility and time saved — not hours billed',
                'No retainers, no long contracts, no hidden fees',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-navy to-navy-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple/5 via-transparent to-primary/5" />

        <Container className="relative z-10">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                How it works
              </h2>
              <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
                We keep this as simple and low-risk as possible
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Free Discovery',
                  description: 'We explore your business, map workflows, and identify the highest value opportunities. You get a working prototype in the session.',
                  highlight: 'Free',
                },
                {
                  step: '2',
                  title: 'MVP in a Week',
                  description: 'If you want it, we build a production version within days. Fixed price. Clear scope.',
                  highlight: 'Fixed Price',
                },
                {
                  step: '3',
                  title: 'Credits for More',
                  description: 'Buy credits you can redeem anytime to add features, integrations or automations.',
                  highlight: 'Your Pace',
                },
                {
                  step: '4',
                  title: 'You Stay in Control',
                  description: 'No retainers. No long contracts. Just pay for value delivered when you need it.',
                  highlight: 'No Lock-in',
                },
              ].map((item, i) => (
                <div key={i} className="space-y-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-foreground/70 leading-relaxed text-sm">{item.description}</p>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/40">
                      <p className="text-sm text-primary-light font-semibold">{item.highlight}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-navy-light">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to <span className="gradient-text">build your operating system?</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Start with a free discovery session. We'll uncover what's blocking your business and build a working prototype — before you pay anything.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <CalendlyButton size="lg" className="group">
                Book free discovery
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </CalendlyButton>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Send us your spreadsheet
                </Button>
              </Link>
            </div>
            <p className="text-foreground/50 text-sm pt-4">
              No credit card required. No sales pitch. Just value.
            </p>
          </div>
        </Container>
      </section>
    </main>
  )
}
