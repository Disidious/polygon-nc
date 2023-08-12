import React, { useRef, useEffect, useState } from 'react';
import style from './style.module.css';

type Star = {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
}

type Dimensions = {
  width: number;
  height: number;
}

type Props = {
  parentRef: React.RefObject<HTMLDivElement>;
}

function DotsAnimation(props: Props) {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0
  })
  const { parentRef } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const stars: Star[] = [];
  const FPS = 60;
  const miniDistance = 170;
  // const mouse = {
  //   x: 0,
  //   y: 0,
  // };

  // const handleMouseMove = (e: MouseEvent) => {
  //   mouse.x = e.offsetX;
  //   mouse.y = e.offsetY;
  // };

  const distance = (point1: { x: number; y: number }, point2: { x: number; y: number }) => {
    let xs = 0;
    let ys = 0;

    xs = point2.x - point1.x;
    xs = xs * xs;

    ys = point2.y - point1.y;
    ys = ys * ys;

    return Math.sqrt(xs + ys);
  };

  const draw = () => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasRef.current?.width || 0, canvasRef.current?.height || 0);

    ctx.globalCompositeOperation = 'lighter';

    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];

      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
      ctx.fill();
    }

    ctx.beginPath();
    for (let i = 0; i < stars.length; i++) {
      const starI = stars[i];
      ctx.moveTo(starI.x, starI.y);
      // if (distance(mouse, starI) < miniDistance) ctx.lineTo(mouse.x, mouse.y);
      for (let j = 0; j < stars.length; j++) {
        const starII = stars[j];
        if (distance(starI, starII) < miniDistance) {
          ctx.lineTo(starII.x, starII.y);
        }
      }
    }
    ctx.lineWidth = 0.05;
    ctx.strokeStyle = 'white';
    ctx.stroke();
  };

  const update = () => {
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];

      s.x += s.vx / FPS;
      s.y += s.vy / FPS;

      if (s.x < 0 || s.x > canvasRef.current!.width || 0) s.vx = -s.vx;
      if (s.y < 0 || s.y > canvasRef.current!.height || 0) s.vy = -s.vy;
    }
  };
  
  useEffect(() => {
    if (!parentRef.current) return;
    
    const resizeObserver = new ResizeObserver(() => {
      setDimensions({
        width: parentRef.current!.offsetWidth || 0,
        height: parentRef.current!.offsetHeight || 0
      })
    });
    resizeObserver.observe(parentRef.current);

    return () => resizeObserver.disconnect();
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctxRef.current = ctx;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const starsNumber = (canvas.width + canvas.height) / 30;

    for (let i = 0; i < starsNumber; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
      });
    }
    // canvas.addEventListener('mousemove', handleMouseMove);

    const tick = () => {
      if (!canvasRef.current) return

      draw();
      update();
      requestAnimationFrame(tick);
    };
    
    tick();

    // return () => {
    //   canvas.removeEventListener('mousemove', handleMouseMove);
    // };
  }, [dimensions]);

  return (
    <div className={style.container}>
      <canvas className={style.canvas} ref={canvasRef}/>
    </div>
  );
};

export default DotsAnimation;
