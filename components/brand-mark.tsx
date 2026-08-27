import Image from "next/image";

type Props = {
  size?: "sm" | "lg";
};

export function BrandMark({ size = "lg" }: Props) {
  return (
    <Image
      src="/logo.jpg"
      alt="Mi Petite Boutique · By Isa Quintero"
      width={size === "lg" ? 320 : 96}
      height={size === "lg" ? 320 : 96}
      quality={100}
      unoptimized
      priority
      className={
        size === "lg"
          ? "mx-auto size-[180px] rounded-full object-cover shadow-[0_8px_40px_rgba(61,52,46,0.12)] sm:size-[220px]"
          : "size-16 rounded-full object-cover"
      }
    />
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-[family-name:var(--font-script)] ${className}`}>
      Mi Petite Boutique
    </span>
  );
}
