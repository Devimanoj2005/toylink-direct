import { categories } from "@/data/products";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FeaturedCategories = () => {
  const displayCats = categories.filter((c) => c.value !== "all");

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">
          Shop by Category
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Find the perfect toy for your little one
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {displayCats.map((cat, i) => (
            <motion.div
              key={cat.value}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={`/products?category=${cat.value}`}
                className="flex flex-col items-center gap-3 p-6 bg-card rounded-2xl card-shadow hover:card-hover-shadow hover:-translate-y-1 transition-all"
              >
                <span className="text-4xl">{cat.emoji}</span>
                <span className="font-display font-semibold text-sm text-center">{cat.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
