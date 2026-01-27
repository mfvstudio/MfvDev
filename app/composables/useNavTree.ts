import type { ScanNavTarget } from '~/types/nav'

const active = ref(true);
const nodes = ref<ScanNavTarget[]>([]);

export function useNavTree() {
  function spawnNodes(targets: ScanNavTarget[]) {
    active.value = true;
    nodes.value = targets;
  }
  function hide() {
    active.value = false;
  }

  function show() {
    active.value = true;
  }
  return {
    active,
    nodes,
    spawnNodes,
    hide,
    show
  }
}
