import { useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";
import { Product, WHATSAPP_NUMBER } from "@/data/products";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MessageCircle, Check, Edit, Gift, Sparkles } from "lucide-react";

const orderSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  address: z.string().trim().min(1, "Address is required").max(500),
  quantity: z.number().min(1).max(99),
  note: z.string().max(500).optional(),
});

type OrderForm = z.infer<typeof orderSchema>;

interface OrderDialogProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

const OrderDialog = ({ product, open, onClose }: OrderDialogProps) => {
  const [step, setStep] = useState<"form" | "review">("form");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<OrderForm>({
    name: "",
    phone: "",
    address: "",
    quantity: 1,
    note: "",
  });

  const handleClose = () => {
    setStep("form");
    setErrors({});
    setForm({ name: "", phone: "", address: "", quantity: 1, note: "" });
    onClose();
  };

  const handleContinue = () => {
    const result = orderSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((e) => {
        if (e.path[0]) fieldErrors[e.path[0] as string] = e.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setStep("review");
  };

  const handleConfirm = () => {
    if (!product) return;
    const total = product.price * form.quantity;
    const message = `Hello, I want to order this toy.

*Product:* ${product.name}
*Price:* ₹${product.price}
*Quantity:* ${form.quantity}
*Total:* ₹${total}

*Customer Name:* ${form.name}
*Phone:* ${form.phone}
*Address:* ${form.address}
${form.note ? `*Note:* ${form.note}` : ""}

Please confirm my order. 🙏`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    handleClose();
    window.location.href = url;
  };

  if (!product) return null;

  const total = product.price * form.quantity;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto rounded-3xl border-2 border-accent/30">
        {step === "form" ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-xl flex items-center gap-2">
                <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  🛒
                </motion.span>
                Order {product.name}
              </DialogTitle>
            </DialogHeader>
            
            {/* Product preview */}
            <div className="flex items-center gap-3 bg-accent/10 rounded-2xl p-3 mb-2">
              <img src={product.image} alt={product.name} className="w-14 h-14 rounded-xl object-cover" />
              <div>
                <p className="font-display font-bold text-sm">{product.name}</p>
                <p className="text-primary font-bold">₹{product.price}</p>
              </div>
              <motion.span 
                className="ml-auto text-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🎁
              </motion.span>
            </div>
            
            <div className="space-y-4 mt-2">
              <div>
                <Label htmlFor="name" className="font-bold">👤 Your Name *</Label>
                <Input
                  id="name"
                  placeholder="Rahul Kumar"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl border-2 focus:border-accent"
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="phone" className="font-bold">📱 Phone Number *</Label>
                <Input
                  id="phone"
                  placeholder="9876543210"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="rounded-xl border-2 focus:border-accent"
                />
                {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <Label htmlFor="address" className="font-bold">📍 Delivery Address *</Label>
                <Textarea
                  id="address"
                  placeholder="Your full address"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  rows={2}
                  className="rounded-xl border-2 focus:border-accent"
                />
                {errors.address && <p className="text-destructive text-xs mt-1">{errors.address}</p>}
              </div>
              <div>
                <Label htmlFor="quantity" className="font-bold">🔢 Quantity</Label>
                <Input
                  id="quantity"
                  type="number"
                  min={1}
                  max={99}
                  value={form.quantity}
                  onChange={(e) => setForm({ ...form, quantity: Math.max(1, parseInt(e.target.value) || 1) })}
                  className="rounded-xl border-2 focus:border-accent"
                />
              </div>
              <div>
                <Label htmlFor="note" className="font-bold">📝 Note (optional)</Label>
                <Textarea
                  id="note"
                  placeholder="Any special instructions..."
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  rows={2}
                  className="rounded-xl border-2 focus:border-accent"
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button onClick={handleContinue} className="w-full bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-bold rounded-2xl py-6 text-base shadow-lg">
                  Continue to Review ✨
                </Button>
              </motion.div>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-xl flex items-center gap-2">
                <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                  📋
                </motion.span>
                Review Your Order
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-2">
              <div className="bg-accent/10 rounded-2xl p-4 space-y-2 border-2 border-accent/20">
                <h4 className="font-display font-bold text-sm text-muted-foreground uppercase tracking-wide flex items-center gap-1">
                  <Gift className="h-4 w-4" /> Order Summary
                </h4>
                <div className="flex justify-between"><span>Product</span><span className="font-bold">{product.name}</span></div>
                <div className="flex justify-between"><span>Price</span><span>₹{product.price}</span></div>
                <div className="flex justify-between"><span>Quantity</span><span>{form.quantity}</span></div>
                <div className="flex justify-between border-t border-accent/20 pt-2 font-bold text-primary text-lg">
                  <span>Total</span><span>₹{total} 🎉</span>
                </div>
              </div>

              <div className="bg-muted rounded-2xl p-4 space-y-2">
                <h4 className="font-display font-bold text-sm text-muted-foreground uppercase tracking-wide flex items-center gap-1">
                  <Sparkles className="h-4 w-4" /> Customer Details
                </h4>
                <div className="flex justify-between"><span>👤 Name</span><span className="font-bold">{form.name}</span></div>
                <div className="flex justify-between"><span>📱 Phone</span><span>{form.phone}</span></div>
                <div><span className="text-muted-foreground">📍 Address:</span> <span>{form.address}</span></div>
                {form.note && <div><span className="text-muted-foreground">📝 Note:</span> <span>{form.note}</span></div>}
              </div>

              <div className="flex gap-3">
                <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" onClick={() => setStep("form")} className="w-full rounded-2xl border-2 py-5">
                    <Edit className="mr-2 h-4 w-4" /> Edit
                  </Button>
                </motion.div>
                <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button onClick={handleConfirm} className="w-full bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-bold rounded-2xl py-5 shadow-lg">
                    <Check className="mr-2 h-4 w-4" /> Confirm & Send 🚀
                  </Button>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default OrderDialog;
