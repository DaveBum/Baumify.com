// vite build tool configuration function import
import { defineConfig } from "vite";
// react plugin with swc compiler for faster builds
import react from "@vitejs/plugin-react-swc";
// node path module for file path resolution
import path from "path";

// vite configuration object definition
export default defineConfig(() => ({
  // development server configuration
  server: {
    // bind to all network interfaces not just localhost
    host: "::",
    // use port 8080 instead of default 3000
    port: 8080,
  },
  // plugins array for vite build process
  plugins: [react()],
  // module resolution configuration
  resolve: {
    // path aliases for cleaner imports
    alias: {
      // @ symbol maps to src directory
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
