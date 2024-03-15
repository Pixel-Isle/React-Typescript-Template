import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/React-OP-Template/",
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: 5000,
  },
});
