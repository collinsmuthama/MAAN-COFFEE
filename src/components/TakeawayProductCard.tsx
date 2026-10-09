import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Product, useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

export default function TakeawayProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return <article className="overflow-hidden rounded-md border border-border bg-card">
    <Link to={`/products/${product.id}`} className="block aspect-[1.05] overflow-hidden bg-muted/30 p-4">
      <img src={product.image} alt={product.name} width={600} height={600} loading="lazy" className="h-full w-full object-contain transition-transform duration-500 hover:scale-105" />
    </Link>
    <div className="p-5">
      <Link to={`/products/${product.id}`}><h2 className="font-display text-xl text-foreground hover:text-gold">{product.name}</h2></Link>
      <p className="mt-2 line-clamp-2 text-xs leading-5 text-muted-foreground">{product.description}</p>
      <div className="mt-4 flex items-center justify-between"><span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{product.weight}</span><p className="font-semibold text-foreground">KES {product.local} <span className="text-xs font-normal text-muted-foreground">· ${product.price.toFixed(2)}</span></p></div>
      <div className="mt-5 grid grid-cols-2 gap-2"><Button variant="outline" asChild><Link to={`/products/${product.id}`}>Details <ArrowRight /></Link></Button><Button onClick={() => addToCart(product)}><ShoppingCart />Add</Button></div>
    </div>
  </article>;
}