import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Coffee, Star, Award, Truck, Clock, Package } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import OfferCard from "@/components/OfferCard";
import HeroCarousel from "@/components/HeroCarousel";
import { products, offers, readyMadeDrinks } from "@/data/products";
import readyMadePoster from "@/assets/ready-made-poster.jpg";
import { useCart } from "@/contexts/CartContext";

const Index = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Free Delivery Banner */}
      <section className="py-6 bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 border-y border-gold/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Coffee className="h-5 w-5 text-gold" />
              <span className="text-foreground font-medium">Free Delivery on orders above $50</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gold/30" />
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-gold" />
              <span className="text-foreground font-medium">Premium Packaging</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gold/30" />
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-gold" />
              <span className="text-foreground font-medium">Worldwide Shipping</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ready-Made Coffee Poster */}
      <section className="py-16 bg-coffee-rich">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl border-2 border-gold/40 shadow-2xl">
            <img 
              src={readyMadePoster} 
              alt="Order Ready-Made Coffee - Delivered Fresh" 
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-transparent to-espresso/80" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                <span className="gold-text">Fresh Coffee</span> Delivered to Your Door
              </h2>
              <p className="text-cream/90 text-lg md:text-xl max-w-2xl mb-6">
                Order your favorite ready-made coffee drinks and enjoy café-quality beverages at home
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-espresso/60 px-4 py-2 rounded-full border border-gold/30">
                  <Truck className="h-5 w-5 text-gold" />
                  <span className="text-cream text-sm">25-35 Min Delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-espresso/60 px-4 py-2 rounded-full border border-gold/30">
                  <Clock className="h-5 w-5 text-gold" />
                  <span className="text-cream text-sm">Freshly Made</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="luxury" size="xl" asChild>
                  <a href="#ready-made-drinks">
                    Order Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-gold/50 text-cream hover:bg-gold/10">
                  <Link to="/track-order">
                    Track Your Order
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready-Made Drinks Section */}
      <section id="ready-made-drinks" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="gold-text">Ready-Made</span> Coffee Delivery
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Freshly prepared coffee drinks delivered straight to your door. Café quality, home comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {readyMadeDrinks.map((drink) => (
              <ProductCard key={drink.id} product={drink} />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-coffee-rich">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="gold-text">Premium</span> Coffee Beans
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our signature blends, carefully roasted to perfection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-24 bg-coffee-rich">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Exclusive <span className="gold-text">Offers</span>
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take advantage of our special promotions and save on premium coffee
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Goal Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gold-text">Philosophy</span>
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="luxury-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                <Star className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-display text-2xl text-gold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's most beloved luxury coffee brand, inspiring 
                moments of joy and connection through exceptional coffee experiences.
              </p>
            </div>

            {/* Mission */}
            <div className="luxury-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                <Coffee className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-display text-2xl text-gold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To source, craft, and deliver the finest coffee while nurturing 
                sustainable relationships with farmers and communities worldwide.
              </p>
            </div>

            {/* Goal */}
            <div className="luxury-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                <Award className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-display text-2xl text-gold mb-4">Our Goal</h3>
              <p className="text-muted-foreground leading-relaxed">
                To elevate every coffee moment into an unforgettable experience, 
                setting new standards for quality, sustainability, and taste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-coffee-rich to-espresso" />
        <div className="absolute inset-0 border-y border-gold/30" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gold-text">Elevate</span> Your Coffee Experience?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Join thousands of coffee enthusiasts who have discovered the art of 
            exceptional coffee with MAAN.
          </p>
          <Button variant="luxury" size="xl" asChild>
            <Link to="/products">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
