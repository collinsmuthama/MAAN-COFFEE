import espressoImage from "@/assets/expresso.png";
import darkRoastImage from "@/assets/dark-roast-coffee.png";
import mediumRoastImage from "@/assets/medium-roast-coffee.png";
import { Product } from "@/contexts/CartContext";

export const products: Product[] = [
  {
    id: "espresso-1kg",
    name: "Espresso Blend",
    description: "Rich, Full-Bodied, Sweet Chocolate and intensely aromatic with notes of dark chocolate and caramel. Perfect for traditional espresso and milk-based drinks.",
    price: 34.99,
    image: espressoImage,
    weight: "1kg",
    category: "espresso",
  },
  {
    id: "dark-roast-1kg",
    name: "Dark Roast",
    description: "Earthy, Dark Chocolate with a velvety finish. Notes of roasted nuts, brown sugar, and a hint of spice.",
    price: 32.99,
    image: darkRoastImage,
    weight: "1kg",
    category: "dark-roast",
  },
  {
    id: "medium-roast-1kg",
    name: "Medium Roast",
    description: "Citrus Orange Perfectly balanced with bright acidity and sweet undertones. Featuring notes of citrus, honey, and toasted almonds.",
    price: 29.99,
    image: mediumRoastImage,
    weight: "1kg",
    category: "medium-roast",
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
