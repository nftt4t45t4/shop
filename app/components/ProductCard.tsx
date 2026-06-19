import { Star } from "lucide-react";
import ProductImage from "./ProductImage";
import type { Product } from "@/lib/products";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <div className="group rounded-2xl bg-white border border-neutral-200/80 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-neutral-100">
        {p.tag && (
          <span
            className={`absolute top-3 left-3 z-10 text-[11px] font-bold px-2.5 py-1 rounded-full ${
              p.tag === "Sale"
                ? "bg-red-600 text-white"
                : p.tag === "New"
                ? "bg-neutral-900 text-white"
                : "bg-accent text-white"
            }`}
          >
            {p.tag}
          </span>
        )}
        <ProductImage
          src={p.image}
          alt={p.name}
          brand={p.brand}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute bottom-0 left-0 right-0 bg-neutral-900 text-white py-3 font-semibold text-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          Добавить в корзину
        </button>
      </div>
      <div className="p-4">
        <p className="text-xs text-neutral-500 uppercase tracking-wide mb-1">{p.brand}</p>
        <h3 className="font-semibold mb-2 truncate">{p.name}</h3>
        <div className="flex items-center gap-1 mb-3 text-xs text-neutral-500">
          <Star size={13} className="fill-yellow-400 text-yellow-400" />
          <span className="font-medium text-neutral-700">{p.rating}</span>
          <span>({p.reviews})</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-bold text-lg">${p.price.toLocaleString()}</span>
          {p.oldPrice && (
            <span className="text-sm text-neutral-400 line-through">${p.oldPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  );
}
