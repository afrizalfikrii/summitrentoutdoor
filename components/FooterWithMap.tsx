import {
  Mountain,
  Instagram,
  MessageCircle,
  ChevronRight,
  MapPin,
  Phone,
  Clock,
  Map as MapIcon,
  Navigation,
} from "lucide-react";
import { createWhatsAppUrl } from "@/data/products";

const QUICK_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Katalog Alat", href: "#katalog" },
  { label: "Keunggulan Kami", href: "#keunggulan" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Posko & Lokasi Toko", href: "#lokasi" },
];

export default function FooterWithMap() {
  return (
    <footer
      id="lokasi"
      className="w-full bg-forest-dark text-white pt-16 lg:pt-24 pb-24 lg:pb-10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* 3 Column Info Section */}
        <div
          id="kontak"
          className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12"
        >
          {/* Left Column: Brand Info & Socials */}
          <div className="md:col-span-5 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 bg-adventure flex items-center justify-center rounded">
                  <Mountain className="w-5 h-5 text-forest-deep" />
                </div>
                <span className="font-oswald text-2xl font-medium uppercase text-white tracking-wider">
                  SUMMIT Outdoor
                </span>
              </div>
              <p className="font-manrope text-[15px] text-primary-fixed-dim leading-relaxed max-w-sm">
                Penyedia sewa alat gunung dan camping terlengkap dengan standar
                perawatan higienis, pengecekan fungsi presisi, dan harga ramah
                penjelajah.
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <a
                aria-label="Instagram SUMMIT"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-forest flex items-center justify-center text-white hover:bg-adventure transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                aria-label="WhatsApp Hotline"
                href={createWhatsAppUrl("Halo SUMMIT, saya ingin bertanya")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-forest flex items-center justify-center text-white hover:bg-adventure transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <span className="font-manrope text-[11px] font-bold uppercase tracking-wider text-primary-fixed-dim">
                @summit.outdoor • D.I. Yogyakarta
              </span>
            </div>
          </div>

          {/* Middle Column: Quick Navigation */}
          <div className="md:col-span-3 flex flex-col">
            <span className="font-manrope text-[11px] font-bold uppercase tracking-[0.12em] text-adventure block mb-4">
              Navigasi Cepat
            </span>
            <ul className="space-y-2.5 font-manrope text-[15px] text-primary-fixed-dim">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-4 h-4 text-adventure" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Posko Logistik Toko */}
          <div className="md:col-span-4 flex flex-col">
            <span className="font-manrope text-[11px] font-bold uppercase tracking-[0.12em] text-adventure block mb-4">
              Posko Logistik Toko
            </span>
            <div className="space-y-3.5 font-manrope text-[15px] text-primary-fixed-dim">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-adventure shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Alamat:</strong> Jl. Kaliurang
                  KM 9, Sinduharjo, Ngaglik, Sleman, D.I. Yogyakarta 55581
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-adventure shrink-0" />
                <span>
                  <strong className="text-white">WhatsApp:</strong> +62
                  812-3456-7890
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-adventure shrink-0" />
                <span>
                  <strong className="text-white">Jam Buka:</strong> Setiap Hari:
                  08.00 - 21.00 WIB
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embedded Container */}
        <div className="w-full bg-forest/50 border border-moss/40 p-4 sm:p-5 rounded shadow-md mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <MapIcon className="w-6 h-6 text-adventure shrink-0" />
              <div>
                <h3 className="font-oswald text-lg font-semibold text-white uppercase tracking-wide">
                  Posko Basecamp SUMMIT Outdoor
                </h3>
                <p className="font-manrope text-[13px] text-primary-fixed-dim">
                  Jl. Kaliurang KM 9, Sinduharjo, Sleman, Yogyakarta
                </p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Jl.+Kaliurang+KM+9,+Sinduharjo,+Ngaglik,+Sleman,+Yogyakarta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-adventure hover:bg-adventure-hover text-white rounded font-manrope text-[11px] font-bold uppercase tracking-wider transition-colors"
            >
              <Navigation className="w-4 h-4" />
              <span>Buka Petunjuk Arah (Google Maps)</span>
            </a>
          </div>

          <div className="relative w-full h-72 sm:h-80 rounded overflow-hidden border border-moss/40 bg-forest-deep">
            <iframe
              title="Lokasi Basecamp SUMMIT Outdoor Sleman Yogyakarta"
              src="https://maps.google.com/maps?q=-7.7219,110.4023&z=15&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-5 border-t border-moss/30 flex flex-col sm:flex-row items-center justify-between gap-2 text-primary-fixed-dim font-manrope text-[13px]">
          <span>© 2025 SUMMIT Outdoor Rental. Semua hak dilindungi.</span>
          <span className="font-manrope text-[11px] font-bold uppercase tracking-wider">
            Standar Ekspedisi Teruji Nusantara
          </span>
        </div>
      </div>
    </footer>
  );
}
