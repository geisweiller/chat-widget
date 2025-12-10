import { render, screen } from "@testing-library/react";

import { ChatMessage, ChatMyMessage } from "../../Chat/components";
import { ChatDialog } from "../ChatDialog";

describe("ChatDialog", () => {
  it("renders chat", () => {
    const title = "Chat";
    const message = "Hello, how can I help you?";
    const myMessage = "I have a question about my order.";

    render(
      <ChatDialog title={title} open>
        <ChatMessage>{message}</ChatMessage>
        <ChatMyMessage>{myMessage}</ChatMyMessage>
      </ChatDialog>,
    );

    expect(screen.getByText(title)).toBeDefined();
    expect(screen.getByText(message)).toBeDefined();
    expect(screen.getByText(myMessage)).toBeDefined();
  });
});
