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
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-3">
            Welcome to <span className="text-gradient">SteadyWorks</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-md mx-auto">
            Your work, your paye, your way.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
          <button
            onClick={() => navigate("/contractors")}
            className="landing-btn flex-1"
          >
            I'm a Contractor
          </button>

          <button
            onClick={() => navigate("/agencies")}
            className="landing-btn flex-1"
          >
            I'm an Agency
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
