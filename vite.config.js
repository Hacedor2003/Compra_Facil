import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        display: "standalone",
        display_override: ["window-controls-overlay"],
        lang: "es-Es",
        name: "Compra Facil",
        short_name: "CompraFast",
        description: "Pagina Web de e-commerce falsa",
        theme_color: "#ffffff",
        background_color: "#fff",
        icons: [
          {
            src: "store 64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "store 192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "store 512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
