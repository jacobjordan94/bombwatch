import { DateTime } from "luxon"

export function formatShowDate(dateString: string): string {
  const dt = DateTime.fromFormat(dateString, "MMM d, yyyy hh:mm a", {
    zone: "America/Los_Angeles",
  })
  if (!dt.isValid) {
    return dateString
  }
  const local = dt.toLocal()
  return local.toFormat("EEE, MMM d 'at' h:mm a")
}
