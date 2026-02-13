import browser from "webextension-polyfill"
import { fetchGiantBombData } from "../lib/api"
import { setGiantBombData, getPollingInterval, setRefreshing } from "../lib/storage"

const ALARM_NAME = "checkGiantBomb"

async function checkLiveStatus() {
  await setRefreshing(true)
  try {
    const data = await fetchGiantBombData()
    await setGiantBombData(data)

    if (data.liveNow && data.liveNow.title) {
      await browser.action.setBadgeText({ text: "LIVE" })
      await browser.action.setBadgeBackgroundColor({ color: "#FF0000" })
      await browser.action.setBadgeTextColor({ color: "#FFFFFF" })
    } else {
      await browser.action.setBadgeText({ text: "" })
    }
  } catch (error) {
    console.error("Error in checkLiveStatus:", error)
    await browser.action.setBadgeText({ text: "" })
  } finally {
    await setRefreshing(false)
  }
}

async function setupAlarm() {
  const interval = await getPollingInterval()
  await browser.alarms.clear(ALARM_NAME)
  await browser.alarms.create(ALARM_NAME, { periodInMinutes: interval })
}

browser.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === ALARM_NAME) {
    await checkLiveStatus()
  }
})

browser.storage.onChanged.addListener(async (changes, area) => {
  if (area === "local" && changes.pollingInterval) {
    await setupAlarm()
  }
})

browser.runtime.onMessage.addListener(async (message: unknown) => {
  if (message && typeof message === "object" && "type" in message && message.type === "refresh") {
    await checkLiveStatus()
  }
})

// Runs on every worker wake-up — ensures the alarm always exists
browser.alarms.get(ALARM_NAME).then((existing) => {
  if (!existing) {
    setupAlarm()
  }
})

browser.runtime.onInstalled.addListener(async () => {
  await checkLiveStatus()
  await setupAlarm()
})

browser.runtime.onStartup.addListener(async () => {
  await checkLiveStatus()
  await setupAlarm()
})
