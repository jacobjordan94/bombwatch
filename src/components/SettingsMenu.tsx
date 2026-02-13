import { RefreshCw, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "motion/react";
import { useNavigate } from "react-router";
import browser from "webextension-polyfill";
import useRefreshing from "@/lib/useRefreshing";
import { spinTransition } from "@/lib/animations";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./ui/popover";

export default function SettingsMenu() {
    const navigate = useNavigate();
    const refreshing = useRefreshing();

    const handleRefresh = () => {
        browser.runtime.sendMessage({ type: "refresh" }).catch(console.error);
    };

    return (
        <Popover>
            <PopoverTrigger
                render={
                    <Button
                        variant="ghost"
                        className="cursor-pointer rounded-full"
                        aria-label="Settings"
                    />
                }
            >
                <AnimatePresence mode="wait">
                    {refreshing ? (
                        <motion.span
                            key="refresh"
                            animate={{ rotate: 360 }}
                            transition={spinTransition}
                            exit={{ opacity: 0, transition: { duration: 0.3 } }}
                        >
                            <RefreshCw />
                        </motion.span>
                    ) : (
                        <motion.span
                            key="settings"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Settings />
                        </motion.span>
                    )}
                </AnimatePresence>
            </PopoverTrigger>
            <PopoverContent
                className="w-auto p-1 gap-0 *:cursor-pointer"
                align="end"
                initialFocus={false}
            >
                <Button
                    variant="ghost"
                    className="justify-start gap-2 w-full"
                    onClick={() => navigate("/settings")}
                >
                    <Settings className="size-4" />
                    Settings
                </Button>
                <Button
                    variant="ghost"
                    className="justify-start gap-2 w-full"
                    onClick={handleRefresh}
                    disabled={refreshing}
                >
                    <AnimatePresence mode="wait">
                        {refreshing ? (
                            <motion.span
                                key="refresh-menu"
                                animate={{ rotate: 360 }}
                                transition={spinTransition}
                                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                            >
                                <RefreshCw className="size-4" />
                            </motion.span>
                        ) : (
                            <motion.span
                                key="static-menu"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <RefreshCw className="size-4" />
                            </motion.span>
                        )}
                    </AnimatePresence>
                    {refreshing ? "Refreshing..." : "Refresh"}
                </Button>
            </PopoverContent>
        </Popover>
    );
}
