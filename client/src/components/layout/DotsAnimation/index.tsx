import { useEffect, useRef } from 'react';

import { cx } from '@/utils/cx';
import style from './style.module.css';

type Dot = { x: number; y: number; r: number; vx: number; vy: number };

const LINK_DISTANCE = 140;
const MAX_SPEED = 18; // px per second

/**
 * Floating connected dots behind the home hero and the footer. Fills its positioned parent.
 * One animation loop, stopped on unmount; redraws once (without motion) for reduced-motion users.
 */
function DotsAnimation({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !parent || !ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let dots: Dot[] = [];
    let frame = 0;
    let last = performance.now();

    const reset = () => {
      const ratio = window.devicePixelRatio || 1;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      dots = Array.from({ length: Math.round((width + height) / 28) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() + 0.8,
        vx: (Math.random() - 0.5) * 2 * MAX_SPEED,
        vy: (Math.random() - 0.5) * 2 * MAX_SPEED,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 0.8;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i];
          const b = dots[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(220, 231, 242, ${0.3 * (1 - distance / LINK_DISTANCE)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.fillStyle = 'rgba(255, 255, 255, .75)';
      for (const dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = (now: number) => {
      const seconds = Math.min((now - last) / 1000, 0.05);
      last = now;
      for (const dot of dots) {
        dot.x += dot.vx * seconds;
        dot.y += dot.vy * seconds;
        if (dot.x < 0 || dot.x > width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > height) dot.vy *= -1;
      }
      draw();
      frame = requestAnimationFrame(tick);
    };

    const observer = new ResizeObserver(() => {
      reset();
      if (reduceMotion) draw();
    });
    observer.observe(parent);
    reset();
    if (reduceMotion) draw();
    else frame = requestAnimationFrame(tick);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className={cx(style.canvas, className)} aria-hidden="true" />;
}

export default DotsAnimation;
