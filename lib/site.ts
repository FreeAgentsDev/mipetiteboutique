export const SITE = {
  name: "Mi Petite Boutique",
  handle: "Mipetiteboutique",
  tagline: "Accesorios que elevan tu estilo",
  city: "Manizales",
  owner: "Isabella Quintero Jaramillo",
  ownerHandle: "@isa__quinteroj",
  publicUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://mipetiteboutique.freeagentsdev.com",
  instagram: "https://instagram.com/mipetiteboutique_",
  instagramHandle: "@mipetiteboutique_",
  instagramDm: "https://ig.me/m/mipetiteboutique_",
  tiktok: "https://www.tiktok.com/@mipetiteboutique_",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
} as const;

export function orderHref(text: string) {
  if (SITE.whatsapp) {
    return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
  }
  return SITE.instagramDm;
}

export function qrImageUrl(data: string, size = 280) {
  const params = new URLSearchParams({
    size: `${size}x${size}`,
    data,
    bgcolor: "f5eee6",
    color: "3d342e",
    qzone: "1",
  });
  return `https://api.qrserver.com/v1/create-qr-code/?${params.toString()}`;
}

export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  blurb: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "bolso-macrame",
    name: "Bolso de macramé",
    category: "Bolsos",
    image: "/media/ig01.jpg",
    blurb: "Tejido a mano, asas de bambú.",
  },
  {
    id: "collares-dorados",
    name: "Collares dorados",
    category: "Collares",
    image: "/media/ig08.jpg",
    blurb: "Cadenas y dijes para usar todos los días.",
  },
  {
    id: "perlas-concha",
    name: "Perlas y concha",
    category: "Collares",
    image: "/media/ig12.jpg",
    blurb: "Collar de perlas con dije de concha.",
  },
  {
    id: "capas-dijes",
    name: "Capas con dijes",
    category: "Collares",
    image: "/media/ig10.jpg",
    blurb: "Tres capas, corazón y flores.",
  },
  {
    id: "joyero-feria",
    name: "Piezas del stand",
    category: "Aretes",
    image: "/media/ig07.jpg",
    blurb: "Aretes y collares como en Expoferias.",
  },
  {
    id: "prendas",
    name: "Prendas de temporada",
    category: "Prendas",
    image: "/media/ig05.jpg",
    blurb: "Lo que Isa lleva al stand, además de los accesorios.",
  },
];

export const LOOKBOOK = [
  { src: "/media/ig08.jpg", alt: "Stand de Mi Petite Boutique" },
  { src: "/media/ig01.jpg", alt: "Bolso de macramé" },
  { src: "/media/ig12.jpg", alt: "Collar de perlas y aretes de concha" },
  { src: "/media/ig10.jpg", alt: "Collar en capas con dijes" },
  { src: "/media/ig07.jpg", alt: "Joyero del stand" },
  { src: "/media/ig09.jpg", alt: "Isa con accesorios" },
  { src: "/media/ig05.jpg", alt: "Stand 15 en feria Mujeres Reales" },
  { src: "/media/ig11.jpg", alt: "Bolso macramé y aretes" },
] as const;
