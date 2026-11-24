import { Compass, Clock, MessageSquare } from "lucide-react";
import { createWhatsAppUrl } from "@/data/products";

export default function About() {
  return (
    <section id="tentang" className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Image Anchor */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded overflow-hidden border border-sage shadow-md">
              <img
                src="/images/about-basecamp.jpg"
                alt="Suasana basecamp pendakian SUMMIT di Yogyakarta/Jawa Tengah dengan perlengkapan tertata rapi"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Editorial Floating Tag */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-4 bg-forest-deep text-white p-4 sm:p-5 rounded shadow-xl sm:max-w-xs border border-moss">
              <span className="font-manrope text-[11px] font-bold uppercase text-adventure tracking-[0.12em] block mb-1">
                Berbasis di Yogyakarta
              </span>
              <p className="font-manrope text-[13px] text-primary-fixed leading-relaxed">
                Pusat logistik siap kirim ke seluruh basecamp pendakian Merapi,
                Merbabu, Sindoro, Sumbing, &amp; Lawu.
              </p>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-6 flex flex-col">
            <span className="font-manrope text-[11px] font-bold uppercase tracking-[0.12em] text-moss block mb-1.5">
              Filosofi &amp; Dedikasi
            </span>
            <h2 className="font-oswald text-3xl sm:text-4xl font-semibold uppercase text-forest-deep mb-4 tracking-tight">
              Teman Terbaik untuk Setiap Petualangan.
            </h2>

            <p className="font-manrope text-base sm:text-lg text-charcoal mb-4 leading-relaxed">
              SUMMIT hadir untuk memudahkan siapa saja menikmati pengalaman
              outdoor tanpa harus memiliki semua perlengkapannya sendiri. Kami
              menyediakan berbagai perlengkapan camping dan pendakian untuk
              mendukung perjalananmu secara aman dan nyaman.
            </p>
            <p className="font-manrope text-[15px] text-on-surface-variant mb-6 leading-relaxed">
              Berbasis di Yogyakarta dengan akses mudah menuju jalur-jalur
              gunung Jawa Tengah, kami siap melayani pendaki pemula yang ingin
              mencicipi dinginnya malam di savana hingga kelompok ekspedisi
              profesional. Setiap unit kami rawat melalui SOP ketat agar Anda
              fokus pada keindahan alam, bukan kendala teknis alat.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
              <div className="bg-cream border border-sage p-4 rounded">
                <Compass className="w-6 h-6 text-moss mb-2" />
                <h3 className="font-oswald text-base font-semibold text-forest-deep uppercase mb-1">
                  Untuk Pemula &amp; Pro
                </h3>
                <p className="font-manrope text-[13px] text-on-surface-variant leading-relaxed">
                  Panduan pemakaian dan rekomendasi gear sesuai jalur gunung.
                </p>
              </div>
              <div className="bg-cream border border-sage p-4 rounded">
                <Clock className="w-6 h-6 text-moss mb-2" />
                <h3 className="font-oswald text-base font-semibold text-forest-deep uppercase mb-1">
                  Pengambilan Fleksibel
                </h3>
                <p className="font-manrope text-[13px] text-on-surface-variant leading-relaxed">
                  Bisa diambil H-1 keberangkatan tanpa biaya sewa tambahan.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center">
              <a
                href={createWhatsAppUrl(
                  "Halo SUMMIT, saya ingin konsultasi kebutuhan alat pendakian"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-forest-deep hover:bg-moss text-white font-oswald text-base font-semibold uppercase tracking-wider rounded transition-colors shadow-sm"
              >
                <MessageSquare className="w-5 h-5 text-adventure" />
                <span>Konsultasi Rute &amp; Gear</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
