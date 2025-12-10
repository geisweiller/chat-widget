import { makeStyles, tokens } from "@fluentui/react-components";

export const useChatDialogStyles = makeStyles({
  feed: {
    height: "600px",
    overflowY: "auto",
  },
  title: {
    padding: tokens.spacingVerticalM,
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
  },
});
