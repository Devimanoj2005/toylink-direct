import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Colorful toys for kids"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="relative container mx-auto px-4 py-24 md:py-36 lg:py-44">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-4">
            Toys That Make{" "}
            <span className="text-accent">Every Day</span>{" "}
            a Playday! 🎉
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg font-medium">
            Browse our amazing collection and order directly via WhatsApp — no account needed!
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="hero-gradient text-primary-foreground font-bold text-base px-8 rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <Link to="/products">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
