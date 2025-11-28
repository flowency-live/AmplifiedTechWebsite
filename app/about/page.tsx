'use client'

import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { CalendlyButton } from '@/components/CalendlyButton'
import { Container } from '@/components/Container'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Why This Exists */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-navy via-navy-light to-navy">
        {/* Gradient Orbs */}
        <div className="absolute top-20 -right-20 w-96 h-96 bg-purple/30 rounded-full blur-3xl animate-glow" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-center">
              About
            </h1>

            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">
                Why this exists
              </h2>

              <div className="space-y-6 text-lg md:text-xl text-foreground/70 leading-relaxed">
                <p>
                  The way SMEs build digital capability is broken. And I got tired of watching it happen.
                </p>

                <p>
                  I've spent 30 years building products, fixing operations and delivering real systems across aviation, finance, healthcare and digital operations. I've seen what works. I've seen what fails. And the pattern is always the same.
                </p>

                {/* GOLD STACK: Most transformation failures */}
                <div className="text-center py-4">
                  <p className="text-2xl md:text-3xl font-bold gradient-text">
                    Most transformation failures are not technical. They are human.
                  </p>
                </div>

                <p>
                  I've watched businesses spend six months debating a deck instead of fixing the problem. I've watched consultancies sell frameworks that gather dust. I've watched agencies deliver beautiful websites that do nothing to help people do their jobs. I've watched dev teams over-engineer systems nobody asked for.
                </p>

                {/* GOLD STACK: Spreadsheets and heroics */}
                <p>
                  And meanwhile, SMEs are running multi-million pound operations on <strong>spreadsheets, inboxes and heroic memory.</strong>
                </p>

                <p className="text-foreground/60">
                  Not because they lack ambition. Because they lack access.
                </p>

                <p>
                  No internal tech team. No CTO. No one who can diagnose the real problem and actually deliver a fix. No time to step back and see clearly. No partner who tells them the truth. No access to the kind of capability that bigger firms take for granted.
                </p>

                <p className="font-semibold text-xl">
                  That gap is why this company exists.
                </p>

                {/* Flink Disclaimer */}
                <div className="p-6 rounded-2xl bg-card/50 border border-primary/20 text-center">
                  <p className="text-foreground/60 text-sm">
                    There are other Flinks.
                    <br />
                    <span className="text-foreground font-semibold">None of them will rebuild your operations in a week.</span>
                  </p>
                </div>

                <p>
                  I built something different because SMEs deserve better. They move fast. They make decisions. They don't hide behind committees. They just need someone who can match that pace and build what they actually need.
                </p>

                <p>
                  My approach is simple: get in the room, understand the real problem, and build a working solution before anyone has time to write a specification document.
                </p>

                <p>
                  Working prototypes on day one. MVPs in a week. Systems tailored to your operation. No jargon. No theatre. No wasted effort.
                </p>

                {/* GOLD STACK: If you can describe */}
                <div className="text-center py-4">
                  <p className="text-2xl md:text-3xl font-bold gradient-text">
                    If you can describe the problem, we can build the system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 md:py-32 bg-navy-light border-b border-primary/20">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Who we are
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-foreground/70 leading-relaxed">
              <p>
                We are senior product, technology and operations people who have spent decades building and scaling complex systems.
              </p>

              {/* GOLD STACK: SME CTO + Delivery Team */}
              <div className="text-center py-4">
                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  We act as the SME equivalent of an internal CTO plus a high-performing delivery team.
                </p>
              </div>

              <p>
                We design and build the digital operating system your business should have had years ago. Fast. Tailored. Practical. Affordable.
              </p>

              {/* GOLD STACK: Clarity + Speed + Capability */}
              <div className="text-center py-4">
                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  Clarity + Speed + Capability.
                </p>
              </div>

              <p className="font-semibold">Our combined expertise covers:</p>

              <div className="grid md:grid-cols-2 gap-3 pt-4">
                {[
                  'Product strategy and rapid build',
                  'Cloud architecture and modern engineering',
                  'AI-assisted development and automation',
                  'Operations and workflow optimisation',
                  'Data modelling and intelligent dashboards',
                  'Change, adoption and continuous improvement',
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

              <p>
                We do not impose frameworks. We do not sell boilerplate processes. We do not gold-plate technology.
              </p>

              <p className="font-semibold">
                We amplify what already works inside your business and remove what slows you down.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* How We Work Section */}
      <section className="py-20 md:py-32 bg-navy border-b border-primary/20">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              How we work
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Clarity before complexity */}
              <div className="p-8 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 space-y-4">
                <h3 className="text-xl font-bold">Clarity before complexity</h3>
                <p className="text-foreground/70 leading-relaxed">
                  We cut through noise. We find what is really blocking you. Fast.
                </p>
              </div>

              {/* Build smallest thing */}
              <div className="p-8 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 space-y-4">
                <h3 className="text-xl font-bold">Build the smallest thing that creates real value</h3>
                <p className="text-foreground/70 leading-relaxed">
                  No bloat. No scope creep. Just the tool that moves the needle.
                </p>
              </div>

              {/* Working prototypes */}
              <div className="p-8 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 space-y-4">
                <h3 className="text-xl font-bold">Show working prototypes on day one</h3>
                <p className="text-foreground/70 leading-relaxed">
                  We do not talk for weeks. We build. You see your system with your own data before spending anything meaningful.
                </p>
              </div>

              {/* Use AI safely */}
              <div className="p-8 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 space-y-4">
                <h3 className="text-xl font-bold">Use AI safely and predictably</h3>
                <p className="text-foreground/70 leading-relaxed">
                  We use AI to move fast and keep costs down. But every system is shaped by experienced humans who understand your business - not just the technology.
                </p>
              </div>

              {/* Leave capability */}
              <div className="p-8 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 space-y-4">
                <h3 className="text-xl font-bold">Leave clients with capability that lasts</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Every engagement leaves you with permanent improvement. Real tools. Real assets. Not documentation. Not theory.
                </p>
              </div>

              {/* Make transformation accessible */}
              <div className="p-8 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 space-y-4">
                <h3 className="text-xl font-bold">Make transformation accessible, not intimidating</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Our superpower isn't AI. It's making digital transformation accessible to businesses like yours.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What We Believe Section */}
      <section className="py-20 md:py-32 bg-navy-light">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              What we believe
            </h2>

            <div className="space-y-8 text-lg md:text-xl text-foreground/70 leading-relaxed text-center">
              <p>
                SMEs do not lack ambition. They lack access.
              </p>

              <p>
                They have no CTO, no delivery team, no one who can translate their business into the systems they actually need.
              </p>

              <p className="font-semibold">
                That's the gap we fill.
              </p>

              {/* GOLD STACK: AI + Humans */}
              <div className="py-4">
                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  AI + Humans = Practical transformation.
                </p>
              </div>

              <p>
                We give SMEs their own operating system so they can run their business with clarity, confidence and ease.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Final Statement Section */}
      <section className="py-20 md:py-32 bg-navy">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-12">
            {/* GOLD STACK: Good people compensating */}
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="gradient-text">If your business is held together by good people compensating for bad systems, we fix that.</span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-foreground/70 leading-relaxed">
              <p className="font-semibold text-2xl">
                It is time SMEs had their own operating system.
              </p>

              <p className="font-semibold text-2xl">
                That is what we build.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <CalendlyButton size="lg" className="group">
                Book a Working Session
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </CalendlyButton>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
