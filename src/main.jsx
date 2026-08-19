import ReactDOM from "react-dom/client";
import App from "./App";
import Providers from "./app/providers";
import "./App.css";

import { registerSW } from "virtual:pwa-register";

 registerSW({
  onNeedRefresh() {
    console.log("A new version of KuizRoom is available. Please refresh the page to update.");
    // Prompt the user to refresh the page when a new service worker is available

  },
  onOfflineReady() {
    // Notify the user that the app is ready to work offline
    alert("KuizRoom is ready to work offline.");
  },
})


ReactDOM.createRoot(document.getElementById("root")).render(
  <Providers>
    <App />
  </Providers>

);
