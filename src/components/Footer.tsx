import { Link } from "react-router-dom";
import { ShoppingBag, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80 py-12 mt-16 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="hero-gradient rounded-xl p-1.5">
                <ShoppingBag className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-primary-foreground">
                Toy<span className="text-accent">Joy</span>
              </span>
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎈
              </motion.span>
            </div>
            <p className="text-sm leading-relaxed">
              Bringing joy to kids with high-quality, affordable toys! 🧸 Order easily via WhatsApp! 💚
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">🔗 Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className="hover:text-accent transition-colors">🏠 Home</Link>
              <Link to="/products" className="hover:text-accent transition-colors">🎁 Products</Link>
              <Link to="/about" className="hover:text-accent transition-colors">🌟 About Us</Link>
              <Link to="/contact" className="hover:text-accent transition-colors">📞 Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">📬 Contact</h4>
            <div className="flex flex-col gap-2 text-sm">
              <span>📱 +91 83019 22872</span>
              <span>📧 hello@toyjoy.in</span>
              <span>📍 Kochi, Kerala, India</span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs text-primary-foreground/50">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-3 w-3 text-primary animate-pulse" /> ToyJoy © 2026 🎪
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
