import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  index: number;
  onBuy: (product: Product) => void;
}

const ProductCard = ({ product, index, onBuy }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-hover-shadow transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.badge && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground font-bold text-xs">
            {product.badge}
          </Badge>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-display font-semibold text-lg text-foreground mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary font-display">
            ₹{product.price}
          </span>
          <button
            onClick={() => onBuy(product)}
            className="flex items-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-bold text-sm px-4 py-2.5 rounded-full transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Buy via WhatsApp
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
