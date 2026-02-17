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
    console.log(data);
    return (
        <Page className="p-0 px-1">
            <ScrollArea className="h-[540px] pr-3 overflow-clip">
                <AnimatePresence>
                    {data?.liveNow && (
                        <div key="live">
                            <LiveNowBadge className="fixed z-100 mt-2 ml-2" />
                            <LiveNow show={data.liveNow} />
                        </div>
                    )}
                    {(data?.upcoming && data.upcoming.length > 0) &&
                        <UpcomingShows shows={data.upcoming} isLive={Boolean(data.liveNow)} />
                    }
                    {(!data?.upcoming || data.upcoming.length === 0) && (
                        <div key="empty" className="mx-4">
                            <Alert data-is-live={Boolean(data?.liveNow)} className="mt-4">
                                <AlertDescription>
                                    No upcoming shows scheduled at the moment.
                                </AlertDescription>
                            </Alert>
                        </div>
                    )}
                </AnimatePresence>
            </ScrollArea>
        </Page>
    );
}