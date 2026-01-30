import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PayCalculator = () => {
  const [rate, setRate] = useState<string>("40");
  const [expenses, setExpenses] = useState<string>("0");
  const [rateType, setRateType] = useState<"hour" | "day">("hour");
  const [weeklyPay, setWeeklyPay] = useState<number>(0);
  const [monthlyPay, setMonthlyPay] = useState<number>(0);

  useEffect(() => {
    calculatePay();
  }, [rate, expenses, rateType]);

  const calculatePay = () => {
    const rateValue = parseFloat(rate) || 0;
    const expensesValue = parseFloat(expenses) || 0;
    
    // Calculate weekly gross based on rate type
    // Assuming 40 hours per week or 5 days per week
    let weeklyGross = rateType === "hour" ? rateValue * 40 : rateValue * 5;
    
    // Add expenses (typically claimed back)
    weeklyGross += expensesValue;
    
    // UK Tax calculations (simplified 2024/25 rates)
    // Personal allowance: £12,570/year = £241.73/week
    // Basic rate: 20% on £12,571 - £50,270
    // Higher rate: 40% on £50,271+
    // NI: 8% on earnings between £242 - £967/week, 2% above
    
    const annualGross = weeklyGross * 52;
    const personalAllowance = 12570;
    
    // Calculate annual tax
    let annualTax = 0;
    if (annualGross > personalAllowance) {
      const taxableIncome = annualGross - personalAllowance;
      if (taxableIncome <= 37700) {
        annualTax = taxableIncome * 0.20;
      } else {
        annualTax = 37700 * 0.20 + (taxableIncome - 37700) * 0.40;
      }
    }
    
    // Calculate NI (simplified)
    const weeklyNIThreshold = 242;
    const weeklyNIUpperLimit = 967;
    let weeklyNI = 0;
    
    if (weeklyGross > weeklyNIThreshold) {
      if (weeklyGross <= weeklyNIUpperLimit) {
        weeklyNI = (weeklyGross - weeklyNIThreshold) * 0.08;
      } else {
        weeklyNI = (weeklyNIUpperLimit - weeklyNIThreshold) * 0.08 + (weeklyGross - weeklyNIUpperLimit) * 0.02;
      }
    }
    
    // Umbrella margin (typical £25-30/week)
    const umbrellaMargin = 25;
    
    // Calculate take-home
    const weeklyTax = annualTax / 52;
    const weeklyNet = weeklyGross - weeklyTax - weeklyNI - umbrellaMargin;
    
    setWeeklyPay(Math.max(0, weeklyNet));
    setMonthlyPay(Math.max(0, weeklyNet * 4.33));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-GB', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <section id="calculator" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Calculate your <span className="text-gradient">take-home pay</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Use our umbrella calculator to estimate your weekly and monthly earnings.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border-2 border-primary/20 rounded-3xl p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Left side - Inputs */}
              <div className="space-y-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center">
                  Umbrella calculator
                </h3>

                {/* Rate Input */}
                <div>
                  <label className="block text-primary font-semibold text-center mb-3">
                    The Umbrella rate is..
                  </label>
                  <div className="flex items-center bg-background rounded-lg border border-border overflow-hidden">
                    <span className="px-4 py-3 bg-muted text-muted-foreground font-medium">£</span>
                    <input
                      type="number"
                      value={rate}
                      onChange={(e) => setRate(e.target.value)}
                      className="flex-1 px-4 py-3 text-center text-lg font-semibold bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      min="0"
                      step="0.01"
                    />
                  </div>
                </div>

                {/* Expenses Input */}
                <div>
                  <label className="block text-primary font-semibold text-center mb-3">
                    Your Expenses are..
                  </label>
                  <div className="flex items-center bg-background rounded-lg border border-border overflow-hidden">
                    <span className="px-4 py-3 bg-muted text-muted-foreground font-medium">£</span>
                    <input
                      type="number"
                      value={expenses}
                      onChange={(e) => setExpenses(e.target.value)}
                      className="flex-1 px-4 py-3 text-center text-lg font-semibold bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      min="0"
                      step="0.01"
                    />
                  </div>
                </div>

                {/* Rate Type Toggle */}
                <div>
                  <label className="block text-primary font-semibold text-center mb-3">
                    Per
                  </label>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setRateType("hour")}
                      className={cn(
                        "flex-1 py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300",
                        rateType === "hour"
                          ? "bg-[hsl(217,50%,25%)] text-white"
                          : "bg-background border border-border text-foreground hover:bg-muted"
                      )}
                    >
                      Hour
                    </button>
                    <button
                      onClick={() => setRateType("day")}
                      className={cn(
                        "flex-1 py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300",
                        rateType === "day"
                          ? "bg-[hsl(217,50%,25%)] text-white"
                          : "bg-background border border-border text-foreground hover:bg-muted"
                      )}
                    >
                      Day
                    </button>
                  </div>
                </div>
              </div>

              {/* Right side - Results */}
              <div className="flex flex-col justify-center text-center space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Your take home pay is...
                </h3>

                {/* Weekly */}
                <div>
                  <p className="text-4xl md:text-5xl font-extrabold text-primary">
                    £{formatCurrency(weeklyPay)}
                  </p>
                  <p className="text-muted-foreground mt-1">Per week</p>
                </div>

                {/* Monthly */}
                <div>
                  <p className="text-4xl md:text-5xl font-extrabold text-primary">
                    £{formatCurrency(monthlyPay)}
                  </p>
                  <p className="text-muted-foreground mt-1">Per month</p>
                </div>

                {/* Disclaimer */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The figures provided in this illustration are an estimate of your potential take-home earnings based on a 40 hour week and a 1257L tax code. For a full breakdown of assumptions{" "}
                  <a href="#get-a-quote" className="text-primary underline hover:text-primary/80">
                    click here
                  </a>
                  . If you would like a personalised, detailed breakdown based on your individual circumstances, please contact our Onboarding team.
                </p>

                {/* CTA Button */}
                <Button className="btn-accent mx-auto" asChild>
                  <a href="#get-a-quote">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayCalculator;
