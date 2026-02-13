import { useEffect, useLayoutEffect, useState } from "react"
import { getTheme } from "./storage"
import type { Theme } from "@/types/giantbomb"

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>("system")

  useEffect(() => {
    getTheme().then(setTheme)

    const handleThemeChange = (event: Event) => {
      const customEvent = event as CustomEvent<Theme>
      setTheme(customEvent.detail)
      applyTheme(customEvent.detail)
    }

    window.addEventListener("themeChange", handleThemeChange)
    return () => window.removeEventListener("themeChange", handleThemeChange)
  }, [])

  useLayoutEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    if (theme !== "system") return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => applyTheme("system")
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  if (theme === "system") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    root.classList.toggle("dark", prefersDark)
  } else {
    root.classList.toggle("dark", theme === "dark")
  }
}