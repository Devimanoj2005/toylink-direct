import { motion } from "framer-motion";
import { MessageCircle, Star, Sparkles } from "lucide-react";
import { Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  index: number;
  onBuy: (product: Product) => void;
}

const funEmojis = ["🌟", "🎈", "🎀", "⭐", "🧸", "🎉", "🦄", "🌈"];
const cardAccents = [
  "from-[hsl(330,85%,65%,0.15)] to-transparent",
  "from-[hsl(200,85%,60%,0.15)] to-transparent",
  "from-[hsl(150,70%,50%,0.15)] to-transparent",
  "from-[hsl(270,70%,65%,0.15)] to-transparent",
  "from-[hsl(25,95%,60%,0.15)] to-transparent",
  "from-[hsl(45,100%,60%,0.15)] to-transparent",
  "from-[hsl(4,85%,62%,0.15)] to-transparent",
  "from-[hsl(174,60%,45%,0.15)] to-transparent",
];

const ProductCard = ({ product, index, onBuy }: ProductCardProps) => {
  const emoji = funEmojis[index % funEmojis.length];
  const accent = cardAccents[index % cardAccents.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.06, type: "spring", stiffness: 180 }}
      whileHover={{ y: -10, rotate: Math.random() > 0.5 ? 1.5 : -1.5 }}
      className="group relative bg-card rounded-3xl overflow-hidden card-shadow hover:card-hover-shadow transition-all duration-300 rainbow-border-animated"
    >
      {/* Candy gradient overlay on card */}
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} pointer-events-none z-0 rounded-3xl`} />
      
      <div className="relative z-10">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
            loading="lazy"
          />
          {product.badge && (
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground font-bold text-xs shadow-lg border-2 border-accent-foreground/10">
                ✨ {product.badge}
              </Badge>
            </motion.div>
          )}
          {/* Fun floating emoji */}
          <motion.span
            className="absolute top-3 right-3 text-3xl drop-shadow-lg"
            animate={{ y: [0, -8, 0], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.2 }}
          >
            {emoji}
          </motion.span>
          {/* Sparkle effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Price tag floating */}
          <motion.div
            className="absolute bottom-3 left-3 bg-card/95 backdrop-blur-sm rounded-2xl px-3 py-1.5 shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-xl font-bold text-primary font-display">₹{product.price}</span>
          </motion.div>
        </div>

        <div className="p-4 pb-5">
          <h3 className="font-display font-bold text-lg text-foreground mb-1 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
          {/* Star rating with sparkle */}
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
              >
                <Star className="h-4 w-4 fill-accent text-accent" />
              </motion.div>
            ))}
            <span className="text-xs text-muted-foreground ml-1 font-semibold">(⭐ Loved!)</span>
          </div>
          
          <motion.button
            onClick={() => onBuy(product)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.9 }}
            className="w-full flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-bold text-sm px-4 py-3 rounded-2xl transition-colors shadow-lg hover:shadow-xl group/btn"
          >
            <MessageCircle className="h-4 w-4 group-hover/btn:animate-wiggle" />
            <span>Buy Now!</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-lg"
            >
              🛒
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
