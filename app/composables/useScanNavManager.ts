import { ref, reactive } from 'vue'
import { useRouter } from '#app'
import { gsap } from 'gsap'
import type { ScanNavTarget } from '../types/nav'




export function useScanNavManager () {
  const router = useRouter()

  const targets = reactive(new Map<string, ScanNavTarget>())
  const activeTargetId = ref<string | null>(null)
  const scanProgress = ref(0)
  const scanning = ref(false)

  function registerTarget(target: ScanNavTarget) {
    targets.set(target.id, target)
  }

  function unregisterTarget(id: string) {
    targets.delete(id)
  }

  function lockTarget(id: string) {
    console.log("Locking target");
    if (!targets.has(id)) return
    activeTargetId.value = id
    console.log("Active id is", activeTargetId.value)
  }

  function unlockTarget(id: string) {
    if (activeTargetId.value === id) {
      activeTargetId.value = null
      resetScan()
    }
  }

  function startScan() {
    if (!activeTargetId.value || scanning.value) return

    const target = targets.get(activeTargetId.value)!
    scanning.value = true
    scanProgress.value = 0

    gsap.to(scanProgress, {
      value: 100,
      duration: 2,
      overwrite: 'auto',
      ease: 'none',
      onComplete: () => completeScan(target),
    })
  }

  function resetScan() {
    scanning.value = false
    scanProgress.value = 0
    gsap.killTweensOf(scanProgress)
  }

  function completeScan(target: ScanNavTarget) {
    scanning.value = false
    target.onComplete?.()
    router.push(target.route);
  }

  return {
    targets,
    activeTargetId,
    scanProgress,
    scanning,
    registerTarget,
    unregisterTarget,
    lockTarget,
    unlockTarget,
    startScan,
  }
}

