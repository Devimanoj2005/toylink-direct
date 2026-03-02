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

        {/* Trust banner */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { emoji: "🚚", title: "Fast Delivery", desc: "Quick shipping across India" },
                { emoji: "✅", title: "Quality Assured", desc: "Safe, certified toys only" },
                { emoji: "💬", title: "Easy Ordering", desc: "Order directly via WhatsApp" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="p-8 bg-card rounded-2xl card-shadow"
                >
                  <span className="text-5xl mb-4 block">{item.emoji}</span>
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
