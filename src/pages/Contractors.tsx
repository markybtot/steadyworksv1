import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PayCalculator from "@/components/PayCalculator";
import QuoteForm from "@/components/QuoteForm";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Banknote, FileCheck, MessageCircle, UserPlus, Wallet, Shield, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const Contractors = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-32 lg:pt-44 lg:pb-44 overflow-hidden section-curve-bottom">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                <span className="text-gradient">Your Pay.</span>
                <br />
                We keep it real,
                <br />
                you keep it all.
              </h1>
              <p className="text-lg md:text-xl text-white/75 max-w-xl mb-10">
                Join thousands of UK contractors who trust SteadyWorks for transparent, compliant umbrella payroll. Every penny accounted for.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-accent text-lg" asChild>
                  <a href="#get-a-quote">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button className="btn-outline text-lg" asChild>
                  <a href="#how-it-works">How It Works</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why SteadyWorks Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Why <span className="text-gradient">SteadyWorks</span>?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The umbrella industry is constantly changing. We exist to lead the way. It's time for a new industry standard, and we're here to raise the bar.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-primary rounded-2xl p-8 md:p-10 text-primary-foreground group hover:scale-[1.02] transition-transform duration-300">
                <Zap className="w-10 h-10 mb-6 opacity-80" />
                <h3 className="text-2xl md:text-3xl font-extrabold mb-3">Quick &gt;&gt; Slick</h3>
                <p className="text-primary-foreground/80 text-lg">
                  Get a text at the same time every Thursday to confirm your salary payment. No chasing. No guessing.
                </p>
              </div>

              <div className="bg-accent rounded-2xl p-8 md:p-10 text-accent-foreground group hover:scale-[1.02] transition-transform duration-300">
                <Banknote className="w-10 h-10 mb-6 opacity-80" />
                <h3 className="text-2xl md:text-3xl font-extrabold mb-3">Simple As</h3>
                <p className="text-accent-foreground/80 text-lg">
                  Your money's in your bank account first thing every Friday. Ready for the weekend.
                </p>
              </div>

              <div className="section-dark rounded-2xl p-8 md:p-10 group hover:scale-[1.02] transition-transform duration-300">
                <FileCheck className="w-10 h-10 mb-6 opacity-80 text-white" />
                <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-white">Bang On The Money</h3>
                <p className="text-white/80 text-lg">
                  You get a clear, accurate, audited payslip. Always. Every deduction explained, every penny accounted for.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - 3 Steps */}
        <section id="how-it-works" className="py-20 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                It's easy as <span className="text-gradient">1, 2, 3</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Getting set up with SteadyWorks is quick and painless. Here's how it works.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Step 1 */}
              <div className="relative text-center group">
                <div className="text-6xl md:text-7xl font-extrabold text-primary/15 mb-4">01.</div>
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Chat</h3>
                <p className="text-muted-foreground">
                  Book a call. You talk, we talk. Once we're done, we get to work. No jargon, no hard sell.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative text-center group">
                <div className="text-6xl md:text-7xl font-extrabold text-primary/15 mb-4">02.</div>
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <UserPlus className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Register</h3>
                <p className="text-muted-foreground">
                  If we're a good fit, we go for it. We always tell you what you need to know. Straight and to the point.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative text-center group">
                <div className="text-6xl md:text-7xl font-extrabold text-primary/15 mb-4">03.</div>
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <Wallet className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Paid</h3>
                <p className="text-muted-foreground">
                  24/7, 360° pay visibility. Wake up Friday with your cash waiting in your bank. Every single week.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button className="btn-accent text-lg" asChild>
                <a href="#get-a-quote">
                  Let's Get Paid
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Pay Calculator */}
        <PayCalculator />

        {/* Payslips Transparency Section */}
        <section className="py-20 lg:py-32 section-dark section-curve-top section-curve-bottom">
          <div className="container mx-auto px-4 relative z-10 pt-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Payslips <span className="text-gradient">laid bare.</span>
                </h2>
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  When contractors aren't paid what they should be, it hurts the whole industry. Everything we do at SteadyWorks is fully audited and transparent.
                </p>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  Everyone in the supply chain can see exactly where the money goes. It's trackable and traceable all the way through, right until it's delivered safely into your bank account every Friday morning.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    "Real-time payslip auditing on every payment",
                    "Full transparency on all deductions",
                    "Every penny accounted for, every time",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 max-w-md">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-10 h-10 text-primary" />
                    <div>
                      <h3 className="text-xl font-bold text-white">Fully Compliant</h3>
                      <p className="text-white/60 text-sm">HMRC approved processes</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed mb-6">
                    Every single payment we make is subject to rigorous compliance checks. As a contractor, this guarantees you get paid every penny you've earned, 100% of the time.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <p className="text-2xl font-bold text-primary">100%</p>
                      <p className="text-xs text-white/60">Compliant</p>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <p className="text-2xl font-bold text-primary">£20M+</p>
                      <p className="text-xs text-white/60">Insurance Cover</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payroll To Count On */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Payroll to <span className="text-gradient">count on</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                You work hard. So when payday comes around you deserve to get every penny you've earned. We don't mess around with deductions. We only take off what we legally have to, and you can see every part of your payslip with full transparency.
              </p>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                We've been standing up for contractors and putting your needs front and centre of our business. We're in your corner. Let's chat about how we can get you paid, fairly.
              </p>
              <Button className="btn-accent text-lg" asChild>
                <a href="#get-a-quote">
                  Speak to SteadyWorks
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contractors;
