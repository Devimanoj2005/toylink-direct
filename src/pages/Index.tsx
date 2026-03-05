import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import ProductCard from "@/components/ProductCard";
import OrderDialog from "@/components/OrderDialog";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import { products, Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const featured = products.filter((p) => p.badge).slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedCategories />

        {/* Featured Products */}
        <section className="py-16 bg-muted/50 bg-confetti">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <motion.span
                className="text-5xl block mb-2"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⭐
              </motion.span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
                Featured <span className="text-primary wavy-underline">Toys</span>
              </h2>
              <p className="text-muted-foreground font-medium">
                Our most loved picks for your kids! 🎁
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featured.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={i}
                  onBuy={setSelectedProduct}
                />
              ))}
            </div>
            <motion.div 
              className="text-center mt-12"
              whileHover={{ scale: 1.05 }}
            >
              <Button asChild size="lg" className="candy-gradient text-primary-foreground rounded-full font-bold px-10 shadow-xl hover:shadow-2xl border-0 text-base">
                <Link to="/products">
                  View All Products <ArrowRight className="ml-2 h-5 w-5" /> 🎉
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Fun banner - How to Order */}
        <section className="py-16 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="candy-gradient rounded-3xl p-8 md:p-12 text-center text-primary-foreground mb-16 shadow-2xl relative overflow-hidden"
            >
              {/* Decorative circles */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/4 translate-y-1/4" />
              
              <motion.p
                className="text-5xl md:text-6xl mb-4 relative z-10"
                animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎁
              </motion.p>
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-3 relative z-10">
                Order in 3 Easy Steps!
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-6 text-sm md:text-base font-bold relative z-10">
                {[
                  { num: "1", text: "Pick a Toy", emoji: "🎯" },
                  { num: "2", text: "Fill Your Details", emoji: "📝" },
                  { num: "3", text: "Send via WhatsApp", emoji: "💬" },
                ].map((step, i) => (
                  <motion.span 
                    key={i}
                    className="flex items-center gap-2 bg-white/20 rounded-full px-5 py-2.5 backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                  >
                    <span className="bg-white/30 rounded-full w-8 h-8 flex items-center justify-center font-bold">{step.num}</span>
                    {step.text} {step.emoji}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Trust cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { emoji: "🚚", title: "Super Fast Delivery", desc: "Your toys arrive in no time! Zoom zoom! 💨", color: "border-[hsl(200,85%,60%,0.3)]" },
                { emoji: "🛡️", title: "100% Safe Toys", desc: "Certified & kid-friendly materials only! ✅", color: "border-[hsl(150,70%,50%,0.3)]" },
                { emoji: "💚", title: "WhatsApp Ordering", desc: "As easy as texting a friend! No app needed! 📱", color: "border-[hsl(142,70%,40%,0.3)]" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, type: "spring" }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`p-8 bg-card rounded-3xl card-shadow hover:card-hover-shadow border-2 ${item.color} transition-all`}
                >
                  <motion.span
                    className="text-6xl mb-4 block"
                    animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {item.emoji}
                  </motion.span>
                  <h3 className="font-display font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial / Social proof */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Parents & Kids <span className="text-primary">Love Us!</span> 💕
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { text: "My kids love every toy! Amazing quality and so easy to order! 🎉", name: "Priya M.", emoji: "👩" },
                  { text: "Best toy shop ever! Fast delivery and my son is so happy! 🚀", name: "Rahul K.", emoji: "👨" },
                  { text: "Ordering via WhatsApp is genius! Got my daughter's birthday gift in time! 🎂", name: "Anita S.", emoji: "👩" },
                ].map((review, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card p-6 rounded-2xl card-shadow text-left"
                  >
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className="text-accent">⭐</span>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 italic">"{review.text}"</p>
                    <p className="font-display font-bold text-sm">{review.emoji} {review.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <OrderDialog
        product={selectedProduct}
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Index;
