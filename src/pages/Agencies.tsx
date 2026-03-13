import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Settings2, Eye, ShieldCheck, Clock, FileSearch, Phone, CheckCircle2, Handshake, Trophy, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const Agencies = () => {
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
                Umbrella payroll.
                <br />
                <span className="text-gradient">Paid. On time.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/75 max-w-xl mb-10">
                Reliable payroll when you need it most. Umbrella PAYE, PEO, CIS and bespoke payment models — tailored to your agency.
              </p>
              <Button className="btn-accent text-lg" asChild>
                <a href="#get-started">
                  Let's Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Value Props - 3 Cards */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-primary rounded-2xl p-8 md:p-10 text-primary-foreground group hover:scale-[1.02] transition-transform duration-300">
                <TrendingUp className="w-10 h-10 mb-6 opacity-80" />
                <h3 className="text-2xl md:text-3xl font-extrabold mb-3">Get On With Growth</h3>
                <p className="text-primary-foreground/80 text-lg">
                  We take care of payroll, you build your empire. Focus on what matters most — growing your business.
                </p>
              </div>

              <div className="bg-accent rounded-2xl p-8 md:p-10 text-accent-foreground group hover:scale-[1.02] transition-transform duration-300">
                <Settings2 className="w-10 h-10 mb-6 opacity-80" />
                <h3 className="text-2xl md:text-3xl font-extrabold mb-3">We Flex, So You Can Too</h3>
                <p className="text-accent-foreground/80 text-lg">
                  We don't do "off the peg". Our services are tailored to fit your agency's unique needs.
                </p>
              </div>

              <div className="section-dark rounded-2xl p-8 md:p-10 group hover:scale-[1.02] transition-transform duration-300">
                <Eye className="w-10 h-10 mb-6 opacity-80 text-white" />
                <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-white">360° Transparency</h3>
                <p className="text-white/80 text-lg">
                  Get full clarity through our due diligence platform, 24/7. Every penny accounted for.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* You Deserve The Best */}
        <section className="py-20 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-primary font-semibold text-lg mb-3">We've got your back, so you can grow.</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                You deserve <span className="text-gradient">the best</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Compliance */}
              <div className="card-benefit group">
                <div className="icon-circle mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Compliance As Standard</h3>
                <p className="text-muted-foreground">
                  We prove full supply chain compliance with rigorous certification. Fit-and-proper person tests, legal examinations, and full due diligence — all standard.
                </p>
              </div>

              {/* Pay Minus Stress */}
              <div className="card-benefit group">
                <div className="icon-circle mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Pay Minus The Stress</h3>
                <p className="text-muted-foreground">
                  Your contractors get a text on Thursday confirming their payments. Money hits their bank before they wake up on Friday. No more endless phone calls.
                </p>
              </div>

              {/* Trust Through Transparency */}
              <div className="card-benefit group">
                <div className="icon-circle mb-6 group-hover:scale-110 transition-transform">
                  <FileSearch className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Trust Through Transparency</h3>
                <p className="text-muted-foreground">
                  Every contractor gets a real-time audited payslip. You get a full monthly report demonstrating compliance and ongoing due diligence has been met.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Platform */}
        <section className="py-20 lg:py-32 section-dark section-curve-top section-curve-bottom">
          <div className="container mx-auto px-4 relative z-10 pt-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Total <span className="text-gradient">visibility</span> over your payroll
                </h2>
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  Our online platform allows you to see, live, what's happening to your money. From invoice, to payroll run, to RTI submitted — it's all there, every penny accounted for and balanced.
                </p>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  Access every payslip anytime, 24/7. No need to chase us when an internal audit comes around. And the best part? This is all included as standard — free of charge.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    "Live invoice-to-payment tracking",
                    "24/7 access to every payslip",
                    "Full monthly compliance reports",
                    "Free of charge — included as standard",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button className="btn-accent text-lg" asChild>
                  <a href="#get-started">
                    Book A Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>

              <div className="flex justify-center">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 max-w-md w-full">
                  <div className="space-y-6">
                    {/* Mock dashboard preview */}
                    <div className="flex items-center gap-3 mb-4">
                      <Eye className="w-8 h-8 text-primary" />
                      <h3 className="text-xl font-bold text-white">SteadyWorks Portal</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                        <span className="text-white/70 text-sm">Invoices Processed</span>
                        <span className="text-primary font-bold">1,247</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                        <span className="text-white/70 text-sm">RTI Submitted</span>
                        <span className="text-primary font-bold">100%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                        <span className="text-white/70 text-sm">Compliance Score</span>
                        <span className="text-primary font-bold">A+</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                        <span className="text-white/70 text-sm">On-Time Payments</span>
                        <span className="text-primary font-bold">99.9%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner With Us - 3 columns */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">It starts with you</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Why <span className="text-gradient">partner</span> with us?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <Handshake className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Let's Get Friendly</h3>
                <p className="text-muted-foreground">
                  Every business works differently, so we work differently for your business. We understand where you are today to develop a solution for your tomorrow.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <Trophy className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Stand Out From The Crowd</h3>
                <p className="text-muted-foreground">
                  You're not the same as your competition. So your payroll partner shouldn't be either. We fit our services to exactly what you need.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">We Raise The Bar</h3>
                <p className="text-muted-foreground">
                  We smash the status quo to improve standards across the board. We make your experience smooth, so you can focus on what you do best.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Payroll To Count On */}
        <section className="py-20 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Payroll to <span className="text-gradient">count on</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  When a contractor gets the wrong pay, it causes more than just a headache. It impacts your entire reputation — and can lose you a whole heap of goodwill.
                </p>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  No one wants to start their Friday morning with a barrage of complaints from contractors. That's why we forensically audit every payslip, so you know every penny is accounted for.
                </p>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  You and your team get to ease into the weekend, knowing your contractors are happy. And more importantly, paid what they're due.
                </p>
                <Button className="btn-accent text-lg" asChild>
                  <a href="#get-started">
                    Let's Talk
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>

              <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-4 max-w-sm">
                  <div className="bg-card rounded-2xl p-6 text-center shadow-lg">
                    <p className="text-3xl font-bold text-primary mb-1">100%</p>
                    <p className="text-sm text-muted-foreground">Payslip Accuracy</p>
                  </div>
                  <div className="bg-card rounded-2xl p-6 text-center shadow-lg">
                    <p className="text-3xl font-bold text-primary mb-1">24/7</p>
                    <p className="text-sm text-muted-foreground">Portal Access</p>
                  </div>
                  <div className="bg-card rounded-2xl p-6 text-center shadow-lg">
                    <p className="text-3xl font-bold text-primary mb-1">£20M+</p>
                    <p className="text-sm text-muted-foreground">Insurance Cover</p>
                  </div>
                  <div className="bg-card rounded-2xl p-6 text-center shadow-lg">
                    <p className="text-3xl font-bold text-primary mb-1">0</p>
                    <p className="text-sm text-muted-foreground">Hidden Fees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Contact Section */}
        <section id="get-started" className="section-dark section-curve-top py-32 lg:py-40 relative">
          <div className="container mx-auto px-4 relative z-10 pt-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to transform <span className="text-gradient">your payroll</span>?
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                Shall we take payroll off your plate? Get in touch today and let's discuss how SteadyWorks can support your agency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-accent text-lg" asChild>
                  <a href="tel:08001234567">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us Now
                  </a>
                </Button>
                <Button className="btn-outline text-lg" asChild>
                  <a href="mailto:hello@steadyworks.co.uk">
                    Send Us An Email
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Agencies;
