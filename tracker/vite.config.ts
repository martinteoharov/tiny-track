import { defineConfig } from "vite";
import dts from 'vite-plugin-dts';

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
  plugins: [dts({ outDir: "dist/types" })]
});
