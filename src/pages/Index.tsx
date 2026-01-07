import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Coffee, Star, Award } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import OfferCard from "@/components/OfferCard";
import { products, offers } from "@/data/products";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 mb-8 animate-fade-in-up">
              <Star className="h-4 w-4 text-gold" />
              <span className="text-gold text-sm font-medium">Premium Artisan Coffee</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up delay-100">
              <span className="text-foreground">Experience</span>
              <br />
              <span className="gold-text">Luxury Coffee</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
              Indulge in our meticulously crafted blends, sourced from the world's 
              finest coffee-growing regions. Every cup tells a story of excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <Button variant="luxury" size="xl" asChild>
                <Link to="/products">
                  Explore Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="goldOutline" size="xl" asChild>
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-gold/50 flex items-start justify-center pt-2">
              <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

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

      {/* Products Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="gold-text">Premium</span> Collection
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
            exceptional coffee with Aurelia.
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
