import { FluentProvider } from "@fluentui/react-components";

import { Widget, type WidgetProps } from "./features/Widget/Widget";
import { useTheme } from "./hooks";
import { useGlobalStyles } from "./theme";

export interface ChatWidgetProps extends WidgetProps {
  theme?: "light" | "dark";
}

export function ChatWidget({
  theme: themeMode = "light",
  ...props
}: ChatWidgetProps) {
  const theme = useTheme(themeMode);
  useGlobalStyles();

  return (
    <FluentProvider theme={theme}>
      <Widget {...props} />
    </FluentProvider>
  );
}
