import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import { ChatMessage, ChatMyMessage } from "../../Chat/components";
import { ChatDialog } from "../ChatDialog";
describe("ChatDialog", () => {
    it("renders chat", () => {
        const title = "Chat";
        const message = "Hello, how can I help you?";
        const myMessage = "I have a question about my order.";
        render(_jsxs(ChatDialog, { title: title, open: true, children: [_jsx(ChatMessage, { children: message }), _jsx(ChatMyMessage, { children: myMessage })] }));
        expect(screen.getByText(title)).toBeDefined();
        expect(screen.getByText(message)).toBeDefined();
        expect(screen.getByText(myMessage)).toBeDefined();
    });
});
