import Link from "next/link";
import { ArrowRight, Truck, ShieldCheck, RefreshCw, Star, Lock, CheckCircle2 } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Triple S",
    brand: "Balenciaga",
    price: 1090,
    oldPrice: 1350,
    rating: 4.9,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&h=600&fit=crop",
    tag: "Sale",
  },
  {
    id: 2,
    name: "Geobasket High",
    brand: "Rick Owens",
    price: 1490,
    rating: 5.0,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop",
    tag: "New",
  },
  {
    id: 3,
    name: "Replica Sneakers",
    brand: "Maison Margiela",
    price: 820,
    rating: 4.8,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop",
  },
  {
    id: 4,
    name: "Speed Trainer",
    brand: "Balenciaga",
    price: 950,
    rating: 4.7,
    reviews: 419,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop",
    tag: "Hit",
  },
  {
    id: 5,
    name: "Ramones Leather",
    brand: "Rick Owens",
    price: 1190,
    rating: 4.9,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop",
  },
  {
    id: 6,
    name: "Track Runner",
    brand: "Balenciaga",
    price: 1140,
    oldPrice: 1450,
    rating: 4.8,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&h=600&fit=crop",
    tag: "Sale",
  },
  {
    id: 7,
    name: "GAT German Army",
    brand: "Maison Margiela",
    price: 660,
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=600&fit=crop",
  },
  {
    id: 8,
    name: "DRKSHDW Low",
    brand: "Rick Owens",
    price: 870,
    rating: 4.7,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop",
    tag: "New",
  },
];

const reviews = [
  { name: "Александр М.", text: "Заказывал Triple S — пришли за 4 дня, всё оригинал, бирки, коробка. Очень доволен!", rating: 5 },
  { name: "Дмитрий К.", text: "Брал Rick Owens, переживал из-за цены. Зря — качество топ, проверял по чекам. Рекомендую.", rating: 5 },
  { name: "Игорь С.", text: "Margiela GAT — то что искал. Поддержка ответила быстро, помогли с размером.", rating: 5 },
];

export default function Home() {
  return (
    <main className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-green-700 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full mb-6">
              <CheckCircle2 size={15} /> Проверенный магазин · 12 000+ заказов
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5 leading-[1.05]">
              Оригинальные кроссовки премиум-брендов
            </h1>
            <p className="text-lg text-neutral-600 mb-8 max-w-md">
              Balenciaga, Rick Owens, Maison Margiela. Каждая пара проходит проверку подлинности перед отправкой.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                href="/catalog"
                className="group inline-flex items-center gap-2 bg-neutral-900 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-neutral-800 transition-colors"
              >
                Смотреть каталог
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/catalog?sale=true"
                className="inline-flex items-center gap-2 border border-neutral-300 px-7 py-3.5 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
              >
                Скидки до 30%
              </Link>
            </div>
            <div className="flex items-center gap-6 text-sm text-neutral-500">
              <span className="flex items-center gap-1.5"><Star size={16} className="fill-yellow-400 text-yellow-400" /> 4.9 из 5</span>
              <span className="flex items-center gap-1.5"><ShieldCheck size={16} /> Гарантия оригинала</span>
              <span className="flex items-center gap-1.5"><Lock size={16} /> Безопасная оплата</span>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=900&h=700&fit=crop"
              alt="Premium sneakers"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Trust features */}
      <section className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, title: "100% оригинал", text: "Проверка подлинности" },
            { icon: Truck, title: "Быстрая доставка", text: "По всему миру 3–7 дней" },
            { icon: RefreshCw, title: "Возврат 30 дней", text: "Без лишних вопросов" },
            { icon: Lock, title: "Защита платежей", text: "Оплата при получении" },
          ].map((f) => (
            <div key={f.title} className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                <f.icon size={20} className="text-neutral-700" strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="font-semibold text-sm">{f.title}</h4>
                <p className="text-xs text-neutral-500">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight mb-1">Хиты продаж</h2>
            <p className="text-neutral-500">Самые популярные модели у наших покупателей</p>
          </div>
          <Link href="/catalog" className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-neutral-700 hover:text-black transition-colors">
            Все товары <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <div key={p.id} className="group rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-square overflow-hidden bg-neutral-100">
                {p.tag && (
                  <span
                    className={`absolute top-3 left-3 z-10 text-[11px] font-bold px-2.5 py-1 rounded-full ${
                      p.tag === "Sale" ? "bg-red-600 text-white" : p.tag === "New" ? "bg-neutral-900 text-white" : "bg-yellow-400 text-black"
                    }`}
                  >
                    {p.tag}
                  </span>
                )}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-neutral-500 uppercase tracking-wide mb-1">{p.brand}</p>
                <h3 className="font-semibold mb-2 truncate">{p.name}</h3>
                <div className="flex items-center gap-1 mb-3 text-xs text-neutral-500">
                  <Star size={13} className="fill-yellow-400 text-yellow-400" />
                  <span className="font-medium text-neutral-700">{p.rating}</span>
                  <span>({p.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-lg">${p.price.toLocaleString()}</span>
                    {p.oldPrice && (
                      <span className="text-sm text-neutral-400 line-through">${p.oldPrice.toLocaleString()}</span>
                    )}
                  </div>
                </div>
                <button className="mt-3 w-full bg-neutral-900 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-neutral-800 transition-colors">
                  В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight mb-2">Нам доверяют</h2>
            <div className="flex items-center justify-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-yellow-400" />)}
              <span className="ml-2 text-neutral-700 font-semibold">4.9 из 5</span>
              <span className="text-neutral-500 font-normal">· 12 480 отзывов</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-xl border border-neutral-200 p-6">
                <div className="flex gap-0.5 mb-3 text-yellow-400">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} size={15} className="fill-yellow-400" />)}
                </div>
                <p className="text-neutral-700 mb-4 leading-relaxed">{r.text}</p>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm">{r.name}</span>
                  <span className="inline-flex items-center gap-1 text-xs text-green-700">
                    <CheckCircle2 size={13} /> Проверенная покупка
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment / guarantee strip */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">Покупайте без риска</h2>
          <ul className="space-y-3 text-neutral-700">
            {[
              "Оплата при получении — платите, когда видите товар",
              "Сертификат подлинности к каждой паре",
              "Возврат и обмен в течение 30 дней",
              "Поддержка 7 дней в неделю",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-green-600 shrink-0 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
          <p className="text-sm text-neutral-500 mb-4">Принимаем к оплате</p>
          <div className="flex flex-wrap gap-3">
            {["VISA", "Mastercard", "Apple Pay", "Google Pay", "PayPal", "Наличные"].map((m) => (
              <span key={m} className="bg-white border border-neutral-200 rounded-lg px-4 py-2.5 text-sm font-semibold text-neutral-700">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <span className="text-xl font-extrabold tracking-tight">SOLE</span>
              <p className="text-sm text-neutral-500 mt-3 max-w-xs">
                Оригинальные кроссовки премиум-брендов с гарантией подлинности.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Магазин</h4>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li><Link href="/catalog" className="hover:text-black">Каталог</Link></li>
                <li><Link href="/catalog?sale=true" className="hover:text-black">Распродажа</Link></li>
                <li><Link href="/catalog?brand=balenciaga" className="hover:text-black">Balenciaga</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Помощь</h4>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li><Link href="/delivery" className="hover:text-black">Доставка и оплата</Link></li>
                <li><Link href="/returns" className="hover:text-black">Возврат</Link></li>
                <li><Link href="/contact" className="hover:text-black">Контакты</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li>support@sole.store</li>
                <li>Пн–Вс: 10:00–22:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-200 pt-6 text-sm text-neutral-400">
            © 2024 SOLE. Все права защищены.
          </div>
        </div>
      </footer>
    </main>
  );
}
