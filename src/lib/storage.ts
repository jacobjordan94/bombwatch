import browser from "webextension-polyfill"
import type { StorageData, Theme } from "@/types/giantbomb"

const DEFAULTS: StorageData = {
  giantBombData: null,
  pollingInterval: 5,
  lastFetch: 0,
  theme: "system",
  refreshing: false,
}

export async function getStorageData(): Promise<StorageData> {
  const data = await browser.storage.local.get(Object.keys(DEFAULTS))
  return { ...DEFAULTS, ...data }
}

export async function setGiantBombData(
  data: StorageData["giantBombData"]
): Promise<void> {
  await browser.storage.local.set({
    giantBombData: data,
    lastFetch: Date.now(),
  })
}

export async function setPollingInterval(interval: number): Promise<void> {
  await browser.storage.local.set({ pollingInterval: interval })
}

export async function getPollingInterval(): Promise<number> {
  const data = await getStorageData()
  return data.pollingInterval
}

export async function getTheme(): Promise<Theme> {
  const data = await getStorageData()
  return data.theme
}

export async function setTheme(theme: Theme): Promise<void> {
  await browser.storage.local.set({ theme })
}

export async function setRefreshing(refreshing: boolean): Promise<void> {
  await browser.storage.local.set({ refreshing })
}
