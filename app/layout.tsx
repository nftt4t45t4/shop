import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ShoppingBag, Search, User } from "lucide-react";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MODÉ — Интернет-магазин одежды",
  description: "Современная одежда для любого случая",
};

function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">MODÉ</Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/catalog" className="hover:text-neutral-600 transition-colors">Каталог</Link>
          <Link href="/catalog?gender=women" className="hover:text-neutral-600 transition-colors">Женщинам</Link>
          <Link href="/catalog?gender=men" className="hover:text-neutral-600 transition-colors">Мужчинам</Link>
          <Link href="/catalog?gender=kids" className="hover:text-neutral-600 transition-colors">Детям</Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hover:text-neutral-600 transition-colors"><Search size={20} /></button>
          <button className="hover:text-neutral-600 transition-colors"><User size={20} /></button>
          <button className="relative hover:text-neutral-600 transition-colors">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
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
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
