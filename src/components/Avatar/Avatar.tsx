import {
  Avatar as FluentAvatar,
  type AvatarProps,
} from "@fluentui/react-components";
import { BotRegular } from "@fluentui/react-icons";

const DEFAULT_BADGE = {
  status: "available",
} as const;
const DEFAULT_ACTIVE = "active" as const;

export function Avatar({
  active = DEFAULT_ACTIVE,
  badge = DEFAULT_BADGE,
  ...props
}: AvatarProps) {
  return (
    <FluentAvatar
      {...props}
      active={active}
      badge={badge}
      icon={<BotRegular />}
    />
  );
}
