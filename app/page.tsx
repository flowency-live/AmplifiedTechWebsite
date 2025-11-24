import { ArrowRight, Zap, Building2, Gauge, LineChart, CheckCircle2, Sparkles } from 'lucide-react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

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
              <span>Build · Automate · Amplify</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              We build the digital capability you don't have{' '}
              <span className="gradient-text">
                - or never knew you needed.
              </span>{' '}
              Fast.
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Don't get left behind by the AI revolution. We build what your business needs - quickly and without complexity.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="group">
                Start with a free working prototype
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                See what we can build
              </Button>
            </div>

            {/* Support line */}
            <p className="text-sm text-foreground/50 pt-4">
              Still running your business on spreadsheets? Let's fix that.
            </p>
          </div>
        </Container>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-32 bg-navy-light">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold">
                Most SMEs are being held back by{' '}
                <span className="gradient-text">their own tools</span>
              </h2>
            </div>

            <div className="grid gap-6 md:gap-8">
              {[
                "You're running core operations on spreadsheets and email threads.",
                "Important information lives in people's heads, shared drives, or old systems.",
                "Admin work eats time you should be spending on customers and growth.",
                "You want to use AI and automation, but don't know where to start.",
                "Agencies want big budgets, long timelines and vague \"transformation\" projects.",
              ].map((problem, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center mt-1">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                  </div>
                  <p className="text-lg text-foreground/80">{problem}</p>
                </div>
              ))}
            </div>

            <div className="text-center space-y-6 pt-8">
              <p className="text-xl text-foreground/60">
                Meanwhile, your competitors are getting faster, clearer and more automated.
              </p>
              <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-purple/10 to-primary/10 border border-primary/30">
                <p className="text-2xl font-semibold">
                  You don't need a six-month project.<br />
                  You need <span className="gradient-text">the right tools, built fast, around the way you already work.</span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What We Do Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-navy to-navy-light relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple/10 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                We build, automate and amplify<br />
                <span className="gradient-text">the way your business runs</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Build */}
              <div className="p-8 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 space-y-6 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Build</h3>
                  <p className="text-foreground/70">
                    Websites, apps and internal tools that actually match how your business works.
                  </p>
                  <ul className="space-y-2 text-foreground/60">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Lightweight CRMs and mini-ERPs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Job and workflow trackers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Customer portals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Operational dashboards</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Automate */}
              <div className="p-8 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 space-y-6 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Automate</h3>
                  <p className="text-foreground/70">
                    We remove repetitive work and glue your existing tools together.
                  </p>
                  <ul className="space-y-2 text-foreground/60">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Automating manual admin and data entry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Generating docs and reports automatically</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Simple AI assistants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Smart notifications and reminders</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Amplify */}
              <div className="p-8 rounded-3xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 space-y-6 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple flex items-center justify-center group-hover:scale-110 transition-transform">
                  <LineChart className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Amplify</h3>
                  <p className="text-foreground/70">
                    We help you see and improve the whole picture.
                  </p>
                  <ul className="space-y-2 text-foreground/60">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Clear visibility on jobs and throughput</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Simple views of margin and profitability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Bottleneck and delay hotspots</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Automation opportunity mapping</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32 bg-navy-light">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                How it works
              </h2>
              <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
                We keep this as simple and low-risk as possible.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Free discovery session with a working prototype',
                  description: 'We spend time with you to understand how the business actually runs, find the biggest sources of waste, and identify where a small tool could unlock big value.',
                  highlight: 'You don\'t pay for this. If it\'s not useful, you walk away.',
                },
                {
                  step: '2',
                  title: 'Build in a week',
                  description: 'We agree what we\'re going to build, what "good" looks like, and a fixed price. Then we build it - typically within a week.',
                  highlight: 'No long project plans. Just a working system you can start using.',
                },
                {
                  step: '3',
                  title: 'Improve and extend with credits',
                  description: 'Buy a block of credits and call off improvements when you\'re ready. Add new features, integrations or automations as your needs grow.',
                  highlight: 'You stay in control of spend. We focus on changes that clearly improve your business.',
                },
              ].map((item, i) => (
                <div key={i} className="space-y-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                    <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                      <p className="text-sm text-primary-light font-medium">{item.highlight}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-navy to-navy-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple/10 via-transparent to-primary/10" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to stop running your business<br />
              <span className="gradient-text">on spreadsheets?</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Get a free working prototype in 24 hours. No commitment. No pressure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="group">
                Start with a free working prototype
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Book a short intro call
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
