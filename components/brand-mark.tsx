import Image from "next/image";

type Props = {
  size?: "sm" | "lg";
};

export function BrandMark({ size = "lg" }: Props) {
  const px = size === "lg" ? 440 : 96;
  return (
    <Image
      src="/logo.jpg"
      alt="MiPetiteBoutique"
      width={px}
      height={px}
      quality={100}
      unoptimized
      priority
      className={
        size === "lg"
          ? "mx-auto size-[200px] rounded-full object-cover sm:size-[240px]"
          : "size-12 rounded-full object-cover"
      }
    />
  );
}

export function Wordmark() {
  return (
    <Image
      src="/logo.jpg"
      alt="MiPetiteBoutique"
      width={72}
      height={72}
      quality={100}
      unoptimized
      className="size-[4.5rem] rounded-full object-cover"
    />
  );
}
