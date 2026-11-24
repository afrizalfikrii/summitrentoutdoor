import {
  ShieldCheck,
  Sparkles,
  PiggyBank,
  CheckCircle2,
  Zap,
  Headphones,
} from "lucide-react";

export default function Features() {
  return (
    <section id="keunggulan" className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-manrope text-[11px] font-bold uppercase tracking-[0.12em] text-moss block mb-1.5">
              Standar Keamanan Ekspedisi
            </span>
            <h2 className="font-oswald text-3xl sm:text-4xl font-semibold uppercase text-forest-deep tracking-tight">
              Keunggulan Ekspedisi SUMMIT
            </h2>
          </div>
          <p className="font-manrope text-[15px] text-on-surface-variant max-w-md leading-relaxed">
            Dirancang untuk memberikan ketenangan pikiran sebelum kaki Anda
            melangkah di jalur pendakian. Kami merawat setiap perlengkapan seperti
            milik sendiri.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Large Anchor */}
          <div className="lg:col-span-6 bg-cream border border-sage p-6 sm:p-8 rounded flex flex-col justify-between shadow-editorial relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 opacity-[0.04] text-forest-deep pointer-events-none">
              <ShieldCheck className="w-52 h-52" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-forest-deep text-white flex items-center justify-center rounded mb-6">
                <Sparkles className="w-6 h-6 text-adventure" />
              </div>
              <span className="font-manrope text-[11px] font-bold text-moss uppercase tracking-[0.12em] block mb-1.5">
                Protokol Pemeliharaan 01
              </span>
              <h3 className="font-oswald text-2xl sm:text-[28px] font-medium text-forest-deep uppercase mb-3">
                Peralatan Berkualitas &amp; Higienis
              </h3>
              <p className="font-manrope text-[15px] text-on-surface-variant leading-relaxed mb-6">
                Perlengkapan selalu diinspeksi secara berkala, dicuci bersih
                anti-bakteri, dan dicek kelengkapan jahitan maupun waterproof
                seam-seal sebelum diserahkan. Siap langsung digunakan pada medan
                basah maupun dingin ekstrem.
              </p>
            </div>

            <div className="relative z-10 bg-sage-light/80 border border-sage px-4 py-2.5 rounded">
              <span className="font-manrope text-[11px] font-bold uppercase tracking-[0.08em] text-forest-deep">
                Inklusif: Disinfeksi Sleeping Bag • Cek Frame Tenda • Cuci Tas
                Carrier
              </span>
            </div>
          </div>

          {/* Right Column Stack */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Card 2 */}
            <div className="bg-cream border border-sage p-6 rounded shadow-editorial flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-moss text-white flex items-center justify-center rounded shrink-0">
                    <PiggyBank className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-manrope text-[11px] font-bold text-moss uppercase tracking-[0.12em] block">
                      Efisiensi Biaya 02
                    </span>
                    <h3 className="font-oswald text-xl sm:text-[22px] font-medium text-forest-deep uppercase">
                      Harga Terjangkau &amp; Transparan
                    </h3>
                  </div>
                </div>
                <p className="font-manrope text-[15px] text-on-surface-variant leading-relaxed">
                  Nikmati perlengkapan kelas atas standar internasional
                  (Naturehike, Eiger, Osprey) tanpa perlu mengeluarkan jutaan
                  rupiah untuk membelinya. Hemat anggaran perjalanan untuk
                  logistik dan tiket simaksi.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-sage/70 flex items-center gap-2 text-moss font-manrope text-[11px] font-bold uppercase tracking-[0.08em]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Tanpa Biaya Tersembunyi • Potongan Sewa Mingguan</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-cream border border-sage p-6 rounded shadow-editorial flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-tertiary-container text-white flex items-center justify-center rounded shrink-0">
                    <Zap className="w-5 h-5 text-adventure" />
                  </div>
                  <div>
                    <span className="font-manrope text-[11px] font-bold text-moss uppercase tracking-[0.12em] block">
                      Layanan Cepat 03
                    </span>
                    <h3 className="font-oswald text-xl sm:text-[22px] font-medium text-forest-deep uppercase">
                      Proses Reservasi Instan
                    </h3>
                  </div>
                </div>
                <p className="font-manrope text-[15px] text-on-surface-variant leading-relaxed">
                  Tanpa birokrasi rumit. Hubungi kami langsung melalui WhatsApp
                  untuk pengecekan stok real-time, pengisian data sewa cepat,
                  dan konfirmasi reservasi alat hanya dalam hitungan menit.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-sage/70 flex items-center gap-2 text-moss font-manrope text-[11px] font-bold uppercase tracking-[0.08em]">
                <Headphones className="w-4 h-4 shrink-0" />
                <span>Customer Service Siap Bantu Pukul 08.00 - 21.00 WIB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
