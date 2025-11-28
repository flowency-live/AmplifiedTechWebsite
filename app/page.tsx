'use client'

import { ArrowRight, Eye, Clock, Target, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/Button'
import { CalendlyButton } from '@/components/CalendlyButton'
import { Container } from '@/components/Container'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-navy via-navy-light to-navy">
        {/* Geometric Background Elements - Echo Logo Shapes */}
        <div className="absolute top-10 right-10 w-[500px] h-[600px] bg-gradient-to-br from-purple/20 to-primary/30 rounded-[4rem] blur-2xl rotate-12 animate-glow" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple/40 rounded-3xl blur-xl" />
        <div className="absolute bottom-20 -left-20 w-[400px] h-[500px] bg-primary/20 rounded-[4rem] blur-2xl -rotate-6" />

        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Your Business.{' '}
              <span className="gradient-text">Digitised Properly.</span>{' '}
              Finally.
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              You've built your business. Now it deserves its own operating system.
            </p>

            <p className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
              Most SMEs run on spreadsheets, inboxes and heroic memory. You've built something real - but your systems haven't kept up.
            </p>

            {/* GOLD STACK: CTO Positioning */}
            <div className="pt-4">
              <p className="text-2xl md:text-3xl font-bold gradient-text">
                We are your internal CTO and delivery team.
              </p>
            </div>

            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              We build the digital operating system your business should have had years ago. Tailored to how you actually work. Delivered in days, not months.
            </p>

            {/* GOLD STACK: Core Pillars */}
            <div className="pt-4">
              <p className="text-2xl md:text-3xl font-bold gradient-text">
                Clarity + Speed + Capability.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <CalendlyButton size="lg" className="group">
                Book a Working Session
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </CalendlyButton>
              <Link href="/services">
                <Button size="lg" variant="outline">
                  See What We Build
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* The Truth Nobody Tells SMEs */}
      <section className="py-20 md:py-32 bg-navy border-b border-primary/20">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              The truth nobody tells SMEs
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-foreground/70 leading-relaxed">
              <p>
                Spreadsheets feel comfortable until they become a trap.
              </p>

              <p>
                Manual updates. Copy-paste between systems. Inconsistent data. No real visibility. Decisions made on gut feel because the numbers aren't there.
              </p>

              <p>
                Your team is firefighting. You're compensating for systems that don't exist. Everything feels harder than it should.
              </p>

              <p className="text-foreground/60">
                This isn't your fault.
              </p>

              <p>
                You were never given access to the tools, capability or expertise that bigger companies take for granted. Digital transformation was sold as something expensive, slow and enterprise-only.
              </p>

              {/* GOLD STACK: Core Message */}
              <div className="pt-8 text-center">
                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  That's the lie we're here to correct.
                </p>
              </div>

              <p className="text-center text-xl">
                Our superpower isn't AI. It's making digital transformation accessible to businesses like yours.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Your Business Operating System */}
      <section className="py-20 md:py-32 bg-navy-light relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[700px] bg-primary/10 rounded-[4rem] blur-3xl rotate-6" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              Your Business Operating System
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-foreground/70 leading-relaxed">
              <p>
                Not software you bend yourself to fit.
                <br />
                Not a one-size-fits-all CRM.
                <br />
                Not a template. Not a patchwork of tools held together with hope.
              </p>

              {/* GOLD STACK: Your OS */}
              <div className="pt-4 pb-4 text-center">
                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  Your OS. Built for how your business actually runs.
                </p>
              </div>

              <p>
                A single place where jobs, customers, data, workflow and intelligence live together.
                Dashboards that show real margins - not guesses.
                Automations that kill repetitive admin.
                AI used practically, safely, and only where it helps.
              </p>

              <p>
                Everything built around your people and your process.
                <br />
                Everything delivered in days.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-navy">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                How it works
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="p-8 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 space-y-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Discovery Day - Clarity first</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    We sit with you. We see how your business actually runs. We show you what's blocking you and what could change. You leave with clarity and a real value picture - before spending anything meaningful.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-8 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 space-y-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Build Week - Working product in your hands</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    We build a simple, functional first version of your business OS. Not mockups. Not decks. Not opinions. A real tool you can start using immediately.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-8 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 space-y-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Evolve - Add capability at your pace</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    You buy credits when you want improvements. No retainers. No long contracts. No surprises. We build what moves the needle - when you're ready.
                  </p>
                </div>
              </div>
            </div>

            {/* GOLD STACK: AI + Humans */}
            <div className="text-center p-8 rounded-3xl bg-gradient-to-r from-purple/10 to-primary/10 border border-primary/30">
              <p className="text-xl md:text-2xl font-bold gradient-text mb-4">
                AI + Humans = Practical transformation.
              </p>
              <p className="text-lg text-foreground/70">
                Digital capability used to be slow, expensive and out of reach. That's changed - if you know how to use the new tools properly.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What We Build */}
      <section className="py-20 md:py-32 bg-navy-light">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              What we build
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Custom CRM shaped around your actual sales process',
                'Operational dashboards that replace spreadsheets forever',
                'Job, project or case management with real-time margin visibility',
                'Stock, asset and equipment tracking',
                'Automated reporting, invoicing and compliance',
                'Scheduling, booking and workflow tools',
                'AI assistants tuned to your business and your data',
                'Mobile and web apps for your team and your customers',
                'Mini ERP modules designed for your operation - not generic templates',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card/50 backdrop-blur border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">{item}</p>
                </div>
              ))}
            </div>

            {/* GOLD STACK: If you can describe */}
            <div className="text-center pt-8">
              <p className="text-xl md:text-2xl font-bold gradient-text">
                If you can describe the problem, we can build the system.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why This Works */}
      <section className="py-20 md:py-32 bg-navy">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              Why this works
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Clarity */}
              <div className="p-8 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Clarity before complexity</h3>
                <p className="text-foreground/70 leading-relaxed">
                  We cut through noise. We find what's really blocking you. Fast.
                </p>
              </div>

              {/* Speed */}
              <div className="p-8 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Speed with discipline</h3>
                <p className="text-foreground/70 leading-relaxed">
                  We build in days, not months. No gold-plating. No drag. No theatre.
                </p>
              </div>

              {/* Capability */}
              <div className="p-8 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Capability that lasts</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Every engagement leaves you with permanent improvement. Real tools. Real assets. Not documentation. Not theory.
                </p>
              </div>

              {/* Experienced Delivery */}
              <div className="p-8 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 space-y-4">
                <h3 className="text-2xl font-bold">Experienced delivery</h3>
                <p className="text-foreground/70 leading-relaxed">
                  You're not buying juniors or offshore contractors. You get senior product, tech and operations experience applied directly to your problem.
                </p>
              </div>

              {/* Pay for Value */}
              <div className="p-8 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 space-y-4 md:col-span-2">
                <h3 className="text-2xl font-bold">Pay for value, not hours</h3>
                <p className="text-foreground/70 leading-relaxed">
                  You see outcomes before you commit. If we can't prove value fast, you walk away. No hard feelings.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Who This Is For */}
      <section className="py-20 md:py-32 bg-navy-light">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              Who this is for
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                'SMEs turning over £1m to £20m',
                'Owners and operators drowning in admin they shouldn\'t be doing',
                'Teams running the entire business from Excel and memory',
                'Fast-growing companies with no internal tech capability',
                'Businesses with complex operations that off-the-shelf software can\'t handle',
                'Leaders who want visibility, control and leverage - not more noise',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-6 rounded-xl bg-card/50 backdrop-blur border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground/80">{item}</p>
                </div>
              ))}
            </div>

            {/* GOLD STACK: Good people compensating */}
            <div className="text-center pt-8">
              <p className="text-xl md:text-2xl font-bold gradient-text">
                If your business is held together by good people compensating for bad systems, we fix that.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-navy">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to build your business operating system?
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-foreground/70 leading-relaxed">
              <p>
                Start with a working session. No pressure. No sales pitch. No "discovery phase" that costs five figures.
              </p>

              <p>
                Bring your biggest operational headache.
                <br />
                We'll show you what it looks like as a simple, fast, tailored system.
              </p>

              {/* GOLD STACK: Clarity and prototype */}
              <div className="pt-4">
                <p className="text-xl md:text-2xl font-bold gradient-text">
                  You leave with clarity and a working prototype - before spending anything.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <CalendlyButton size="lg" className="group">
                Book a Working Session
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </CalendlyButton>
              <Link href="/services">
                <Button size="lg" variant="outline">
                  See What We Build
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
