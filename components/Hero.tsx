import { ArrowDown, MessageCircle, ShieldCheck } from "lucide-react";
import { createWhatsAppUrl } from "@/data/products";

const TRIP_STATS = [
  { value: "4.9/5", label: "Rating Pendaki" },
  { value: "1.200+", label: "Trip Sukses" },
  { value: "48 Jam", label: "Garansi Sterilisasi" },
];

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative w-full overflow-hidden bg-forest-deep"
    >
      {/* Background Image & Editorial Gradients */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-rinjani.jpg')" }}
          role="img"
          aria-label="Ekspedisi gunung Indonesia saat matahari terbit dengan tenda di atas lautan awan"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/85 to-forest-deep/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-forest-deep/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-32 flex flex-col justify-center min-h-[580px] lg:min-h-[660px]">
        <div className="max-w-2xl flex flex-col items-start">
          {/* Technical Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cream/95 rounded mb-5 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-moss shrink-0" />
            <span className="font-manrope text-[11px] font-bold uppercase text-forest-deep tracking-[0.12em]">
              100% Peralatan Terawat &amp; Siap Pakai
            </span>
          </div>

          <h1 className="font-oswald text-[40px] leading-[46px] sm:text-5xl sm:leading-[56px] lg:text-[68px] lg:leading-[76px] font-bold text-white uppercase tracking-[0.02em] mb-4">
            Mulai Petualanganmu, Kami Siapkan Perlengkapannya.
          </h1>

          <p className="font-manrope text-base sm:text-lg text-primary-fixed mb-8 leading-relaxed max-w-xl">
            Temukan berbagai perlengkapan camping dan pendakian berkualitas dengan
            harga sewa terjangkau. Siap menemani setiap perjalananmu menembus
            batas cakrawala nusantara.
          </p>

          {/* Dual CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
            <a
              href="#katalog"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-adventure hover:bg-adventure-hover text-white font-oswald text-base sm:text-lg font-semibold uppercase tracking-wider rounded transition-colors shadow-md w-full sm:w-auto"
            >
              <span>Lihat Katalog</span>
              <ArrowDown className="w-5 h-5" />
            </a>

            <a
              href={createWhatsAppUrl(
                "Halo SUMMIT, saya ingin tanya sewa alat outdoor"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-forest/90 hover:bg-moss border border-primary-fixed-dim/30 text-white font-oswald text-base sm:text-lg font-semibold uppercase tracking-wider rounded transition-colors shadow-sm w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 text-adventure" />
              <span>Hubungi WhatsApp</span>
            </a>
          </div>

          {/* Field Metrics Ribbon */}
          <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-lg bg-forest-deep/60 backdrop-blur-sm border border-primary-fixed-dim/20 px-4 sm:px-5 py-3.5 rounded">
            {TRIP_STATS.map((stat) => (
              <div key={stat.label}>
                <span className="block font-oswald text-xl sm:text-2xl font-semibold text-white leading-tight">
                  {stat.value}
                </span>
                <span className="font-manrope text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] text-primary-fixed-dim">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
