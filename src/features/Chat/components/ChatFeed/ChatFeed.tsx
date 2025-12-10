import { useRef, type PropsWithChildren } from "react";

import { mergeClasses } from "@fluentui/react-components";
import {
  Chat as FluentChat,
  type ChatProps as FluentChatProps,
} from "@fluentui-contrib/react-chat";

import { useChatFeedStyles } from "./ChatFeed.styles";

export interface ChatFeedProps extends Omit<FluentChatProps, "children"> {
  className?: string;
}

export function ChatFeed({
  className,
  children,
  ...props
}: PropsWithChildren<ChatFeedProps>) {
  const feedWrapperRef = useRef<HTMLDivElement>(null);
  const styles = useChatFeedStyles();

  return (
    <div ref={feedWrapperRef}>
      <FluentChat className={mergeClasses(styles.root, className)} {...props}>
        {children}
      </FluentChat>
    </div>
  );
}
