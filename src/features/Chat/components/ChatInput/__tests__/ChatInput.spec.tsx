import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ChatInput } from "../ChatInput";

describe("Atom component: ChatInput", () => {
  it("renders with placeholder", () => {
    render(<ChatInput placeholder="Type here..." />);

    expect(screen.getByPlaceholderText("Type here...")).toBeInTheDocument();
  });

  it("calls onSend when Enter is pressed and text exists", () => {
    const onSend = jest.fn();

    render(<ChatInput value="hello" onSend={onSend} />);

    const input = screen.getByDisplayValue("hello");

    fireEvent.keyDown(input, {
      key: "Enter",
    });

    expect(onSend).toHaveBeenCalledWith("hello");
  });

  it("does not call onSend when Enter pressed with empty text", () => {
    const onSend = jest.fn();

    render(<ChatInput value="" onSend={onSend} />);

    const input = screen.getByRole("textbox");

    fireEvent.keyDown(input, {
      key: "Enter",
    });

    expect(onSend).not.toHaveBeenCalled();
  });

  it("calls onSend when clicking the send button", () => {
    const onSend = jest.fn();

    render(<ChatInput value="message" onSend={onSend} />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(onSend).toHaveBeenCalledWith("message");
  });

  it("disables input and button when disabled=true", () => {
    render(<ChatInput disabled placeholder="Disabled" />);

    const input = screen.getByPlaceholderText("Disabled");
    const button = screen.getByRole("button");

    expect(input).toBeDisabled();
    expect(button).toBeDisabled();
  });

  it("disables send button when input is empty", () => {
    render(<ChatInput value="" />);

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });

  it("fires onChange when typing", () => {
    const handleChange = jest.fn();
    render(<ChatInput value="" onChange={handleChange} />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {
      target: {
        value: "A",
      },
    });

    expect(handleChange).toHaveBeenCalled();
  });
});
