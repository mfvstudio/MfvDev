import { gsap } from 'gsap';

export function startMatrixRain() {
  if (!import.meta.client) return;

  const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext('2d')!;
  const dpr = window.devicePixelRatio || 1;

  let width = window.innerWidth;
  let height = window.innerHeight;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.scale(dpr, dpr);

  const fontSize = 16;
  const columns = Math.floor(width / fontSize);

  const chars =
    'アァカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const drops: number[] = Array(columns).fill(0);

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  window.addEventListener('resize', resize);

  function draw() {
    // Fade previous frame (this creates trails)
    ctx.fillStyle = 'rgba(0, 0, 0, .08)';
    ctx.fillRect(0, 0, width, height);

    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];

      ctx.fillStyle = i % 5 === 0 ? '#baffc9' : '#00ff41';
      ctx.fillText(char!, i * fontSize, drops[i]! * fontSize);

      if (drops[i]! * fontSize > height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]!++;
    }
  }

  gsap.ticker.add(draw);
  
  
  return () => {
    gsap.ticker.remove(draw);
    window.removeEventListener('resize', resize);
  };
}
