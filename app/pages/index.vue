<script lang="ts" setup>
import { animateScrambleText } from '../../animations/text';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  animateScrambleText('.gsap-split-text-scramble');
});



</script>

<template>
  <AppNavCluster/>
  <div class="pointer-events-none">
    <section class="min-h-screen grid grid-rows-[1fr_2fr]">
      <div class="flex items-center justify-center">
        <div class="text-center font-orbitron text-9xl font-bold gsap-split-text-scramble">
      MFVDEV
    </div>
      </div>
  </section>
  </div>
</template>
