import { CheckCircle2 } from "lucide-react";
import umbrellaIllustration from "@/assets/umbrella-illustration.png";

const WhatIsUmbrella = () => {
  const points = [
    { text: "Become employed with all the benefits of a permanent role", highlight: null },
    { text: "Tax and NI handled correctly ", highlight: "stay fully compliant" },
    { text: "Continuous employment record for mortgages & loans", highlight: null },
    { text: "Work multiple contracts through one employer", highlight: null },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient">What</span> exactly is umbrella?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              An umbrella company employs contractors working on temporary assignments or contracts. 
              Joining a compliant umbrella company like SteadyWorks gives you increased flexibility, 
              while taking advantage of all the rights and benefits a permanent employee would typically receive.
            </p>

            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    {point.text}
                    {point.highlight && <span className="text-gradient font-bold">{point.highlight}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Illustration */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Background shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-6 scale-105" />
              
              {/* Card */}
              <div className="relative bg-card rounded-3xl p-8 shadow-xl">
                <div className="flex justify-center mb-6">
                  <img 
                    src={umbrellaIllustration} 
                    alt="Umbrella illustration" 
                    className="w-44 h-44 object-contain"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">The Easiest Way to Get Paid</h3>
                  <p className="text-muted-foreground">
                    For most contractors, an umbrella company is the simplest, most compliant way to receive payment for your work.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 bg-secondary rounded-xl">
                    <p className="text-3xl font-bold text-primary">10k+</p>
                    <p className="text-sm text-muted-foreground">Contractors</p>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-xl">
                    <p className="text-3xl font-bold text-primary">99%</p>
                    <p className="text-sm text-muted-foreground">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsUmbrella;
