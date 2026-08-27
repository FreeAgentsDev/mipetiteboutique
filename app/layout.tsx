import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Outfit } from "next/font/google";

import { SITE } from "@/lib/site";

import "./globals.css";

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans-loaded",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif-loaded",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script-loaded",
});

const title = `${SITE.name} · Accesorios`;
const description =
  "Accesorios y prendas hechas para elevar el estilo. Manizales, envíos a toda Colombia. Pide por Instagram.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.publicUrl),
  title,
  description,
  icons: { icon: "/logo.jpg" },
  openGraph: {
    title,
    description,
    locale: "es_CO",
    type: "website",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${sans.variable} ${serif.variable} ${script.variable}`}
    >
      <body className="bg-cream font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
