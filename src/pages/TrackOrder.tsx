import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import OrderTracker from "@/components/OrderTracker";
import { Search, ArrowLeft, Package, Phone, MapPin, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

type OrderStatus = "pending" | "confirmed" | "preparing" | "ready" | "out_for_delivery" | "delivered";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Order {
  id: string;
  tracking_code: string;
  customer_name: string;
  customer_phone: string;
  customer_email: string | null;
  delivery_address: string;
  items: OrderItem[];
  total_amount: number;
  status: OrderStatus;
  estimated_delivery_time: string | null;
  created_at: string;
}

const TrackOrder = () => {
  const [searchParams] = useSearchParams();
  const [trackingCode, setTrackingCode] = useState(searchParams.get("code") || "");
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      setTrackingCode(code);
      handleSearch(code);
    }
  }, [searchParams]);

  // Real-time subscription for order updates
  useEffect(() => {
    if (!order) return;

    const channel = supabase
      .channel(`order-${order.id}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "orders",
          filter: `id=eq.${order.id}`,
        },
        (payload) => {
          const updatedOrder = payload.new as Order;
          // Parse items if it's a string
          if (typeof updatedOrder.items === 'string') {
            updatedOrder.items = JSON.parse(updatedOrder.items);
          }
          setOrder(updatedOrder);
          toast({
            title: "Order Updated!",
            description: `Your order status is now: ${updatedOrder.status.replace(/_/g, " ")}`,
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [order?.id, toast]);

  const handleSearch = async (code?: string) => {
    const searchCode = code || trackingCode.trim().toUpperCase();
    if (!searchCode) {
      toast({
        title: "Error",
        description: "Please enter a tracking code",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setHasSearched(true);

    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("tracking_code", searchCode)
      .maybeSingle();

    setIsLoading(false);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch order. Please try again.",
        variant: "destructive",
      });
      return;
    }

    if (!data) {
      setOrder(null);
      toast({
        title: "Order Not Found",
        description: "No order found with this tracking code. Please check and try again.",
        variant: "destructive",
      });
      return;
    }

    // Parse items if needed
    const orderData = {
      ...data,
      items: typeof data.items === 'string' ? JSON.parse(data.items) : data.items,
    } as Order;

    setOrder(orderData);
  };

  const formatEstimatedDelivery = () => {
    if (!order?.estimated_delivery_time) {
      // Default estimate based on status
      if (order?.status === "delivered") return null;
      const created = new Date(order?.created_at || new Date());
      const estimate = new Date(created.getTime() + 35 * 60000); // 35 mins from order
      return format(estimate, "h:mm a");
    }
    return format(new Date(order.estimated_delivery_time), "h:mm a");
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 border-b border-gold/20">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center text-muted-foreground hover:text-gold transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="font-display text-4xl font-bold">
            Track Your <span className="gold-text">Order</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Enter your tracking code to see your order status in real-time
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="flex gap-4">
              <Input
                placeholder="Enter tracking code (e.g., CC-ABC123)"
                value={trackingCode}
                onChange={(e) => setTrackingCode(e.target.value.toUpperCase())}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="bg-muted border-gold/30 focus:border-gold placeholder:text-muted-foreground/50 uppercase"
              />
              <Button
                variant="luxury"
                onClick={() => handleSearch()}
                disabled={isLoading}
              >
                {isLoading ? (
                  "Searching..."
                ) : (
                  <>
                    <Search className="h-4 w-4 mr-2" />
                    Track
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Order Details */}
      {order && (
        <section className="py-12 border-t border-gold/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Order Tracker */}
              <div className="luxury-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="h-6 w-6 text-gold" />
                  <h2 className="font-display text-2xl">Order Status</h2>
                </div>
                <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">Tracking Code</p>
                  <p className="font-mono text-lg text-gold">{order.tracking_code}</p>
                </div>
                <OrderTracker
                  status={order.status}
                  estimatedDelivery={formatEstimatedDelivery() || undefined}
                />
              </div>

              {/* Order Info */}
              <div className="space-y-6">
                {/* Delivery Info */}
                <div className="luxury-card p-6">
                  <h3 className="font-display text-xl mb-4">Delivery Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gold mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Delivery Address</p>
                        <p className="font-medium">{order.delivery_address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-gold mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Contact</p>
                        <p className="font-medium">{order.customer_name}</p>
                        <p className="text-sm">{order.customer_phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-gold mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Order Placed</p>
                        <p className="font-medium">
                          {format(new Date(order.created_at), "MMM d, yyyy 'at' h:mm a")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="luxury-card p-6">
                  <h3 className="font-display text-xl mb-4">Order Items</h3>
                  <div className="space-y-4">
                    {order.items.map((item) => (
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
                          <p className="text-muted-foreground text-sm">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <span className="gold-text">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gold/20 mt-4 pt-4">
                    <div className="flex justify-between">
                      <span className="font-display text-lg">Total</span>
                      <span className="font-display text-xl gold-text">
                        ${order.total_amount.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* No Order Found */}
      {hasSearched && !order && !isLoading && (
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto">
              <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="font-display text-2xl mb-2">Order Not Found</h2>
              <p className="text-muted-foreground mb-6">
                We couldn't find an order with that tracking code. Please check
                the code and try again.
              </p>
              <Button variant="outline" asChild>
                <Link to="/">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default TrackOrder;
