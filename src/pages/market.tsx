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
    <div className="reference-cream min-h-screen pt-20">
    {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border py-20">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
             <span className="text-gold">Our Export Markets</span>
          </h1>
          <div className="section-divider mb-8" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
             We prepare and package African coffee for wholesale and export buyers across international markets.
          </p>
        </div>
      </section>
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-16 md:grid-cols-3">
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
