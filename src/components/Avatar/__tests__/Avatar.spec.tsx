import type { AvatarProps } from "@fluentui/react-components";
import { render, screen } from "@testing-library/react";

import { Avatar } from "../Avatar";

jest.mock("@fluentui/react-components", () => ({
  Avatar: ({ active, badge, icon, ...props }: AvatarProps) => (
    <div
      data-testid="fluent-avatar"
      data-active={active}
      data-badge={JSON.stringify(badge)}
      data-has-icon={!!icon}
      {...props}
    />
  ),
}));

jest.mock("@fluentui/react-icons", () => ({
  BotRegular: () => <svg data-testid="bot-icon" />,
}));

describe("Atom component: Avatar", () => {
  it("renders FluentAvatar with default active and badge", () => {
    render(<Avatar />);

    const avatar = screen.getByTestId("fluent-avatar");

    expect(avatar.getAttribute("data-active")).toBe("active");
    expect(avatar.getAttribute("data-badge")).toBe(
      JSON.stringify({
        status: "available",
      }),
    );
  });

  it("passes custom active and badge props", () => {
    render(
      <Avatar
        active="inactive"
        badge={{
          status: "busy",
        }}
      />,
    );

    const avatar = screen.getByTestId("fluent-avatar");

    expect(avatar.getAttribute("data-active")).toBe("inactive");
    expect(avatar.getAttribute("data-badge")).toBe(
      JSON.stringify({
        status: "busy",
      }),
    );
  });

  it("forwards additional props to FluentAvatar", () => {
    render(<Avatar className="custom-class" />);

    const avatar = screen.getByTestId("fluent-avatar");

    expect(avatar.className).toContain("custom-class");
  });
});
