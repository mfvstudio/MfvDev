<template>
  <div 
  class="relative block border border-base-300 p-6 group scan-node"
  @mouseenter="onEnter"
  @mouseleave="onLeave"
  >
    <div class="text-xs text-primary mb-2">
      Designation: {{ id }}
    </div>

    <div class="text-xl text-accent">
      {{title}}
    </div>

    <div class="mt-3 text-sm opacity-70 leading-relaxed">
      summary: {{ summary }}
    </div>

    <div class="mt-4 flex gap-4 text-xs text-primary/60">
      <div>CLASS: {{ type }}</div>
      <div>STATUS: {{ status }}
        <span class="text-success">stat</span>
      </div>
    </div>
    <!-- Scan line -->
    <div class="scan-line" />
  </div>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap'

const props = defineProps<{
  id: string
  route: string
  type: string
  title: string
  summary: string
  status: string
}>();

const scanManager = useProjectNodeScanManager();



onMounted(() => {
  scanManager.registerNode({
    id: props.id,
    title: props.title,
    route: props.route,
    type: props.type,
    summary: props.summary,
    status: props.status
  })
});

onUnmounted(() => {
  scanManager.unregisterNode(props.id);
})

function onEnter() {
  scanManager.lockNode(props.id)
  scanManager.startScan()
}

function onLeave() {
  scanManager.unlockNode(props.id);
}


</script>

<style>
.scan-node {
  position: relative;
  overflow: hidden;
}

.scan-node .scan-line {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to left,
    rgba(0,255,180,0.15)
  );
  transform: translateX(100%);
  opacity: 0;
}

.scan-node:hover .scan-line {
  animation: scanLine 1.2s linear;
  opacity: 1;
}

@keyframes scanLine {
  from { transform: translateX(-100%); }
  to   { transform: translateX(0%); }
}

</style>
