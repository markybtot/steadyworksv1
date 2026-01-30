import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock } from "lucide-react";
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
          <div className="inline-flex items-center gap-2 bg-[#E21B4D] rounded-full px-4 py-2 mb-8 animate-fade-up">
            <Shield className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">100% HMRC Compliant</span>
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
