import { categories } from "@/data/products";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const bgColors = [
  "bg-primary/10",
  "bg-secondary/10",
  "bg-accent/20",
  "bg-destructive/10",
  "bg-primary/10",
  "bg-secondary/10",
];

const FeaturedCategories = () => {
  const displayCats = categories.filter((c) => c.value !== "all");

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-2"
        >
          🎪 Shop by Category
        </motion.h2>
        <p className="text-muted-foreground text-center mb-10">
          Pick your favourite world of play!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {displayCats.map((cat, i) => (
            <motion.div
              key={cat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <Link
                to={`/products?category=${cat.value}`}
                className={`flex flex-col items-center gap-3 p-6 rounded-2xl card-shadow hover:card-hover-shadow transition-all ${bgColors[i]}`}
              >
                <motion.span
                  className="text-5xl"
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  {cat.emoji}
                </motion.span>
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
