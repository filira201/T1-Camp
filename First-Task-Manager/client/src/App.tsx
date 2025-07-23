import { useEffect, useMemo } from "react";
import { routerBuilder } from "@/routes";
import { createBrowserRouter, RouterProvider } from "react-router";
import { useAppSelector } from "@/hooks";

export default function App() {
  const routes = useMemo(() => routerBuilder(), []);
  const { darkMode } = useAppSelector((state) => state.theme);

  useEffect(() => {
    if (darkMode) {
      document.body.className = "dark text-foreground bg-background";
    } else {
      document.body.className = "light text-foreground bg-background";
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen">
      <RouterProvider router={createBrowserRouter(routes)} />
    </div>
  );
}
