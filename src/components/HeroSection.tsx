import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Gift, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_NUMBER } from "@/data/products";
import heroBanner from "@/assets/hero-banner.jpg";

const floatingEmojis = ["🧸", "🎈", "🚀", "🦄", "🎪", "⭐", "🎀", "🌈", "🎁", "🍭", "🎠", "🪁"];

const HeroSection = () => {
  return (
    <section className="relative bg-background min-h-[560px] md:min-h-[650px] flex items-center overflow-hidden bg-confetti">
      {/* Floating decorative emojis */}
      {floatingEmojis.map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl md:text-4xl opacity-25 pointer-events-none select-none"
          style={{
            top: `${8 + (i * 11) % 80}%`,
            left: `${3 + (i * 13) % 92}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, i % 2 === 0 ? 20 : -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.25 }}
        >
          {emoji}
        </motion.span>
      ))}

      {/* Sparkle decorations */}
      <motion.div
        className="absolute top-8 right-8 md:top-12 md:right-16 bg-accent rounded-full p-3 z-10 hidden md:flex items-center justify-center shadow-lg glow-accent"
        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Sparkles className="h-6 w-6 text-accent-foreground" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-12 left-8 md:bottom-16 md:left-16 bg-secondary rounded-full p-2.5 z-10 hidden md:flex items-center justify-center shadow-lg"
        animate={{ y: [0, -10, 0], rotate: [0, -360] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Star className="h-5 w-5 text-secondary-foreground" />
      </motion.div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Bouncing tag */}
            <motion.div
              className="inline-flex items-center gap-2 candy-gradient-warm text-primary-foreground px-5 py-2 rounded-full text-sm font-bold mb-5 shadow-lg"
              animate={{ scale: [1, 1.05, 1], y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Gift className="h-4 w-4" />
              🎉 Best Toys in Town!
              <Sparkles className="h-4 w-4" />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight mb-5">
              <motion.span
                className="block"
                animate={{ x: [0, 2, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Magical Toys
              </motion.span>
              <motion.span
                className="text-primary inline-block wavy-underline"
                animate={{ rotate: [-1, 1, -1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                for Happy Kids!
              </motion.span>
              <motion.span
                className="inline-block ml-2 text-4xl md:text-6xl"
                animate={{ rotate: [0, 25, -25, 0], y: [0, -8, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🎈
              </motion.span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg font-medium leading-relaxed">
              Discover amazing toys that spark joy and creativity! ✨ Order instantly via WhatsApp — it's super easy! 🎮🧸🎪
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}>
                <Button asChild size="lg" className="candy-gradient text-primary-foreground font-bold text-base px-8 rounded-full shadow-xl hover:shadow-2xl transition-shadow uppercase tracking-wide border-0 glow-primary">
                  <Link to="/products">
                    🛒 Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}>
                <Button asChild size="lg" className="bg-whatsapp text-whatsapp-foreground font-bold text-base px-8 rounded-full shadow-xl hover:opacity-90 hover:shadow-2xl transition-all uppercase tracking-wide border-0">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" className="mr-2 h-5 w-5 fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    💬 Chat on WhatsApp
                  </a>
                </Button>
              </motion.div>
            </div>
            
            {/* Trust badges */}
            <motion.div 
              className="flex items-center gap-4 mt-8 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="flex items-center gap-1">🛡️ Safe Toys</span>
              <span className="flex items-center gap-1">🚚 Fast Delivery</span>
              <span className="flex items-center gap-1">💯 Best Price</span>
            </motion.div>
          </motion.div>

          {/* Right: Toy Image */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 3 }}
            animate={{ opacity: 1, x: 0, rotate: 3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <motion.div
              className="rounded-3xl overflow-hidden shadow-2xl border-4 border-accent/40 transform rotate-2 hover:rotate-0 transition-transform duration-500"
              whileHover={{ scale: 1.03 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <img
                src={heroBanner}
                alt="Colorful toys for kids"
                className="w-full h-[400px] lg:h-[480px] object-cover"
                loading="eager"
              />
              {/* Colorful overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10" />
            </motion.div>
            {/* Fun sticker overlays */}
            <motion.div
              className="absolute -bottom-4 -left-4 candy-gradient-warm text-primary-foreground rounded-2xl px-5 py-2.5 font-display font-bold shadow-xl text-sm"
              animate={{ rotate: [-5, 5, -5], y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🔥 Hot Deals!
            </motion.div>
            <motion.div
              className="absolute -top-3 -right-3 candy-gradient text-primary-foreground rounded-2xl px-4 py-2 font-display font-bold shadow-xl text-xs"
              animate={{ rotate: [3, -3, 3], scale: [1, 1.08, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              ✨ New Arrivals
            </motion.div>
            {/* Extra fun sticker */}
            <motion.div
              className="absolute top-1/2 -left-6 bg-whatsapp text-whatsapp-foreground rounded-full px-3 py-1.5 font-display font-bold shadow-lg text-xs"
              animate={{ scale: [1, 1.15, 1], rotate: [-10, 0, -10] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💬 Order Easy!
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
