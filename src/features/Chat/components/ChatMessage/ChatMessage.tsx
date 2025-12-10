import { forwardRef } from "react";

import { type ForwardRefComponent } from "@fluentui/react-components";
import {
  ChatMessage as FluentChatMessage,
  type ChatMessageProps as FluentChatMessageProps,
  ChatMyMessage as FluentChatMyMessage,
  type ChatMyMessageProps as FluentChatMyMessageProps,
} from "@fluentui-contrib/react-chat";

export type ChatMessageProps = FluentChatMessageProps & {
  className?: string;
};

export type ChatMyMessageProps = FluentChatMyMessageProps & {
  className?: string;
};

export const ChatMessage: ForwardRefComponent<ChatMessageProps> = forwardRef(
  ({ className, ...props }, ref) => (
    <FluentChatMessage
      ref={ref}
      // @ts-expect-error: https://github.com/microsoft/fluentui-contrib/issues/388
      className={className}
      {...props}
    />
  ),
);

export const ChatMyMessage: ForwardRefComponent<ChatMyMessageProps> =
  forwardRef(({ className, ...props }, ref) => (
    <FluentChatMyMessage
      ref={ref}
      // @ts-expect-error: https://github.com/microsoft/fluentui-contrib/issues/388
      className={className}
      {...props}
    />
  ));
