import { makeStyles, tokens } from "@fluentui/react-components";

export const useChatInputStyles = makeStyles({
  root: {
    marginTop: tokens.spacingVerticalS,
    position: "relative",
  },
  input: {
    width: "100%",
    height: "50px",
    // paddingLeft: tokens.spacingHorizontalXL,
    // borderRadius: tokens.borderRadiusCircular,
    // border: `1px solid ${tokens.colorNeutralStroke2}`,
    // outline: "none",
  },
  button: {
    // position: "absolute",
    // right: "10px",
    // top: "10px",
    borderRadius: tokens.borderRadiusCircular,
    border: "none",
  },
  icon: {
    color: "white",
  },
});
