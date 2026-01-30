import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dayRate: "",
    startDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request submitted! We'll be in touch within 24 hours.");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", dayRate: "", startDate: "" });
  };

  const benefits = [
    "Free, no-obligation quote",
    "Response within 24 hours",
    "Dedicated account manager",
  ];

  return (
    <section id="get-a-quote" className="section-dark section-curve-top py-32 lg:py-40 relative">
      <div className="container mx-auto px-4 relative z-10 pt-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="text-white">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get Started</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Get your free <span className="text-gradient">quote</span> today
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Ready to simplify your contractor payments? Fill in the form and our team will get back to you with a personalised quote within 24 hours.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <p className="text-white/70 text-sm">
                "SteadyPaye made my transition to contracting seamless. Their support team is always available and my payments arrive on time every single week."
              </p>
              <p className="mt-4 font-semibold text-white">— Sarah M., IT Contractor</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">Request a Quote</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Smith"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="07123 456789"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dayRate">Expected Day Rate</Label>
                <Select
                  value={formData.dayRate}
                  onValueChange={(value) => setFormData({ ...formData, dayRate: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your day rate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-200">Under £200</SelectItem>
                    <SelectItem value="200-300">£200 - £300</SelectItem>
                    <SelectItem value="300-400">£300 - £400</SelectItem>
                    <SelectItem value="400-500">£400 - £500</SelectItem>
                    <SelectItem value="500-plus">£500+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="startDate">When do you want to start?</Label>
                <Select
                  value={formData.startDate}
                  onValueChange={(value) => setFormData({ ...formData, startDate: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select start date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">As soon as possible</SelectItem>
                    <SelectItem value="1-week">Within 1 week</SelectItem>
                    <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                    <SelectItem value="1-month">Within 1 month</SelectItem>
                    <SelectItem value="not-sure">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full btn-accent text-lg py-6">
                Get My Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
