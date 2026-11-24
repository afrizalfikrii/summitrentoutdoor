"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import {
  CATEGORIES,
  PRODUCTS,
  ProductCategory,
  createProductWhatsAppUrl,
  formatRupiah,
} from "@/data/products";

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategory>("all");

  const filteredProducts =
    selectedCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="katalog"
      className="w-full py-16 lg:py-24 bg-cream border-y border-sage/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-2xl mb-7">
          <span className="font-manrope text-[11px] font-bold uppercase tracking-[0.12em] text-moss block mb-1.5">
            Inventori Lapangan 2025
          </span>
          <h2 className="font-oswald text-3xl sm:text-4xl font-semibold uppercase text-forest-deep tracking-tight">
            Temukan Perlengkapan Petualanganmu
          </h2>
          <p className="font-manrope text-base sm:text-lg text-on-surface-variant mt-2">
            Berbagai perlengkapan outdoor teruji untuk menemani perjalananmu
            menyusuri alam bebas.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          role="tablist"
          aria-label="Filter kategori produk"
          className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-8"
        >
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category.id)}
                className={`shrink-0 px-4 py-2 rounded font-manrope text-[11px] font-bold uppercase tracking-[0.1em] transition-colors border ${isActive
                  ? "bg-forest-deep text-white border-forest-deep"
                  : "bg-white text-on-surface-variant border-sage hover:border-forest hover:text-forest-deep"
                  }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Product Grid: 2 columns on mobile, 3 on md, 4 on lg */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="flex flex-col bg-white border border-sage rounded shadow-editorial overflow-hidden group"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-[4/5] bg-white overflow-hidden border-b border-sage/60 p-3 sm:p-4 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-2.5 left-2.5 bg-moss text-white px-2 py-0.5 rounded-sm font-manrope text-[10px] font-bold uppercase tracking-wider">
                  {product.categoryLabel}
                </span>
                {product.badge && (
                  <span
                    className={`absolute top-2.5 right-2.5 px-2 py-0.5 rounded-sm font-manrope text-[10px] font-bold uppercase tracking-wider ${product.badgeVariant === "highlight"
                      ? "bg-adventure text-white"
                      : "bg-surface/95 text-forest-deep border border-sage"
                      }`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between gap-3">
                <div>
                  <h3 className="font-oswald text-sm sm:text-lg font-semibold uppercase text-forest-deep leading-snug mb-1.5">
                    {product.name}
                  </h3>
                  <p className="font-manrope text-xs sm:text-[13px] text-on-surface-variant leading-relaxed mb-3 line-clamp-3">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {product.specs.map((spec) => (
                      <span
                        key={spec}
                        className="font-manrope text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-sage-light text-on-surface-variant px-1.5 py-0.5 rounded-sm"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & WhatsApp CTA */}
                <div className="pt-2 border-t border-sage/60">
                  <div className="flex items-baseline justify-between mb-2.5 bg-cream px-2.5 py-1.5 rounded-sm">
                    <span className="font-oswald text-lg sm:text-2xl font-semibold text-forest-deep">
                      {formatRupiah(product.pricePerDay)}
                    </span>
                    <span className="font-manrope text-[11px] sm:text-xs text-on-surface-variant">
                      / hari
                    </span>
                  </div>

                  <a
                    href={createProductWhatsAppUrl(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-2 sm:py-2.5 px-2.5 bg-forest-deep hover:bg-moss text-white rounded font-manrope text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-adventure shrink-0" />
                    <span>Tanya via WhatsApp</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
