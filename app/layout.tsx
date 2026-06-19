import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ShoppingBag, Search, User } from "lucide-react";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SOLE — Оригинальные кроссовки премиум-брендов",
  description: "Balenciaga, Rick Owens, Maison Margiela. 100% оригинал, гарантия подлинности, безопасная оплата.",
};

function Header() {
  return (
    <>
      {/* Trust bar */}
      <div className="bg-neutral-900 text-white text-xs">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-center md:justify-between gap-4">
          <span className="hidden md:inline text-neutral-300">✓ 100% оригинал · Гарантия подлинности</span>
          <span className="text-neutral-300">🚚 Бесплатная доставка от $500</span>
          <span className="hidden md:inline text-neutral-300">★ 4.9/5 — более 12 000 отзывов</span>
        </div>
      </div>
      <header className="border-b border-neutral-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-neutral-900">SOLE</Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
            <Link href="/catalog" className="hover:text-black transition-colors">Все кроссовки</Link>
            <Link href="/catalog?brand=balenciaga" className="hover:text-black transition-colors">Balenciaga</Link>
            <Link href="/catalog?brand=rick-owens" className="hover:text-black transition-colors">Rick Owens</Link>
            <Link href="/catalog?brand=margiela" className="hover:text-black transition-colors">Margiela</Link>
            <Link href="/catalog?sale=true" className="text-red-600 hover:text-red-500 transition-colors">Sale</Link>
          </nav>
          <div className="flex items-center gap-5 text-neutral-700">
            <button className="hover:text-black transition-colors"><Search size={20} /></button>
            <button className="hover:text-black transition-colors"><User size={20} /></button>
            <button className="relative hover:text-black transition-colors">
              <ShoppingBag size={20} />
              <span className="absolute -top-1.5 -right-1.5 bg-neutral-900 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <Header />
        {children}
      </body>
    </html>
  );
}
