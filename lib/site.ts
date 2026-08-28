export const SITE = {
  name: "MiPetiteBoutique",
  handle: "mipetiteboutique_",
  tagline: "Pequeños detalles que hacen especial tu estilo.",
  city: "Manizales",
  region: "Caldas, Colombia",
  owner: "Isabella Quintero Jaramillo",
  ownerHandle: "@isa__quinteroj",
  publicUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://mipetiteboutique.freeagentsdev.com",
  instagram: "https://instagram.com/mipetiteboutique_",
  instagramHandle: "@mipetiteboutique_",
  instagramDm: "https://ig.me/m/mipetiteboutique_",
  tiktok: "https://www.tiktok.com/@mipetiteboutique_",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "573134656807",
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
    bgcolor: "f7f1ea",
    color: "3d342e",
    qzone: "1",
  });
  return `https://api.qrserver.com/v1/create-qr-code/?${params.toString()}`;
}

export const CATEGORIES = [
  {
    href: "/#accesorios",
    name: "Accesorios",
    blurb:
      "Aretes, collares, ear cuffs y otras piezas para complementar tus looks.",
  },
  {
    href: "/catalogo",
    name: "Bolsos",
    blurb:
      "Diseños pensados para acompañarte y darle personalidad a tus outfits.",
  },
  {
    href: "/#lame",
    name: "L’âme",
    blurb: "Nuestra línea de bolsos tejidos a mano y creaciones artesanales.",
  },
] as const;

export type Bag = {
  id: string;
  name: string;
  image: string;
  blurb: string;
  colorChoice?: boolean;
};

export const BAGS: Bag[] = [
  {
    id: "red-crema",
    name: "Red crema",
    image: "/media/bolso-red-crema.jpg",
    blurb: "Tejido en red, forro interior y cuentas de madera.",
  },
  {
    id: "red-oliva",
    name: "Red oliva",
    image: "/media/bolso-red-oliva.jpg",
    blurb: "Tejido en red, en el tono de la foto u otros colores.",
    colorChoice: true,
  },
  {
    id: "mini-beige",
    name: "Mini beige",
    image: "/media/bolso-mini-beige.jpg",
    blurb: "Asa redonda, strap largo y perlas en los flecos.",
    colorChoice: true,
  },
  {
    id: "burbuja-cafe",
    name: "Burbuja café",
    image: "/media/bolso-burbuja-cafe.jpg",
    blurb: "Punto burbuja, manijas doradas y perlas.",
    colorChoice: true,
  },
  {
    id: "asas-madera",
    name: "Asas de madera",
    image: "/media/bolso-asas-madera.jpg",
    blurb: "Tejido con asas rígidas de madera.",
    colorChoice: true,
  },
];
