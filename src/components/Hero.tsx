import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, BadgeCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  return (
    <section className="relative section-curve-bottom pt-32 pb-32 lg:pt-40 lg:pb-40 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-up">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white/90">FCSA Accredited Umbrella Company</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 animate-fade-up delay-100">
            Your work, your paye,{" "}
            <span className="text-gradient relative">
              your way
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 2 150 2 198 8" stroke="hsl(var(--accent))" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
            .
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-up delay-200">
            Join thousands of UK contractors who trust SteadyWorks for compliant, hassle-free umbrella employment. Get paid on time, every time.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up delay-300">
            <Button className="btn-accent text-lg" asChild>
              <a href="#get-a-quote">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button className="btn-outline text-lg" asChild>
              <a href="#how-it-works">See How it Works</a>
            </Button>
          </div>

          {/* Gold HMRC Compliance Stamp */}
          <div className="flex justify-center mb-12 animate-fade-up delay-400">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#D4AF37] bg-gradient-to-br from-[#FFD700] via-[#D4AF37] to-[#B8860B] flex items-center justify-center shadow-2xl transform rotate-[-8deg] hover:rotate-0 transition-transform duration-300">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-[#B8860B]/50 flex flex-col items-center justify-center text-center p-2">
                  <span className="text-[#3D2914] font-extrabold text-xs md:text-sm uppercase tracking-wider">100%</span>
                  <span className="text-[#3D2914] font-extrabold text-sm md:text-lg uppercase tracking-tight leading-tight">HMRC</span>
                  <span className="text-[#3D2914] font-extrabold text-xs md:text-sm uppercase tracking-wider">Compliant</span>
                  <div className="w-12 h-0.5 bg-[#3D2914]/40 my-1"></div>
                  <span className="text-[#3D2914]/70 text-[8px] md:text-[10px] font-semibold uppercase">Verified</span>
                </div>
              </div>
              {/* Shine effect */}
              <div className="absolute top-2 left-4 w-6 h-6 md:w-8 md:h-8 bg-white/30 rounded-full blur-sm"></div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 animate-fade-up delay-400">
            <div className="flex items-center gap-3 text-white/70">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">Same Day</p>
                <p className="text-sm">Setup</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">£20M+</p>
                <p className="text-sm">Insurance Cover</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
