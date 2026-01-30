import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold">
                Steady<span className="text-primary">Works</span>
              </span>
            </div>
            <p className="text-background/70 mb-6">
              The trusted umbrella company for UK contractors. FCSA accredited and HMRC compliant.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#how-it-works" className="text-background/70 hover:text-primary transition-colors">How it Works</a></li>
              <li><a href="#benefits" className="text-background/70 hover:text-primary transition-colors">Benefits</a></li>
              <li><a href="#services" className="text-background/70 hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#get-a-quote" className="text-background/70 hover:text-primary transition-colors">Get a Quote</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Pay Calculator</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:08001234567" className="text-background/70 hover:text-primary transition-colors">0800 123 4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:hello@steadyworks.co.uk" className="text-background/70 hover:text-primary transition-colors">hello@steadyworks.co.uk</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-background/70">123 Business Park<br />London, EC1A 1BB</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} SteadyWorks. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-background/50 hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/50 hover:text-primary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-background/50 hover:text-primary text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
