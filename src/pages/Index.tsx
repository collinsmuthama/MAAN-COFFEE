import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Bean, Coffee, Award, Truck, Star } from "lucide-react";
import HomeProductCard from "@/components/HomeProductCard";
import OfferCard from "@/components/OfferCard";
import { products, offers, readyMadeDrinks } from "@/data/products";
import roastery from "@/assets/home-roastery.jpg";

const beanNotes = ["Chocolate & caramel", "Bold, dark & velvety", "Bright citrus & honey"];

export default function Index() {
  return (
    <div className="home-page">
      <section className="home-hero relative overflow-hidden">
        <img src={roastery} alt="Roasted coffee beans in burlap sacks beside an artisan coffee roaster" width={1920} height={1024} fetchPriority="high" className="home-hero-photo absolute inset-0 h-full w-full object-cover" />
        <div className="home-hero-shade absolute inset-0" />
        <div className="home-container relative flex h-full items-center pt-[72px]">
          <div className="max-w-[490px] py-8">
            <p className="home-eyebrow mb-5 text-gold">TAYO COFFEE · ARTISAN ROASTED</p>
            <h1 className="text-cream">The Art of<br />Great Coffee</h1>
            <p className="mt-5 max-w-[340px] text-sm leading-7 text-cream/90">Carefully sourced, thoughtfully roasted. Discover rich, distinctive flavors in every cup of Tayo Coffee.</p>
            <Button asChild className="home-hero-cta mt-7 h-11 px-7"><Link to="/about">Our Story <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>

      <section className="home-cream py-10 md:py-12">
        <div className="home-container">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div><p className="home-eyebrow mb-2 text-gold">OUR SIGNATURE COLLECTION</p><h2 className="home-section-title">Premium Coffee Beans</h2></div>
            <Link to="/products" className="flex shrink-0 items-center gap-2 pb-1 text-xs hover:text-gold">Shop All <ArrowRight className="h-3 w-3" /></Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">{products.map((product, index) => <HomeProductCard key={product.id} product={product} note={beanNotes[index] ?? "Our signature roast"} />)}</div>
        </div>
      </section>

      <section className="border-y border-gold/20 bg-espresso py-10 md:py-12">
        <div className="home-container grid items-center gap-7 md:grid-cols-[1fr_1.2fr_auto]">
          <div className="flex items-center gap-5"><Bean className="h-12 w-12 shrink-0 text-gold" strokeWidth={1.2} /><h2 className="font-display text-2xl font-normal leading-tight text-cream">From Our Farm<br />To Your Cup</h2></div>
          <p className="text-sm leading-7 text-cream/85 md:border-l md:border-gold/40 md:pl-8">Exceptional coffee starts at the source. Discover the people, passion, and care behind every Tayo roast.</p>
          <Button variant="goldOutline" asChild className="w-fit border font-normal"><Link to="/about">Learn More <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
      </section>

      <section id="ready-made-drinks" className="home-cream py-12 md:py-14">
        <div className="home-container">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><p className="home-eyebrow mb-2 text-gold">FRESHLY MADE · READY TO GO</p><h2 className="home-section-title">Your Daily Coffee, Delivered</h2><p className="mt-3 text-sm text-muted-foreground">Your favorite roast, freshly prepared in a takeaway cup.</p></div><Link to="/track-order" className="flex items-center gap-2 text-xs hover:text-gold">Track Your Order <ArrowRight className="h-3 w-3" /></Link></div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{readyMadeDrinks.map((drink, index) => <HomeProductCard key={`${drink.id}-${drink.weight}-${index}`} product={drink} note={drink.weight === "Double" ? "A little more of what you love" : "Your everyday coffee moment"} />)}</div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-border pt-6 text-xs text-muted-foreground"><span className="flex items-center gap-2"><Truck className="h-4 w-4 text-gold" />25–35 Min Delivery</span><span className="flex items-center gap-2"><Coffee className="h-4 w-4 text-gold" />Freshly Prepared</span><span className="flex items-center gap-2"><Award className="h-4 w-4 text-gold" />Premium Packaging</span></div>
        </div>
      </section>

      <section className="py-12 md:py-14">
        <div className="home-container"><p className="home-eyebrow mb-2 text-gold">MORE COFFEE, MORE TO LOVE</p><h2 className="home-section-title mb-7 text-cream">A Little Something Extra</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{offers.map(offer => <OfferCard key={offer.id} offer={offer} />)}</div></div>
      </section>

      <section className="home-cream py-12 md:py-14">
        <div className="home-container"><div className="grid gap-8 md:grid-cols-3">{[
          { icon: Star, title: "Our Vision", text: "To inspire moments of joy and connection through exceptional coffee experiences." },
          { icon: Coffee, title: "Our Mission", text: "To source, craft, and deliver the finest coffee while nurturing sustainable relationships with farmers and communities." },
          { icon: Award, title: "Our Goal", text: "To elevate every coffee moment through quality, sustainability, and unforgettable taste." },
        ].map(item => <div key={item.title}><item.icon className="mb-4 h-7 w-7 text-gold" strokeWidth={1.5} /><h3 className="mb-3 font-display text-2xl">{item.title}</h3><p className="text-sm leading-7 text-muted-foreground">{item.text}</p></div>)}</div></div>
      </section>
      <section className="border-t border-gold/20 py-5"><div className="home-container flex flex-wrap justify-center gap-x-10 gap-y-3 text-xs text-cream/85"><span className="flex items-center gap-2"><Truck className="h-4 w-4 text-gold" />Free Delivery on orders above $50</span><span className="flex items-center gap-2"><Award className="h-4 w-4 text-gold" />Premium Packaging</span><span className="flex items-center gap-2"><Star className="h-4 w-4 text-gold" />Worldwide Shipping</span></div></section>
    </div>
  );
}
