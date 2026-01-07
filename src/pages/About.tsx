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
            About <span className="gold-text">MAAN</span>
          </h1>
          <div className="section-divider mb-8" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Crafting exceptional coffee experiences since 1985. Our journey began with a 
            simple passion: to bring the world's finest coffee to discerning palates.
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
                MAAN Coffee is a luxury coffee brand dedicated to sourcing, roasting, 
                and delivering the world's most exceptional coffee beans. We partner with 
                elite farmers across six continents to bring you flavors that transcend 
                the ordinary.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our master roasters craft each blend with precision and passion, ensuring 
                every cup delivers an unparalleled sensory experience. From the first 
                aroma to the last sip, Aurelia promises perfection.
              </p>
            </div>
            <div className="luxury-card p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <span className="font-display text-4xl gold-text font-bold">40+</span>
                  <p className="text-muted-foreground text-sm mt-2">Years of Excellence</p>
                </div>
                <div className="text-center p-4">
                  <span className="font-display text-4xl gold-text font-bold">6</span>
                  <p className="text-muted-foreground text-sm mt-2">Global Branches</p>
                </div>
                <div className="text-center p-4">
                  <span className="font-display text-4xl gold-text font-bold">50K+</span>
                  <p className="text-muted-foreground text-sm mt-2">Happy Customers</p>
                </div>
                <div className="text-center p-4">
                  <span className="font-display text-4xl gold-text font-bold">100%</span>
                  <p className="text-muted-foreground text-sm mt-2">Arabica Beans</p>
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
              In 1985, our founders embarked on a journey through the misty highlands of 
              Ethiopia, where they discovered the transformative power of truly exceptional 
              coffee. That revelation sparked a lifelong mission: to share the world's 
              finest coffee with those who appreciate the extraordinary.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From a small roastery in London to a global presence spanning six continents, 
              Aurelia has grown while staying true to its founding principles. We believe 
              that great coffee is more than a beverage—it's an experience, a moment of 
              pure luxury in your daily life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we continue to push the boundaries of coffee excellence, partnering 
              with the world's most skilled farmers and investing in sustainable practices 
              that ensure future generations can enjoy the same exceptional quality.
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
              We source our beans from the world's premier coffee-growing regions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {regions.map((region, index) => (
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

      {/* Global Branches */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
              Global <span className="gold-text">Branches</span>
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit us at any of our premium locations worldwide
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
