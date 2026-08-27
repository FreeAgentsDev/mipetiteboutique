import { BrandMark } from "@/components/brand-mark";
import { QrDownload } from "@/components/qr-download";
import { Shell } from "@/components/shell";
import { SITE, qrImageUrl } from "@/lib/site";

export default function QrPage() {
  const url = SITE.publicUrl;
  return (
    <Shell>
      <h1 className="text-center font-serif text-4xl italic">QR de feria</h1>
      <p className="mt-3 text-center text-sm font-light leading-relaxed text-mute">
        Descarga el diseño e imprímelo en mate. Quien escanea abre la ficha y
        puede pedir un bolso o escribirle a Isa.
      </p>
      <div className="mt-8 rounded-3xl border border-ink/10 bg-paper px-6 py-8 text-center">
        <BrandMark size="lg" />
        <img
          src={qrImageUrl(url, 280)}
          alt={`QR a ${url}`}
          width={280}
          height={280}
          className="mx-auto mt-6 size-[220px] rounded-2xl bg-cream p-2"
        />
        <p className="mt-4 font-serif text-xl italic">{SITE.name}</p>
        <p className="mt-1 text-[11px] font-medium tracking-[0.22em] uppercase text-mute">
          {SITE.tagline}
        </p>
        <p className="mt-2 break-all text-xs text-mute">{url}</p>
      </div>
      <QrDownload
        qrSrc="/api/qr?size=800"
        logoSrc="/logo.jpg"
        title={SITE.name}
        subtitle={SITE.tagline}
        filename="mipetiteboutique-qr.png"
        background="#f5eee6"
        ink="#3d342e"
        roundLogo
        className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-ink text-sm font-medium tracking-wide text-cream disabled:opacity-60"
      />
    </Shell>
  );
}
