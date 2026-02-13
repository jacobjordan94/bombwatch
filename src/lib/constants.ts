import type { LucideIcon } from "lucide-react"
import { Moon, Sun, Monitor } from "lucide-react"
import type { Theme } from "@/types/giantbomb"

export const POLLING_OPTIONS = [
  { value: 1, label: "1 minute" },
  { value: 3, label: "3 minutes" },
  { value: 5, label: "5 minutes" },
  { value: 10, label: "10 minutes" },
  { value: 15, label: "15 minutes" },
  { value: 30, label: "30 minutes" },
] as const

export const THEME_OPTIONS: { value: Theme; label: string; icon: LucideIcon }[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
]
