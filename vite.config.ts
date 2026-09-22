import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@models": path.resolve(__dirname, "src/models"),
      "@views": path.resolve(__dirname, "src/views"),
      "@controllers": path.resolve(__dirname, "src/controllers"),
      "@services": path.resolve(__dirname, "src/services"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
});
