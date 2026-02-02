<template>
  <div v-if="active" class="absolute inset-0 pointer-events-none">
    <AppScanNavTarget class="absolute left-1/2 top-1/2 font-orbitron text-xl"
    v-for="item in nodes"
    :label="item.label"
    :route="item.route"
    :key="item.id"
    :id="item.id"
    :katakana="item.katakana"
    :ref="cmp => {
      if(cmp?.rootEl) {
        targets[item.id] = cmp.rootEl;
      }
    }"
    />
    <div class="fixed bottom-64 left-32">
    <div class="grid grid-flow-row auto-cols-max gap-48">
      <div ref="left_dest_1" class="w-10 h-10"></div>
      <div ref="left_dest_2" class="w-10 h-10"></div>
      <div ref="left_dest_3" class="w-10 h-10"></div>
    </div>
  </div>
  <div class="fixed bottom-64 right-32">
    <div class="grid grid-flow-row auto-cols-max gap-48">
      <div class="w-10 h-10"></div>
      <div class="w-10 h-10"></div>
      <div class="w-10 h-10"></div>
    </div>
  </div>
  </div>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
gsap.registerPlugin(MotionPathPlugin);
import type { ScanNavTarget } from '~/types/nav'

//scan target pos
const left_dest_1 = ref<HTMLElement | null>(null);
const left_dest_2 = ref<HTMLElement | null>(null);
const left_dest_3 = ref<HTMLElement | null>(null);

let active = ref(false);
const targets = ref<Record<string, HTMLElement | null>>({});

const nodeDestinations: Record<string, Ref> = {
  projects: left_dest_1,
  resume: left_dest_2,
  contact: left_dest_3
}

//-------The Navigation Nodes -----------//
const nodes: Record<string, ScanNavTarget> = {
  projects: {
    id: "projects",
    label: "Project Archive",
    route: "/projects",
    scanTime: 2,
    status: 'idle',
    katakana: "プラジェクトアーカイブ",
  },
  resume: {
    id: "resume",
    label: "Experience",
    route: "/resume",
    scanTime: 2,
    status: "idle",
    katakana: "エクスピアリアンス"
  },
  contact: {
    id: "contact",
    label: "Communicate",
    route: "/contact",
    status: "idle",
    scanTime: 2,
    katakana: "コムネケイト"
  }
};



onMounted(() => {
  active.value = true;
});



watchEffect(async () => {
  if(!active.value) return;

  await nextTick();
  const destRect = left_dest_1.value!.getBoundingClientRect();

  for(const t in targets.value) {
    const navRect = targets.value[t]?.getBoundingClientRect();
    const destRect = nodeDestinations[t]?.value.getBoundingClientRect();
    const x = destRect.x - navRect?.left!;
    const y = destRect.y - navRect?.top!;
    gsap.to(targets.value[t]!, {
    x: x,
    y: y,
    duration: 1,
  });
  }
})
</script>
