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

import poster1 from "@/assets/p1.jpeg";
import poster2 from "@/assets/p2.jpeg";
import poster3 from "@/assets/p3.jpeg";

const slides = [
  {
    image: poster1,
    badge: "Premium Artisan Coffee",
    primaryCta: { text: "Explore Collection", link: "/products" },
    secondaryCta: { text: "Our Story", link: "/about" },
    tertiaryCta: { text: "Export Market", link: "/markets" },
  },
  {
    image: poster2,
    badge: "Artisan Roasting",
    primaryCta: { text: "Shop Now", link: "/products" },
    secondaryCta: { text: "Learn More", link: "/about" },
    tertiaryCta: { text: "Export Market", link: "/markets" },
  },
  {
    image: poster3,
    badge: "Global Delivery",
    primaryCta: { text: "Subscribe Now", link: "/products" },
    secondaryCta: { text: "View Offers", link: "/products" },
    tertiaryCta: { text: "Export Market", link: "/markets" },
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
    <section className="relative min-h-[68vh] md:min-h-[76vh] overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "center",
          duration: 40,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="hero-carousel w-full h-full"
      >
        <CarouselContent className="ml-0 h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0 relative min-h-[68vh] md:min-h-[76vh] overflow-hidden hero-slide">
              {/* Background Image */}
              <div
                className={`hero-image absolute inset-0 bg-cover bg-center bg-no-repeat ${
                  current === index ? "scale-110 opacity-100" : "scale-100 opacity-90"
                }`}
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/20 to-background" />

              {/* Content */}
              <div className="hero-content relative z-10 container mx-auto px-4 pt-24 pb-20 min-h-[68vh] md:min-h-[76vh] flex items-center">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 mb-8 animate-fade-in">
                    <Star className="h-4 w-4 text-gold" />
                    <span className="text-gold text-sm font-medium">
                      {slide.badge}
                    </span>
                  </div>

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
                    <Button variant="goldOutline" size="xl" asChild>  
                      <Link to={slide.tertiaryCta.link}>
                        {slide.tertiaryCta.text}
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
