import { Calendar } from "lucide-react"
import { AnimatePresence, m } from "motion/react"
import type { UpcomingShow } from "@/types/giantbomb"
import { Separator } from "@/components/ui/separator"
import { ShowCard } from "@/components/ShowCard"
import { containerVariants, itemVariants } from "@/lib/animations"

interface UpcomingShowsProps {
  shows: UpcomingShow[]
  isLive: boolean
}

export function UpcomingShows({ shows, isLive }: UpcomingShowsProps) {
  return (
    <m.div
      className="space-y-2 pb-4 px-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <h3 data-is-live={isLive} className="text-sm font-medium flex items-center gap-2 mb-2 mt-4">
        <Calendar className="size-4" />
        Upcoming Shows
      </h3>
      <Separator className="mb-0 mt-2" />
      <AnimatePresence>
        <m.div
          className="space-y-4 pt-4 px-1"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          layout
        >
          {shows.map((show, i) => (
            <m.div key={`${i}-${show.title}-${show.date}`} variants={itemVariants}>
              <ShowCard show={show} />
            </m.div>
          ))}
        </m.div>
      </AnimatePresence>
    </m.div>
  )
}
