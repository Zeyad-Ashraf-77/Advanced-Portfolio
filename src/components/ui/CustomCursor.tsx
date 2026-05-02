"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    let raf: number;
    const animateTrail = () => {
      setTrail((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.12,
        y: prev.y + (pos.y - prev.y) * 0.12,
      }));
      raf = requestAnimationFrame(animateTrail);
    };
    raf = requestAnimationFrame(animateTrail);

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.cursor
      ) {
        setIsHovering(true);
      }
    };
    const onLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseenter", onEnter, true);
    document.addEventListener("mouseleave", onLeave, true);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseenter", onEnter, true);
      document.removeEventListener("mouseleave", onLeave, true);
      cancelAnimationFrame(raf);
    };
  }, [pos.x, pos.y]);

  return (
    <>
      {/* Dot cursor */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full bg-sky-400 mix-blend-difference"
        style={{
          width: 8,
          height: 8,
          left: pos.x - 4,
          top: pos.y - 4,
          transition: "width 0.2s, height 0.2s",
        }}
      />
      {/* Trail ring */}
      <div
        className="fixed pointer-events-none z-[9998] rounded-full border border-sky-400/50"
        style={{
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          left: trail.x - (isHovering ? 24 : 16),
          top: trail.y - (isHovering ? 24 : 16),
          transition: "width 0.3s, height 0.3s, opacity 0.3s",
          opacity: isHovering ? 0.6 : 0.3,
        }}
      />
    </>
  );
}
