import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { LazyMotion, domAnimation, MotionConfig } from "motion/react"

import "./index.css"
import App from "./App.tsx"

const root = (
  <LazyMotion features={domAnimation}>
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </LazyMotion>
)

createRoot(document.getElementById("root")!).render(
  import.meta.env.PROD ? root : <StrictMode>{root}</StrictMode>
)
