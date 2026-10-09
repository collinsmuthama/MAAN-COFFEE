import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Bean, Box, Factory, Globe2, Handshake, Leaf, PackageCheck, ShieldCheck, Sprout, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/tayo-farm-hero.jpg";
import rawBeans from "@/assets/raw-coffee-beans.jpg";
import roastedBeans from "@/assets/roasted-coffee-beans.jpg";
import groundCoffee from "@/assets/ground-coffee.jpg";
import packagedCoffee from "@/assets/Espresso.png";
import processImage from "@/assets/home-roastery.jpg";

const products = [
  { name: "Raw Coffee Beans", detail: "Kenya & Ethiopia · Green coffee", image: rawBeans },
  { name: "Roasted Coffee Beans", detail: "Light · Medium · Dark roast", image: roastedBeans },
  { name: "Ground Coffee", detail: "Fine · Medium · Coarse", image: groundCoffee },
  { name: "Branded Packaging", detail: "Retail & private-label supply", image: packagedCoffee },
];
const strengths = [
  { icon: Bean, title: "African Origins", text: "Selected in Kenya & Ethiopia" },
  { icon: Handshake, title: "Direct Sourcing", text: "Trusted producer relationships" },
  { icon: ShieldCheck, title: "Quality Assured", text: "Careful grading and processing" },
  { icon: Leaf, title: "Responsible Practice", text: "Long-term sourcing partnerships" },
  { icon: Truck, title: "Global Export", text: "Retail and wholesale supply" },
];
const process = [
  { icon: Sprout, n: "01", title: "Acquire", text: "Source raw beans in Kenya and Ethiopia." },
  { icon: BadgeCheck, n: "02", title: "Grade", text: "Assess quality, origin and consistency." },
  { icon: Factory, n: "03", title: "Process", text: "Roast and grind to customer needs." },
  { icon: Box, n: "04", title: "Package", text: "Prepare retail or wholesale formats." },
  { icon: Globe2, n: "05", title: "Supply", text: "Deliver locally and export globally." },
];

export default function Index() {
  return <div className="tayo-site">
    <section className="tayo-hero relative min-h-[610px] overflow-hidden">
      <img src={hero} alt="African coffee farm with roasted coffee and beans" width={1920} height={912} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
      <div className="tayo-hero-overlay absolute inset-0" />
      <div className="site-shell relative flex min-h-[610px] items-center pt-20">
        <div className="max-w-[610px] py-16 text-cream">
          <p className="section-kicker text-gold">PREMIUM AFRICAN COFFEE</p>
          <h1 className="mt-4 font-display text-5xl font-medium leading-[1.03] md:text-7xl">From African Farms<br />to the <em className="text-gold">World</em></h1>
          <p className="mt-6 max-w-lg text-sm leading-7 text-cream/90">We acquire exceptional raw coffee beans from Kenya and Ethiopia, process and package them with care, then supply retail, wholesale and export markets.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg" className="rounded-full px-7"><Link to="/products">Explore Our Coffee <ArrowRight /></Link></Button><Button asChild variant="goldOutline" size="lg" className="rounded-full px-7"><a href="#process">Our Process</a></Button></div>
        </div>
      </div>
    </section>

    <section className="reference-cream border-b border-border py-7"><div className="site-shell grid grid-cols-2 gap-y-7 md:grid-cols-5">{strengths.map((item, i) => <div key={item.title} className={`flex flex-col items-center px-4 text-center ${i ? "md:border-l md:border-border" : ""}`}><item.icon className="mb-2 h-7 w-7 text-gold" strokeWidth={1.6}/><h2 className="text-xs font-semibold">{item.title}</h2><p className="mt-1 text-[10px] text-muted-foreground">{item.text}</p></div>)}</div></section>

    <section className="reference-cream py-14 md:py-16"><div className="site-shell"><div className="mb-8 flex items-end justify-between gap-4"><div><p className="section-kicker text-gold">OUR PRODUCTS</p><h2 className="section-heading mt-2">Exceptional Coffee, Every Time</h2><p className="mt-3 max-w-2xl text-sm text-muted-foreground">From raw beans to finished packs, we deliver consistent African coffee for homes, cafés, retailers and distributors.</p></div><Button asChild variant="goldOutline" className="hidden rounded-full md:flex"><Link to="/products">View All Products <ArrowRight /></Link></Button></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.map(item => <article key={item.name} className="overflow-hidden rounded-md border border-border bg-card"><div className="aspect-[1.25] overflow-hidden bg-muted"><img src={item.image} alt={item.name} width={960} height={688} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" /></div><div className="p-5 text-center"><h3 className="font-display text-lg">{item.name}</h3><p className="mt-1 text-xs text-muted-foreground">{item.detail}</p><Button asChild size="sm" className="mt-4 rounded-full"><Link to="/contact">Enquire Now</Link></Button></div></article>)}</div></div></section>

    <section id="process" className="grid bg-espresso lg:grid-cols-[0.8fr_1.2fr]"><div className="relative min-h-[380px]"><img src={processImage} alt="Coffee processing and roasting" width={1920} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-background/35"/><div className="absolute bottom-8 left-8 text-cream"><p className="font-display text-4xl">Our Journey</p><p className="mt-1 text-sm">Quality at every step</p></div></div><div className="flex items-center px-7 py-12 md:px-14"><div><p className="section-kicker text-gold">THE TAYO COFFEE PROCESS</p><h2 className="mt-2 font-display text-3xl text-cream">From raw bean to ready market</h2><p className="mt-2 text-sm text-cream/70">We manage the important stages that turn African coffee into a consistent, market-ready product.</p><div className="mt-10 grid grid-cols-2 gap-7 sm:grid-cols-5">{process.map(item => <div key={item.title}><div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold"><item.icon className="h-6 w-6" /></div><p className="text-[10px] font-semibold text-gold">{item.n}</p><h3 className="mt-1 text-sm font-semibold text-cream">{item.title}</h3><p className="mt-2 text-[10px] leading-5 text-cream/65">{item.text}</p></div>)}</div></div></div></section>

    <section className="reference-cream py-14"><div className="site-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"><div><p className="section-kicker text-gold">WHY CHOOSE TAYO COFFEE</p><h2 className="section-heading mt-2">African origin. Market-ready quality.</h2><p className="mt-4 text-sm leading-7 text-muted-foreground">We connect the quality and character of African coffee with buyers who value dependable processing, flexible packaging and responsive supply.</p><Button asChild className="mt-6 rounded-full"><Link to="/contact">Discuss Your Requirements <ArrowRight /></Link></Button></div><div className="grid gap-5 sm:grid-cols-2">{[{icon:PackageCheck,title:"Retail Supply",text:"Packaged coffee prepared for shops and direct customers."},{icon:Handshake,title:"Wholesale Supply",text:"Flexible quantities and formats for cafés, retailers and distributors."},{icon:Globe2,title:"Export Markets",text:"African coffee supplied to customers in international markets."},{icon:ShieldCheck,title:"Quality Control",text:"Careful selection, processing and packaging at each stage."}].map(item=><div key={item.title} className="border-l border-gold pl-5"><item.icon className="h-6 w-6 text-gold"/><h3 className="mt-3 font-display text-xl">{item.title}</h3><p className="mt-2 text-xs leading-6 text-muted-foreground">{item.text}</p></div>)}</div></div></section>
  </div>;
}
