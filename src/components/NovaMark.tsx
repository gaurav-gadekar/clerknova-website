type Props = {
  size?: number;
  className?: string;
  variant?: "copper" | "black" | "white";
  opacity?: number;
  /** Set when the mark stands alone. Left off beside the wordmark, where
   *  repeating "ClerkNova" would just make a screen reader say it twice. */
  title?: string;
};

/**
 * The ClerkNova mark.
 *
 * These used to be Lovable asset pointers whose url looked like
 * "/__l5e/assets-v1/<uuid>/clerknova-mark-copper.png". That path is served by
 * Lovable's own preview host, so on our server every one of them 404'd and the
 * logo was missing from the nav, the footer and the chat mock-up. The files now
 * live in this repository and are served from our own domain.
 *
 * They are also 24 KB instead of 2 MB: the originals were 1536x1024 with a
 * large transparent border, shown at 44 pixels.
 */
const SRC = {
  copper: "/brand/clerknova-mark-copper.png",
  black: "/brand/clerknova-mark-black.png",
  white: "/brand/clerknova-mark-white.png",
};

export function NovaMark({
  size = 36,
  className,
  variant = "copper",
  opacity = 1,
  title,
}: Props) {
  return (
    <img
      src={SRC[variant]}
      alt={title ?? ""}
      aria-hidden={title ? undefined : true}
      width={size}
      height={size}
      className={className}
      loading="eager"
      decoding="async"
      style={{ opacity, width: size, height: size, objectFit: "contain" }}
    />
  );
}
