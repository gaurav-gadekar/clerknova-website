import markAsset from "@/assets/clerknova-mark.png.asset.json";

type Props = {
  size?: number;
  className?: string;
  color?: string;
  dotCount?: number;
  opacity?: number;
};

// ClerkNova mark — uses the uploaded brand logo image.
export function NovaMark({ size = 36, className, opacity = 1 }: Props) {
  return (
    <img
      src={markAsset.url}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={className}
      style={{ opacity, width: size, height: size, objectFit: "contain" }}
    />
  );
}
