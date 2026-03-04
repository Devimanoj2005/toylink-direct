import { motion } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";
import { Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  index: number;
  onBuy: (product: Product) => void;
}

const funEmojis = ["🌟", "🎈", "🎀", "⭐", "🧸", "🎉", "🦄", "🌈"];

const ProductCard = ({ product, index, onBuy }: ProductCardProps) => {
  const emoji = funEmojis[index % funEmojis.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05, type: "spring", stiffness: 200 }}
      whileHover={{ y: -8, rotate: Math.random() > 0.5 ? 1 : -1 }}
      className="group bg-card rounded-3xl overflow-hidden card-shadow hover:card-hover-shadow transition-all duration-300 border-2 border-transparent hover:border-accent/50"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {product.badge && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground font-bold text-xs animate-wiggle">
            {product.badge}
          </Badge>
        )}
        {/* Fun floating emoji */}
        <motion.span
          className="absolute top-3 right-3 text-2xl drop-shadow-lg"
          animate={{ y: [0, -5, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
        >
          {emoji}
        </motion.span>
        {/* Playful overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4">
        <h3 className="font-display font-semibold text-lg text-foreground mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        {/* Star rating decoration */}
        <div className="flex gap-0.5 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <motion.span
            className="text-xl font-bold text-primary font-display"
            whileHover={{ scale: 1.1 }}
          >
            ₹{product.price}
          </motion.span>
          <motion.button
            onClick={() => onBuy(product)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="flex items-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-bold text-sm px-4 py-2.5 rounded-full transition-colors shadow-md hover:shadow-lg"
          >
            <MessageCircle className="h-4 w-4" />
            Buy Now! 🛒
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
