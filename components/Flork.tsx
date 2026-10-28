import { florkDims, florkRaster, type FlorkName } from "./florkDims";

export type { FlorkName };

/* Hand-drawn stick figures (Flork) served from /public/flork. Traced ones
   are SVG pulled in with an external <use>, so the fill follows the CSS
   `color` of its context. Scanned ones are transparent PNGs drawn in ink
   and rendered as a plain <img>. Decorative by default. */
type Props = {
  name: FlorkName;
  className?: string;
  alt?: string;
};

export default function Flork({ name, className = "", alt }: Props) {
  const [w, h] = florkDims[name];
  const cls = `flork flork--${name} ${className}`.trim();

  if (florkRaster.has(name)) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className={cls}
        src={`/flork/${name}.png`}
        width={w}
        height={h}
        alt={alt ?? ""}
        aria-hidden={alt ? undefined : true}
        draggable={false}
        decoding="async"
      />
    );
  }

  return (
    <svg
      className={cls}
      viewBox={`0 0 ${w} ${h}`}
      style={{ aspectRatio: `${w} / ${h}` }}
      role={alt ? "img" : undefined}
      aria-label={alt}
      aria-hidden={alt ? undefined : true}
      focusable="false"
    >
      <use href={`/flork/${name}.svg#f`} />
    </svg>
  );
}
