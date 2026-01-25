<template>
  <div>
    <canvas id="sci-fi-hud" class="hud-bg"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from 'vue';
import { startSciFiHud } from '../../../animations/sciFiHud';

let stop: (() => void) | undefined;

onMounted(() => {
  stop = startSciFiHud();
});

onBeforeUnmount(() => {
  stop?.();
});


</script>

<style>
.hud-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  background: radial-gradient(circle at center, #0a1a1f, #020b10 70%);
}

</style>
