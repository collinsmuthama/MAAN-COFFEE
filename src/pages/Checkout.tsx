import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { CheckCircle, CreditCard, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const { items, totalPrice, discount, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 50 ? 0 : 4.99;
  const total = totalPrice + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setOrderComplete(true);
    clearCart();

    toast({
      title: "Order Confirmed!",
      description: "Thank you for your purchase. You'll receive a confirmation email shortly.",
    });
  };

  if (items.length === 0 && !orderComplete) {
    navigate("/cart");
    return null;
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center max-w-lg mx-auto px-4">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gold/20 border border-gold flex items-center justify-center">
            <CheckCircle className="h-12 w-12 text-gold" />
          </div>
          <h1 className="font-display text-4xl font-bold mb-4">
            Order <span className="gold-text">Confirmed!</span>
          </h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your purchase. Your premium coffee is on its way!
            You'll receive a confirmation email with tracking details shortly.
          </p>
          {discount > 0 && (
            <p className="text-green-500 font-medium mb-6">
              You saved ${((subtotal * discount) / 100).toFixed(2)} with your promo code!
            </p>
          )}
          <Button variant="luxury" size="lg" asChild>
            <Link to="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 border-b border-gold/20">
        <div className="container mx-auto px-4">
          <Link
            to="/cart"
            className="inline-flex items-center text-muted-foreground hover:text-gold transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cart
          </Link>
          <h1 className="font-display text-4xl font-bold">
            <span className="gold-text">Checkout</span>
          </h1>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form Fields */}
              <div className="space-y-8">
                {/* Contact */}
                <div>
                  <h3 className="font-display text-xl text-gold mb-4">Contact Information</h3>
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-muted border-gold/30 focus:border-gold placeholder:text-muted-foreground/50"
                  />
                </div>

                {/* Shipping */}
                <div className="space-y-4">
                  <h3 className="font-display text-xl text-gold mb-4">Shipping Address</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="firstName"
                      required
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="bg-muted border-gold/30 focus:border-gold placeholder:text-muted-foreground/50"
                    />
                    <Input
                      name="lastName"
                      required
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="bg-muted border-gold/30 focus:border-gold placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <Input
                    name="address"
                    required
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="bg-muted border-gold/30 focus:border-gold placeholder:text-muted-foreground/50"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="city"
                      required
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                      className="bg-muted border-gold/30 focus:border-gold placeholder:text-muted-foreground/50"
                    />
                    <Input
                      name="postalCode"
                      required
                      placeholder="Postal Code"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="bg-muted border-gold/30 focus:border-gold placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <Input
                    name="country"
                    required
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleChange}
                    className="bg-muted border-gold/30 focus:border-gold placeholder:text-muted-foreground/50"
                  />
                </div>

                {/* Payment */}
                <div className="space-y-4">
                  <h3 className="font-display text-xl text-gold mb-4">Payment Details</h3>
                  <div className="relative">
                    <Input
                      name="cardNumber"
                      required
                      placeholder="Card Number"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      className="bg-muted border-gold/30 focus:border-gold placeholder:text-muted-foreground/50 pr-12"
                    />
                    <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gold/50" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="expiry"
                      required
                      placeholder="MM/YY"
                      value={formData.expiry}
                      onChange={handleChange}
                      className="bg-muted border-gold/30 focus:border-gold placeholder:text-muted-foreground/50"
                    />
                    <Input
                      name="cvc"
                      required
                      placeholder="CVC"
                      value={formData.cvc}
                      onChange={handleChange}
                      className="bg-muted border-gold/30 focus:border-gold placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <div className="luxury-card p-6 sticky top-24">
                  <h3 className="font-display text-xl font-bold mb-6">Order Summary</h3>

                  {/* Items */}
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-muted/20 rounded-lg overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-grow">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-muted-foreground text-sm">Qty: {item.quantity}</p>
                        </div>
                        <span className="gold-text">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  {/* Totals */}
                  <div className="space-y-3 border-t border-gold/20 pt-6">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-500">
                        <span>Discount ({discount}%)</span>
                        <span>-${((subtotal * discount) / 100).toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-muted-foreground">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="border-t border-gold/20 pt-3">
                      <div className="flex justify-between">
                        <span className="font-display text-lg">Total</span>
                        <span className="font-display text-2xl gold-text">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="luxury"
                    size="lg"
                    className="w-full mt-6"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : `Pay $${total.toFixed(2)}`}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
