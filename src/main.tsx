import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { LazyMotion, domAnimation, MotionConfig } from "motion/react"

import "./index.css"
import _App from "./App.tsx"

const App = () => import.meta.env.PROD ? <_App /> : <StrictMode><_App/></StrictMode>;

createRoot(document.getElementById("root")!).render(
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </LazyMotion>
)
