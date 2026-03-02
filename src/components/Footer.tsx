import { Link } from "react-router-dom";
import { ShoppingBag, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="h-6 w-6 text-accent" />
              <span className="font-display text-xl font-bold text-primary-foreground">ToyJoy</span>
            </div>
            <p className="text-sm leading-relaxed">
              Bringing joy to kids with high-quality, affordable toys. Order easily via WhatsApp!
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
              <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm">
              <span>📱 +91 98765 43210</span>
              <span>📧 hello@toyjoy.in</span>
              <span>📍 Kochi, Kerala, India</span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs text-primary-foreground/50">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-3 w-3 text-primary" /> ToyJoy © 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
