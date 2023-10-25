import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'server/static'
  },
  envDir: "./server",
  plugins: [react()],
  resolve: {
    alias: {
      contacts: `${path.resolve(__dirname, "./src/contacts")}`,
      types: `${path.resolve(__dirname, "./src/types")}`,
      contexts: `${path.resolve(__dirname, "./src/contexts")}`,
      handlers: `${path.resolve(__dirname, "./src/handlers")}`,
      assets: `${path.resolve(__dirname, "./src/assets")}`,
      public: `${path.resolve(__dirname, "./public")}`,
      components: `${path.resolve(__dirname, "./src/components/index")}`,
      pages: `${path.resolve(__dirname, "./src/pages/index")}`,
    },
  }
})
