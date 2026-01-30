import { useState } from "react";
import { Headphones, PiggyBank, Plane, Shield, Heart, FileText, Fuel, Sparkles, Stethoscope, AlertTriangle, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const Services = () => {
  const [activeTab, setActiveTab] = useState<"umbrella" | "umbrella-plus">("umbrella");

  const umbrellaFeatures = [
    { icon: Headphones, title: "Dedicated Support Team", description: "Our team of experts are here to help you 24/7" },
    { icon: PiggyBank, title: "Workplace Pensions", description: "Plan for your future with any pension provider of your choice" },
    { icon: Plane, title: "Employee Holiday Pay", description: "Get paid for 28 days a year—not everyone can say that" },
    { icon: Shield, title: "£20m Insurance Cover", description: "We make sure you're protected from the unexpected" },
    { icon: Heart, title: "Statutory Payments", description: "Sick pay, maternity/paternity pay—all covered" },
    { icon: Sparkles, title: "Save £1,200/year", description: "Huge savings to be made with exclusive member rewards" },
  ];

  const umbrellaPlusFeatures = [
    { icon: Stethoscope, title: "Employee Assistance", description: "Wellbeing support including counselling and CBT" },
    { icon: FileText, title: "Tax Return Sorted", description: "Stress-free tax returns with an accredited accountant" },
    { icon: Fuel, title: "Discount Fuel Card", description: "Save money when refuelling your car" },
    { icon: Sparkles, title: "Save £1,800/year", description: "Even more savings with Umbrella+ benefits" },
    { icon: Headphones, title: "24/7 GP Helpline", description: "For you, your partner and your children" },
    { icon: AlertTriangle, title: "Personal Accident Cover", description: "Coverage for work-related and commuting accidents" },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Two simple solutions for your contracting needs
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the package that works best for you. Both give you the freedom of contracting with the benefits of continuous employment.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("umbrella")}
            className={cn(
              "px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300",
              activeTab === "umbrella"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            Umbrella
          </button>
          <button
            onClick={() => setActiveTab("umbrella-plus")}
            className={cn(
              "px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 relative",
              activeTab === "umbrella-plus"
                ? "bg-[#E21B4D] text-white shadow-lg"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            Umbrella+
            <span className="absolute -top-2 -right-2 bg-[#E21B4D] text-white text-xs px-2 py-1 rounded-full">
              Popular
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          {activeTab === "umbrella" ? (
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">
                  With <span className="text-primary">Umbrella</span>, you get:
                </h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {umbrellaFeatures.map((feature, index) => (
                  <div key={index} className="card-feature flex gap-4">
                    <div className="icon-circle flex-shrink-0 w-12 h-12">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">
                  Everything in Umbrella, <span className="text-[#E21B4D] font-bold">plus</span>:
                </h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {umbrellaPlusFeatures.map((feature, index) => (
                  <div key={index} className="card-feature flex gap-4 border-2 border-[#E21B4D]/20">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#E21B4D]/10 text-[#E21B4D] flex-shrink-0">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Umbrella+ includes all Umbrella features */}
              <div className="mt-8 p-6 bg-secondary/50 rounded-2xl">
                <p className="font-semibold text-center mb-4">Plus all standard Umbrella benefits:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {umbrellaFeatures.map((feature, index) => (
                    <span key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      {feature.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
