import { type ComponentProps, type ReactNode } from "react"
import { Separator } from "@/components/ui/separator"
import { Info, ExternalLink, Github, Globe, Code2 } from "lucide-react"
import { m } from "motion/react"
import { cn } from "@/lib/utils"
import Page from "./Page"

const TechIcon = ({ src, alt, className }: ComponentProps<'img'>) => (
  <img src={src} alt={alt} className={cn("size-4", className)} />
)

const LINKS = [
  {
    label: "My Website",
    url: "https://jacob-jordan.me",
    icon: <Globe className="size-3" />,
  },
  {
    label: "GitHub Profile",
    url: "https://github.com/jacobjordan94",
    icon: <Github className="size-3" />,
  },
  {
    label: "Source Code",
    url: "https://github.com/jacobjordan94/bombwatch",
    icon: <Code2 className="size-3" />,
  },
]

const TECH_STACK: { name: string; description: string; url: string; icon: ReactNode }[] = [
  { name: "React", description: "UI framework", url: "https://react.dev", icon: <TechIcon src="/tech-icons/reactjs.svg" alt="React" /> },
  { name: "TypeScript", description: "Type-safe JavaScript", url: "https://www.typescriptlang.org", icon: <TechIcon src="/tech-icons/typescript.svg" alt="TypeScript" /> },
  { name: "Vite", description: "Build tool", url: "https://vite.dev", icon: <TechIcon src="/tech-icons/vite.svg" alt="Vite" /> },
  { name: "Tailwind CSS", description: "Styling", url: "https://tailwindcss.com", icon: <TechIcon src="/tech-icons/tailwind.svg" alt="Tailwind CSS" /> },
  { name: "shadcn/ui", description: "Component library", url: "https://ui.shadcn.com", icon: <TechIcon src="/tech-icons/shadcn.svg" alt="shadcn/ui" className="dark:invert-100" /> },
  { name: "Motion", description: "Animations", url: "https://m.dev", icon: <TechIcon src="/tech-icons/m.png" alt="Motion" /> },
  { name: "Luxon", description: "Date/time handling", url: "https://moment.github.io/luxon", icon: <TechIcon src="/tech-icons/luxon.png" alt="Luxon" /> },
  { name: "webextension-polyfill", description: "Cross-browser support", url: "https://github.com/mozilla/webextension-polyfill", icon: <TechIcon src="/tech-icons/moz.png" alt="webextension-polyfill" /> },
]

export function InfoPanel() {
  return (
    <Page title="About" Icon={Info}
      description="A browser extension to track Giant Bomb's live shows and upcoming schedule."
    >
      <div className="space-y-4">
        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h4 className="text-xs font-medium text-muted-foreground mb-2">
            Links
          </h4>
          <div className="space-y-1">
            {LINKS.map((link, index) => (
              <m.a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 p-2 rounded-md hover:bg-accent transition-colors text-xs"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
              >
                {link.icon}
                <span className="flex-1">{link.label}</span>
                <ExternalLink className="size-3 text-muted-foreground" />
              </m.a>
            ))}
          </div>
        </m.div>

        <Separator />

        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h4 className="text-xs font-medium text-muted-foreground mb-2">
            Tech Stack
          </h4>
          <div className="grid grid-cols-2 gap-1">
            {TECH_STACK.map((tech, index) => (
              <m.a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-1.5 text-xs p-1.5 rounded hover:bg-accent transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.2 + index * 0.03 }}
              >
                <span className="mt-0.5">{tech.icon}</span>
                <span>
                  <span className="font-medium">{tech.name}</span>
                  <span className="text-muted-foreground block">
                    {tech.description}
                  </span>
                </span>
              </m.a>
            ))}
          </div>
        </m.div>

        <Separator />

        <m.p
          className="text-xs text-muted-foreground text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          Made with 💣 by Jacob Jordan
        </m.p>
      </div>
    </Page>
  )
}
