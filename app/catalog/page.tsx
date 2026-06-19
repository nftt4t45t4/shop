"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/products";
import ProductCard from "../components/ProductCard";
import { SlidersHorizontal } from "lucide-react";

const brandList = [
  { slug: "all", label: "Все бренды" },
  { slug: "nike", label: "Nike / Jordan" },
  { slug: "adidas", label: "adidas" },
  { slug: "yeezy", label: "adidas Yeezy" },
  { slug: "new-balance", label: "New Balance" },
  { slug: "balenciaga", label: "Balenciaga" },
];

const allSizes = Array.from(new Set(products.flatMap((p) => p.sizes))).sort((a, b) => a - b);

function CatalogContent() {
  const params = useSearchParams();
  const initialBrand = params.get("brand") ?? "all";
  const saleOnly = params.get("sale") === "true";

  const [brand, setBrand] = useState(initialBrand);
  const [size, setSize] = useState<number | null>(null);
  const [sale, setSale] = useState(saleOnly);
  const [sort, setSort] = useState("popular");

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (brand !== "all" && p.brandSlug !== brand) return false;
      if (size && !p.sizes.includes(size)) return false;
      if (sale && !p.oldPrice) return false;
      return true;
    });
    if (sort === "cheap") list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === "expensive") list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [brand, size, sale, sort]);

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-1">Каталог кроссовок</h1>
        <p className="text-neutral-500">Найдено моделей: {filtered.length}</p>
      </div>

      <div className="grid lg:grid-cols-[240px_1fr] gap-8">
        {/* Filters */}
        <aside className="space-y-8">
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2"><SlidersHorizontal size={16} /> Бренд</h3>
            <div className="space-y-1.5">
              {brandList.map((b) => (
                <button
                  key={b.slug}
                  onClick={() => setBrand(b.slug)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    brand === b.slug ? "bg-neutral-900 text-white" : "hover:bg-neutral-100 text-neutral-700"
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Размер (EU)</h3>
            <div className="flex flex-wrap gap-2">
              {allSizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(size === s ? null : s)}
                  className={`w-11 h-11 rounded-lg border text-sm font-medium transition-colors ${
                    size === s ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-300 hover:border-neutral-900"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={sale} onChange={(e) => setSale(e.target.checked)} className="w-4 h-4 accent-red-600" />
              <span className="text-sm font-medium">Только со скидкой</span>
            </label>
          </div>
        </aside>

        {/* Grid */}
        <div>
          <div className="flex justify-end mb-6">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-neutral-300 rounded-lg px-4 py-2.5 text-sm font-medium bg-white outline-none focus:border-neutral-900"
            >
              <option value="popular">По популярности</option>
              <option value="cheap">Сначала дешёвые</option>
              <option value="expensive">Сначала дорогие</option>
              <option value="rating">По рейтингу</option>
            </select>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-neutral-500">
              По выбранным фильтрам ничего не найдено.
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((p) => <ProductCard key={p.id} p={p} />)}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-6 py-20 text-neutral-500">Загрузка…</div>}>
      <CatalogContent />
    </Suspense>
  );
}
