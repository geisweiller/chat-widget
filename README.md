# Geisweiller Chat Widget

A customizable, Fluent UI–based AI chat widget for React applications.  
Supports light/dark themes, persistent chat history, maintenance mode, draggable UI, and pluggable AI engines (WebLLM, OpenAI, etc.).

Built with:

- React 18
- Fluent UI v9
- Vite Library Mode
- Optional WebLLM local inference

This widget can be used as a support chat, AI assistant, embedded chat bubble, or custom chatbot interface.

---

## Installation

### npm

```sh
npm install @geisweiller/chat-widget
```

### yarn

```sh
yarn add @geisweiller/chat-widget
```

### pnpm

```sh
pnpm add @geisweiller/chat-widget
```

---

## Basic Usage

```tsx
import { ChatWidget } from "@geisweiller/chat-widget";

export function App() {
  return (
    <ChatWidget
      theme="light"
      title="Chat Widget"
      placeholder="Ask me anything..."
    />
  );
}
```

---

## Props

# Chat Widget – Props Reference

## `<ChatWidget />` Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| **title** | `string` | `"Chat"` | The dialog title displayed at the top of the chat window. |
| **placeholder** | `string` | `"Type a message…”` | Placeholder text for the chat input field. |
| **maintenance** | `boolean` | `false` | Enables maintenance mode. When `true`, the widget shows a maintenance banner, disables sending, and updates intro/response messages accordingly. |
| **disabled** | `boolean` | `false` | Disables the input and prevents message sending. |
| **position** | `DraggableDialogPosition` | `{ x: 0, y: 0 }` | Initial position of the draggable chat dialog. |
| **embeddedButtonProps** | `EmbeddedChatButtonProps` | required | Props passed to the floating chat button that opens the widget. |

---

## `EmbeddedChatButtonProps`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| **position** | `"left" \| "right"` | `"right"` | Position of the floating chat button on the screen. |
| **label** | `string` | `"Open Chat"` | Text displayed inside the button. |
| **onClick** | `() => void` | — | Callback fired when the button is clicked. |
| **icon** | `React.ComponentType` | `ChatFilled` | Optional custom icon component. |
| **appearance** | `"primary" \| "secondary" \| ..."` | `"primary"` | Fluent UI button appearance. |

---

## CDN Usage (Optional)

```html
<script src="https://unpkg.com/eloquent-chat-widget/dist/eloquent-chat-widget.umd.js"></script>

<div id="chat-root"></div>

<script>
  ChatWidget.mount("#chat-root", {
    theme: "light",
    title: "Chat Widget"
  });
</script>
```

---

## Development

```sh
npm run build
npm test
npm run lint
```

---

## Publishing

```sh
npm login
npm publish --access public
```

---

## License

MIT License
