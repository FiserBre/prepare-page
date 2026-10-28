import type { CSSProperties, ReactNode } from "react";

/* A loosely placed decoration: a figure or an arrow dropped somewhere near
   the content with a slight tilt. Positions are hand-picked per section
   (deliberate "pleasant chaos", not Math.random, so server and client agree).
   Hidden on small screens unless `show` says otherwise. `depth` (px) makes
   the spot drift with the cursor or the phone's tilt; see components/Parallax. */
type Props = {
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  w: number;
  rotate?: number;
  flip?: boolean;
  show?: "desktop" | "wide" | "always";
  delay?: number;
  depth?: number;
  className?: string;
  children: ReactNode;
};

export default function Spot({
  top,
  left,
  right,
  bottom,
  w,
  rotate = 0,
  flip = false,
  show = "desktop",
  delay,
  depth,
  className = "",
  children,
}: Props) {
  const style = {
    top,
    left,
    right,
    bottom,
    width: w,
    rotate: `${rotate}deg`,
    scale: flip ? "-1 1" : undefined,
    "--spot-delay": delay !== undefined ? `${delay}ms` : undefined,
    "--depth": depth,
  } as CSSProperties;
  const px = depth !== undefined ? "px" : "";
  return (
    <div className={`spot spot--${show} ${px} ${className}`.replace(/\s+/g, " ").trim()} style={style} aria-hidden="true">
      {children}
    </div>
  );
}
