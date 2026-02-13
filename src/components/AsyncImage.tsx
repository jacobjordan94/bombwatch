import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

interface AsyncImageProps {
  src: string
  alt: string
  className?: string
}

export function AsyncImage({ src, alt, className }: AsyncImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)

  if (!src || errored) {
    return (
      <div className={cn("relative overflow-hidden bg-muted flex items-center justify-center", className)}>
        <img src="/icons/logo-white.svg" alt="BombWatch" className="size-8 opacity-50" />
      </div>
    )
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <AnimatePresence>
        {!loaded && (
          <motion.div
            className="absolute inset-0 bg-muted animate-pulse"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
        className="size-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  )
}
