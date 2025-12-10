import { forwardRef } from "react";

import { Button } from "@fluentui/react-components";
import { ChatFilled } from "@fluentui/react-icons";

import { useEmbeddedChatButtonStyles } from "./EmbeddedChatButton.styles";

export const Position = {
  Right: "right",
  Left: "left",
} as const;

export type EmbeddedChatButtonProps = {
  position?: "left" | "right";
  label?: string;
  onClick?: () => void;
};

export const EmbeddedChatButton = forwardRef<
  HTMLDivElement,
  EmbeddedChatButtonProps
>(function EmbeddedChatButton(
  { position = Position.Right, label = "Open Chat", onClick },
  ref,
) {
  const styles = useEmbeddedChatButtonStyles();

  return (
    <div
      ref={ref}
      className={`${styles.root} ${
        position === Position.Right ? styles.right : styles.left
      }`}
    >
      <Button appearance="primary" icon={<ChatFilled />} onClick={onClick}>
        {label}
      </Button>
    </div>
  );
});
