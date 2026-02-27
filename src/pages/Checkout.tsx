import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/contexts/CartContext";
import { useCreateOrder } from "@/hooks/useCreateOrder";
import DeliveryTimeEstimate from "@/components/DeliveryTimeEstimate";
import { CheckCircle, CreditCard, ArrowLeft, Package, Clock, Truck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const { items, totalPrice, discount, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { createOrder, isCreating } = useCreateOrder();
  const [orderComplete, setOrderComplete] = useState(false);
  const [trackingCode, setTrackingCode] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    notes: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 50 ? 0 : 4.99;
  const total = totalPrice + shipping;

  // Check if order contains ready-made drinks
  const hasReadyMade = items.some((item) => item.category === "ready-made");
  const hasBeans = items.some((item) => item.category === "beans");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate phone
    if (!formData.phone) {
      toast({
        title: "Phone Required",
        description: "Please enter your phone number for delivery updates.",
        variant: "destructive",
      });
      return;
    }

    const deliveryAddress = `${formData.address}, ${formData.city}, ${formData.postalCode}, ${formData.country}`;

    const result = await createOrder({
      customerName: `${formData.firstName} ${formData.lastName}`,
      customerPhone: formData.phone,
      customerEmail: formData.email || undefined,
      deliveryAddress,
      items: items.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      })),
      totalAmount: total,
      notes: formData.notes || undefined,
    });

    if (result.success && result.trackingCode) {
      setTrackingCode(result.trackingCode);
      setOrderComplete(true);
      clearCart();
    }
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
          <p className="text-muted-foreground mb-6">
            Thank you for your purchase. Your premium coffee is on its way!
          </p>

          {/* Tracking Code */}
          <div className="bg-muted/50 border border-gold/30 rounded-xl p-6 mb-6">
            <p className="text-sm text-muted-foreground mb-2">Your Tracking Code</p>
            <p className="font-mono text-3xl text-gold font-bold">{trackingCode}</p>
            <p className="text-sm text-muted-foreground mt-2">
              Save this code to track your order
            </p>
          </div>

          {/* Estimated Delivery */}
          <div className="flex items-center justify-center gap-2 mb-8 text-muted-foreground">
            <Clock className="h-5 w-5 text-gold" />
            <span>
              Estimated Delivery:{" "}
              <span className="text-foreground font-medium">
                {hasReadyMade ? "25-35 minutes" : "2-3 business days"}
              </span>
            </span>
          </div>

          {discount > 0 && (
            <p className="text-green-500 font-medium mb-6">
              You saved ${((subtotal * discount) / 100).toFixed(2)} with your promo code!
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="lg" asChild>
              <Link to={`/track-order?code=${trackingCode}`}>
                <Package className="h-5 w-5 mr-2" />
                Track Order
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/">Continue Shopping</Link>
            </Button>
          </div>
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

      {/* Delivery Time Banner */}
      {hasReadyMade && (
        <section className="py-4 bg-gold/10 border-b border-gold/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-gold" />
                <span className="font-medium">Express Delivery Available</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gold/30" />
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gold" />
                <span>Ready-made drinks delivered in 25-35 minutes</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Checkout Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form Fields */}
              <div className="space-y-8">
                {/* Contact */}
                <div className="space-y-4">
                  <h3 className="font-display text-xl text-gold mb-4">Contact Information</h3>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-muted border-gold/30 focus:border-gold placeholder:text-muted-foreground/50"
                  />
                  <Input
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-muted border-gold/30 focus:border-gold placeholder:text-muted-foreground/50"
                  />
                </div>

                {/* Shipping */}
                <div className="space-y-4">
                  <h3 className="font-display text-xl text-gold mb-4">Delivery Address</h3>
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
                  <Textarea
                    name="notes"
                    placeholder="Delivery notes (optional)"
                    value={formData.notes}
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
                      <div key={item.id}>
                        <div className="flex items-center gap-4">
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
                            <DeliveryTimeEstimate category={item.category} />
                          </div>
                          <span className="gold-text">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
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
                    disabled={isCreating}
                  >
                    {isCreating ? "Processing..." : `Pay $${total.toFixed(2)}`}
                  </Button>

                  {/* Delivery Info */}
                  <div className="mt-6 p-4 bg-muted/30 rounded-lg text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <Package className="h-4 w-4 text-gold mt-0.5" />
                      <div>
                        {hasReadyMade && hasBeans ? (
                          <p>Ready-made drinks: 25-35 min express • Coffee beans: 2-3 days</p>
                        ) : hasReadyMade ? (
                          <p>Express delivery in 25-35 minutes</p>
                        ) : (
                          <p>Standard shipping in 2-3 business days</p>
                        )}
                      </div>
                    </div>
                  </div>
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
