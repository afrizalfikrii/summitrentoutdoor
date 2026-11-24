"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Mountain } from "lucide-react";
import { createWhatsAppUrl } from "@/data/products";

const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Katalog", href: "#katalog" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Lokasi", href: "#lokasi" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDrawerOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const handleNavClick = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-b border-sage/70 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="#beranda"
          className="flex items-center gap-2.5 shrink-0 group"
          aria-label="SUMMIT Outdoor Rental Beranda"
        >
          {!imgError ? (
            <img
              src="/images/logo-summit.svg"
              alt="SUMMIT Outdoor Logo"
              className="h-9 w-9 object-contain rounded"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-9 h-9 rounded bg-forest flex items-center justify-center text-adventure">
              <Mountain className="w-5 h-5" />
            </div>
          )}
          <div className="flex flex-col">
            <span className="font-oswald text-lg font-semibold uppercase text-forest-deep tracking-wider leading-none">
              SUMMIT
            </span>
            <span className="font-manrope text-[10px] font-bold uppercase text-on-surface-variant tracking-widest leading-tight">
              Outdoor Rental
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden xl:flex items-center gap-7"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-manrope text-[11px] font-bold uppercase tracking-[0.12em] text-on-surface-variant hover:text-forest transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={createWhatsAppUrl(
              "Halo SUMMIT, saya ingin bertanya tentang sewa peralatan outdoor"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-forest hover:bg-moss text-white rounded transition-colors shadow-[0_2px_8px_rgba(1,45,29,0.15)]"
          >
            <MessageCircle className="w-4 h-4 text-adventure" />
            <span className="font-manrope text-[11px] font-bold uppercase tracking-[0.12em]">
              Hubungi Kami
            </span>
          </a>

          {/* Mobile Drawer Trigger */}
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Buka menu navigasi"
            aria-expanded={isDrawerOpen}
            className="xl:hidden w-10 h-10 rounded border border-sage bg-surface-container-low flex items-center justify-center text-forest-deep hover:bg-sage-light transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
      </header>

      {/* Mobile Drawer Overlay (rendered outside header so backdrop-blur does not trap fixed positioning) */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-[60] xl:hidden">
          <div
            className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm"
            onClick={() => setIsDrawerOpen(false)}
            aria-hidden="true"
          />
          <aside className="fixed top-0 right-0 bottom-0 h-dvh w-72 max-w-[85vw] bg-surface border-l border-forest flex flex-col justify-between p-6 shadow-2xl overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-sage">
                <div className="flex items-center gap-2">
                  <Mountain className="w-5 h-5 text-forest" />
                  <span className="font-oswald text-lg font-semibold uppercase tracking-wider text-forest-deep">
                    SUMMIT Menu
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  aria-label="Tutup menu navigasi"
                  className="w-8 h-8 rounded border border-sage flex items-center justify-center text-charcoal hover:bg-cream"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="font-oswald text-lg uppercase tracking-wide text-charcoal hover:text-forest hover:bg-cream px-3 py-2.5 rounded transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-5 border-t border-sage space-y-3">
              <p className="font-manrope text-xs text-on-surface-variant">
                Buka Setiap Hari: 08.00 - 21.00 WIB
              </p>
              <a
                href={createWhatsAppUrl(
                  "Halo SUMMIT, saya ingin bertanya tentang sewa peralatan outdoor"
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-adventure hover:bg-adventure-hover text-white rounded font-oswald text-sm uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hubungi Kami</span>
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
