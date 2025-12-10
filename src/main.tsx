import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ChatWidget } from ".";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChatWidget />
  </StrictMode>,
);
