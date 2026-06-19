import Link from "next/link";
import { ArrowUpRight, Truck, ShieldCheck, RefreshCw } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Triple S",
    brand: "Balenciaga",
    price: 89900,
    oldPrice: 109900,
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&h=600&fit=crop",
    tag: "SALE",
  },
  {
    id: 2,
    name: "Geobasket High",
    brand: "Rick Owens",
    price: 124900,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop",
    tag: "NEW",
  },
  {
    id: 3,
    name: "Replica Sneakers",
    brand: "Maison Margiela",
    price: 67900,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop",
  },
  {
    id: 4,
    name: "Speed Trainer",
    brand: "Balenciaga",
    price: 78900,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop",
    tag: "HOT",
  },
  {
    id: 5,
    name: "Ramones Leather",
    brand: "Rick Owens",
    price: 98900,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop",
  },
  {
    id: 6,
    name: "Track Runner",
    brand: "Balenciaga",
    price: 94900,
    oldPrice: 119900,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&h=600&fit=crop",
    tag: "SALE",
  },
  {
    id: 7,
    name: "GAT German Army",
    brand: "Maison Margiela",
    price: 54900,
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=600&fit=crop",
  },
  {
    id: 8,
    name: "DRKSHDW Low",
    brand: "Rick Owens",
    price: 71900,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop",
    tag: "NEW",
  },
];

const brands = ["BALENCIAGA", "RICK OWENS", "MAISON MARGIELA", "OFF-WHITE", "VETEMENTS", "Y-3"];

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1600&h=1000&fit=crop"
            alt="hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-neutral-400 mb-6 border border-white/20 px-4 py-2">
              Drop FW24 · Доступно сейчас
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]">
              ИКОНЫ<br />СТРИТВЕРА
            </h1>
            <p className="text-lg text-neutral-300 mb-10 max-w-md">
              Balenciaga, Rick Owens, Maison Margiela. Оригинальные кроссовки и обувь от культовых домов моды.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/catalog"
                className="group flex items-center gap-2 bg-white text-black px-8 py-4 font-bold hover:bg-neutral-200 transition-colors"
              >
                Смотреть коллекцию
                <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
              </Link>
              <Link
                href="/catalog?sale=true"
                className="flex items-center gap-2 border border-white/30 px-8 py-4 font-bold hover:bg-white/10 transition-colors"
              >
                Распродажа
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand ticker */}
      <section className="border-y border-white/10 py-6 overflow-hidden">
        <div className="flex items-center justify-around gap-12 flex-wrap px-6 max-w-7xl mx-auto">
          {brands.map((b) => (
            <span key={b} className="text-neutral-500 font-black text-lg tracking-tight hover:text-white transition-colors cursor-default">
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black tracking-tighter mb-2">БЕСТСЕЛЛЕРЫ</h2>
            <p className="text-neutral-500">Самые желанные модели сезона</p>
          </div>
          <Link href="/catalog" className="hidden md:flex items-center gap-1 text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            Все товары <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
          {products.map((p) => (
            <div key={p.id} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-neutral-900 mb-4">
                {p.tag && (
                  <span
                    className={`absolute top-3 left-3 z-10 text-[10px] font-bold px-2.5 py-1 ${
                      p.tag === "SALE" ? "bg-red-600 text-white" : p.tag === "NEW" ? "bg-white text-black" : "bg-yellow-400 text-black"
                    }`}
                  >
                    {p.tag}
                  </span>
                )}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <button className="absolute bottom-0 left-0 right-0 bg-white text-black py-3 font-bold text-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  Добавить в корзину
                </button>
              </div>
              <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">{p.brand}</p>
              <h3 className="font-semibold mb-2">{p.name}</h3>
              <div className="flex items-center gap-2">
                <span className="font-bold">{p.price.toLocaleString()} ₽</span>
                {p.oldPrice && (
                  <span className="text-sm text-neutral-600 line-through">{p.oldPrice.toLocaleString()} ₽</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured brand banner */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/catalog?brand=balenciaga" className="group relative h-96 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=600&fit=crop"
              alt="Balenciaga"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
              <h3 className="text-3xl font-black tracking-tighter mb-1">BALENCIAGA</h3>
              <p className="text-neutral-300 flex items-center gap-1">Смотреть коллекцию <ArrowUpRight size={16} /></p>
            </div>
          </Link>
          <Link href="/catalog?brand=rick-owens" className="group relative h-96 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop"
              alt="Rick Owens"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
              <h3 className="text-3xl font-black tracking-tighter mb-1">RICK OWENS</h3>
              <p className="text-neutral-300 flex items-center gap-1">Смотреть коллекцию <ArrowUpRight size={16} /></p>
            </div>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: "100% оригинал", text: "Гарантия подлинности на каждую пару" },
            { icon: Truck, title: "Доставка по миру", text: "Бесплатно при заказе от 50 000 ₽" },
            { icon: RefreshCw, title: "Возврат 30 дней", text: "Не подошло — вернём деньги" },
          ].map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <f.icon size={28} className="text-white shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="font-bold mb-1">{f.title}</h4>
                <p className="text-sm text-neutral-500">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">НЕ ПРОПУСТИ ДРОП</h2>
          <p className="text-neutral-500 mb-8 max-w-md mx-auto">Подпишись и узнавай о новых поступлениях первым</p>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-neutral-900 border border-white/10 px-5 py-4 outline-none focus:border-white/40 transition-colors"
            />
            <button className="bg-white text-black px-8 py-4 font-bold hover:bg-neutral-200 transition-colors">
              ОК
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <span className="text-xl font-black tracking-tighter text-white">SOLE.</span>
          <div className="flex gap-8">
            <Link href="/catalog" className="hover:text-white transition-colors">Каталог</Link>
            <Link href="/about" className="hover:text-white transition-colors">О нас</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Контакты</Link>
          </div>
          <span>© 2024 SOLE. Все права защищены.</span>
        </div>
      </footer>
    </main>
  );
}
