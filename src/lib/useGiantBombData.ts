import { useEffect, useState } from "react"
import { getStorageData } from "@/lib/storage"
import type { GiantBombData } from "@/types/giantbomb"
import browser from "webextension-polyfill"

interface UseGiantBombDataResult {
  data: GiantBombData | null
  loading: boolean
  error: string | null
}

export default function useGiantBombData(): UseGiantBombDataResult {
  const [data, setData] = useState<GiantBombData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    loadData()

    const handleStorageChange = (
      changes: Record<string, { newValue?: unknown; oldValue?: unknown }>,
      area: string
    ) => {
      if (area === "local") {
        if (changes.giantBombData) {
          setData(changes.giantBombData.newValue as GiantBombData | null)
        }
      }
    }

    browser.storage.onChanged.addListener(handleStorageChange)
    return () => browser.storage.onChanged.removeListener(handleStorageChange)
  }, [])

  const loadData = async () => {
    try {
      setLoading(true)
      setError(null)
      const storageData = await getStorageData()

      if (!storageData.giantBombData) {
        setError("No data available. Please wait for the next update.")
      } else {
        setData(storageData.giantBombData)
      }
    } catch (err) {
      setError("Failed to load data. Please check your internet connection.")
      console.error("Error loading data:", err)
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error }
}
