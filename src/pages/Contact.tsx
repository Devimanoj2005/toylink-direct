import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { WHATSAPP_NUMBER } from "@/data/products";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get in Touch 📞
          </h1>
          <p className="text-muted-foreground text-lg mb-12">
            We'd love to hear from you! Reach out anytime.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I have a question.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-8 bg-card rounded-2xl card-shadow hover:card-hover-shadow hover:-translate-y-1 transition-all"
            >
              <div className="bg-whatsapp/10 p-4 rounded-full">
                <MessageCircle className="h-8 w-8 text-whatsapp" />
              </div>
              <h3 className="font-display font-bold text-lg">WhatsApp</h3>
              <p className="text-muted-foreground text-sm">Chat with us instantly</p>
            </a>

            <a
              href="tel:+919876543210"
              className="flex flex-col items-center gap-3 p-8 bg-card rounded-2xl card-shadow hover:card-hover-shadow hover:-translate-y-1 transition-all"
            >
              <div className="bg-primary/10 p-4 rounded-full">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg">Call Us</h3>
              <p className="text-muted-foreground text-sm">+91 98765 43210</p>
            </a>

            <div className="flex flex-col items-center gap-3 p-8 bg-card rounded-2xl card-shadow">
              <div className="bg-secondary/10 p-4 rounded-full">
                <Mail className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-display font-bold text-lg">Email</h3>
              <p className="text-muted-foreground text-sm">hello@toyjoy.in</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-8 bg-card rounded-2xl card-shadow">
              <div className="bg-accent/20 p-4 rounded-full">
                <MapPin className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg">Location</h3>
              <p className="text-muted-foreground text-sm">Kochi, Kerala, India</p>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Contact;
