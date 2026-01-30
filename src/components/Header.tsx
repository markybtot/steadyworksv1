import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "How it Works", href: "#how-it-works" },
    { name: "Benefits", href: "#benefits" },
    { name: "Services", href: "#services" },
    { name: "Get a Quote", href: "#get-a-quote" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="SteadyWorks" className="h-12 w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 py-2 rounded-lg transition-all" asChild>
              <a href="#get-a-quote">Contractor Sign Up</a>
            </Button>
            <Button className="bg-[hsl(217,50%,35%)] hover:bg-[hsl(217,50%,30%)] text-white font-semibold px-5 py-2 rounded-lg transition-all" asChild>
              <a href="#get-a-quote">Agency Sign Up</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground font-medium transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full mt-2 rounded-lg" asChild>
                <a href="#get-a-quote">Contractor Sign Up</a>
              </Button>
              <Button className="bg-[hsl(217,50%,35%)] hover:bg-[hsl(217,50%,30%)] text-white font-semibold w-full mt-2 rounded-lg" asChild>
                <a href="#get-a-quote">Agency Sign Up</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
