import espressoImage from "@/assets/expresso.png";
import darkRoastImage from "@/assets/dark-roast-coffee.png";
import mediumRoastImage from "@/assets/medium-roast-coffee.png";
import takeawayCup from "@/assets/takeaway-cup.jpeg";
import takeawayMaanEspresso from "@/assets/expresso.jpeg";
import takeawayMaanDarkRoast from "@/assets/takeaway-maan-dark-roast.png";
import takeawayMaanMediumRoast from "@/assets/takeaway-maan-medium-roast.png";
import { Product } from "@/contexts/CartContext";

export const products: Product[] = [
  {
    id: "espresso-1kg",
    name: "Maan Espresso",
    description: "Rich, Full-Bodied, Sweet Chocolate and intensely aromatic with notes of dark chocolate and caramel. Perfect for traditional espresso and milk-based drinks.",
    price: 24.5,
    local: 3000,
    image: espressoImage,
    weight: "1kg",
    category: "beans",
  },
  {
    id: "dark-roast-1kg",
    name: "Maan Dark Roast",
    description: "Earthy, Dark Chocolate with a velvety finish. Notes of roasted nuts, brown sugar, and a hint of spice.",
    price: 25.5,
    local: 3500,
    image: darkRoastImage,
    weight: "1kg",
    category: "beans",
  },
  {
    id: "medium-roast-1kg",
    name: "Maan Medium Roast",
    description: "Citrus Orange Perfectly balanced with bright acidity and sweet undertones. Featuring notes of citrus, honey, and toasted almonds.",
    price: 25.5,
    local: 3500,
    image: mediumRoastImage,
    weight: "1kg",
    category: "beans",
  },
];

// Ready-to-drink coffee in takeaway cups
export const readyMadeDrinks: Product[] = [
  {
    id: "maan-espresso-takeaway",
    name: "Maan Espresso(Double)",
    description: "Rich, full-bodied espresso with sweet chocolate notes and intense aroma. Perfect for a quick pick-me-up.",
    price: 3.8,
    local: 500,
    image: takeawayMaanEspresso,
    weight: "450ml",
    category: "ready-made",
  },
  {
    id: "maan-espresso-takeaway",
    name: "Maan Espresso(Single)",
    description: "Rich, full-bodied espresso with sweet chocolate notes and intense aroma. Perfect for a quick pick-me-up.",
    price: 2.7,
    local: 350,
    image: takeawayMaanEspresso,
    weight: "450ml",
    category: "ready-made",
  },
  
  {
    id: "maan-dark-roast-takeaway",
    name: "Maan Dark Roast(Double)",
    description: "Earthy, dark chocolate flavors with a velvety finish. Notes of roasted nuts and brown sugar.",
    price: 3.8,
    local:500,
    image: takeawayMaanDarkRoast,
    weight: "450ml",
    category: "ready-made",
  },
    {
    id: "maan-dark-roast-takeaway",
    name: "Maan Dark Roast(Single)",
    description: "Earthy, dark chocolate flavors with a velvety finish. Notes of roasted nuts and brown sugar.",
    price: 2.7,
    local:350,
    image: takeawayMaanDarkRoast,
    weight: "450ml",
    category: "ready-made",
  },
];

export const offers = [
  {
    id: "first-order",
    title: "First Order Discount",
    description: "10% OFF on your first order",
    code: "FIRST10",
    badge: "New Customer",
  },
  {
    id: "bundle-deal",
    title: "Bundle & Save",
    description: "Buy 2 × 1kg Packs, Get 5% OFF",
    code: "BUNDLE5",
    badge: "Bundle Deal",
  },
  {
    id: "holiday-special",
    title: "Holiday Special",
    description: "Up to 15% OFF Selected Blends",
    code: "HOLIDAY15",
    badge: "Limited Time",
  },
  {
    id: "subscription",
    title: "Subscribe & Save",
    description: "20% OFF Monthly Subscription",
    code: "SUBSCRIBE20",
    badge: "Best Value",
  },
];

export const branches = [
  { city: "Nairobi", country: "Kenya", region: "Africa" },
  { city: "London", country: "United Kingdom", region: "Europe" },
  { city: "New York", country: "USA", region: "North America" },
  { city: "Berlin", country: "Germany", region: "Europe" },
  { city: "Tokyo", country: "Japan", region: "Asia" },
  { city: "São Paulo", country: "Brazil", region: "South America" },
];

export const regions = [
  { name: "Africa", icon: "🌍" },
  { name: "Europe", icon: "🇪🇺" },
  { name: "North America", icon: "🌎" },
  { name: "South America", icon: "🌎" },
  { name: "Asia", icon: "🌏" },
];
