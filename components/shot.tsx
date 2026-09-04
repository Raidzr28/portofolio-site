import Image from "next/image";

type Props = {
  src: string | null;
  /** Alt text when filled; caption on the empty slot when not. */
  alt: string;
  ratio?: string;
  sizes: string;
  priority?: boolean;
  radius?: number;
  /**
   * Screenshots are wider than every slot in the design, and cover would crop
   * into the page they are meant to show. Contain mats them on the muted
   * surface instead: the same background the empty slot already uses, so a
   * filled card and an empty one sit in one visual system.
   */
  fit?: "cover" | "contain";
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
  fit = "cover",
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
          className={fit === "contain" ? "object-contain" : "object-cover"}
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
