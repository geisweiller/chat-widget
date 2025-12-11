import { Button, type ButtonProps } from "@fluentui/react-components";
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
  appearance?: ButtonProps["appearance"];
  icon?: ButtonProps["icon"];
};

export function EmbeddedChatButton({
  position = Position.Right,
  label = "Open Chat",
  onClick,
  appearance = "primary",
  icon = <ChatFilled />,
}: EmbeddedChatButtonProps) {
  const styles = useEmbeddedChatButtonStyles();

  return (
    <div
      className={`${styles.root} ${
        position === Position.Right ? styles.right : styles.left
      }`}
    >
      <Button appearance={appearance} icon={icon} onClick={onClick}>
        {label}
      </Button>
    </div>
  );
}
