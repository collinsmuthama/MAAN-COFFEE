import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";

import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroSlide1,
    badge: "Premium Artisan Coffee",
    title: "Experience",
    highlight: "Luxury Coffee",
    description:
      "Indulge in our meticulously crafted blends, sourced from the world's finest coffee-growing regions.",
    primaryCta: { text: "Explore Collection", link: "/products" },
    secondaryCta: { text: "Our Story", link: "/about" },
  },
  {
    image: heroSlide2,
    badge: "Artisan Roasting",
    title: "Crafted with",
    highlight: "Passion",
    description:
      "Every batch is carefully roasted to bring out the unique character and rich flavors of our premium beans.",
    primaryCta: { text: "Shop Now", link: "/products" },
    secondaryCta: { text: "Learn More", link: "/about" },
  },
  {
    image: heroSlide3,
    badge: "Global Delivery",
    title: "Subscribe &",
    highlight: "Save 20%",
    description:
      "Join our coffee club and receive freshly roasted beans delivered to your doorstep every month.",
    primaryCta: { text: "Subscribe Now", link: "/products" },
    secondaryCta: { text: "View Offers", link: "/products" },
  },
];

const HeroCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0 relative min-h-screen">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

              {/* Content */}
              <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 min-h-screen flex items-center">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 mb-8 animate-fade-in">
                    <Star className="h-4 w-4 text-gold" />
                    <span className="text-gold text-sm font-medium">
                      {slide.badge}
                    </span>
                  </div>

                  <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
                    <span className="text-foreground">{slide.title}</span>
                    <br />
                    <span className="gold-text">{slide.highlight}</span>
                  </h1>

                  <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                    <Button variant="luxury" size="xl" asChild>
                      <Link to={slide.primaryCta.link}>
                        {slide.primaryCta.text}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="goldOutline" size="xl" asChild>
                      <Link to={slide.secondaryCta.link}>
                        {slide.secondaryCta.text}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-gold w-8"
                  : "bg-gold/30 hover:bg-gold/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <div className="w-8 h-12 rounded-full border-2 border-gold/50 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse" />
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default HeroCarousel;
