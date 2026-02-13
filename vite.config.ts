import { readFileSync } from "fs"
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { crx } from "@crxjs/vite-plugin"
import { defineConfig } from "vite"

const manifest = JSON.parse(
  readFileSync(path.resolve(__dirname, "manifest.json"), "utf-8")
)

export default defineConfig({
  plugins: [react(), tailwindcss(), crx({ manifest })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
    cors: {
      origin: "*",
    },
  },
})
