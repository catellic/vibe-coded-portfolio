import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  life: number; // 0..1
  decay: number; // per second
  hue: string; // HSL components string, e.g. "350 82% 55%"
};

const MAX_PARTICLES = 80;

const PointerDrip = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const lastSpawnRef = useRef<number>(0);
  const lastMoveRef = useRef<number>(0);
  const reducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Resolve theme colors from CSS variables (HSL components only)
    const styles = getComputedStyle(document.documentElement);
    const primary = styles.getPropertyValue('--primary').trim() || '350 82% 55%';
    const accent = styles.getPropertyValue('--accent').trim() || '15 90% 55%';
    const hues = [primary, accent];

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const now = () => performance.now();

    const spawn = (x: number, y: number) => {
      const base = 0.6 + Math.random() * 0.3; // subtle variability
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.08 + Math.random() * 0.14; // px/ms (smaller movement)
      const hue = hues[Math.floor(Math.random() * hues.length)];
      const particle: Particle = {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + 0.015, // slight downward drip
        r: 1.5 + Math.random() * 2.5, // smaller solid drops
        life: 1,
        decay: 0.6 * base, // per second (fade a bit quicker)
        hue,
      };
      const arr = particlesRef.current;
      if (arr.length >= MAX_PARTICLES) arr.shift();
      arr.push(particle);
    };

    const spawnBurstNear = (x: number, y: number) => {
      // spawn 1-2 tiny drops near pointer with tighter offset
      const count = 1 + Math.floor(Math.random() * 2);
      for (let i = 0; i < count; i++) {
        const ox = (Math.random() - 0.5) * 10;
        const oy = (Math.random() - 0.5) * 10;
        spawn(x + ox, y + oy);
      }
    };

    const onMove = (x: number, y: number) => {
      const t = now();
      lastMoveRef.current = t;
      // throttle spawns ~ every 60ms (less explosive)
      if (t - lastSpawnRef.current > 60) {
        spawnBurstNear(x, y);
        lastSpawnRef.current = t;
      }
    };

    const onMouse = (e: MouseEvent) => onMove(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) onMove(t.clientX, t.clientY);
    };

    window.addEventListener('mousemove', onMouse, { passive: true });
    window.addEventListener('touchstart', onTouch, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });

    let lastTs = now();
    const loop = () => {
      const ts = now();
      const dt = Math.min(32, ts - lastTs); // clamp delta
      lastTs = ts;

      // fade out entire layer slowly after inactivity
      const inactiveMs = ts - lastMoveRef.current;
      const globalAlpha = inactiveMs > 800 ? Math.max(0, 1 - (inactiveMs - 800) / 1000) : 1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const arr = particlesRef.current;
      for (let i = arr.length - 1; i >= 0; i--) {
        const p = arr[i];
        // integrate
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vy += 0.0004 * dt; // gentle gravity
        p.life -= p.decay * (dt / 1000);
        if (p.life <= 0) {
          arr.splice(i, 1);
          continue;
        }
        // draw solid drop with soft edge
        const a = Math.max(0, Math.min(1, p.life)) * globalAlpha;
        if (a <= 0.01) continue;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue} / ${a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('touchstart', onTouch);
      window.removeEventListener('touchmove', onTouch);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <canvas
      aria-hidden
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20"
    />
  );
};

export default PointerDrip;


