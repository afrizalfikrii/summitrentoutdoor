export type ProductCategory =
  | "all"
  | "tenda"
  | "carrier"
  | "sleeping-bag"
  | "peralatan-masak"
  | "aksesoris-outdoor";

export interface CategoryOption {
  id: ProductCategory;
  label: string;
}

export interface Product {
  id: string;
  name: string;
  category: Exclude<ProductCategory, "all">;
  categoryLabel: string;
  badge?: string;
  badgeVariant?: "default" | "highlight";
  description: string;
  specs: string[];
  pricePerDay: number;
  image: string;
  imageAlt: string;
}

export const WHATSAPP_NUMBER = "6281234567890";

export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function createProductWhatsAppUrl(productName: string): string {
  return createWhatsAppUrl(`Halo SUMMIT, saya ingin tanya sewa ${productName}`);
}

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(amount)
    .replace(/\s/g, "");
}

export const CATEGORIES: CategoryOption[] = [
  { id: "all", label: "Semua" },
  { id: "tenda", label: "Tenda" },
  { id: "carrier", label: "Carrier" },
  { id: "sleeping-bag", label: "Sleeping Bag" },
  { id: "peralatan-masak", label: "Peralatan Masak" },
  { id: "aksesoris-outdoor", label: "Aksesoris Outdoor" },
];

export const PRODUCTS: Product[] = [
  {
    id: "tenda-naturehike-cloud-up-2",
    name: "Tenda Naturehike Cloud Up 2",
    category: "tenda",
    categoryLabel: "Tenda",
    badge: "Ultralight",
    badgeVariant: "default",
    description:
      "Kapasitas 2 Orang, berat ringkas 1.8kg, Double Layer silikon tahan badai hujan deras hingga 4000mm.",
    specs: ["2 Person", "1.8 kg", "PU 4000mm"],
    pricePerDay: 45000,
    image: "/images/tenda-naturehike.jpg",
    imageAlt:
      "Tenda Naturehike Cloud Up 2 ultralight terpasang di medan berbatu vulkanik",
  },
  {
    id: "carrier-eiger-45l",
    name: "Carrier Eiger 45L + Rain Cover",
    category: "carrier",
    categoryLabel: "Carrier",
    description:
      "Sistem punggung ergonomis dengan ventilasi udara, adjustable torso, dan bonus pelindung hujan water-repellent.",
    specs: ["Kapasitas 45L", "Raincover Inc.", "Ergo Back"],
    pricePerDay: 35000,
    image: "/images/carrier-eiger-45l.jpg",
    imageAlt:
      "Carrier Eiger 45L dengan rain cover di hutan pinus pegunungan tropis",
  },
  {
    id: "sleeping-bag-polar-dacron",
    name: "Sleeping Bag Polar Dacron Outdoor",
    category: "sleeping-bag",
    categoryLabel: "Sleeping Bag",
    badge: "Steril",
    badgeVariant: "default",
    description:
      "Lapisan ganda dacron tebal dengan polar lembut. Menjaga suhu tubuh optimal di ketinggian gunung tropis.",
    specs: ["Limit 5°C", "Polar Tebal", "Dry Cleaned"],
    pricePerDay: 20000,
    image: "/images/sleeping-bag-polar.jpg",
    imageAlt:
      "Sleeping bag polar dacron hangat di dalam tenda menghadap matahari terbit",
  },
  {
    id: "kompor-windproof-nesting",
    name: "Kompor Windproof & Nesting Set",
    category: "peralatan-masak",
    categoryLabel: "Peralatan Masak",
    description:
      "Kompor gas model mawar penahan angin terintegrasi, dipadukan paket nesting panci aluminium anodized anti-lengket.",
    specs: ["Anti Angin", "Nesting 4in1", "Piezo Lighter"],
    pricePerDay: 15000,
    image: "/images/kompor-nesting.jpg",
    imageAlt:
      "Kompor gas windproof dengan set panci nesting aluminium anodized",
  },
  {
    id: "tenda-dome-4p-great-outdoor",
    name: "Tenda Dome 4P Great Outdoor",
    category: "tenda",
    categoryLabel: "Tenda",
    badge: "Keluarga/Grup",
    badgeVariant: "default",
    description:
      "Konstruksi kubah kokoh berkapasitas 4 orang dewasa dengan teras depan luas untuk menaruh sepatu dan peralatan masak.",
    specs: ["4 Person", "Vestibule Luas", "Alloy Poles"],
    pricePerDay: 65000,
    image: "/images/tenda-dome-4p.jpg",
    imageAlt:
      "Tenda dome kapasitas 4 orang terpasang di padang rumput pegunungan",
  },
  {
    id: "carrier-osprey-atmos-ag-50l",
    name: "Carrier Osprey Atmos AG 50L",
    category: "carrier",
    categoryLabel: "Carrier",
    badge: "Flagship",
    badgeVariant: "highlight",
    description:
      "Sistem Anti-Gravity suspension 3D mesh mutakhir. Distribusi beban punggung sangat seimbang dan bebas pegal.",
    specs: ["50 Liter", "Anti-Gravity", "Fit-on-the-Fly"],
    pricePerDay: 55000,
    image: "/images/carrier-osprey-50l.jpg",
    imageAlt:
      "Carrier Osprey Atmos AG 50L dengan panel suspensi Anti-Gravity 3D mesh",
  },
  {
    id: "headlamp-waterproof-300-lumens",
    name: "Headlamp Waterproof 300 Lumens",
    category: "aksesoris-outdoor",
    categoryLabel: "Aksesoris Outdoor",
    description:
      "Penerangan malam andalan dengan 3 mode intensitas cahaya, sertifikasi IPX6 tahan hujan badai, sudah termasuk baterai.",
    specs: ["300 Lumens", "IPX6 Waterproof", "Baterai Inc."],
    pricePerDay: 10000,
    image: "/images/headlamp-300lm.jpg",
    imageAlt:
      "Headlamp waterproof 300 lumens di atas batu vulkanik saat senja",
  },
  {
    id: "trekking-pole-ultralight-carbon",
    name: "Trekking Pole Ultralight Carbon Lock",
    category: "aksesoris-outdoor",
    categoryLabel: "Aksesoris Outdoor",
    description:
      "Teleskopik 3 bagian dengan sistem pengunci quick-lock cepat. Mengurangi beban lutut saat menuruni lereng terjal.",
    specs: ["Quick Lock", "EVA Grip", "Ultralight"],
    pricePerDay: 12000,
    image: "/images/trekking-pole-carbon.jpg",
    imageAlt:
      "Sepasang treking pole ultralight carbon lock di jalur pendakian gunung",
  },
];
