import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <HeroUIProvider>
        <ToastProvider
          placement="top-right"
          toastOffset={60}
          toastProps={{
            radius: "md",
            timeout: 2000,
            shouldShowTimeoutProgress: true,
            classNames: {
              closeButton:
                "opacity-100 absolute right-4 top-1/2 -translate-y-1/2",
            },
          }}
        />
        <App />
      </HeroUIProvider>
    </Provider>
  </StrictMode>
);
