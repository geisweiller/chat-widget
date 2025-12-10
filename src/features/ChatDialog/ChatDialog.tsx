import type { ReactNode } from "react";

import {
  type DialogProps,
  type DialogTriggerProps,
  DialogTrigger,
  DialogBody,
  DialogTitle,
  DialogContent,
  mergeClasses,
  Button,
} from "@fluentui/react-components";
import { DismissRegular } from "@fluentui/react-icons";
import {
  DraggableDialog,
  DraggableDialogSurface,
  DraggableDialogHandle,
  type DraggableDialogPosition,
} from "@fluentui-contrib/react-draggable-dialog";

import { useChatDialogStyles } from "./ChatDialog.styles";
import { Chat, MaintenanceBanner, type ChatProps } from "../Chat";

export interface ChatDialogProps
  extends ChatProps, Pick<DialogProps, "open" | "onOpenChange"> {
  children?: ReactNode;
  title: string;
  dialogSurfaceClassName?: string;
  trigger?: DialogTriggerProps["children"];
  maintenance?: boolean;
  position?: DraggableDialogPosition;
}

export function ChatDialog({
  title,
  children,
  open,
  trigger,
  disabled,
  maintenance,
  onOpenChange,
  feedClassName,
  dialogSurfaceClassName,
  position,
  ...chatProps
}: ChatDialogProps) {
  const styles = useChatDialogStyles();

  return (
    <DraggableDialog
      open={open}
      onOpenChange={onOpenChange}
      modalType="non-modal"
      position={position}
    >
      <DialogTrigger disableButtonEnhancement>{trigger}</DialogTrigger>
      <DraggableDialogSurface className={dialogSurfaceClassName}>
        <DialogBody>
          <DraggableDialogHandle>
            <DialogTitle
              className={styles.title}
              action={
                <DialogTrigger action="close">
                  <Button appearance="subtle" icon={<DismissRegular />} />
                </DialogTrigger>
              }
            >
              {title}
            </DialogTitle>
          </DraggableDialogHandle>
          <DialogContent>
            {maintenance && (
              <MaintenanceBanner message="🚧 The service is in maintenance mode. Please try again later." />
            )}
            <Chat
              feedClassName={mergeClasses(styles.feed, feedClassName)}
              disabled={maintenance || disabled}
              {...chatProps}
            >
              {children}
            </Chat>
          </DialogContent>
        </DialogBody>
      </DraggableDialogSurface>
    </DraggableDialog>
  );
}
