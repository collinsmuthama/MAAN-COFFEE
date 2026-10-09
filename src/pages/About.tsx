import { Coffee, Award, Leaf, Heart, Globe, Users } from "lucide-react";
import { branches, regions } from "@/data/products";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality",
      description: "We never compromise on quality. Every bean is carefully selected and roasted to perfection.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to eco-friendly practices and supporting sustainable farming communities.",
    },
    {
      icon: Heart,
      title: "Customer Experience",
      description: "Your satisfaction is our priority. We strive to exceed expectations in every interaction.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 to-background" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            About <span className="gold-text">TAYO</span>
          </h1>
          <div className="section-divider mb-8" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
             Tayo Coffee connects exceptional African coffee with retail, wholesale and export buyers.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold mb-6">
                Who <span className="gold-text">We Are</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-8" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                 Tayo Coffee acquires raw coffee beans from trusted sources across Africa, with a focus on Kenya and Ethiopia. We select and process coffee for quality, consistency and market readiness.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                 We roast, grind and package coffee for retail customers, wholesale partners and international buyers, adapting formats to different market requirements.
              </p>
            </div>
            <div className="luxury-card p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                   <span className="font-display text-4xl gold-text font-bold">2</span>
                   <p className="text-muted-foreground text-sm mt-2">Core Origins</p>
                </div>
                <div className="text-center p-4">
                   <span className="font-display text-4xl gold-text font-bold">3</span>
                   <p className="text-muted-foreground text-sm mt-2">Sales Channels</p>
                </div>
                <div className="text-center p-4">
                   <span className="font-display text-4xl gold-text font-bold">100%</span>
                   <p className="text-muted-foreground text-sm mt-2">African Coffee</p>
                </div>
                <div className="text-center p-4">
                  <span className="font-display text-4xl gold-text font-bold">100%</span>
                   <p className="text-muted-foreground text-sm mt-2">Quality Focused</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-coffee-rich">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold mb-6">
              Our <span className="gold-text">Story</span>
            </h2>
            <div className="section-divider mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-6">
               Tayo Coffee was built around a clear purpose: to help quality African coffee travel further. We acquire raw coffee from Kenya and Ethiopia and prepare it for customers who value origin, consistency and dependable supply.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
               Our work covers the journey from raw bean selection through processing and packaging. We serve individual buyers, retailers, cafés, distributors and export partners.
            </p>
            <p className="text-muted-foreground leading-relaxed">
               By maintaining strong sourcing relationships and attentive quality control, we aim to build lasting value for both African producers and coffee buyers around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
              Our <span className="gold-text">Values</span>
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="luxury-card p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-display text-2xl text-gold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions of Operation */}
      <section className="py-24 bg-coffee-rich">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
              Regions of <span className="gold-text">Operation</span>
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
               Our sourcing is focused on leading African coffee origins
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
             {regions.slice(0, 2).map((region, index) => (
              <div
                key={index}
                className="luxury-card px-8 py-6 flex items-center gap-4"
              >
                <span className="text-3xl">{region.icon}</span>
                <span className="font-display text-lg text-foreground">{region.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
               Markets We <span className="gold-text">Serve</span>
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
               Retail and wholesale customers locally, with export relationships internationally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <div key={index} className="luxury-card p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground">{branch.city}</h4>
                  <p className="text-muted-foreground text-sm">{branch.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
