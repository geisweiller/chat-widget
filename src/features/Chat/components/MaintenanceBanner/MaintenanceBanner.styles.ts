import { makeStyles, tokens } from "@fluentui/react-components";

export const useMaintenanceBannerStyles = makeStyles({
  banner: {
    backgroundColor: "#FDE047",
    color: tokens.colorNeutralForeground1,
    padding: tokens.spacingHorizontalM,
    borderRadius: tokens.borderRadiusMedium,
    marginBottom: tokens.spacingVerticalS,
    textAlign: "center",
    fontWeight: 600,
  },
});
