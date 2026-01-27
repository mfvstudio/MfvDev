import type { ProjectScanNode } from '~/types/project'
import { ref } from 'vue'

const active = ref(false)
const nodes = ref<ProjectScanNode[]>([])

export function useProjectScanTree() {
  function spawnProjects(newNodes: ProjectScanNode[]) {
    active.value = true
    nodes.value = newNodes
  }

  function clear() {
    active.value = false
    nodes.value = []
  }

  return {
    active,
    nodes,
    spawnProjects,
    clear,
  }
}

