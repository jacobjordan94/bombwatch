import { AnimatePresence } from "motion/react";
import { LiveNow } from "./LiveNow";
import LiveNowBadge from "./LiveNowBadge";
import Page from "./Page";
import { Alert, AlertDescription } from "./ui/alert";
import { UpcomingShows } from "./UpcomingShows";
import type { GiantBombData } from "@/types/giantbomb"
import { ScrollArea } from "./ui/scroll-area";

type HomePageProps = {
    data: GiantBombData | null
};
export default function HomePage({ data }: HomePageProps) {
    return (
        <Page className="p-0 px-1">
            <ScrollArea className="h-[540px] pr-3 overflow-clip">
                <AnimatePresence>
                    {data?.liveNow &&
                        <>
                            <LiveNowBadge className="fixed z-100 mt-2 ml-2" />
                            <LiveNow show={data.liveNow} />
                        </>
                    }
                </AnimatePresence>
                {data?.upcoming && data.upcoming.length > 0 ? (
                    <UpcomingShows shows={data.upcoming} isLive={Boolean(data.liveNow)} />
                ) : (
                    <Alert data-is-live={Boolean(data?.liveNow)} className="data-[is-live=true]:mt-4">
                        <AlertDescription>
                            No upcoming shows scheduled at the moment.
                        </AlertDescription>
                    </Alert>
                )}
            </ScrollArea>
        </Page>
    );
}