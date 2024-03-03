import { defineConfig } from "vite";

export default defineConfig({
  // Configuration options
  build: {
    lib: {
      entry: "src/tracker.ts",
      name: "tiny-tracker",
      formats: ["es", "umd"],
    },
    rollupOptions: {},
  },
});
