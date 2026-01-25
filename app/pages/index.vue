<script lang="ts" setup>
import { animateScrambleText } from '../../animations/text';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
//import { onBeforeUnmount } from 'vue';

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  animateScrambleText('.gsap-split-text-scramble');
  gsap.utils.toArray<HTMLElement>('.scroll-float').forEach((el) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 3,
      },
      y: -250,
      ease: 'none',
      duration: 2
    });
  });
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(t => t.kill());
});

</script>

<template>
  <div class="pointer-events-none">
    <section class="min-h-screen scroll-float">
      <div class="min-h-screen flex items-center justify-center">
        <div class="text-center scroll-float font-orbitron text-9xl font-bold gsap-split-text-scramble">
      MFVDEV
    </div>
      </div>
  </section>
  <section class="min-h-screen scroll-float">
    <div class="flex w-full ml-12 mr-12 mt-64 ">
      <div class="card bg-base-300grid place-items-center">
      </div>
      <div class="divider divider-horizontal" />
      <div class="card bg-base-300 grid place-items-center scroll-float">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis consectetur cumque explicabo iste fugiat rerum
        laboriosam obcaecati dolores totam adipisci, sunt autem voluptatum nam facere incidunt quaerat harum dolorum accusamus.
      </div>
    </div>
  </section>
  </div>
</template>
