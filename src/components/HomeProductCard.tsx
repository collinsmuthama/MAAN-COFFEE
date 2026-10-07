import { Button } from "@/components/ui/button";
import { Product, useCart } from "@/contexts/CartContext";
import { Plus } from "lucide-react";

export default function HomeProductCard({ product, note }: { product: Product; note: string }) {
  const { addToCart } = useCart();
  return (
    <article className="home-product overflow-hidden rounded-md border border-border bg-card">
      <div className="home-product-image overflow-hidden bg-muted/30">
        <img src={product.image} alt={product.name} width={500} height={500} loading="lazy" className="h-full w-full object-contain transition-transform duration-500 hover:scale-105" />
      </div>
      <div className="p-4 md:p-5">
        <h3 className="font-body text-sm font-semibold text-foreground">{product.name}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{note}</p>
        <p className="my-4 text-sm font-medium text-foreground">${product.price.toFixed(2)} <span className="text-xs font-normal text-muted-foreground">/ {product.weight} · KES {product.local}</span></p>
        <Button className="w-full" onClick={() => addToCart(product)} aria-label={`Add ${product.name} ${product.weight} to cart`}><Plus className="h-4 w-4" />Add to Cart</Button>
      </div>
    </article>
  );
}