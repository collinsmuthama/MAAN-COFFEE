import { CheckCircle, Circle, Coffee, Package, Truck, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

type OrderStatus = "pending" | "confirmed" | "preparing" | "ready" | "out_for_delivery" | "delivered";

interface OrderTrackerProps {
  status: OrderStatus;
  estimatedDelivery?: string;
}

const steps = [
  { status: "confirmed", label: "Order Confirmed", icon: CheckCircle },
  { status: "preparing", label: "Preparing", icon: Coffee },
  { status: "ready", label: "Ready for Pickup", icon: Package },
  { status: "out_for_delivery", label: "Out for Delivery", icon: Truck },
  { status: "delivered", label: "Delivered", icon: MapPin },
];

const statusOrder: OrderStatus[] = ["pending", "confirmed", "preparing", "ready", "out_for_delivery", "delivered"];

const OrderTracker = ({ status, estimatedDelivery }: OrderTrackerProps) => {
  const currentIndex = statusOrder.indexOf(status);

  const isCompleted = (stepStatus: string) => {
    const stepIndex = statusOrder.indexOf(stepStatus as OrderStatus);
    return stepIndex <= currentIndex;
  };

  const isCurrent = (stepStatus: string) => stepStatus === status;

  return (
    <div className="space-y-6">
      {/* Estimated Delivery */}
      {estimatedDelivery && status !== "delivered" && (
        <div className="flex items-center gap-2 p-4 bg-gold/10 border border-gold/30 rounded-lg">
          <Clock className="h-5 w-5 text-gold" />
          <span className="text-sm text-muted-foreground">Estimated Delivery:</span>
          <span className="font-medium text-gold">{estimatedDelivery}</span>
        </div>
      )}

      {/* Progress Steps */}
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-muted" />
        <div 
          className="absolute left-6 top-6 w-0.5 bg-gold transition-all duration-500"
          style={{ 
            height: `calc(${Math.min(((currentIndex) / (steps.length - 1)) * 100, 100)}% - 24px)` 
          }}
        />

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step) => {
            const completed = isCompleted(step.status);
            const current = isCurrent(step.status);
            const Icon = step.icon;

            return (
              <div key={step.status} className="flex items-center gap-4">
                <div
                  className={cn(
                    "relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                    completed
                      ? "bg-gold border-gold text-espresso"
                      : "bg-muted border-muted-foreground/30 text-muted-foreground",
                    current && "ring-4 ring-gold/30"
                  )}
                >
                  {completed ? (
                    <Icon className="h-5 w-5" />
                  ) : (
                    <Circle className="h-5 w-5" />
                  )}
                </div>
                <div>
                  <p
                    className={cn(
                      "font-medium transition-colors",
                      completed ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {step.label}
                  </p>
                  {current && status !== "pending" && (
                    <p className="text-sm text-gold animate-pulse">In progress...</p>
                  )}
                  {completed && !current && (
                    <p className="text-sm text-muted-foreground">Completed</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderTracker;
