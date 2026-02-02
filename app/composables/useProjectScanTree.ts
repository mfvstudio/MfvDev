import { useRouter } from '#app';
import type { ProjectScanNode } from '~/types/project';
import { gsap } from 'gsap';

export function useProjectNodeScanManager() {
  const router = useRouter();

  const nodes = reactive(new Map<string, ProjectScanNode>());
  const activeNode = ref<string | null>(null);
  const scanProgress = ref(0);
  const scanning = ref(false);

  function registerNode(node: ProjectScanNode) {
    nodes.set(node.id, node);
  }

  function unregisterNode(id: string) {
    nodes.delete(id);
  }

  function lockNode(id: string) {
    if(!nodes.has(id)) return;
    activeNode.value = id;
  }

  function unlockNode(id: string) {
    if(activeNode.value == id) {
      activeNode.value == null
      resetScan();
    }
  }

  function resetScan() {
    scanning.value = false;
    scanProgress.value = 0;
    gsap.killTweensOf(scanProgress);
  }

  function startScan() {
    if(!activeNode.value || scanning.value) return;

    const node = nodes.get(activeNode.value);
    scanning.value = true;
    scanProgress.value = 0;

    gsap.to(scanProgress, {
      value: 100,
      duration: 2,
      overwrite: 'auto',
      onComplete: () => completeScan(node!)
    })
  }

  function completeScan(node: ProjectScanNode) {
    scanning.value = false;
    console.log("switching routes");
    router.push(node.route);
  }

  return {
    nodes, 
    activeNode,
    scanProgress,
    scanning,
    registerNode,
    unregisterNode,
    lockNode,
    unlockNode,
    startScan
  }
}
