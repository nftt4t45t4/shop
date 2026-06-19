import Link from "next/link";
import { ShoppingBag, Star, ArrowRight } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Классическая белая рубашка",
    price: 2990,
    category: "Рубашки",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=400&h=500&fit=crop",
  },
  {
    id: 2,
    name: "Джинсы slim fit",
    price: 4590,
    category: "Джинсы",
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
  },
  {
    id: 3,
    name: "Летнее платье",
    price: 3490,
    category: "Платья",
    rating: 4.9,
    reviews: 201,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop",
  },
  {
    id: 4,
    name: "Кожаная куртка",
    price: 12990,
    category: "Куртки",
    rating: 4.7,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
  },
];

const categories = [
  { name: "Женщинам", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&h=400&fit=crop", href: "/catalog?gender=women" },
  { name: "Мужчинам", image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=300&h=400&fit=crop", href: "/catalog?gender=men" },
  { name: "Детям", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=300&h=400&fit=crop", href: "/catalog?gender=kids" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1400&h=700&fit=crop"
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-32 flex flex-col items-start">
          <span className="text-sm tracking-widest uppercase text-neutral-300 mb-4">Новая коллекция 2024</span>
          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
            Стиль <br />
            <span className="font-bold">без компромиссов</span>
          </h1>
          <p className="text-neutral-300 text-lg mb-8 max-w-md">
            Откройте для себя коллекцию современной одежды для любого случая
          </p>
          <Link
            href="/catalog"
            className="flex items-center gap-2 bg-white text-black px-8 py-4 font-medium hover:bg-neutral-100 transition-colors"
          >
            Смотреть каталог
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-light mb-12 text-center">Выберите категорию</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat.name} href={cat.href} className="group relative overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-end p-6">
                <span className="text-white text-2xl font-light">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-neutral-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-light">Популярное</h2>
            <Link href="/catalog" className="text-sm underline underline-offset-4 hover:text-neutral-600">
              Все товары
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group bg-white">
                <div className="aspect-[4/5] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-neutral-400 mb-1">{product.category}</p>
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-neutral-600">{product.rating} ({product.reviews})</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{product.price.toLocaleString()} ₽</span>
                    <button className="flex items-center gap-1 text-sm bg-black text-white px-3 py-2 hover:bg-neutral-800 transition-colors">
                      <ShoppingBag size={14} />
                      В корзину
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-neutral-900 text-white p-12 md:p-20 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl font-light mb-3">Скидка 20% на первый заказ</h2>
            <p className="text-neutral-400">Введите промокод WELCOME20 при оформлении</p>
          </div>
          <Link
            href="/catalog"
            className="whitespace-nowrap border border-white text-white px-8 py-4 hover:bg-white hover:text-black transition-colors"
          >
            Начать покупки
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <span className="font-semibold text-black text-lg">MODÉ</span>
          <div className="flex gap-8">
            <Link href="/catalog" className="hover:text-black">Каталог</Link>
            <Link href="/about" className="hover:text-black">О нас</Link>
            <Link href="/contact" className="hover:text-black">Контакты</Link>
          </div>
          <span>© 2024 MODÉ. Все права защищены.</span>
        </div>
      </footer>
    </main>
  );
}
