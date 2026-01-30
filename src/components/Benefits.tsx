import { Rocket, Award, Calculator, Calendar } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Workplace Freedom",
      description: "Choose when, where and how you work. Get the flexibility and autonomy that comes with being a contractor.",
    },
    {
      icon: Award,
      title: "Employee Benefits",
      description: "All the statutory benefits of a traditional employee. Maternity, paternity and sick pay are all included.",
    },
    {
      icon: Calculator,
      title: "Tax Made Simple",
      description: "PAYE and National Insurance deductions made for you. Stay on the right side of HMRC without the stress.",
    },
    {
      icon: Calendar,
      title: "Continuous Employment",
      description: "Applying for mortgages and loans is much easier with continuous employment through one umbrella.",
    },
  ];

  return (
    <section id="benefits" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            And <span className="text-gradient">the benefits</span> of umbrella?
          </h2>
          <p className="text-muted-foreground text-lg">
            For most contractors, an umbrella company is the easiest way to get paid while enjoying all the benefits of employment.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-benefit group"
            >
              <div className="icon-circle mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
