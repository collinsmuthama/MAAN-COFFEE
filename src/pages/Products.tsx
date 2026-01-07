import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Products = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 to-background" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Our <span className="gold-text">Collection</span>
          </h1>
          <div className="section-divider mb-8" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Discover our meticulously crafted coffee blends, each one a masterpiece 
            of flavor, aroma, and artistry.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Free Delivery Banner */}
      <section className="py-16 bg-gradient-to-r from-espresso via-coffee-rich to-espresso border-y border-gold/30">
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
