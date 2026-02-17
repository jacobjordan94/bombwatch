import { Card, CardContent } from "@/components/ui/card"
import { m } from "motion/react"
import { AsyncImage } from "./AsyncImage"
import type { LiveShow } from "@/types/giantbomb"

interface LiveNowProps {
  show: LiveShow
}

export function LiveNow({ show }: LiveNowProps) {
  return (
      <m.a
        href="https://giantbomb.com/live/chat"
        className="block cursor-pointer pt-10 mx-1.5"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ y: -4, scale: 1.02 }}
      >
          <Card className="ring-transparent pt-0 bg-linear-to-br from-red-950 to-red-900 gap-3 pb-3">
            {show.image ? (
              <AsyncImage
                src={show.image}
                alt={show.title}
                className="w-full aspect-video rounded-md rounded-b-none"
              />
            ) : (
              <div className="w-full aspect-video flex items-center justify-center">
                <img src="/icons/logo-white.svg" alt="BombWatch" className="size-16 opacity-50" />
              </div>
            )}
            <CardContent className="space-y-3">
              <m.h2
                className="text-lg font-semibold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {show.title}
              </m.h2>
            </CardContent>
          </Card>
      </m.a>
  )
}
