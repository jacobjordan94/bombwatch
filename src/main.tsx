import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { LazyMotion, domAnimation, MotionConfig } from "motion/react"

import "./index.css"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </LazyMotion>
  </StrictMode>
)
