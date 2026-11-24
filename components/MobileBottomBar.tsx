"use client";

import { useEffect, useState } from "react";
import { Home, Package, ShieldCheck, MapPin, MessageCircle } from "lucide-react";
import { createWhatsAppUrl } from "@/data/products";

const BOTTOM_TABS = [
  { label: "Beranda", href: "#beranda", id: "beranda", icon: Home },
  { label: "Keunggulan", href: "#keunggulan", id: "keunggulan", icon: ShieldCheck },
  { label: "Katalog", href: "#katalog", id: "katalog", icon: Package },
  { label: "Lokasi", href: "#lokasi", id: "lokasi", icon: MapPin },
];

export default function MobileBottomBar() {
  const [activeHref, setActiveHref] = useState("#beranda");

  useEffect(() => {
    const sections = BOTTOM_TABS.map((tab) =>
      document.getElementById(tab.id)
    ).filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Navigasi Cepat Mobile"
      className="lg:hidden fixed bottom-3 left-3 right-3 z-40 bg-surface/95 backdrop-blur-md border border-forest-deep/20 rounded-md shadow-xl px-1.5 py-1.5"
    >
      <div className="grid grid-cols-5 items-center gap-1">
        {BOTTOM_TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeHref === tab.href;

          return (
            <a
              key={tab.href}
              href={tab.href}
              onClick={() => setActiveHref(tab.href)}
              aria-current={isActive ? "page" : undefined}
              className={`flex flex-col items-center justify-center px-1 py-1.5 rounded transition-all active:scale-95 min-w-0 ${
                isActive
                  ? "bg-forest-deep text-white shadow-sm"
                  : "text-on-surface-variant hover:text-forest-deep hover:bg-cream"
              }`}
            >
              <Icon
                className={`w-4 h-4 mb-1 shrink-0 ${isActive ? "text-adventure" : ""}`}
              />
              <span className="font-manrope text-[8.5px] sm:text-[10px] font-bold uppercase tracking-normal sm:tracking-wider leading-none truncate max-w-full">
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
          className="flex flex-col items-center justify-center px-1 py-1.5 rounded bg-adventure text-white hover:bg-adventure-hover transition-all active:scale-95 min-w-0"
        >
          <MessageCircle className="w-4 h-4 mb-1 shrink-0" />
          <span className="font-manrope text-[8.5px] sm:text-[10px] font-bold uppercase tracking-normal sm:tracking-wider leading-none truncate max-w-full">
            Sewa
          </span>
        </a>
      </div>
    </nav>
  );
}
