export type ScanNavTarget = {
    id: string
    label: string
    route: string
    scanTime: number
    status: 'idle' | 'locked' | 'scanning' | 'complete'
    katakana: string,
    onComplete?: () => void
  }
  