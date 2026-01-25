<template>
  <div>
    <div class="relative min-h-screen px-16 py-24 font-orbitron">
      <!-- HUD Corners -->
<div class="pointer-events-none">
  <div class="absolute top-8 left-8 w-8 h-8 border-t border-l border-primary/50" />
  <div class="absolute top-8 right-8 w-8 h-8 border-t border-r border-primary/50" />
  <div class="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-primary/50" />
  <div class="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-primary/50" />
</div>
<section class="mb-24 max-w-4xl scan-wipe relative overflow-hidden">
  <div class="text-xs tracking-widest text-primary opacity-70 hud-flicker">
    SCAN COMPLETE
  </div>

  <h1 class="text-5xl mt-3 text-accent scan-title gsap-scan-title scan-header">
    General Asynchronous Multiplayer Game Server
  </h1>

  <div class="mt-6 flex flex-wrap gap-8 text-sm hud-flicker">
    <div>
      <span class="text-primary/70">DESIGNATION:</span> GameWizApi
    </div>
    <div>
      <span class="text-primary/70">CLASS:</span> Backend Service
    </div>
    <div>
      <span class="text-primary/70">STATUS:</span>
      <span class="text-success">OPERATIONAL</span>
    </div>
  </div>
</section>
<section class="mb-32 max-w-5xl scan-wipe relative overflow-hidden">
  <div class="text-primary text-sm mb-4">FUNCTION ANALYSIS</div>

  <div class="grid grid-cols-[180px_1fr] gap-y-4 text-sm leading-relaxed">
    <div class="text-primary/60">PRIMARY ROLE</div>
    <div>
      Turn-based multiplayer game server supporting dynamic game rulesets
    </div>

    <div class="text-primary/60">PLAYER ACCESS</div>
    <div>
      Firebase Authentication with JWT-based authorization claims
    </div>

    <div class="text-primary/60">SESSION MODEL</div>
    <div>
      Shareable 6-character session identifiers with unlimited participants
    </div>

    <div class="text-primary/60">ARCHITECTURE</div>
    <div>
      Stateless API design optimized for cloud auto-scaling
    </div>
  </div>
</section>
<section class="mb-32 scan-wipe relative overflow-hidden">
  <div class="text-primary text-sm mb-6">TECHNOLOGY MODULES</div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="relative border border-base-300 p-5 hover:border-primary transition">
      <div class="text-xs text-primary mb-2">CORE LANGUAGE</div>
      <div class="text-lg">Go</div>
      <div class="text-xs opacity-60 mt-2">
        OpenAPI-driven client generation
      </div>
    </div>

    <div class="relative border border-base-300 p-5 hover:border-primary transition">
      <div class="text-xs text-primary mb-2">INFRASTRUCTURE</div>
      <div class="text-lg">Google Cloud Platform</div>
      <div class="text-xs opacity-60 mt-2">
        Cloud Run · Firebase · Datastore
      </div>
    </div>

    <div class="relative border border-base-300 p-5 hover:border-primary transition">
      <div class="text-xs text-primary mb-2">DEPLOYMENT</div>
      <div class="text-lg">Docker</div>
      <div class="text-xs opacity-60 mt-2">
        Cloud Build + Artifact Registry
      </div>
    </div>
  </div>
</section>
<section class="mb-32 scan-wipe relative overflow-hidden">
  <div class="absolute -top-3 left-6 bg-base-100 px-3 text-xs text-primary">
    DATA TERMINAL — OPENAPI SPEC
  </div>

  <div class="border border-primary/40 p-4 relative scan-terminal">
    <iframe
      src="./../docs/GameWizApi.html"
      class="w-full h-[720px]"
    />
  </div>
</section>
<footer class="text-xs text-primary/50 mt-40">
  SCAN LOG COMPLETE · OBJECT STORED IN DATABASE
</footer>


    </div>
  </div>
</template>

<script lang="ts" setup>
import { animateScanWipe, animateScanTitle, animateScanSections } from '../../animations/text'
import { gsap } from 'gsap'

onMounted(() => {
  const tl = gsap.timeline();

  tl.call(() => animateScanWipe('.scan-wipe'))
  .call(() => animateScanTitle('.gsap-scan-title'))
  .call(() => animateScanSections());

});
</script>

<style>
.scan-wipe::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 255, 180, 0.15) 50%,
    transparent 100%
  );
  transform: translateY(100%);
  pointer-events: none;
}

@keyframes hudFlicker {
  0%, 100% { opacity: 1; }
  48% { opacity: 0.97; }
  50% { opacity: 0.9; }
  52% { opacity: 1; }
}

.hud-flicker {
  animation: hudFlicker 6s infinite;
}

.scan-terminal::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    rgba(255,255,255,0.03),
    rgba(255,255,255,0.03) 1px,
    transparent 1px,
    transparent 4px
  );
  pointer-events: none;
  opacity: 0.15;
}


</style>
