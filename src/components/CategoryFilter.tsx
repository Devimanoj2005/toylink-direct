import { motion } from "framer-motion";
import { categories, Category } from "@/data/products";

interface CategoryFilterProps {
  selected: Category;
  onSelect: (cat: Category) => void;
}

const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((cat, i) => (
        <motion.button
          key={cat.value}
          onClick={() => onSelect(cat.value)}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04 }}
          className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all border-2 ${
            selected === cat.value
              ? "bg-primary text-primary-foreground shadow-lg border-primary scale-105"
              : "bg-card text-foreground/70 hover:bg-muted card-shadow border-border hover:border-accent/40"
          }`}
        >
          <span className="mr-1">{cat.emoji}</span> {cat.label}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;
