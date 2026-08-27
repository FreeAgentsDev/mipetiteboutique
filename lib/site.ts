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

export type Bag = {
  id: string;
  name: string;
  image: string;
  blurb: string;
};

export const BAGS: Bag[] = [
  {
    id: "red-crema",
    name: "Red en crema",
    image: "/media/bolso-red-crema.jpg",
    blurb: "Macramé en red, forro interior y cuentas de madera.",
  },
  {
    id: "red-oliva",
    name: "Red en oliva",
    image: "/media/bolso-red-oliva.jpg",
    blurb: "Macramé en verde oliva, forro oscuro y cuentas de madera.",
  },
  {
    id: "mini-beige",
    name: "Mini beige",
    image: "/media/bolso-mini-beige.jpg",
    blurb: "Asa redonda, strap largo y perlas en los flecos.",
  },
  {
    id: "burbuja-cafe",
    name: "Burbuja café",
    image: "/media/bolso-burbuja-cafe.jpg",
    blurb: "Punto burbuja, manijas doradas y perlas.",
  },
  {
    id: "asas-madera",
    name: "Asas de madera",
    image: "/media/bolso-asas-madera.jpg",
    blurb: "Crema tejido, asas rígidas de madera oscura.",
  },
];
