import { Link, useLocation } from "react-router-dom";
import { Menu, ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import Logo from "@/assets/Logo.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false); const location = useLocation(); const { totalItems } = useCart();
  const links = [{name:"Home",path:"/"},{name:"About Us",path:"/about"},{name:"Products",path:"/products"},{name:"Sourcing",path:"/#process"},{name:"Wholesale",path:"/contact"},{name:"Export",path:"/markets"},{name:"Contact",path:"/contact"}];
  return <nav className="fixed inset-x-0 top-0 z-50 border-b border-gold/20 bg-background/95 backdrop-blur-md"><div className="site-shell"><div className="flex h-20 items-center justify-between"><Link to="/" className="flex items-center gap-3"><img src={Logo} alt="Tayo Coffee" width={52} height={52} className="h-12 w-12 rounded-full object-cover"/><div><span className="block font-display text-2xl leading-none text-gold">TAYO</span><span className="text-[8px] tracking-[.24em] text-cream/70">COFFEE</span></div></Link><div className="hidden items-center gap-7 lg:flex">{links.map(l=><Link key={l.name} to={l.path} className={`text-xs transition-colors hover:text-gold ${location.pathname===l.path?"text-gold":"text-cream/80"}`}>{l.name}</Link>)}</div><div className="flex items-center gap-1"><Link to="/cart" className="relative"><Button variant="ghost" size="icon" aria-label="Shopping cart"><ShoppingCart/>{totalItems>0&&<span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[9px] text-coffee-dark">{totalItems}</span>}</Button></Link><Button variant="ghost" size="icon" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} className="lg:hidden" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button></div></div>{open&&<div className="border-t border-gold/20 py-3 lg:hidden">{links.map(l=><Link key={l.name} to={l.path} onClick={()=>setOpen(false)} className="block py-3 text-sm text-cream/80 hover:text-gold">{l.name}</Link>)}</div>}</div></nav>;
}
