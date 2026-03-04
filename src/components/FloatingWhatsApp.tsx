import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/data/products";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I have a question about your toys.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp text-whatsapp-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
      aria-label="Chat on WhatsApp"
      animate={{ y: [0, -6, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="h-7 w-7" />
      <motion.span
        className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        💬
      </motion.span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
