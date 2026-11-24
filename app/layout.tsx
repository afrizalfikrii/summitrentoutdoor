import type { Metadata } from "next";
import { Oswald, Manrope } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SUMMIT Outdoor Rental | Sewa Perlengkapan Gunung & Camping Yogyakarta",
  description:
    "Penyedia sewa alat gunung dan camping terlengkap di Sleman, Yogyakarta. Tenda, carrier, sleeping bag, dan peralatan masak terawat higienis dengan harga terjangkau.",
  icons: {
    icon: "/images/logo-summit.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${oswald.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="bg-surface font-manrope text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
