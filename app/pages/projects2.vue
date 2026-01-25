<template>
  <div>
    <div class="relative ml-32 mt-64 max-w-3xl">
  <div class="text-xs tracking-widest text-primary opacity-70">
    TARGET IDENTIFIED
  </div>

  <h1 class="font-orbitron text-5xl mt-2 text-accent">
    General Asynchronous Multiplayer Game Server
  </h1>

  <div class="mt-4 flex gap-6 text-sm text-info">
    <span>CLASS: BACKEND SERVICE</span>
    <span>STATE: ONLINE</span>
  </div>

  <!-- HUD brackets -->
  <div class="absolute -top-4 -left-4 w-6 h-6 border-l border-t border-primary opacity-60" />
  <div class="absolute -top-4 -right-4 w-6 h-6 border-r border-t border-primary opacity-60" />
</div>

  </div>

  <div class="mt-24 grid grid-cols-[160px_1fr] gap-y-3 text-sm">
  <div class="text-primary opacity-70">DESIGNATION</div>
  <div>GameWizApi</div>

  <div class="text-primary opacity-70">FUNCTION</div>
  <div>
    Turn-based multiplayer game server supporting variable game rulesets
  </div>

  <div class="text-primary opacity-70">AUTH</div>
  <div>Firebase Authentication (JWT / Claims)</div>

  <div class="text-primary opacity-70">SCALING</div>
  <div>Cloud Run auto-scaling</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
  <div class="relative p-4 border border-base-300 hover:border-primary transition">
    <div class="text-primary text-xs mb-2">CORE LANGUAGE</div>
    <div class="font-semibold">Go</div>
  </div>

  <div class="relative p-4 border border-base-300 hover:border-primary transition">
    <div class="text-primary text-xs mb-2">INFRASTRUCTURE</div>
    <div>GCP / Cloud Run</div>
  </div>

  <div class="relative p-4 border border-base-300 hover:border-primary transition">
    <div class="text-primary text-xs mb-2">DEPLOYMENT</div>
    <div>Docker</div>
  </div>
</div>

<div class="mt-32 relative border border-primary/40 p-4">
  <div class="absolute -top-3 left-4 bg-base-100 px-2 text-xs text-primary">
    DATA TERMINAL — OPENAPI SPEC
  </div>

  <iframe
    src="./../docs/GameWizApi.html"
    class="w-full h-[720px] border-none"
  />
</div>


</template>

<script lang="ts" setup>

</script>

<style>

</style>
