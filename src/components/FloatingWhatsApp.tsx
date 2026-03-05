import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/data/products";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I have a question about your toys.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp text-whatsapp-foreground p-4 rounded-full shadow-xl hover:shadow-2xl transition-all"
      aria-label="Chat on WhatsApp"
      animate={{ y: [0, -8, 0], scale: [1, 1.08, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      whileHover={{ scale: 1.25 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="h-7 w-7" />
      <motion.span
        className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center shadow-lg"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        💬
      </motion.span>
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-whatsapp/30 animate-ping" />
    </motion.a>
  );
};

export default FloatingWhatsApp;
