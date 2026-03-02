import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const floatingEmojis = ["🧸", "🚗", "🎨", "🧩", "⭐", "🎈"];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[520px] md:min-h-[600px]">
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Colorful toys for kids"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Floating emojis */}
      {floatingEmojis.map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-3xl md:text-5xl select-none pointer-events-none hidden md:block"
          style={{
            top: `${15 + (i * 12) % 60}%`,
            right: `${5 + (i * 8) % 30}%`,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, i % 2 === 0 ? 10 : -10, 0],
          }}
          transition={{
            duration: 2.5 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        >
          {emoji}
        </motion.span>
      ))}

      <div className="relative container mx-auto px-4 py-24 md:py-36 lg:py-44">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-accent/90 text-accent-foreground px-4 py-1.5 rounded-full font-bold text-sm mb-6"
          >
            <Sparkles className="h-4 w-4" />
            Free Delivery on Orders Above ₹999!
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-4">
            Toys That Make{" "}
            <motion.span
              className="text-accent inline-block"
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Every Day
            </motion.span>{" "}
            a Playday! 🎉
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg font-medium">
            Browse our amazing collection and order directly via WhatsApp — no account needed!
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="hero-gradient text-primary-foreground font-bold text-base px-8 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <Link to="/products">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="lg" className="bg-primary-foreground/20 backdrop-blur text-primary-foreground border-primary-foreground/30 font-bold text-base px-8 rounded-full hover:bg-primary-foreground/30">
                <Link to="/products?category=educational">
                  🎓 Educational Toys
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
