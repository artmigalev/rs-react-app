import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import removeConsole from "vite-plugin-remove-console";
import { configDefaults } from "vitest/config";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    removeConsole({ custom: ["console.log()", "console.warn()", "debugger"] }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setup-tests.ts",
    exclude: [...configDefaults.exclude],
    passWithNoTests: true,
    coverage: {
      provider: "v8",
      reporter: ["text"],
      enabled: true,
      cleanOnRerun: true,
    },
    deps: {
      optimizer: {
        web: { enabled: true },
      },
    },
    watch: true,
    root: "./src/",
    dir: "./src/tests/",
    clearMocks: true,
    mockReset: true,
  },
});
