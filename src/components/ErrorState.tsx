import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

interface ErrorStateProps {
  message: string
}

export function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="h-full p-4 bg-background">
      <Alert variant="destructive">
        <AlertCircle />
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </div>
  )
}
