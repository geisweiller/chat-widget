import { render, screen } from "@testing-library/react";

import { ChatMessage, ChatMyMessage } from "../ChatMessage";

describe("ChatMessage", () => {
  it("renders message", () => {
    const message = "Hello, how can I help you?";
    render(<ChatMessage>{message}</ChatMessage>);

    expect(screen.getByText(message)).toBeDefined();
  });

  it("renders my message", () => {
    const message = "I have a question about my order.";
    render(<ChatMyMessage>{message}</ChatMyMessage>);

    expect(screen.getByText(message)).toBeDefined();
  });
});
