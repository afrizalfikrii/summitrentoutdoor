"use client";

import { Home, Package, ShieldCheck, MapPin, MessageCircle } from "lucide-react";
import { createWhatsAppUrl } from "@/data/products";

const BOTTOM_TABS = [
  { label: "Beranda", href: "#beranda", icon: Home },
  { label: "Katalog", href: "#katalog", icon: Package },
  { label: "Keunggulan", href: "#keunggulan", icon: ShieldCheck },
  { label: "Lokasi", href: "#lokasi", icon: MapPin },
];

export default function MobileBottomBar() {
  return (
    <nav
      aria-label="Navigasi Cepat Mobile"
      className="lg:hidden fixed bottom-3 left-3 right-3 z-40 bg-surface/95 backdrop-blur-md border border-forest-deep/20 rounded-md shadow-xl px-2 py-1.5"
    >
      <div className="grid grid-cols-5 items-center gap-1">
        {BOTTOM_TABS.map((tab) => {
          const Icon = tab.icon;
          return (
            <a
              key={tab.href}
              href={tab.href}
              className="flex flex-col items-center justify-center py-1.5 rounded text-on-surface-variant hover:text-forest-deep hover:bg-cream transition-colors"
            >
              <Icon className="w-4 h-4 mb-0.5" />
              <span className="font-manrope text-[10px] font-bold uppercase tracking-wider">
                {tab.label}
              </span>
            </a>
          );
        })}

        <a
          href={createWhatsAppUrl(
            "Halo SUMMIT, saya ingin tanya ketersediaan alat"
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 rounded bg-adventure text-white hover:bg-adventure-hover transition-colors"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="font-manrope text-[10px] font-bold uppercase tracking-wider">
            Sewa
          </span>
        </a>
      </div>
    </nav>
  );
}
