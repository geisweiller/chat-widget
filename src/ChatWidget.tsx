import type { DraggableDialogPosition } from "@fluentui-contrib/react-draggable-dialog";

import { EmbeddedChatButton, type EmbeddedChatButtonProps } from "./components";
import { ChatDialog } from "./features";
import { ChatResponseLoader } from "./features/Chat";
import { useChat } from "./hooks";

export interface ChatWidgetProps {
  title?: string;
  placeholder?: string;
  maintenance?: boolean;
  disabled?: boolean;
  position?: DraggableDialogPosition;
  buttonPosition?: EmbeddedChatButtonProps["position"];
}

export function ChatWidget({
  title = "Chat AI",
  placeholder = "Type a message",
  maintenance = false,
  disabled = false,
  position,
  buttonPosition,
}: ChatWidgetProps) {
  const placeholderText = maintenance ? "Service in maintenance…" : placeholder;
  const {
    open,
    setOpen,
    value,
    setValue,
    messages,
    handleSend,
    modelLoading,
    replyLoading,
  } = useChat();

  return (
    <ChatDialog
      title={title}
      open={open}
      trigger={<EmbeddedChatButton position={buttonPosition} />}
      maintenance={maintenance}
      position={position}
      onOpenChange={(_, data) => setOpen(data.open)}
      placeholder={placeholderText}
      disabled={disabled || modelLoading}
      value={value}
      onChange={(_, data) => setValue(data.value)}
      onSend={handleSend}
    >
      {messages}
      {replyLoading ? <ChatResponseLoader /> : null}
    </ChatDialog>
  );
}
