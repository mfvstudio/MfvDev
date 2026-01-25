<template>
  <div class="scan-target cursor-none" @mouseenter="lockOn" @mouseleave="unlock" @click="navigate">
    
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  label: string
  to: string
}>();

const router = useRouter();

function navigate() {
  router.push(props.to);
}

function lockOn() {
  return;
}

function unlock() {
  
}
</script>

<style>

</style>
