import type { SVGProps } from "react";

/* Pen marks in the secondary blue. Each path carries pathLength="1" so it can
   draw itself in from CSS (see .sketch). Arrows always end with the head as
   the second path, so the head draws after the shaft. All decorative. */

export type SketchName =
  | "underline"
  | "circle"
  | "arrow"
  | "arrow-wave"
  | "arrow-loop"
  | "arrow-down"
  | "arrow-swoosh"
  | "arrow-short"
  | "sparkle"
  | "zigzag"
  | "scribble"
  | "dust"
  | "crane"
  | "tape"
  | "dots"
  | "bolt"
  | "ruler"
  | "bang"
  | "star";

const art: Record<SketchName, { viewBox: string; paths: string[]; stretch?: boolean }> = {
  underline: {
    viewBox: "0 0 200 12",
    stretch: true,
    paths: ["M3 8 C48 3 120 2 197 6"],
  },
  circle: {
    viewBox: "0 0 200 64",
    stretch: true,
    paths: ["M34 12 C96 2 190 6 192 32 C194 54 122 62 62 58 C16 54 4 40 10 28 C16 16 38 10 68 8"],
  },
  /* curls in from the top left and points down-right */
  arrow: {
    viewBox: "0 0 96 72",
    paths: ["M6 10 C36 2 68 12 76 38 C79 48 77 56 72 64", "M60 58 L72 64 L76 50"],
  },
  /* a lazy wave, points right */
  "arrow-wave": {
    viewBox: "0 0 160 40",
    paths: ["M4 22 C28 4 50 38 76 20 C100 4 122 34 146 22", "M134 10 L150 22 L136 34"],
  },
  /* loops once on the way, then points down-right */
  "arrow-loop": {
    viewBox: "0 0 120 90",
    paths: ["M6 72 C18 24 58 10 64 36 C70 60 30 64 36 44 C42 26 80 30 106 62", "M92 60 L108 64 L104 48"],
  },
  /* short wobble, points straight down */
  "arrow-down": {
    viewBox: "0 0 40 96",
    paths: ["M20 4 C8 28 32 50 20 86", "M8 74 L20 90 L32 74"],
  },
  /* long sweep from bottom left, points right */
  "arrow-swoosh": {
    viewBox: "0 0 200 80",
    paths: ["M4 72 C40 14 118 4 190 40", "M176 26 L194 42 L174 52"],
  },
  /* quick little nudge, points right */
  "arrow-short": {
    viewBox: "0 0 72 48",
    paths: ["M4 40 C22 10 44 8 64 24", "M54 12 L66 26 L50 32"],
  },
  /* four quick rays, a "ding" next to something new */
  sparkle: {
    viewBox: "0 0 48 48",
    paths: ["M24 4 C25 10 25 16 24 20", "M24 28 C23 34 23 40 24 44", "M4 24 C10 23 16 23 20 24", "M28 24 C34 25 40 25 44 24"],
  },
  /* a nervous zigzag, like a seismograph */
  zigzag: {
    viewBox: "0 0 120 40",
    paths: ["M4 30 L24 8 L44 32 L64 8 L84 32 L104 8 L116 24"],
  },
  /* a scribble that loops on itself three times */
  scribble: {
    viewBox: "0 0 120 60",
    paths: ["M6 40 C20 10 40 10 36 32 C32 54 60 50 64 28 C68 6 92 10 90 34 C88 56 112 50 114 22"],
  },
  /* a puff of dust with two flying bits */
  dust: {
    viewBox: "0 0 120 60",
    paths: ["M8 52 C10 36 30 34 34 46 C36 30 60 28 62 44 C64 28 90 30 90 46 C94 36 112 40 112 54", "M24 22 L32 12", "M56 16 L58 6"],
  },
  /* a cable coming down from above with a hook on the end */
  crane: {
    viewBox: "0 0 60 140",
    paths: ["M30 0 C31 30 29 70 30 100", "M30 100 C30 120 46 124 46 110 C46 102 38 100 33 106"],
  },
  /* hazard tape: two edges and a run of diagonal stripes */
  tape: {
    viewBox: "0 0 240 28",
    paths: [
      "M2 4 C60 3 120 3 238 4",
      "M2 24 C60 25 120 25 238 24",
      "M12 24 L28 4", "M36 24 L52 4", "M60 24 L76 4", "M84 24 L100 4", "M108 24 L124 4",
      "M132 24 L148 4", "M156 24 L172 4", "M180 24 L196 4", "M204 24 L220 4",
    ],
  },
  /* three dots trailing off, "…" */
  dots: {
    viewBox: "0 0 72 16",
    paths: [
      "M8 8 m-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0",
      "M36 8 m-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0",
      "M64 8 m-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0",
    ],
  },
  /* a small lightning bolt */
  bolt: {
    viewBox: "0 0 32 48",
    paths: ["M20 2 L6 26 L18 24 L12 46"],
  },
  /* an exclamation mark, drawn as two closed outlines so it can be inked in */
  bang: {
    viewBox: "0 0 48 136",
    paths: [
      "M14 12 C15 5 35 5 36 12 C34 38 31 66 28 92 C27 99 18 99 17 92 C16 66 15 38 14 12 Z",
      "M16 118 C16 110 34 110 34 118 C34 127 16 127 16 118 Z",
    ],
  },
  /* a five-pointed star in one stroke, as drawn */
  star: {
    viewBox: "0 0 100 96",
    paths: ["M54 3 C40 22 20 50 4 75 C26 62 60 46 100 38 C80 34 40 22 1 13 C20 28 35 44 50 62 C60 74 70 82 70 89 C70 66 62 36 55 1"],
  },
  /* a folding ruler with tick marks */
  ruler: {
    viewBox: "0 0 160 24",
    paths: [
      "M2 4 L158 4 L158 20 L2 20 Z",
      "M22 4 L22 11", "M42 4 L42 14", "M62 4 L62 11", "M82 4 L82 14", "M102 4 L102 11", "M122 4 L122 14", "M142 4 L142 11",
    ],
  },
};

type Props = SVGProps<SVGSVGElement> & { name: SketchName; className?: string };

export default function Sketch({ name, className = "", ...rest }: Props) {
  const { viewBox, paths, stretch } = art[name];
  return (
    <svg
      className={`sketch sketch--${name} ${className}`.trim()}
      viewBox={viewBox}
      preserveAspectRatio={stretch ? "none" : "xMidYMid meet"}
      fill="none"
      stroke="currentColor"
      strokeWidth={stretch ? 2.5 : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths.map((d, i) => (
        <path key={i} d={d} pathLength={1} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}
