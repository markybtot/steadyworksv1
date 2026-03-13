import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.png";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-10 px-6 text-center">
        <img src={logo} alt="SteadyWorks" className="h-16 md:h-20 w-auto drop-shadow-lg" />

        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
            Welcome to <span className="text-gradient">SteadyWorks</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-md mx-auto">
            Your work, your paye, your way.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <button
            onClick={() => navigate("/home")}
            className="group flex-1 relative rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-md px-8 py-6 text-white font-semibold text-lg transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-[1.03] hover:shadow-[0_0_40px_-10px_hsl(217_70%_55%/0.5)] active:scale-[0.98]"
          >
            <span className="block text-sm text-white/60 mb-1 group-hover:text-white/80 transition-colors">I'm a</span>
            Contractor
            <ArrowRight className="inline-block w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button
            onClick={() => navigate("/home")}
            className="group flex-1 relative rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-md px-8 py-6 text-white font-semibold text-lg transition-all duration-300 hover:bg-accent hover:border-accent hover:scale-[1.03] hover:shadow-[0_0_40px_-10px_hsl(24_95%_53%/0.5)] active:scale-[0.98]"
          >
            <span className="block text-sm text-white/60 mb-1 group-hover:text-white/80 transition-colors">I'm an</span>
            Agency
            <ArrowRight className="inline-block w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
