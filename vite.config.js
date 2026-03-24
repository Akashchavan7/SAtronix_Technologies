import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/three")) {
            return "three-core";
          }
          if (id.includes("@react-three/fiber")) {
            return "r3f-vendor";
          }
          if (id.includes("@react-three/drei")) {
            return "drei-vendor";
          }
          if (id.includes("framer-motion")) {
            return "motion-vendor";
          }
          if (id.includes("react-router") || id.includes("react-dom") || id.match(/[\\/]node_modules[\\/]react[\\/]/)) {
            return "react-vendor";
          }
        },
      },
    },
  },
});
