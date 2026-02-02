<template>
  <div class="relative min-h-screen px-16 py-24 font-orbitron">
    <AppScanNavTarget class="fixed right-24 top-24 font-orbitron text-3xl"
    label="Back"
    route="/"
    key="key"
    id="scanNavBack"
    katakana="バック"
    />
  <!-- Header -->
  <section class="fixed top-64 right-6 w-[420px] z-20 mb-20 scan-wipe overflow-hidden">
    <div class="text-xs tracking-widest text-primary opacity-70 hud-flicker">
      DATABASE ONLINE
    </div>  

    <h1 class="text-5xl mt-3 text-accent scan-title gsap-scan-title">
      PROJECT ARCHIVE
    </h1>

    <div class="mt-4 text-sm text-primary/60">
      SELECT OBJECT FOR DETAILED SCAN
    </div>
  </section>
  <!-- Project List -->
  <section v-if="active" class="mt-40 grid grid-cols-1 md:grid-cols-2 gap-12">
    <AppProjectNode class="font-orbitron col-start-1"
    v-for="item in projects"
    :id="item.id"
    :title="item.title"
    :summary="item.summary"
    :type="item.type"
    :status="item.status"
    :route="item.route"
    />
  </section>
  <footer class="fixed bottom-24 right-24 text-xs text-primary/50">
    ARCHIVE STATUS · STABLE
  </footer>

  </div>
</template>

<style>

</style>

<script lang="ts" setup>
import { animateScanWipe, animateScanTitle, animateScanSections } from '../../../animations/text'
import { gsap } from 'gsap'
import type { ProjectScanNode } from '~/types/project'

let active = ref(false);

const projects: Record<string, ProjectScanNode> = {
  gamewiz: {
    id: 'gamewiz',
    title: 'Asynchronous Multiplayer Game Server',
    summary: 'Turn-based multiplayer backend with dynamic rulesets.',
    type: 'Backend Service',
    status: 'OFFLINE',
    route: "/projects/gamewiz"
  }
};

onMounted(() => {
  active.value = true;
  animateScanTitle(".gsap-scan-title")
});



</script>
