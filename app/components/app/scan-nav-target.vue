<template>
  <div ref="rootEl" 
  class=" aspect-square scan-target cursor-none pointer-events-auto grid place-items-center w-64 h-24" 
  @mouseenter="onEnter"
  @mouseleave="onLeave" 
  @click="onClick"
  >
    <div class="target-label col-start-1 row-start-1 z-10 gsap-split-text-scramble2">{{ label }}</div>

    <!-- Scan Progress Ring -->
    <svg
    class="col-start-1 row-start-1 w-full h-full"
    v-show="isActive"
    >
  <circle
    cx="50%"
    cy="50%"
    r="30"
    stroke="red"
    stroke-width="2"
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
  katakana: string
}>()

const scan = useScanNavManager()

onMounted(() => {
  scan.registerTarget({
    id: props.id,
    label: props.label,
    route: props.route,
    scanTime: props.scanTime ?? 1.2,
    status: 'idle',
    katakana: props.katakana,
  })
  textAnim = animateScrambleTextTimeline(rootEl.value!.querySelector('.target-label')!, props.katakana);
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

</script>

<style>

</style>
