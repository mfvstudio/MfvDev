<template>
  <div v-if="active" class="absolute inset-0 pointer-events-none">
    <AppProjectScanNode
      v-for="node in nodes"
      :key="node.id"
      :node="node"
    />
  </div>
</template>

<script lang="ts" setup>
const { active, nodes } = useProjectScanTree();

</script>

<style>

</style>
