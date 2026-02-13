import { Component, type ErrorInfo, type ReactNode } from "react"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  retryCount: number
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, retryCount: 0 }
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error boundary caught:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4">
          <Alert variant="destructive">
            <AlertCircle />
            <AlertTitle>Something went wrong</AlertTitle>
            <AlertDescription>
              Unable to load Giant Bomb data. Please check your internet
              connection or try again later.
            </AlertDescription>
          </Alert>
          <Button
            className="mt-4 w-full"
            onClick={() => this.setState((s) => ({ hasError: false, retryCount: s.retryCount + 1 }))}
          >
            Try Again
          </Button>
        </div>
      )
    }

    return <div key={this.state.retryCount}>{this.props.children}</div>
  }
}
