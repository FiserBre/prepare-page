"use client";

import { useEffect } from "react";

/* Everything on the page drifts a little: with the cursor on a desktop, with
   the tilt of the phone in a hand. This component only measures. It writes
   --mx and --my (each in -1..1) on <html>, eased frame by frame so the motion
   is smooth; the CSS (.px in globals.css) multiplies them by each layer's
   own --depth. Renders nothing. Respects prefers-reduced-motion. */

type OrientationEventCtor = typeof DeviceOrientationEvent & {
  requestPermission?: () => Promise<"granted" | "denied">;
};

export default function Parallax() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    const clamp = (v: number) => Math.max(-1, Math.min(1, v));

    // target (tx, ty) comes from the input; current (cx, cy) eases toward it
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const tick = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      root.style.setProperty("--mx", cx.toFixed(4));
      root.style.setProperty("--my", cy.toFixed(4));
      const settled = Math.abs(tx - cx) < 0.001 && Math.abs(ty - cy) < 0.001;
      raf = settled ? 0 : requestAnimationFrame(tick);
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    /* desktop: where the cursor is, relative to the middle of the window */
    const onPointer = (e: PointerEvent) => {
      tx = clamp((e.clientX / window.innerWidth) * 2 - 1);
      ty = clamp((e.clientY / window.innerHeight) * 2 - 1);
      kick();
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      kick();
    };

    /* phone: how far it is tilted away from the angle it was first held at,
       so the resting position is the neutral one */
    let base: [number, number] | null = null;
    const onTilt = (e: DeviceOrientationEvent) => {
      if (e.gamma == null || e.beta == null) return;
      if (!base) base = [e.gamma, e.beta];
      tx = clamp((e.gamma - base[0]) / 25);
      ty = clamp((e.beta - base[1]) / 25);
      kick();
    };
    const listenTilt = () => window.addEventListener("deviceorientation", onTilt);

    window.addEventListener("pointermove", onPointer, { passive: true });
    root.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);

    // iOS hands out the sensor only after a tap asks for it
    const Orientation = window.DeviceOrientationEvent as OrientationEventCtor | undefined;
    const ask = () => {
      Orientation?.requestPermission?.()
        .then((state) => {
          if (state === "granted") listenTilt();
        })
        .catch(() => {});
    };
    const needsAsk = typeof Orientation?.requestPermission === "function";
    if (needsAsk) window.addEventListener("touchend", ask, { once: true });
    else if (Orientation) listenTilt();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      root.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
      window.removeEventListener("deviceorientation", onTilt);
      window.removeEventListener("touchend", ask);
      root.style.removeProperty("--mx");
      root.style.removeProperty("--my");
    };
  }, []);

  return null;
}
