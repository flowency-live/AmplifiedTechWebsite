'use client'

import { Mail, Calendar, Clock, MapPin, HelpCircle } from 'lucide-react'
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import { Badge } from '@/components/Badge'
import { ContactForm } from '@/components/ContactForm'
import { CalEmbed } from '@/components/CalEmbed'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section gradient="hero" padding="lg">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <Badge icon={Mail}>Contact Us</Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Let's move something
            <span className="gradient-text"> forward — together</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
            Whether you've just got a few questions or you want to explore working together, we'd love to hear from you.
          </p>
        </div>
      </Section>

      {/* Contact Options: Form or Calendar */}
      <Section className="bg-navy-light" padding="lg">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold">
              Let's amplify <span className="gradient-text">your tech</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl text-foreground/60">
                A no-pressure conversation to uncover what's really blocking your business.
              </p>
              <p className="text-lg text-foreground/70">
                We'll help you see what's possible, what it's worth, and outline a clear path forward — based on proven solutions we've seen work for others in similar situations.
              </p>
              <p className="text-lg font-semibold gradient-text">
                We'll be candid about whether our approach is the right fit. Either way, you'll leave with actionable insights.
              </p>
            </div>
          </div>

          {/* Stacked Layout: Calendar then Form */}
          <div className="space-y-8">
            {/* Calendar Booking - No Card Wrapper */}
            <div className="min-h-[700px]">
              <CalEmbed
                calLink="flowamplified/30min"
                namespace="30min"
                config={{ theme: 'dark', layout: 'month_view', hideEventTypeDetails: false }}
              />
            </div>

            {/* Contact Form */}
            <Card className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Send us a message</h3>
                </div>
                <p className="text-foreground/70">
                  We will respond within 24 hours. Usually much faster.
                </p>
              </div>
              <ContactForm />
            </Card>
          </div>
        </div>
      </Section>

      {/* Additional Info Cards */}
      <Section gradient="radial" padding="lg">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Location */}
          <Card className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Based in the UK</h3>
            </div>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We work with SMEs across the UK - both remote and on-site where needed.
            </p>
          </Card>

          {/* Not Sure */}
          <Card className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Not sure what you need?</h3>
            </div>
            <p className="text-lg text-foreground/70 leading-relaxed">
              No problem. Just tell us what hurts. We will help you understand what is possible and where the biggest gains are.
            </p>
          </Card>
        </div>
      </Section>

      {/* What Happens Next */}
      <Section className="bg-navy-light" padding="lg">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              What happens <span className="gradient-text">next?</span>
            </h2>
            <p className="text-xl text-foreground/60">
              Here is what you can expect when you reach out
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'We respond within 24 hours',
                description: 'Usually much faster. We will set up a time that works for you.',
              },
              {
                step: '2',
                title: 'Discovery session — not a sales call',
                description: 'We learn about your business, uncover blockers, and map the biggest opportunities. No pitch, just clarity.',
              },
              {
                step: '3',
                title: 'Working prototype — in the session',
                description: "We build something real to prove what's possible — before you spend anything.",
              },
              {
                step: '4',
                title: "You decide what's next",
                description: 'If you love it, we agree scope and timeline. If not, you walk away with a free tool and clear insights.',
              },
            ].map((item, i) => (
              <Card key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section gradient="hero" padding="lg">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            Digital transformation without <span className="gradient-text">the theatre</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            No expensive consultancies. No six-month discovery phases. No slide decks.
          </p>
          <div className="space-y-4 text-2xl md:text-3xl font-bold">
            <div className="gradient-text">Get clarity.</div>
            <div className="gradient-text">Get capability.</div>
            <div className="gradient-text">Get results.</div>
          </div>
          <p className="text-foreground/50 text-sm pt-4">
            No commitment required. No sales pitch. Just value.
          </p>
        </div>
      </Section>
    </main>
  )
}
