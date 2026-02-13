import type { GiantBombData } from "@/types/giantbomb"

const API_ENDPOINT = "https://giantbomb.com/upcoming_json?time="

export async function fetchGiantBombData(): Promise<GiantBombData> {
  const url = API_ENDPOINT + new Date().getTime();
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 10_000)

  try {
    const response = await fetch(url, {
      headers: {
        Referer: "https://giantbomb.com/",
      },
      signal: controller.signal,
    })

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`)
    }

    return await response.json() as GiantBombData
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("API request timed out")
    }
    throw error
  } finally {
    clearTimeout(timeout)
  }
}
