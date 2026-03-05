import { categories } from "@/data/products";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const bgColors = [
  "bg-[hsl(330,85%,65%,0.12)]",
  "bg-[hsl(200,85%,60%,0.12)]",
  "bg-[hsl(150,70%,50%,0.12)]",
  "bg-[hsl(270,70%,65%,0.12)]",
  "bg-[hsl(25,95%,60%,0.12)]",
  "bg-[hsl(45,100%,60%,0.15)]",
];

const borderColors = [
  "border-[hsl(330,85%,65%,0.3)]",
  "border-[hsl(200,85%,60%,0.3)]",
  "border-[hsl(150,70%,50%,0.3)]",
  "border-[hsl(270,70%,65%,0.3)]",
  "border-[hsl(25,95%,60%,0.3)]",
  "border-[hsl(45,100%,60%,0.3)]",
];

const FeaturedCategories = () => {
  const displayCats = categories.filter((c) => c.value !== "all");

  return (
    <section className="py-16 bg-confetti">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.span
            className="text-5xl block mb-2"
            animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎪
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            Shop by <span className="text-primary wavy-underline">Category</span>
          </h2>
          <p className="text-muted-foreground font-medium">
            Pick your favourite world of play! 🌈
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {displayCats.map((cat, i) => (
            <motion.div
              key={cat.value}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, type: "spring", stiffness: 200 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <Link
                to={`/products?category=${cat.value}`}
                className={`flex flex-col items-center gap-3 p-6 rounded-3xl card-shadow hover:card-hover-shadow transition-all border-2 ${bgColors[i % bgColors.length]} ${borderColors[i % borderColors.length]} hover:shadow-xl`}
              >
                <motion.span
                  className="text-5xl md:text-6xl"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                >
                  {cat.emoji}
                </motion.span>
                <span className="font-display font-bold text-sm text-center">{cat.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
