import Link from "next/link";
import { ArrowRight, Truck, ShieldCheck, RefreshCw, Star, Lock, CheckCircle2, ArrowUpRight } from "lucide-react";
import { products } from "@/lib/products";
import ProductCard from "./components/ProductCard";
import ProductImage from "./components/ProductImage";

const brands = ["NIKE", "ADIDAS", "JORDAN", "YEEZY", "NEW BALANCE", "BALENCIAGA", "NIKE", "ADIDAS", "JORDAN", "YEEZY", "NEW BALANCE", "BALENCIAGA"];

const reviews = [
  { name: "Александр М.", city: "Москва", text: "Заказывал Jordan 4 Cement — пришли за 4 дня, всё оригинал: бирки, коробка, чек. Очень доволен!", rating: 5 },
  { name: "Дмитрий К.", city: "СПб", text: "Брал Yeezy 350, переживал из-за подделок. Зря — качество топ, проверял по чекам. Рекомендую.", rating: 5 },
  { name: "Игорь С.", city: "Казань", text: "Adidas Samba — то что искал. Поддержка ответила быстро, помогли с размером.", rating: 5 },
];

export default function Home() {
  const featured = products.slice(0, 8);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full mb-6">
              <CheckCircle2 size={15} /> Проверенный магазин · 12 000+ заказов
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-6">
              КУЛЬТОВЫЕ
              <br />
              КРОССОВКИ.
              <br />
              <span className="text-accent">100% ОРИГИНАЛ.</span>
            </h1>
            <p className="text-lg text-neutral-600 mb-8 max-w-md">
              Balenciaga, Rick Owens, Maison Margiela. Каждая пара проходит проверку подлинности перед отправкой.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/catalog"
                className="group inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-neutral-800 transition-colors"
              >
                Смотреть каталог
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/catalog?sale=true"
                className="inline-flex items-center gap-2 border-2 border-neutral-900 px-8 py-4 rounded-xl font-semibold hover:bg-neutral-900 hover:text-white transition-colors"
              >
                Скидки до 30%
              </Link>
            </div>
            <div className="flex items-center gap-6 text-sm text-neutral-500">
              <span className="flex items-center gap-1.5"><Star size={16} className="fill-yellow-400 text-yellow-400" /> 4.9 / 5</span>
              <span className="flex items-center gap-1.5"><ShieldCheck size={16} /> Гарантия оригинала</span>
              <span className="flex items-center gap-1.5"><Lock size={16} /> Оплата при получении</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-accent/10 rounded-[2.5rem] -rotate-3" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-white">
              <ProductImage
                src="/products/jordan-1-silver.jpg"
                alt="Air Jordan 1"
                brand="Air Jordan 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-neutral-100">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <ShieldCheck size={20} className="text-green-600" />
              </div>
              <div>
                <p className="text-sm font-bold leading-tight">Сертификат</p>
                <p className="text-xs text-neutral-500">подлинности в комплекте</p>
              </div>
            </div>
          </div>
        </div>

        {/* Brand marquee */}
        <div className="border-y border-neutral-200 py-5 overflow-hidden bg-white">
          <div className="flex w-max animate-marquee gap-12">
            {brands.map((b, i) => (
              <span key={i} className="text-neutral-400 font-black text-xl tracking-tight whitespace-nowrap">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust features */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, title: "100% оригинал", text: "Проверка подлинности" },
            { icon: Truck, title: "Быстрая доставка", text: "По миру за 3–7 дней" },
            { icon: RefreshCw, title: "Возврат 30 дней", text: "Без лишних вопросов" },
            { icon: Lock, title: "Оплата при получении", text: "Платите за товар в руках" },
          ].map((f) => (
            <div key={f.title} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
                <f.icon size={22} className="text-neutral-800" strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="font-semibold text-sm">{f.title}</h4>
                <p className="text-xs text-neutral-500">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand tiles */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "NIKE / JORDAN", slug: "nike", img: "/products/jordan-4-cement.jpg" },
            { name: "ADIDAS / YEEZY", slug: "yeezy", img: "/products/yeezy-350-onyx.jpg" },
            { name: "NEW BALANCE", slug: "new-balance", img: "/products/new-balance-990.jpg" },
          ].map((b) => (
            <Link key={b.slug} href={`/catalog?brand=${b.slug}`} className="group relative h-64 rounded-2xl overflow-hidden bg-white">
              <ProductImage src={b.img} alt={b.name} brand={b.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-black tracking-tight text-white mb-1">{b.name}</h3>
                <span className="text-white/80 text-sm flex items-center gap-1">Смотреть <ArrowUpRight size={15} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-1">Хиты продаж</h2>
            <p className="text-neutral-500">Самые популярные модели у наших покупателей</p>
          </div>
          <Link href="/catalog" className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-neutral-700 hover:text-black transition-colors">
            Все товары <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
        <div className="text-center mt-10">
          <Link href="/catalog" className="inline-flex items-center gap-2 border-2 border-neutral-900 px-8 py-4 rounded-xl font-semibold hover:bg-neutral-900 hover:text-white transition-colors">
            Показать все {products.length} моделей <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">Нам доверяют</h2>
            <div className="flex items-center justify-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-yellow-400" />)}
              <span className="ml-2 text-neutral-800 font-semibold">4.9 из 5</span>
              <span className="text-neutral-500 font-normal">· 12 480 отзывов</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6">
                <div className="flex gap-0.5 mb-3 text-yellow-400">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} size={15} className="fill-yellow-400" />)}
                </div>
                <p className="text-neutral-700 mb-4 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">{r.name}, {r.city}</span>
                  <span className="inline-flex items-center gap-1 text-xs text-green-700">
                    <CheckCircle2 size={13} /> Проверено
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee + payments */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-5">Покупайте без риска</h2>
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
        <div className="bg-white border border-neutral-200 rounded-2xl p-8">
          <p className="text-sm text-neutral-500 mb-4">Принимаем к оплате</p>
          <div className="flex flex-wrap gap-3">
            {["VISA", "Mastercard", "Apple Pay", "Google Pay", "PayPal", "Наличные"].map((m) => (
              <span key={m} className="bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm font-semibold text-neutral-700">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
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
                <li><Link href="/catalog?brand=nike" className="hover:text-black">Nike</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Помощь</h4>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li><Link href="/catalog" className="hover:text-black">Доставка и оплата</Link></li>
                <li><Link href="/catalog" className="hover:text-black">Возврат</Link></li>
                <li><Link href="/catalog" className="hover:text-black">Контакты</Link></li>
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
