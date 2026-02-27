import React from "react";


const markets = [
  {
    name: "UAE",
    code: "ae",
    description: "Specialty and organic coffee market."
  },
  {
    name: "Bahrain",
    code: "bh",
    description: "Premium and direct-trade buyers."
  },
  {
    name: "Turkey",
    code: "tr",
    description: "Espresso-focused roasters."
  },
  {
    name: "China",
    code: "cn",
    description: "High-quality specialty coffee demand."
  },
  {
    name: "Oman",
    code: "om",
    description: "Growing luxury coffee segment."
  },
  {
    name: "United Kingdom",
    code: "gb",
    description: "Sustainable and fair-trade buyers."
  }
];
export default function ExportMarkets() {
  return (
    <div className="min-h-screen pt-20">
    {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 to-background" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            <span className="gold-text">Our Global Export Markets</span>
          </h1>
          <div className="section-divider mb-8" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We export premium Kenyan coffee beans to international markets,
          meeting global quality standards and certifications.
          </p>
        </div>
      </section>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {markets.map((market, index) => (
            <div key={index} className="luxury-card p-8 text-center">
            <div className="mx-auto mb-6 flex items-center justify-center">
              <img
                src={`https://flagcdn.com/w80/${market.code}.png`}
                alt={`${market.name} flag`}
                className="flag"
              />
              </div>
              <h3>{market.name}</h3>
              <p>{market.description}</p>
            </div>
          ))}
        </div>
    </div>
  );
}
