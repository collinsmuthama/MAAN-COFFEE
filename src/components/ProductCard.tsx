import { Button } from "@/components/ui/button";
import { Product } from "@/contexts/CartContext";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";
import maanLogo from "@/assets/LOGO.png";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const isReadyMade = product.category === "ready-made";

  return (
    <div className="luxury-card group p-6 flex flex-col h-full">
      {/* Product Image */}
      <div className="relative mb-6 overflow-hidden rounded-lg bg-muted/20">
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 rounded-lg transition-all duration-500 z-10" />
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-contain transform group-hover:scale-105 transition-transform duration-700"
        />
        {/* Maan Coffee Logo overlay for takeaway cups */}
        {isReadyMade && (
          <img
            src={maanLogo}
            alt="Maan Coffee"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 object-contain pointer-events-none"
          />
        )}
        <div className="absolute top-3 right-3 bg-gold text-coffee-dark text-xs font-bold px-2 py-1 rounded">
          {product.weight}
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-grow">
        <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {product.description}
        </p>
      </div>

      {/* Price & CTA */}
      <div className="mt-auto pt-4 border-t border-gold/20">
        <div className="flex items-center justify-between">
          <span className="font-display text-2xl gold-text">${product.price}</span>
          <Button
            variant="gold"
            size="lg"
            onClick={() => addToCart(product)}
            className="group/btn"
          >
            <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:animate-bounce" />
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
