import { makeStaticStyles } from "@fluentui/react-components";

export const useGlobalStyles = makeStaticStyles({
  body: {
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    margin: 0,
  },
  "*": {
    "-webkit-box-sizing": "border-box",
    "-moz-box-sizing": "border-box",
    "box-sizing": "border-box",
  },
  a: {
    textDecoration: "none",
  },
  "ol, ul": {
    listStyleType: "none",
    paddingLeft: 0,
  },
  "p, h1, h2, h3, h4, h5, h6": {
    margin: 0,
  },
});
