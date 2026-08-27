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

export type BagColor = {
  id: string;
  name: string;
  swatch: string;
};

export const BAG = {
  id: "bolso-macrame",
  name: "Bolso de macramé",
  image: "/media/ig01.jpg",
  blurb:
    "El mismo modelo, tejido a mano, asas de bambú. Elige el color; Isa confirma si hay existencias.",
  colors: [
    { id: "natural", name: "Natural", swatch: "#e8d9c4" },
    { id: "yute", name: "Yute", swatch: "#c4a574" },
    { id: "negro", name: "Negro", swatch: "#1c1917" },
  ] satisfies BagColor[],
} as const;

export const LOOKBOOK = [
  { src: "/media/ig01.jpg", alt: "Bolso de macramé" },
  { src: "/media/ig08.jpg", alt: "Stand de Mi Petite Boutique" },
  { src: "/media/ig11.jpg", alt: "Bolso macramé" },
  { src: "/media/ig07.jpg", alt: "Accesorios de feria" },
  { src: "/media/ig12.jpg", alt: "Piezas de temporada" },
  { src: "/media/ig05.jpg", alt: "Stand 15 en feria Mujeres Reales" },
] as const;
