import { useState } from "react";
import { z } from "zod";
import { Product, WHATSAPP_NUMBER } from "@/data/products";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowLeft, Check, Edit } from "lucide-react";

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
    window.open(url, "_blank");
    handleClose();
  };

  if (!product) return null;

  const total = product.price * form.quantity;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        {step === "form" ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-xl flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-whatsapp" />
                Order {product.name}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-2">
              <div>
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  id="name"
                  placeholder="Rahul Kumar"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  placeholder="9876543210"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <Label htmlFor="address">Delivery Address *</Label>
                <Textarea
                  id="address"
                  placeholder="Your full address"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  rows={2}
                />
                {errors.address && <p className="text-destructive text-xs mt-1">{errors.address}</p>}
              </div>
              <div>
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  type="number"
                  min={1}
                  max={99}
                  value={form.quantity}
                  onChange={(e) => setForm({ ...form, quantity: Math.max(1, parseInt(e.target.value) || 1) })}
                />
              </div>
              <div>
                <Label htmlFor="note">Note (optional)</Label>
                <Textarea
                  id="note"
                  placeholder="Any special instructions..."
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  rows={2}
                />
              </div>
              <Button onClick={handleContinue} className="w-full bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-bold rounded-full">
                Continue to Review
              </Button>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-xl">📋 Review Your Order</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-2">
              <div className="bg-muted rounded-xl p-4 space-y-2">
                <h4 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wide">Order Summary</h4>
                <div className="flex justify-between"><span>Product</span><span className="font-semibold">{product.name}</span></div>
                <div className="flex justify-between"><span>Price</span><span>₹{product.price}</span></div>
                <div className="flex justify-between"><span>Quantity</span><span>{form.quantity}</span></div>
                <div className="flex justify-between border-t pt-2 font-bold text-primary">
                  <span>Total</span><span>₹{total}</span>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-4 space-y-2">
                <h4 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wide">Customer Details</h4>
                <div className="flex justify-between"><span>Name</span><span className="font-semibold">{form.name}</span></div>
                <div className="flex justify-between"><span>Phone</span><span>{form.phone}</span></div>
                <div><span className="text-muted-foreground">Address:</span> <span>{form.address}</span></div>
                {form.note && <div><span className="text-muted-foreground">Note:</span> <span>{form.note}</span></div>}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep("form")} className="flex-1 rounded-full">
                  <Edit className="mr-2 h-4 w-4" /> Edit
                </Button>
                <Button onClick={handleConfirm} className="flex-1 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-bold rounded-full">
                  <Check className="mr-2 h-4 w-4" /> Confirm & Send
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default OrderDialog;
