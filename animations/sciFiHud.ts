import { gsap } from 'gsap';
import { useRouter} from 'vue-router'


let scanText = '';
let scanTextAlpha = 0;
let scanTextTimer = 0;


type Ring = {
  radius: number;
  speed: number;
  angle: number;
  width: number;
  arcSize: number;
};
type Routes = 'projects' | 'resume' | 'contact' | 'index'

const ringStaticConfigs: Record<Routes, {
  speedMod: number;
}> = {
  projects: {
    speedMod: 15,
  },
  resume: {
    speedMod: 30,
  },
  contact: {
    speedMod: 30,
  },
  index: {
    speedMod: 1
  }
}

type VisorMode = 'combat' | 'scan' | 'echo';
const visorConfigs: Record<Routes, VisorMode> = {
  projects: 'echo',
  resume: 'scan',
  contact: 'scan',
  index: 'combat'
};
const visorStyles: Record<VisorMode, {
  tint: string;
  glow: string;
  distortion: number;
}> = {
  combat: {
    tint: 'rgba(255,80,80,0.08)',
    glow: '#ff4d4d',
    distortion: 0.6,
  },
  scan: {
    tint: 'rgba(127,255,212,0.08)',
    glow: '#7fffd4',
    distortion: 0.2,
  },
  echo: {
    tint: 'rgba(180,120,255,0.1)',
    glow: '#c792ff',
    distortion: 0.9,
  },
};


let currentVisor: VisorMode = 'combat';


function triggerScanText(type: TargetType) {
  const messages: Record<TargetType, string[]> = {
    hostile: [
      'HOSTILE LIFEFORM DETECTED',
      'THREAT LEVEL: HIGH',
    ],
    neutral: [
      'LIFEFORM ANALYSIS COMPLETE',
      'NO IMMEDIATE THREAT',
    ],
    artifact: [
      'CHOZO ARTIFACT SCANNED',
      'DATA ACQUIRED',
    ],
  };

  scanText = messages[type][0]!;
  scanTextAlpha = 1;
  scanTextTimer = 120; // frames
}

export function startSciFiHud() {
  if (!import.meta.client) return;

  const canvas = document.getElementById('sci-fi-hud') as HTMLCanvasElement;
  if (!canvas) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  let scrollY = 0;

  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
    console.log("scrolled");
  });


  const ctx = canvas.getContext('2d')!;
  const dpr = window.devicePixelRatio || 1;

  let w = window.innerWidth;
  let h = window.innerHeight;
  let cx = w / 2;
  let cy = h / 2;

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    cx = w / 2;
    cy = h / 2;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  resize();
  window.addEventListener('resize', resize);

  // --- Palette (Echoes-inspired) ---
  const colors = {
    glow: '#7fffd4',
    dim: 'rgba(127, 255, 212, 0.25)',
    scan: 'rgba(180, 255, 240, 0.15)',
  };

  const targetStyles: Record<TargetType, { color: string; speed: number }> = {
    hostile: {
      color: '#ff4d4d', // red
      speed: 0.018,
    },
    neutral: {
      color: '#7fffd4', // aqua
      speed: 0.012,
    },
    artifact: {
      color: '#c792ff', // echo-visor purple
      speed: 0.008,
    },
  };
  

  // --- Rings ---
  const rings: Ring[] = Array.from({ length: 5 }).map((_, i) => ({
    radius: 120 + i * 55,
    speed: (i % 2 ? 1 : -1) * (0.0006 + i * 0.0003),
    angle: Math.random() * Math.PI * 2,
    width: 2 + Math.random() * 2,
    arcSize: Math.PI * (0.4 + Math.random() * 0.2)
  }));

  //cursor scan targets
  const targetTypes: TargetType[] = ['hostile', 'neutral', 'artifact'];

const targets: ScanTarget[] = Array.from({ length: 2 }).map((_, i) => ({
  x: cx + w/3 * Math.cos( 0 + (i * 7) ),
  y: cy + h/3 * Math.sin(0 + (i * 7)),
  theta: 0 + (i * 7),
  r: 14 + Math.random() * 10,
  rotation: Math.random() * Math.PI,
  pulse: Math.random() * 10,
  locked: false,
  scanProgress: 0,
  type: targetTypes[Math.floor(Math.random() * targetTypes.length)]!,
}));

const router = useRouter();

router.afterEach(() => {
  // visor flicker
  gsap.fromTo(
    '#sci-fi-hud',
    { opacity: 1 },
    { opacity: 0.3, duration: 0.25, repeat: 1, yoyo: true }
  );

  // reset targets slightly
  targets.forEach((t) => {
    t.scanProgress = 0;
    t.rotation += Math.random() * Math.PI;
  });

  triggerScanText('artifact');
});
  

  // --- Radar pulse ---
  let pulse = 0;

  gsap.to({}, {
    repeat: -1,
    duration: 3,
    onRepeat: function () {
      pulse = 0;
    },
  });

  // --- Scanline ---
  let scanY = 0;
  gsap.to({}, {
    repeat: -1,
    duration: 4,
    onUpdate() {
      scanY = (scanY + 2) % h;
    },
  });

  function drawRing(r: Ring, path: Routes) {
    ctx.beginPath();
    ctx.strokeStyle = colors.glow;
    ctx.lineWidth = r.width;
    ctx.shadowBlur = 12;
    ctx.shadowColor = colors.glow;

    ctx.arc(cx, cy, r.radius, r.angle, r.angle + r.arcSize);
    ctx.stroke();
    r.angle += r.speed * ringStaticConfigs[path].speedMod;
    
  }

  function drawPulse() {
    pulse += 1.5;
    ctx.beginPath();
    ctx.strokeStyle = colors.dim;
    ctx.lineWidth = 1;
    ctx.arc(cx, cy, pulse, 0, Math.PI * 2);
    ctx.stroke();

    if (pulse > Math.max(w, h)) pulse = 0;
  }

  function drawScanline() {
    ctx.fillStyle = colors.scan;
    ctx.fillRect(0, scanY, w, 2);
  }

  function drawTargetLines(t: ScanTarget) {
    ctx.strokeStyle = colors.scan;
    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.lineTo(t.x, t.y);
    ctx.stroke();
  }
  function drawTarget(t: ScanTarget) {
    const dx = mouseX - t.x;
    const dy = mouseY - t.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
  
    const lockRadius = 80;
    const style = targetStyles[t.type];
  
    t.locked = dist < lockRadius;
  
    // Scan progress logic
    if (t.locked) {
      t.scanProgress = Math.min(1, t.scanProgress + style.speed);
    } else {
      t.scanProgress = Math.max(0, t.scanProgress - 0.02);
    }
  
    // Ambient drift when idle
    if (!t.locked) {
      //t.x += Math.sin(Date.now() * 0.03 + t.y) * .5;
      //t.y += Math.cos(Date.now() * 0.03 + t.x) * .5;
      //cy + h/3 * Math.sin(0 + (i * 7))
      //x: cx + w/3 * Math.cos( 0 + (i * 7) ),
      //y: cy + h/3 * Math.sin(0 + (i * 7)),
      t.theta = (t.theta + .001) % 6.28 * 1;
      t.x = cx + w/3 * Math.cos(t.theta);
      t.y = cy + h/3 * Math.sin(t.theta);
    }
  
    t.rotation += t.locked ? 0.04 : 0.008;
    t.pulse += 0.1;
  
    const alpha = t.locked ? 1 : Math.max(0.25, 1 - dist / 300);
  
    ctx.save();
    ctx.translate(t.x, t.y);
    ctx.rotate(t.rotation);
  
    ctx.strokeStyle = style.color;
    ctx.lineWidth = t.locked ? 2 : 1;
    ctx.shadowBlur = t.locked ? 18 : 8;
    ctx.shadowColor = style.color;
    ctx.globalAlpha = alpha;
  
    // Core reticle
    ctx.beginPath();
    ctx.arc(0, 0, t.r + Math.sin(t.pulse) * 2, 0, Math.PI * 2);
    ctx.stroke();
  
    // Crosshair
    ctx.beginPath();
    ctx.moveTo(-t.r - 6, 0);
    ctx.lineTo(-t.r + 2, 0);
    ctx.moveTo(t.r - 2, 0);
    ctx.lineTo(t.r + 6, 0);
    ctx.moveTo(0, -t.r - 6);
    ctx.lineTo(0, -t.r + 2);
    ctx.moveTo(0, t.r - 2);
    ctx.lineTo(0, t.r + 6);
    ctx.stroke();
  
    // Scan progress ring
    if (t.scanProgress > 0) {
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = style.color;
      ctx.shadowBlur = 25;
      ctx.arc(
        0,
        0,
        t.r + 16,
        -Math.PI / 2,
        -Math.PI / 2 + Math.PI * 2 * t.scanProgress
      );
      ctx.stroke();
    }
  
    // Scan complete flash
    if (t.scanProgress >= 1) {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255,255,255,0.8)';
      ctx.lineWidth = 1;
      ctx.arc(0, 0, t.r + 22, 0, Math.PI * 2);
      ctx.stroke();
    }
    if (t.scanProgress >= 1 && t.scanProgress < 1.02) {
      triggerScanText(t.type);
    }    
  
    ctx.restore();
  }

  function drawScanText() {
    if (scanTextAlpha <= 0) return;
  
    ctx.save();
    ctx.globalAlpha = scanTextAlpha;
    ctx.font = '14px monospace';
    ctx.fillStyle = '#7fffd4';
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#7fffd4';
  
    ctx.fillText(scanText, 24, h - 40);
    ctx.restore();
  
    scanTextTimer--;
    if (scanTextTimer <= 0) {
      scanTextAlpha -= 0.02;
    }
  }
  
  function draw() {
    ctx.clearRect(0, 0, w, h);
    const path = router.currentRoute.value.name?.toString().includes("projects") ? "projects": router.currentRoute.value.name?.toString();
    currentVisor = visorConfigs[path as Routes];
    // soft vignette
    //ctx.fillStyle = 'rgba(0,0,0,0.15)';
    //ctx.fillRect(0, 0, w, h);
    // visor tint overlay
    ctx.fillStyle = visorStyles[currentVisor].tint;
    ctx.fillRect(0, 0, w, h);

    drawPulse();
    rings.forEach((r) => drawRing(r,path as Routes));
    targets.forEach(drawTarget);
    drawScanText();
    drawScanline();
    targets.forEach(drawTargetLines);
  }

  gsap.ticker.add(draw);

  return () => {
    gsap.ticker.remove(draw);
    window.removeEventListener('resize', resize);
  };
}

type TargetType = 'hostile' | 'neutral' | 'artifact';

type ScanTarget = {
  x: number;
  y: number;
  r: number;
  rotation: number;
  pulse: number;
  locked: boolean;
  scanProgress: number;
  type: TargetType;
  theta: number;
};


