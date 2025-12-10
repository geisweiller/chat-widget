import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: "src/types",
      outDir: "dist",
      copyDtsFiles: true,
      insertTypesEntry: true,
      exclude: [
        "**/*.spec.*",
        "**/__tests__/**",
        "src/main.ts",
        "src/main.tsx",
      ],
    }),
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
    },
  },
  build: {
    minify: "esbuild",
    sourcemap: false,
    lib: {
      entry: "src/index.ts",
      name: "ChatWidget",
      fileName: (format) => `chat-widget.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@fluentui/react-components",
        "@fluentui-contrib/react-chat",
        "@fluentui-contrib/react-draggable-dialog",
        "@mlc-ai/web-llm",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
