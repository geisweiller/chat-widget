import { render, screen, fireEvent } from "@testing-library/react";

import { EmbeddedChatButton, Position } from "../EmbeddedChatButton";
import "@testing-library/jest-dom";

jest.mock("../EmbeddedChatButton.styles", () => ({
  useEmbeddedChatButtonStyles: () => ({
    root: "root-class",
    right: "right-class",
    left: "left-class",
  }),
}));

describe("Atom component: EmbeddedChatButton", () => {
  it("renders with default label", () => {
    render(<EmbeddedChatButton />);

    expect(screen.getByRole("button")).toHaveTextContent("Open Chat");
  });

  it("renders with custom label", () => {
    render(<EmbeddedChatButton label="Support" />);

    expect(screen.getByRole("button")).toHaveTextContent("Support");
  });

  it("applies right position by default", () => {
    const { container } = render(<EmbeddedChatButton />);

    const div = container.firstChild as HTMLElement;

    expect(div.className).toContain("right-class");
    expect(div.className).toContain("root-class");
  });

  it("applies left position when specified", () => {
    const { container } = render(
      <EmbeddedChatButton position={Position.Left} />,
    );

    const div = container.firstChild as HTMLElement;

    expect(div.className).toContain("left-class");
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();

    render(<EmbeddedChatButton onClick={handleClick} />);

    fireEvent.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
