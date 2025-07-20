import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import removeConsole from "vite-plugin-remove-console";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    removeConsole({ custom: ["console.log()", "console.warn()", "debugger"] }),
  ],
});
