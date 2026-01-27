<template>
  <div
    ref="el" class="scan-target absolute left-1/2 top-1/2 pointer-events-auto"
    :style="style"
    @mouseenter="lock"
    @mouseleave="unlock"
    @click="onClick"
  >
    <div class="target-label">{{ node.label }}</div>
    <div class="target-ring" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useScanNavManager } from '@/composables/useScanNavManager'
import type { ProjectScanNode } from '~/types/project'
import { gsap } from 'gsap';

const el = ref<HTMLElement | null>(null);

  onMounted(() => {
  if (!el.value) return

  gsap.fromTo(
    el.value,
    {
      opacity: 0,
      scale: 0.4,
      x: 0,
      y: 0,
    },
    {
      opacity: 1,
      scale: 1,
      x: Math.cos(props.node.angle! * Math.PI / 180) * props.node.radius!,
      y: Math.sin(props.node.angle! * Math.PI / 180) * props.node.radius!,
      duration: 0.6,
      ease: 'power2.out',
      delay: props.node.spawnDelay ?? 0,
    }
  )
})


const props = defineProps<{ node: ProjectScanNode }>()
const scan = useScanNavManager()

const style = computed(() => ({
  transform: `
    translate(-50%, -50%)
  `,
}))

function lock() {
  console.log("locking");
  scan.lockTarget(props.node.id)
}

function unlock() {
  scan.unlockTarget(props.node.id)
}

function onClick() {
  scan.registerTarget({
    id: props.node.id,
    label: props.node.label,
    route: props.node.route,
    scanTime: props.node.scanTime ?? 1.1,
    status: 'idle',
  })
  scan.startScan()
}
</script>
