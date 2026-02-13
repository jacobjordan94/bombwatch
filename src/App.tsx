import { ErrorBoundary } from "@/components/ErrorBoundary"
import { LoadingState } from "@/components/LoadingState"
import { ErrorState } from "@/components/ErrorState"
import Header from "@/components/Header"
import useTheme from "@/lib/theme"
import useGiantBombData from "@/lib/useGiantBombData"
import { MemoryRouter, Route, Routes } from "react-router"
import { SettingsPanel } from "./components/SettingsPanel"
import { InfoPanel } from "./components/InfoPanel"
import HomePage from "./components/Home"

export function App() {
  const { data, loading, error } = useGiantBombData();
  useTheme();

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;

  return (
    <MemoryRouter initialEntries={["/"]}>
      <ErrorBoundary>
        <div className="h-full flex flex-col bg-background">
          <Header />
          <div className="flex-1 h-[520px]">
            <Routes>
              <Route index path="/" element={<HomePage data={data} />}></Route>
              <Route path="settings" element={<SettingsPanel />} />
              <Route path="info" element={<InfoPanel />} />
            </Routes>
          </div>
        </div>
      </ErrorBoundary>
    </MemoryRouter>
  )
}

export default App
