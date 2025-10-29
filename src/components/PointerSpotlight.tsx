import { useEffect, useRef } from "react";

const PointerSpotlight = () => {
  const fadeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const root = document.documentElement;

    const setOpacity = (value: number) => {
      root.style.setProperty("--pointer-opacity", String(value));
    };

    const handlePoint = (x: number, y: number) => {
      root.style.setProperty("--pointer-x", `${x}px`);
      root.style.setProperty("--pointer-y", `${y}px`);
      setOpacity(1);
      if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current);
      fadeTimeoutRef.current = window.setTimeout(() => setOpacity(0.0), 900);
    };

    const onMouseMove = (e: MouseEvent) => handlePoint(e.clientX, e.clientY);
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) handlePoint(t.clientX, t.clientY);
    };
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) handlePoint(t.clientX, t.clientY);
    };
    const onTouchEnd = () => {
      if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current);
      fadeTimeoutRef.current = window.setTimeout(() => setOpacity(0.0), 400);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-spotlight" />
  );
};

export default PointerSpotlight;


