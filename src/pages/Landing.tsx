import { useNavigate } from "react-router-dom";
import { ArrowRight, HardHat, Building2 } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.png";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 md:gap-12 px-4 sm:px-6 py-8 text-center w-full max-w-xl mx-auto">
        <img src={logo} alt="SteadyWorks" className="h-20 sm:h-24 md:h-32 w-auto drop-shadow-2xl border-4 border-white/80 rounded-xl p-2 sm:p-3 bg-white/10 backdrop-blur-sm" />

        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
            Welcome to <span className="text-gradient">SteadyWorks</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-md mx-auto">
            Your work, your paye, your way.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
          {/* Contractor Card */}
          <button
            onClick={() => navigate("/home")}
            className="group flex-1 relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.04] active:scale-[0.97]"
          >
            {/* Gradient bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-[hsl(217,80%,40%)] opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />
            {/* Glow */}
            <div className="absolute -inset-1 bg-primary/40 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col items-center gap-4 px-8 py-10">
              <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors duration-300">
                <HardHat className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="block text-sm text-white/60 mb-1 group-hover:text-white/80 transition-colors">I'm a</span>
                <span className="block text-2xl font-bold text-white">Contractor</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors text-sm font-medium">
                Get started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </button>

          {/* Agency Card */}
          <button
            onClick={() => navigate("/home")}
            className="group flex-1 relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.04] active:scale-[0.97]"
          >
            {/* Gradient bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-[hsl(15,90%,45%)] opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />
            {/* Glow */}
            <div className="absolute -inset-1 bg-accent/40 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col items-center gap-4 px-8 py-10">
              <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors duration-300">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="block text-sm text-white/60 mb-1 group-hover:text-white/80 transition-colors">I'm an</span>
                <span className="block text-2xl font-bold text-white">Agency</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors text-sm font-medium">
                Get started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
