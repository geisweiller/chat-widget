import { makeStyles } from "@fluentui/react-components";

export const useEmbeddedChatButtonStyles = makeStyles({
  root: {
    position: "fixed",
    zIndex: 9999,
    padding: 0,
    bottom: "20px",
  },

  right: {
    right: "10px",
  },

  left: {
    left: "10px",
  },
});
