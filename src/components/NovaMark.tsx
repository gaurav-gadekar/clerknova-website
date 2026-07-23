import copperMark from "@/assets/clerknova-mark-copper.png.asset.json";
import blackMark from "@/assets/clerknova-mark-black.png.asset.json";
import whiteMark from "@/assets/clerknova-mark-white.png.asset.json";

type Props = {
  size?: number;
  className?: string;
  variant?: "copper" | "black" | "white";
  opacity?: number;
};

const SRC = {
  copper: copperMark.url,
  black: blackMark.url,
  white: whiteMark.url,
};

export function NovaMark({ size = 36, className, variant = "copper", opacity = 1 }: Props) {
  return (
    <img
      src={SRC[variant]}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={className}
      style={{ opacity, width: size, height: size, objectFit: "contain" }}
    />
  );
}
