import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, X, ShoppingBag, ArrowRight, Tag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const {
    items,
    removeFromCart,
    updateQuantity,
    totalPrice,
    promoCode,
    setPromoCode,
    discount,
    applyPromoCode,
  } = useCart();
  const [inputCode, setInputCode] = useState(promoCode);
  const { toast } = useToast();

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleApplyPromo = () => {
    setPromoCode(inputCode);
    setTimeout(() => {
      const success = applyPromoCode();
      if (success) {
        toast({
          title: "Promo Code Applied!",
          description: `You saved ${discount}% on your order.`,
        });
      } else {
        toast({
          title: "Invalid Code",
          description: "The promo code you entered is not valid.",
          variant: "destructive",
        });
      }
    }, 0);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-gold/30 mx-auto mb-6" />
          <h1 className="font-display text-3xl font-bold mb-4">
            Your Cart is <span className="gold-text">Empty</span>
          </h1>
          <p className="text-muted-foreground mb-8">
            Discover our premium coffee collection and treat yourself.
          </p>
          <Button variant="luxury" size="lg" asChild>
            <Link to="/products">
              Browse Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 to-background" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Your <span className="gold-text">Cart</span>
          </h1>
          <p className="text-muted-foreground">
            {items.length} {items.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="luxury-card p-6 flex gap-6">
                  <div className="w-24 h-24 bg-muted/20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-display text-lg text-foreground mb-1">
                          {item.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">{item.weight}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-medium w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <span className="font-display text-xl gold-text">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="luxury-card p-6 sticky top-24">
                <h3 className="font-display text-xl font-bold mb-6">Order Summary</h3>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-sm text-muted-foreground mb-2">
                    Promo Code
                  </label>
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      value={inputCode}
                      onChange={(e) => setInputCode(e.target.value.toUpperCase())}
                      placeholder="Enter code"
                      className="bg-muted border-gold/30 focus:border-gold placeholder:text-muted-foreground/50 uppercase"
                    />
                    <Button variant="goldOutline" onClick={handleApplyPromo}>
                      <Tag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Summary */}
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
                    <span>{subtotal >= 50 ? "FREE" : "$4.99"}</span>
                  </div>
                  <div className="border-t border-gold/20 pt-3">
                    <div className="flex justify-between">
                      <span className="font-display text-lg">Total</span>
                      <span className="font-display text-2xl gold-text">
                        ${(totalPrice + (subtotal < 50 ? 4.99 : 0)).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <Button variant="luxury" size="lg" className="w-full mt-6" asChild>
                  <Link to="/checkout">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                {subtotal < 50 && (
                  <p className="text-center text-muted-foreground text-sm mt-4">
                    Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
