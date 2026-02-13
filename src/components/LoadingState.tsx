import { Loader2 } from "lucide-react"

export function LoadingState() {
  return (
    <div className="h-full flex items-center justify-center bg-background">
      <Loader2 className="size-8 animate-spin text-red-500" />
    </div>
  )
}
