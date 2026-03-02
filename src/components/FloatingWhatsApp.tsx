import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";

const FloatingWhatsApp = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I have a question about your toys.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp text-whatsapp-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-bounce-gentle"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default FloatingWhatsApp;
