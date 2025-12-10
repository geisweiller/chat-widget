import { useCallback, useEffect, useState, type ReactNode } from "react";

import { Avatar } from "../components";
import { ChatMessage, ChatMyMessage } from "../features";
import { useWebLLM } from "./useWebLLM";

export function useChat() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const { ask, modelLoading, replyLoading } = useWebLLM();
  const [messages, setMessages] = useState<ReactNode[]>([]);

  const addAIMessage = useCallback((text: string) => {
    setMessages((prev) => [
      ...prev,
      <ChatMessage key={text} avatar={<Avatar />}>
        {text}
      </ChatMessage>,
    ]);
  }, []);

  const addMyMessage = useCallback((text: string) => {
    setMessages((prev) => [
      ...prev,
      <ChatMyMessage key={text}>{text}</ChatMyMessage>,
    ]);
  }, []);

  useEffect(() => {
    if (open) {
      setMessages([
        <ChatMessage
          key="intro-1"
          avatar={
            <Avatar
              active="inactive"
              badge={{
                status: "away",
              }}
            />
          }
        >
          ☕ Please wait while I grab a coffee… I’ll be ready shortly.
        </ChatMessage>,
      ]);
    }
  }, [open]);

  useEffect(() => {
    if (!modelLoading && open) {
      setMessages((prev) => [
        ...prev,
        <ChatMessage key="intro-ready" avatar={<Avatar />}>
          🎉 I’m ready! How can I help you today?
        </ChatMessage>,
      ]);
    }
  }, [modelLoading, open]);

  const handleSend = async () => {
    if (!value.trim()) return;

    const myText = value;
    addMyMessage(myText);
    setValue("");

    if (modelLoading) {
      addAIMessage("⚙️ Still warming up the AI brain… please wait!");
      return;
    }

    const reply = await ask(myText);
    addAIMessage(reply);
  };

  return {
    open,
    setOpen,
    value,
    setValue,
    messages,
    handleSend,
    modelLoading,
    replyLoading,
  };
}
