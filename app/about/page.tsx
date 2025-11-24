'use client'

import { ArrowRight, FileText, Zap, Users, TrendingUp, Target, CheckCircle2, Sparkles } from 'lucide-react'
import { Button } from '@/components/Button'
import { CalendlyButton } from '@/components/CalendlyButton'
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import { Badge } from '@/components/Badge'

export default function AboutPage() {
  const differences = [
    {
      title: 'We build real things, not documents',
      description: "We don't produce PowerPoints or recommendations. We build working systems - fast.",
      icon: FileText,
    },
    {
      title: 'We start with value, not tech',
      description: 'Save time, increase margin, reduce errors, provide clarity, automate the painful bits. No value = no build.',
      icon: Target,
    },
    {
      title: 'We amplify your way of working',
      description: "We don't impose frameworks or force you into someone else's process. We upgrade the way you already operate.",
      icon: Zap,
    },
    {
      title: 'Working prototypes on day one',
      description: 'Our discovery process produces a working prototype - in the room - before you ever pay a penny.',
      icon: Sparkles,
    },
    {
      title: 'Fast, fixed-price MVPs',
      description: 'Your MVP is delivered in under a week, with clear scope and no surprises.',
      icon: TrendingUp,
    },
    {
      title: 'Credit-based enhancements',
      description: 'You evolve at your pace with flexible credit packs. No retainers. No waste.',
      icon: CheckCircle2,
    },
  ]

  const values = [
    {
      number: '1',
      title: 'Practicality over perfection',
      description: "If it doesn't help today, it's not useful.",
    },
    {
      number: '2',
      title: 'Radical clarity',
      description: 'We help you see your business clearly - with dashboards, data, insight, and transparency.',
    },
    {
      number: '3',
      title: 'No fluff. No jargon. No nonsense.',
      description: 'SMEs need clarity, not buzzwords.',
    },
    {
      number: '4',
      title: 'Evidence, not opinions',
      description: 'We measure what matters. We show you the numbers. We improve what counts.',
    },
    {
      number: '5',
      title: 'Build fast, evolve continuously',
      description: 'Small businesses move quickly - your systems should too.',
    },
  ]

  const amplifiedMeans = [
    'More capability',
    'More clarity',
    'More speed',
    'More confidence',
    'More margin',
    'More space to grow',
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section gradient="hero" padding="lg">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <Badge icon={Users}>About Us</Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Amplified Tech exists to solve a <span className="gradient-text">simple problem</span>
          </h1>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-foreground/80 font-medium">
              Most SMEs are running multi-million-pound operations on spreadsheets, manual processes, and guesswork - and they don't have the time, capability, or confidence to modernise.
            </p>
            <p className="text-2xl md:text-3xl font-bold gradient-text">
              We fix that, fast.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We build practical AI-powered tools, dashboards, automations, and mini-ERPs that give small businesses the clarity and digital capability usually reserved for large organisations - without the cost, complexity, or consultant nonsense.
            </p>
          </div>
        </div>
      </Section>

      {/* Mission Section */}
      <Section className="bg-navy-light" padding="md">
        <div className="max-w-4xl mx-auto">
          <Card className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              To give SMEs the digital capability they never had - and the clarity they've always needed - so they can grow with confidence in the AI era.
            </p>
          </Card>
        </div>
      </Section>

      {/* Our Difference Section */}
      <Section gradient="radial" padding="lg">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Our <span className="gradient-text">Difference</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differences.map((item, i) => (
              <Card key={i} className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Who We Work With */}
      <Section className="bg-navy-light" padding="lg">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Who We <span className="gradient-text">Work With</span>
            </h2>
            <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
              Amplified Tech is built for:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'SMEs stuck in spreadsheets',
              'Founders with ideas but no tech team',
              'Operations teams drowning in admin',
              'Scale-ups needing clarity before investment',
              'Businesses frustrated with agencies, dev shops, or big consultancies',
              'Anyone who knows AI can help them - but doesn\'t know where to start',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-6 rounded-2xl bg-card/50 backdrop-blur border border-border hover:border-primary/30 transition-all duration-300">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80 font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-purple/10 to-primary/10 border border-primary/30">
            <p className="text-xl font-semibold">
              If you run a business but don't have time to build the tools you need…
              <br />
              <span className="gradient-text">We build them for you.</span>
            </p>
          </div>
        </div>
      </Section>

      {/* Our Values */}
      <Section gradient="radial" padding="lg">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Our <span className="gradient-text">Values</span>
            </h2>
          </div>

          <div className="space-y-8">
            {values.map((item, i) => (
              <Card key={i} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple flex items-center justify-center text-xl font-bold">
                  {item.number}
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* What Amplified Means */}
      <Section className="bg-navy-light" padding="lg">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              What "<span className="gradient-text">Amplified</span>" Means to Us
            </h2>
            <p className="text-xl text-foreground/60">
              It means giving you:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {amplifiedMeans.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/30 transition-all duration-300 text-center"
              >
                <p className="text-lg font-semibold gradient-text">{item}</p>
              </div>
            ))}
          </div>

          <div className="text-center p-8 rounded-3xl bg-gradient-to-r from-purple/10 to-primary/10 border border-primary/30">
            <p className="text-2xl font-bold">
              We don't just build tools.
              <br />
              <span className="gradient-text">We amplify your business.</span>
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section gradient="hero" padding="lg">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            Start with a <span className="gradient-text">Free Discovery Session</span>
          </h2>
          <p className="text-xl text-foreground/70">
            It costs nothing to see what's possible.
          </p>
          <div className="space-y-4 max-w-2xl mx-auto text-left">
            <p className="text-lg text-foreground/80 font-medium">You'll walk away with:</p>
            <div className="grid gap-3">
              {[
                'A working prototype',
                'A clarity report',
                'Your biggest opportunities identified',
                'A plan to start tomorrow',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-card/50 backdrop-blur border border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <CalendlyButton size="lg" className="group">
              Get your free discovery session
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </CalendlyButton>
          </div>
          <p className="text-lg font-medium">
            <span className="gradient-text">Amplify your business.</span>
            <br />
            Don't get left behind.
          </p>
        </div>
      </Section>
    </main>
  )
}
