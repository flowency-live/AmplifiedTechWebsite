import { ArrowRight, Building2, Zap, LineChart, CheckCircle2, Sparkles, Clock, Target, Users } from 'lucide-react'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import { Badge } from '@/components/Badge'

export const metadata = {
  title: 'Services - Amplified Tech',
  description: 'Build, Automate, Amplify. Fast, practical digital capability for SMEs.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section gradient="hero" padding="lg">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <Badge icon={Sparkles}>Our Services</Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Build · Automate · <span className="gradient-text">Amplify</span>
          </h1>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl md:text-2xl text-foreground/70">
              We build fast, practical digital capability for SMEs. Everything is delivered through our three core pillars.
            </p>
            <p className="text-xl md:text-2xl font-bold gradient-text">
              Outcomes, not hours. Capability, not consultancy.
            </p>
          </div>
        </div>
      </Section>

      {/* Build Section */}
      <Section id="build" gradient="radial" padding="lg">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-bold">Build</h2>
                <p className="text-xl text-foreground/60">Websites, Apps & Internal Tools</p>
              </div>
            </div>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Most SMEs don't need "enterprise software" or £50k systems. You need simple, reliable tools that match how your business actually works. We build exactly that — in days, not months.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Websites</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ultra-fast marketing sites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Conversion-focused landing pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Booking & enquiry forms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>AI-enhanced copy</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Custom Internal Tools</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Lightweight CRM tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Mini-ERP systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Job & workflow trackers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Internal dashboards</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Apps</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Mobile-first web apps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Customer self-service apps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Operations apps for field teams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>AI assistants embedded</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-r from-purple/10 to-primary/10 border border-primary/30 text-center">
            <p className="text-xl font-semibold">
              A simple internal system can transform margin, speed and customer satisfaction.
              <br />
              <span className="gradient-text">We can usually deliver a working first version in under a week.</span>
            </p>
          </div>
        </div>
      </Section>

      {/* Automate Section */}
      <Section id="automate" className="bg-navy-light" padding="lg">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-bold">Automate</h2>
                <p className="text-xl text-foreground/60">Remove Admin. Remove Friction. Remove Waste.</p>
              </div>
            </div>
            <p className="text-lg text-foreground/70 max-w-3xl">
              If your business is growing, admin becomes your biggest bottleneck. We automate the repetitive work that slows you down.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Workflow Automation</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Job intake and allocation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Customer onboarding steps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Approvals, notifications and reminders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Quote → invoice → payment workflows</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Data Automation</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Moving data between tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Cleaning, merging and validating info</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Auto-populating documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Removing duplicate manual entry</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Document & Communication</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Auto-generated quotes & invoices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Automated customer updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Daily or weekly internal summaries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Report generation</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">AI Assistants</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>FAQ and query-handling bots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Internal lookup assistants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Drafting emails & reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Intelligent form completion</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-r from-purple/10 to-primary/10 border border-primary/30 text-center">
            <p className="text-xl font-semibold">
              Automation pays for itself quickly.
              <br />
              <span className="gradient-text">It reduces mistakes, accelerates turnaround and removes countless hours of admin.</span>
            </p>
          </div>
        </div>
      </Section>

      {/* Amplify Section */}
      <Section id="amplify" gradient="radial" padding="lg">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                <LineChart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-bold">Amplify</h2>
                <p className="text-xl text-foreground/60">Understand Your Business. Improve Your Business.</p>
              </div>
            </div>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Once your data starts flowing through clean tools and automated workflows, we amplify your business through clarity and insight.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Dashboards</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Profit & loss snapshots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Margin per job or customer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Pipeline & workload</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Performance tracking</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Operational Visibility</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>See where work is stuck</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Identify slowest steps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Find high-waste processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Spot automation opportunities</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Decision Support</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Simple prioritisation models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>What to fix next</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Impact estimates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>AI-powered insights</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-r from-purple/10 to-primary/10 border border-primary/30 text-center">
            <p className="text-xl font-semibold">
              Most SMEs make decisions in the dark.
              <br />
              <span className="gradient-text">We give you visibility that normally only large companies have - without the cost or complexity.</span>
            </p>
          </div>
        </div>
      </Section>

      {/* What Makes Us Different */}
      <Section className="bg-navy-light" padding="lg">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              What makes our delivery <span className="gradient-text">different</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Free working prototype',
                description: "We don't talk for six weeks - we build. You get something real to try before spending anything.",
              },
              {
                icon: Clock,
                title: 'Build in days, not months',
                description: 'AI-assisted development, 30 years of experience, reusable components, and practical scope control.',
              },
              {
                icon: Users,
                title: 'You keep full control',
                description: 'Buy credits when you want improvements. No retainers. No long contracts.',
              },
              {
                icon: Sparkles,
                title: 'Everything is tailored',
                description: "We don't impose frameworks or processes. We amplify your way of working.",
              },
            ].map((item, i) => (
              <Card key={i} className="text-center space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple flex items-center justify-center mx-auto">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section gradient="hero" padding="lg">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to <span className="gradient-text">build your operating system?</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Start with a free discovery session. We'll uncover what's blocking your business, map the biggest opportunities, and build a working prototype — before you spend anything.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="group">
              Start with a free prototype
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Book a short intro call
            </Button>
          </div>
        </div>
      </Section>
    </main>
  )
}
