import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            About <span className="text-gradient">ToyJoy</span> 🧸
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-12">
            Making playtime magical since 2024
          </p>

          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 card-shadow">
              <h2 className="font-display font-bold text-xl mb-3">🎯 Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                At ToyJoy, we believe every child deserves access to safe, high-quality, and affordable toys.
                We curate the best toys from trusted brands and make ordering as easy as sending a WhatsApp message.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 card-shadow">
              <h2 className="font-display font-bold text-xl mb-3">💡 Why WhatsApp?</h2>
              <p className="text-muted-foreground leading-relaxed">
                We keep things simple! No complicated checkout process, no account creation needed.
                Just pick your toy, fill in your details, and send your order directly via WhatsApp.
                You'll get instant confirmation and personal service.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 card-shadow">
              <h2 className="font-display font-bold text-xl mb-3">🛡️ Quality Promise</h2>
              <p className="text-muted-foreground leading-relaxed">
                Every toy in our collection is carefully selected for safety and durability.
                We only stock certified products that meet international safety standards,
                so you can shop with complete peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { num: "500+", label: "Happy Customers" },
                { num: "100+", label: "Toys Available" },
                { num: "50+", label: "Brands" },
                { num: "4.8⭐", label: "Rating" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 card-shadow"
                >
                  <div className="font-display font-bold text-2xl text-primary">{stat.num}</div>
                  <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default About;
