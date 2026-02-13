import { Info } from "lucide-react";
import { Separator } from "@base-ui/react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import SettingsMenu from "./SettingsMenu";

export default function Header() {
    return (
        <div className="header shrink-0 bg-white dark:bg-black/80 dark:supports-backdrop-filter:backdrop-blur-md dark:supports-backdrop-filter:bg-black/50 drop-shadow-sm z-50">
            <div className="flex justify-between items-center p-0.5 px-4">
                <NavButton to="/info" aria-label="Info">
                    <motion.span layoutId="info-panel-icon">
                        <Info />
                    </motion.span>
                </NavButton>
                <NavButton to="/">
                    <img src="/icons/logo-color.svg" alt="BombWatch Logo" className="size-6" />
                </NavButton>
                <SettingsMenu />
            </div>
            <Separator orientation="horizontal" className="h-px w-full" />
        </div>
    );
}

type NavButtonProps = ComponentProps<typeof Button> & {
    to: string,
};
const NavButton = ({ className, to, children }: NavButtonProps) => {
    const navigate = useNavigate();
    return (
        <Button
            variant="ghost"
            className={cn("cursor-pointer rounded-full", className)}
            onClick={() => navigate(to)}
        >
            {children}
        </Button>
    );
}
