import { Badge } from "@/components/ui/badge";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface OfferCardProps {
  offer: {
    id: string;
    title: string;
    description: string;
    code: string;
    badge: string;
  };
}

const OfferCard = ({ offer }: OfferCardProps) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(offer.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="luxury-card p-6 relative overflow-hidden group">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 gold-shimmer" />
      
      {/* Badge */}
      <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
        {offer.badge}
      </Badge>

      {/* Content */}
      <h4 className="font-display text-lg text-foreground mb-2">{offer.title}</h4>
      <p className="text-muted-foreground text-sm mb-4">{offer.description}</p>

      {/* Promo Code */}
      <div className="flex items-center justify-between bg-muted/50 rounded-lg px-4 py-3 border border-gold/20">
        <code className="font-mono text-gold font-semibold tracking-wider">
          {offer.code}
        </code>
        <button
          onClick={copyCode}
          className="text-gold hover:text-gold-light transition-colors"
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
