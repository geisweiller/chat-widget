import { Button, Input, type InputProps } from "@fluentui/react-components";
import { ArrowUpRegular } from "@fluentui/react-icons";

import { useChatInputStyles } from "./ChatInput.styles";

export interface ChatInputProps extends Pick<
  InputProps,
  "placeholder" | "defaultValue" | "value" | "onChange"
> {
  onSend?: (value: string) => void;
  disabled?: boolean;
}

const ENTER_KEY = "Enter";

export function ChatInput({
  placeholder,
  defaultValue,
  disabled,
  value,
  onChange,
  onSend,
}: ChatInputProps) {
  const styles = useChatInputStyles();
  const text = value ?? defaultValue;

  return (
    <div className={styles.root}>
      <Input
        className={styles.input}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onKeyDown={(ev) => {
          if (ev.key === ENTER_KEY && onSend && text) {
            ev.preventDefault();
            onSend(text);
          }
        }}
        contentAfter={
          <Button
            className={styles.button}
            appearance="primary"
            disabled={disabled || !(value ?? defaultValue)}
            icon={<ArrowUpRegular className={styles.icon} />}
            onClick={() => {
              if (onSend && text) {
                onSend(text);
              }
            }}
          />
        }
      />
    </div>
  );
}
