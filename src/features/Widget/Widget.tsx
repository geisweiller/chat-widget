import type { DraggableDialogPosition } from "@fluentui-contrib/react-draggable-dialog";

import { ChatDialog } from "..";
import {
  EmbeddedChatButton,
  type EmbeddedChatButtonProps,
} from "../../components";
import { useChat } from "../../hooks";
import { ChatResponseLoader } from "../Chat";

export interface WidgetProps {
  title?: string;
  placeholder?: string;
  maintenance?: boolean;
  disabled?: boolean;
  position?: DraggableDialogPosition;
  embeddedButtonProps: EmbeddedChatButtonProps;
}

export function Widget({
  title = "Chat Widget",
  placeholder = "Type a message",
  maintenance = false,
  disabled = false,
  position,
  embeddedButtonProps,
}: WidgetProps) {
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
  } = useChat(maintenance);
  const { label, onClick, position: buttonPosition } = embeddedButtonProps;

  return (
    <ChatDialog
      title={title}
      open={open}
      trigger={
        <EmbeddedChatButton
          label={label}
          position={buttonPosition}
          onClick={onClick}
        />
      }
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
