import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.png";

const VoltageButton = ({ label, onClick }: { label: string; onClick: () => void }) => (
  <div className="voltage-button">
    <button onClick={onClick}>{label}</button>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 234 61"
      xmlSpace="preserve"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur className="blur" result="coloredBlur" stdDeviation="2" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        className="line-1"
        d="M234 half C234 half, 0 half, 0 half"
        style={{ "--half": "30.5" } as React.CSSProperties}
        fill="none"
        strokeWidth="2"
      />
      <path
        className="line-2"
        d="M234 half C234 half, 0 half, 0 half"
        style={{ "--half": "30.5" } as React.CSSProperties}
        fill="none"
        strokeWidth="2"
      />
    </svg>
    <div className="dots">
      <div className="dot dot-1" />
      <div className="dot dot-2" />
      <div className="dot dot-3" />
      <div className="dot dot-4" />
      <div className="dot dot-5" />
    </div>
  </div>
);

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

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full justify-center items-center">
          <VoltageButton label="I'm a Contractor" onClick={() => navigate("/contractors")} />
          <VoltageButton label="I'm an Agency" onClick={() => navigate("/agencies")} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
