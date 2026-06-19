import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ShoppingBag, Search, User } from "lucide-react";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SOLE — Premium Sneakers & Streetwear",
  description: "Balenciaga, Rick Owens, Maison Margiela и другие культовые бренды",
};

function Header() {
  return (
    <header className="border-b border-white/10 bg-black/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter text-white">SOLE<span className="text-neutral-500">.</span></Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <Link href="/catalog" className="hover:text-white transition-colors">Все кроссовки</Link>
          <Link href="/catalog?brand=balenciaga" className="hover:text-white transition-colors">Balenciaga</Link>
          <Link href="/catalog?brand=rick-owens" className="hover:text-white transition-colors">Rick Owens</Link>
          <Link href="/catalog?brand=margiela" className="hover:text-white transition-colors">Margiela</Link>
          <Link href="/catalog?sale=true" className="text-red-500 hover:text-red-400 transition-colors">SALE</Link>
        </nav>
        <div className="flex items-center gap-5 text-white">
          <button className="hover:text-neutral-400 transition-colors"><Search size={20} /></button>
          <button className="hover:text-neutral-400 transition-colors"><User size={20} /></button>
          <button className="relative hover:text-neutral-400 transition-colors">
            <ShoppingBag size={20} />
            <span className="absolute -top-1.5 -right-1.5 bg-white text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
