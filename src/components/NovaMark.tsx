type Props = {
  size?: number;
  className?: string;
  color?: string;
  dotCount?: number;
  opacity?: number;
};

// Phyllotaxis dot burst (golden-angle spiral). Small dots near center,
// growing outward — reads as a nova / stylized sunflower.
export function NovaMark({
  size = 36,
  className,
  color = "#b9895b",
  dotCount = 140,
  opacity = 1,
}: Props) {
  const golden = Math.PI * (3 - Math.sqrt(5));
  const c = 50;
  const scale = 3.4;
  const dots = Array.from({ length: dotCount }, (_, i) => {
    const r = scale * Math.sqrt(i);
    const theta = i * golden;
    const x = c + r * Math.cos(theta);
    const y = c + r * Math.sin(theta);
    const dotR = 0.35 + (i / dotCount) * 1.8;
    const alpha = 0.35 + (i / dotCount) * 0.65;
    return { x, y, r: dotR, alpha };
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={d.r}
          fill={color}
          fillOpacity={d.alpha}
        />
      ))}
    </svg>
  );
}
