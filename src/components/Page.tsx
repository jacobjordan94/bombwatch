import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ComponentProps } from "react";

type PageProps = ComponentProps<'main'> & {
    title?: string;
    description?: string;
    Icon?: LucideIcon;
};
export default function Page({ title, description, Icon, className, children }: PageProps) {
    const showTitle = Boolean(title) && Boolean(Icon);
    const showDescription = Boolean(description);
    const topMargin = showTitle || showDescription;
    return (
        <main className={cn('p-4', className)}>
            { showTitle &&
                <div className="title text-sm flex items-center gap-2">
                    { Icon && <Icon className="size-4" /> }
                    { title }
                </div>
            }
            { showDescription &&
                <div className="description text-xs mt-2">
                    { description }
                </div>
            }
            <section data-top-margin={topMargin} className="page-content data-[top-margin=true]:mt-4 relative">
                { children }
            </section>
        </main>
    );
}