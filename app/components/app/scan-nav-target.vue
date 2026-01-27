<template>
  <div ref="rootEl" class="scan-target cursor-none pointer-events-auto flex items-center justify-center" 
  @mouseenter="onEnter"
  @mouseleave="onLeave" 
  @click="onClick"
  @scan-complete="spawnProjectNodes"
  >
    <div class="target-ring" />
    <div class="target-label flex items-center justify-center gsap-split-text-scramble2">{{ label }}</div>

    <!-- Scan Progress Ring -->
    <svg v-if="isActive" class="absolute inset-0">
      <circle
        cx="25%"
        cy="45%"
        r="20%"
        stroke="currentColor"
        fill="none"
        :stroke-dasharray="dash"
      />
    </svg>

  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { animateScrambleTextTimeline } from '../../../animations/text'

const rootEl = ref<HTMLElement | null>(null);

  defineExpose({
    rootEl
  })

let textAnim: gsap.core.Timeline | undefined;

const props = defineProps<{
  id: string
  label: string
  route: string
  scanTime?: number
}>()

const scan = useScanNavManager()

onMounted(() => {
  scan.registerTarget({
    id: props.id,
    label: props.label,
    route: props.route,
    scanTime: props.scanTime ?? 1.2,
    status: 'idle',
    onComplete: spawnProjectNodes,
  })
  textAnim = animateScrambleTextTimeline(rootEl.value!);
})

onUnmounted(() => {
  scan.unregisterTarget(props.id)
})

const isActive = computed(() => scan.activeTargetId.value === props.id)
const dash = computed(() => `${scan.scanProgress.value * 3}, 100`)

function onEnter() {
  textAnim?.play(0);
  scan.lockTarget(props.id)
  scan.startScan()
}

function onLeave() {
  scan.unlockTarget(props.id)
  textAnim?.pause();
  textAnim?.reverse();
}

function onClick() {
  scan.startScan()
}

const projectTree = useProjectScanTree()

function spawnProjectNodes() {
  console.log("spawning")
  projectTree.spawnProjects([
    {
      id: 'proj-1',
      label: 'GameWizApi',
      route: '/projects#1',
      angle: 45,
      radius: 350
    },
    {
      id: 'proj-2',
      label: 'Metroid UI System',
      route: '/projects#2',
      angle: 90,
      radius: 350
    },
    {
      id: 'proj-3',
      label: 'Realtime Chat Server',
      route: '/projects#3',
      angle: 180,
      radius: 50
    },
  ])
}
</script>

<style>

</style>
