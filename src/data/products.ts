import espressoImage from "@/assets/expresso.png";
import darkRoastImage from "@/assets/dark-roast-coffee.png";
import mediumRoastImage from "@/assets/medium-roast-coffee.png";
import takeawayCup from "@/assets/takeaway-cup.jpeg";
import { Product } from "@/contexts/CartContext";

export const products: Product[] = [
  {
    id: "espresso-1kg",
    name: "Espresso Blend",
    description: "Rich, Full-Bodied, Sweet Chocolate and intensely aromatic with notes of dark chocolate and caramel. Perfect for traditional espresso and milk-based drinks.",
    price: 24.5,
    image: espressoImage,
    weight: "1kg",
    category: "beans",
  },
  {
    id: "dark-roast-1kg",
    name: "Dark Roast",
    description: "Earthy, Dark Chocolate with a velvety finish. Notes of roasted nuts, brown sugar, and a hint of spice.",
    price: 25.5,
    image: darkRoastImage,
    weight: "1kg",
    category: "beans",
  },
  {
    id: "medium-roast-1kg",
    name: "Medium Roast",
    description: "Citrus Orange Perfectly balanced with bright acidity and sweet undertones. Featuring notes of citrus, honey, and toasted almonds.",
    price: 25.5,
    image: mediumRoastImage,
    weight: "1kg",
    category: "beans",
  },
];

// Ready-to-drink coffee in takeaway cups
export const readyMadeDrinks: Product[] = [
  {
    id: "espresso-shot",
    name: "Classic Espresso",
    description: "Double shot of our signature espresso blend. Bold, rich, and perfectly extracted.",
    price: 4.99,
    image: takeawayCup,
    weight: "60ml",
    category: "ready-made",
  },
  {
    id: "cappuccino",
    name: "Creamy Cappuccino",
    description: "Silky steamed milk and velvety foam atop our premium espresso. A classic Italian indulgence.",
    price: 6.99,
    image: takeawayCup,
    weight: "350ml",
    category: "ready-made",
  },
  {
    id: "caffe-latte",
    name: "Caffè Latte",
    description: "Smooth espresso with steamed milk and a light layer of foam. Creamy and comforting.",
    price: 6.49,
    image: takeawayCup,
    weight: "400ml",
    category: "ready-made",
  },
  {
    id: "iced-americano",
    name: "Iced Americano",
    description: "Chilled espresso with cold water over ice. Refreshing and bold for warm days.",
    price: 5.49,
    image: takeawayCup,
    weight: "450ml",
    category: "ready-made",
  },
  {
    id: "mocha",
    name: "Chocolate Mocha",
    description: "Rich espresso blended with premium chocolate and steamed milk. Topped with whipped cream.",
    price: 7.49,
    image: takeawayCup,
    weight: "400ml",
    category: "ready-made",
  },
  {
    id: "cold-brew",
    name: "Cold Brew Coffee",
    description: "Slow-steeped for 24 hours for a smooth, naturally sweet flavor with low acidity.",
    price: 5.99,
    image: takeawayCup,
    weight: "500ml",
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
