/* Intrinsic sizes of the Flork figures in /public/flork (viewBox units for the
   traced SVGs, pixels for the PNGs). SVG rows are generated with the tracing
   script; edit the sheet, not this file. */

export const florkDims = {
  hello: [465, 336],
  present: [297, 309],
  shop: [318, 387],
  worried: [279, 396],
  phone: [300, 279],
  idea: [249, 315],
  design: [249, 357],
  work: [354, 357],
  party: [405, 372],
  relax: [291, 282],
  support: [222, 282],
  cool: [264, 333],
  question: [357, 330],
  love: [285, 399],
  scream: [393, 360],
  crawl: [384, 309],
  wave: [306, 312],
  laugh: [303, 318],
  yay: [297, 345],
  walk: [276, 327],
  balloons: [354, 369],
  hat: [276, 369],
  shy: [255, 309],
  grad: [252, 369],
  peek: [351, 261],
  think: [288, 252],
  /* drawn for the coming-soon page: five building */
  "build-hammer": [330, 390],
  "build-carry": [420, 380],
  "build-ladder": [300, 480],
  "build-barrow": [420, 330],
  "build-plan": [300, 380],
  /* raster figures (PNG, transparent background), pixel sizes */
  psst: [329, 414],
  thumbs: [427, 397],
  boss: [613, 669],
  coffee: [555, 769],
  crane: [492, 506],
} as const;

export type FlorkName = keyof typeof florkDims;

/* Names served as /flork/<name>.png instead of a traced SVG. */
export const florkRaster: ReadonlySet<FlorkName> = new Set<FlorkName>([
  "psst",
  "thumbs",
  "boss",
  "coffee",
  "crane",
]);
