import { Clock, Truck } from "lucide-react";

interface DeliveryTimeEstimateProps {
  category: string;
}

const DeliveryTimeEstimate = ({ category }: DeliveryTimeEstimateProps) => {
  const getEstimate = () => {
    if (category === "ready-made") {
      return {
        time: "25-35 min",
        label: "Express Delivery",
        icon: Truck,
      };
    }
    return {
      time: "2-3 business days",
      label: "Standard Shipping",
      icon: Clock,
    };
  };

  const estimate = getEstimate();
  const Icon = estimate.icon;

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Icon className="h-4 w-4 text-gold" />
      <span>{estimate.label}:</span>
      <span className="font-medium text-foreground">{estimate.time}</span>
    </div>
  );
};

export default DeliveryTimeEstimate;
