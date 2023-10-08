import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      contacts: `${path.resolve(__dirname, "./src/contacts")}`,
      types: `${path.resolve(__dirname, "./src/types")}`,
      contexts: `${path.resolve(__dirname, "./src/contexts")}`,
      api_handler: `${path.resolve(__dirname, "./src/api_handler")}`,
      assets: `${path.resolve(__dirname, "./src/assets")}`,
      components: `${path.resolve(__dirname, "./src/components/index")}`,
      pages: `${path.resolve(__dirname, "./src/pages/index")}`,
    },
  }
})
