import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown } from "lucide-react"
import { motion } from "motion/react"
import { AsyncImage } from "./AsyncImage"
import type { UpcomingShow } from "@/types/giantbomb"
import { formatShowDate } from "@/lib/format"
import { itemVariants } from "@/lib/animations"

interface ShowCardProps {
  show: UpcomingShow
}

export function ShowCard({ show }: ShowCardProps) {
  return (
    <motion.div variants={itemVariants}>
      <Card className="hover:bg-accent duration-500 transition-colors gap-0 p-4">
        <CardContent className="p-0">
          <div className="flex gap-3">
            <AsyncImage
              src={show.image}
              alt={show.title}
              className="w-20 h-20 rounded shrink-0"
            />
            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex items-start gap-2 flex-wrap">
                <h4 className="text-sm font-semibold leading-tight flex-1">
                  {show.title}
                </h4>
                {show.premium && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Badge
                      variant="secondary"
                      className="bg-yellow-500 text-black"
                    >
                      <Crown />
                      Premium
                    </Badge>
                  </motion.div>
                )}
              </div>
              <p className="text-xs text-red-500">{show.type}</p>
              <p className="text-xs text-muted-foreground">
                {formatShowDate(show.date)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
