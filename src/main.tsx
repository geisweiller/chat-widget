import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ChatWidget } from "./ChatWidget";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChatWidget />
  </StrictMode>,
);
