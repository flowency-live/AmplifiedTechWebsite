'use client'

import { Mail, FileSpreadsheet, Phone, MapPin, HelpCircle, ArrowRight, Calendar, Clock } from 'lucide-react'
import { Button } from '@/components/Button'
import { CalendlyButton } from '@/components/CalendlyButton'
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import { Badge } from '@/components/Badge'

export default function ContactPage() {
  const contactOptions = [
    {
      icon: Calendar,
      title: 'Book a Free Discovery Session',
      description: 'Get a working prototype in 24 hours. No commitment. No pressure.',
      action: 'Book your free session',
      useCalendly: true,
      featured: true,
    },
    {
      icon: FileSpreadsheet,
      title: 'Send Us Your Spreadsheet',
      description: 'Running your business on Excel? Send us your worst one - we will show you what it could become.',
      action: 'Upload via email',
      email: 'spreadsheets@amplified.co.uk',
      useCalendly: false,
    },
    {
      icon: Phone,
      title: 'Prefer to talk?',
      description: 'A quick call is sometimes easiest.',
      action: 'Book a 15-minute call',
      useCalendly: true,
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section gradient="hero" padding="lg">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <Badge icon={Mail}>Contact Us</Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Let us make your business faster, clearer, and more
            <span className="gradient-text"> capable</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
            Whether you want to fix a broken workflow, automate a painful process, replace your spreadsheets, or find out what AI can do for your business... we are ready when you are.
          </p>
        </div>
      </Section>

      {/* Contact Options */}
      <Section className="bg-navy-light" padding="lg">
        <div className="max-w-6xl mx-auto space-y-8">
          {contactOptions.map((option, i) => (
            <Card
              key={i}
              className={`relative overflow-hidden ${
                option.featured ? 'border-primary/50 shadow-xl shadow-primary/20' : ''
              }`}
            >
              {option.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-purple text-white text-xs font-semibold">
                  MOST POPULAR
                </div>
              )}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold">{option.title}</h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">{option.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    {option.useCalendly ? (
                      <CalendlyButton size="md" className="group">
                        {option.action}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </CalendlyButton>
                    ) : (
                      <div className="flex items-center gap-2 text-foreground/80">
                        <span className="font-semibold">{option.action}:</span>
                        <a
                          href={`mailto:${option.email}`}
                          className="text-primary hover:text-primary-light transition-colors underline"
                        >
                          {option.email}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
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
                title: 'Quick discovery call or session',
                description: 'We learn about your business, your challenges, and your goals. No sales pitch.',
              },
              {
                step: '3',
                title: 'Working prototype delivered',
                description: 'We build something real to prove what is possible - before you pay anything.',
              },
              {
                step: '4',
                title: 'You decide what is next',
                description: 'If you love it, we agree scope and timeline. If not, you walk away with a free tool.',
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
            Start <span className="gradient-text">Today</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Transformation does not need to be expensive, confusing, or slow.
          </p>
          <div className="space-y-4 text-2xl md:text-3xl font-bold">
            <div className="gradient-text">Get clarity.</div>
            <div className="gradient-text">Get capability.</div>
            <div className="gradient-text">Get amplified.</div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <CalendlyButton size="lg" className="group">
              Book your free discovery session
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </CalendlyButton>
          </div>
          <p className="text-foreground/50 text-sm">
            No commitment required. No credit card. Just value.
          </p>
        </div>
      </Section>
    </main>
  )
}
