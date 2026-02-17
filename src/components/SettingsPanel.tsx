import { useState, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Separator } from "@/components/ui/separator"
import { Settings } from "lucide-react"
import { m } from "motion/react"
import {
  getPollingInterval,
  setPollingInterval,
  getTheme,
  setTheme,
} from "@/lib/storage"
import type { Theme } from "@/types/giantbomb"
import { POLLING_OPTIONS, THEME_OPTIONS } from "@/lib/constants"
import Page from "./Page"

export function SettingsPanel() {
  const [intervalMinutes, setIntervalMinutes] = useState<number>(5)
  const [theme, setThemeState] = useState<Theme>("system")

  useEffect(() => {
    getPollingInterval().then(setIntervalMinutes)
    getTheme().then(setThemeState)
  }, [])

  const handleIntervalChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newInterval = parseInt(e.target.value, 10)
    setIntervalMinutes(newInterval)
    await setPollingInterval(newInterval)
  }

  const handleThemeChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.target.value as Theme
    setThemeState(newTheme)
    await setTheme(newTheme)
    window.dispatchEvent(new CustomEvent("themeChange", { detail: newTheme }))
  }

  return (
    <Page title="Settings" Icon={Settings} className="settings-page">
      <div className="space-y-2 flex-col">
        <m.div
          className="space-y-2 flex justify-between items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Label htmlFor="theme-select" className="pointer-events-none mb-0">Theme</Label>
          <NativeSelect
            id="theme-select"
            value={theme}
            onChange={handleThemeChange}
          >
            {THEME_OPTIONS.map((option) => (
              <NativeSelectOption key={option.value} value={option.value} className="text-black">
                {option.label}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        </m.div>

        <Separator />

        <m.div
          className="space-y-2 flex justify-between items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Label htmlFor="polling-interval" className="pointer-events-none mb-0">Check for updates every</Label>
          <NativeSelect
            id="polling-interval"
            value={intervalMinutes.toString()}
            onChange={handleIntervalChange}
          >
            {POLLING_OPTIONS.map((option) => (
              <NativeSelectOption key={option.value} value={option.value.toString()} className="text-black">
                {option.label}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        </m.div>

      </div>
    </Page>
  )
}
