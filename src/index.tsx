import { FluentProvider } from "@fluentui/react-components";

import { ChatWidget as Widget, type ChatWidgetProps } from "./ChatWidget";
import { useTheme } from "./hooks";
import { useGlobalStyles } from "./theme";

export interface ChatAIProps extends ChatWidgetProps {
  theme?: "light" | "dark";
}

export function ChatWidget({
  theme: themeMode = "light",
  ...props
}: ChatAIProps) {
  const theme = useTheme(themeMode);
  useGlobalStyles();

  return (
    <FluentProvider theme={theme}>
      <Widget {...props} />
    </FluentProvider>
  );
}
