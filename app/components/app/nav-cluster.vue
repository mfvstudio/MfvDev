<template>
  <div v-if="active" class="absolute inset-0 pointer-events-none">
    <AppScanNavTarget class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    label="Project Archive" route="/projects3"
    v-for="item in nodes"
    :key="item.id"
    :ref="cmp => {
      if(cmp?.rootEl) {
        targets[item.id] = cmp.rootEl;
      } else {
        targets['test'] = null
      }
    }"
    :id="item.id"
    />
  </div>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap';
import type { ScanNavTarget } from '~/types/nav'

let active = ref(false);
const targets = ref<Record<string, HTMLElement | null>>({});
const nodes: Record<string, ScanNavTarget> = {
  projects: {
    id: "projects",
    label: "proj",
    route: "/projects3",
    scanTime: 2,
    status: 'idle',
  },
  projects2: {
    id: "projects2",
    label: "proj2",
    route: "/projects32",
    scanTime: 2,
    status: 'idle',
  }
};

onMounted(() => {
  active.value = true;
  console.log("activated");
});

watchEffect(async () => {
  if(!active.value) return;

  await nextTick();
  const el = targets.value;
  let i = 1;
  for(const t in targets.value) {
    gsap.to(targets.value[t]!, {
    x: 150 * i,
    y: 150 * i,
    duration: 1,
  });
  ++i;
  }
})


</script>

<style>

</style>
