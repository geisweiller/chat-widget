import type { ReactNode } from "react";

import { mergeClasses } from "@fluentui/react-components";

import { useChatStyles } from "./Chat.styles";
import { ChatFeed, ChatInput, type ChatInputProps } from "./components";

export interface ChatProps extends Pick<
  ChatInputProps,
  "placeholder" | "defaultValue" | "value" | "onChange" | "onSend"
> {
  className?: string;
  feedClassName?: string;
  children?: ReactNode;
  disabled?: boolean;
}

export function Chat({
  placeholder,
  defaultValue,
  value,
  onChange,
  onSend,
  disabled,
  className,
  feedClassName,
  children,
}: ChatProps) {
  const styles = useChatStyles();

  return (
    <div className={mergeClasses(styles.root, className)}>
      <ChatFeed className={feedClassName}>{children}</ChatFeed>
      <ChatInput
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        disabled={disabled}
        onChange={onChange}
        onSend={onSend}
      />
    </div>
  );
}
