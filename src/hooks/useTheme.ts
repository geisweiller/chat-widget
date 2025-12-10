import { webDarkTheme, webLightTheme } from "@fluentui/react-components";

type Theme = "light" | "dark";

export function useTheme(theme: Theme) {
  return theme === "light" ? webLightTheme : webDarkTheme;
}
