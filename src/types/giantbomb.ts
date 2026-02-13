export interface LiveShow {
  title: string
  image: string | null
}

export interface UpcomingShow {
  type: string
  title: string
  image: string
  date: string
  premium: boolean
}

export interface GiantBombData {
  liveNow: LiveShow | null
  upcoming: UpcomingShow[]
}

export type Theme = "light" | "dark" | "system"

export interface StorageData {
  giantBombData: GiantBombData | null
  pollingInterval: number
  lastFetch: number
  theme: Theme
  refreshing: boolean
}
