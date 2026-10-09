import ProductCard from "@/components/ProductCard";
import TakeawayProductCard from "@/components/TakeawayProductCard";
import { products, readyMadeDrinks } from "@/data/products";

const Products = () => {
  return (
    <div className="reference-cream min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border py-20">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            The Tayo <span className="text-gold">Shop</span>
          </h1>
          <div className="section-divider mb-8" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Shop packaged African coffee and our freshly prepared takeaway range.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-9"><p className="section-kicker text-gold">FRESHLY PREPARED</p><h2 className="section-heading mt-2">Takeaway Coffee</h2><p className="mt-3 text-sm text-muted-foreground">Choose your roast and size, then add it to your order.</p></div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {readyMadeDrinks.map((product) => <TakeawayProductCard key={product.id} product={product} />)}
          </div>
          <div className="mb-9 mt-20"><p className="section-kicker text-gold">PACKAGED COFFEE</p><h2 className="section-heading mt-2">Coffee for Home & Business</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Free Delivery Banner */}
      <section className="bg-espresso py-16 text-cream">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-display text-2xl md:text-3xl mb-4">
            <span className="gold-text">Free Delivery</span> on Orders Above $50
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enjoy complimentary worldwide shipping on all orders exceeding $50. 
            Your premium coffee, delivered in elegant packaging right to your door.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Products;
