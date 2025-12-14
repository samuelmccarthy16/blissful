import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/blissful/', // matches your GitHub repo name
  // other configs...
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
