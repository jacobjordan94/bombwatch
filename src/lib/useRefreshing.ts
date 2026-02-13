import { useEffect, useState } from "react"
import { getStorageData } from "@/lib/storage"
import browser from "webextension-polyfill"

export default function useRefreshing(): boolean {
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    getStorageData().then((data) => setRefreshing(data.refreshing))

    const handleStorageChange = (
      changes: Record<string, { newValue?: unknown }>,
      area: string
    ) => {
      if (area === "local" && changes.refreshing) {
        setRefreshing(changes.refreshing.newValue as boolean)
      }
    }

    browser.storage.onChanged.addListener(handleStorageChange)
    return () => browser.storage.onChanged.removeListener(handleStorageChange)
  }, [])

  return refreshing
}
