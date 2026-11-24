import { Mountain, MessageCircle } from "lucide-react";
import { createWhatsAppUrl } from "@/data/products";

export default function CtaBanner() {
  return (
    <section className="w-full bg-forest-deep relative overflow-hidden py-16 lg:py-24">
      {/* Subtle atmospheric background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/cta-night-ridge.jpg')" }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center flex flex-col items-center">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/15 rounded mb-5">
          <Mountain className="w-4 h-4 text-adventure" />
          <span className="font-manrope text-[11px] font-bold uppercase text-primary-fixed tracking-[0.12em]">
            Waktunya Melangkah Keluar
          </span>
        </span>

        <h2 className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight mb-4">
          Sudah Siap Menjelajahi Alam?
        </h2>

        <p className="font-manrope text-base sm:text-lg text-primary-fixed max-w-2xl mb-8 leading-relaxed">
          Jangan biarkan perlengkapan menjadi penghalang petualanganmu. Amankan
          tenda dan carrier pilihanmu sekarang juga sebelum kehabisan slot akhir
          pekan.
        </p>

        <a
          href={createWhatsAppUrl(
            "Halo SUMMIT, saya siap booking alat outdoor untuk trip mendatang"
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-adventure hover:bg-adventure-hover text-white font-oswald text-lg font-semibold uppercase tracking-wider rounded transition-colors shadow-xl"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Hubungi Kami Sekarang</span>
        </a>
      </div>
    </section>
  );
}
