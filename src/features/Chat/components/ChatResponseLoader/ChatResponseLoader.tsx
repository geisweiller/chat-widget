import {
  mergeClasses,
  Spinner,
  type SpinnerProps,
} from "@fluentui/react-components";

import { useChatResponseLoaderStyles } from "./ChatResponseLoader.styles";

export interface ChatResponseLoaderProps {
  className?: string;
  label?: string;
  size?: SpinnerProps["size"];
}
const DEFAULT_SIZE = "extra-small";

export function ChatResponseLoader({
  className,
  label,
  size = DEFAULT_SIZE,
}: ChatResponseLoaderProps) {
  const styles = useChatResponseLoaderStyles();

  return (
    <div className={mergeClasses(styles.root, className)}>
      <Spinner size={size} label={label} />
    </div>
  );
}
