import Image from "next/image";

type Props = {
  src: string | null;
  /** Alt text when filled; caption on the empty slot when not. */
  alt: string;
  ratio?: string;
  sizes: string;
  priority?: boolean;
  radius?: number;
};

/**
 * Screenshot slot. Renders the real image once one is dropped into /public,
 * otherwise a labelled empty slot. It never invents a preview: the brand
 * guidelines forbid fake screenshots and require placeholders to read as
 * placeholders.
 */
export default function Shot({
  src,
  alt,
  ratio = "16 / 10",
  sizes,
  priority = false,
  radius,
}: Props) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        aspectRatio: ratio,
        background: "var(--muted)",
        borderRadius: radius,
      }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <span
          className="label absolute inset-2 grid place-content-center rounded-[8px] px-4 text-center"
          style={{ border: "1px dashed var(--border-strong)", lineHeight: 1.6 }}
        >
          {alt}
        </span>
      )}
    </div>
  );
}
