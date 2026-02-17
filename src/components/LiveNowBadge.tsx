import { Radio } from "lucide-react";
import { Badge } from "./ui/badge";
import { m } from "motion/react";
import type { ComponentProps } from "react";

type LiveNowBadgeProps = ComponentProps<typeof Badge>;
export default function LiveNowBadge({ className }: LiveNowBadgeProps) {
    return (
        <m.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className={className}
        >
            <Badge variant="destructive" className="w-fit mb-4 bg-red-600 text-white">
                <Radio className="size-3" />
                LIVE NOW
            </Badge>
        </m.div>
    );
}