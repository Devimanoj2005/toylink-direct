import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import OrderDialog from "@/components/OrderDialog";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import { products, Product, Category } from "@/data/products";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Products = () => {
  const [searchParams] = useSearchParams();
  const initialCat = (searchParams.get("category") as Category) || "all";
  const [category, setCategory] = useState<Category>(initialCat);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = products.filter((p) => {
    const matchCat = category === "all" || p.category === category;
    const matchSearch =
      search === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-background bg-confetti">
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <motion.span
            className="text-5xl block mb-2"
            animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎁
          </motion.span>
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
            All <span className="text-primary wavy-underline">Toys</span>
          </h1>
          <p className="text-muted-foreground">
            Find the perfect toy and order via WhatsApp 💬
          </p>
        </motion.div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="🔍 Search for fun toys..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 rounded-full border-2 border-accent/30 focus:border-accent bg-card shadow-sm text-base"
          />
        </div>

        <CategoryFilter selected={category} onSelect={setCategory} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          {filtered.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              onBuy={setSelectedProduct}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <motion.span
              className="text-7xl mb-4 block"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🔍
            </motion.span>
            <p className="text-muted-foreground text-lg font-display">
              Oops! No toys found 😢 Try a different search!
            </p>
          </motion.div>
        )}
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

export default Products;
