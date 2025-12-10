import { useEffect, useRef, useState, useCallback } from "react";

import { CreateMLCEngine, MLCEngine } from "@mlc-ai/web-llm";

const MODEL = "Llama-3-8B-Instruct-q4f32_1-MLC";

export function useWebLLM(model: string = MODEL) {
  const engineRef = useRef<MLCEngine | null>(null);
  const [modelLoading, setModelLoading] = useState(true);
  const [replyLoading, setReplyLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const engine = await CreateMLCEngine(model, {
        initProgressCallback: (progress) => {
          console.log("Progress:", progress);
        },
      });

      engineRef.current = engine;
      setModelLoading(false);
    })();
  }, [model]);

  const ask = useCallback(async (prompt: string) => {
    if (!engineRef.current) return "";

    setReplyLoading(true);

    const res = await engineRef.current.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    setReplyLoading(false);

    return res.choices[0].message.content ?? "";
  }, []);

  return {
    ask,
    modelLoading,
    replyLoading,
  };
}
