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
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const featured = products.filter((p) => p.badge).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedCategories />

        {/* Featured Products */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">
              ⭐ Featured Toys
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              Our most loved picks for your kids
            </p>
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
            <div className="text-center mt-10">
              <Button asChild size="lg" className="rounded-full font-bold px-8">
                <Link to="/products">
                  View All Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Fun banner */}
        <section className="py-16 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="hero-gradient rounded-3xl p-8 md:p-12 text-center text-primary-foreground mb-16"
            >
              <motion.p
                className="text-4xl md:text-5xl mb-3"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎁
              </motion.p>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
                Order in 3 Easy Steps!
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-6 text-sm md:text-base font-semibold">
                <span className="flex items-center gap-2"><span className="bg-primary-foreground/20 rounded-full w-8 h-8 flex items-center justify-center">1</span> Pick a Toy</span>
                <span className="hidden md:block">→</span>
                <span className="flex items-center gap-2"><span className="bg-primary-foreground/20 rounded-full w-8 h-8 flex items-center justify-center">2</span> Fill Your Details</span>
                <span className="hidden md:block">→</span>
                <span className="flex items-center gap-2"><span className="bg-primary-foreground/20 rounded-full w-8 h-8 flex items-center justify-center">3</span> Send via WhatsApp 💬</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { emoji: "🚚", title: "Super Fast Delivery", desc: "Your toys arrive in no time!" },
                { emoji: "🛡️", title: "100% Safe Toys", desc: "Certified & kid-friendly materials" },
                { emoji: "💚", title: "WhatsApp Ordering", desc: "As easy as texting a friend!" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-card rounded-2xl card-shadow"
                >
                  <motion.span
                    className="text-5xl mb-4 block"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {item.emoji}
                  </motion.span>
                  <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
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
