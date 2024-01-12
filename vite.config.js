import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,gif,png,svg}"],
      },
      includeAssets: [
        "./src/assets/search.gif",
        "./src/assets/_defd7984-1068-474a-95bd-422bdcc.jpg",
        "./src/assets/icons8-web-24.png",
      ],
      manifest: {
        name: "Compra Facil",
        short_name: "CompraFast",
        description: "Pagina Web de e-commerce falsa",
        theme_color: "#ffffff",
        icons: [
          {
            src: "./src/assets/icons8-shop-100.png",
            sizes: "100x100",
            type: "image/png",
          },
          {
            src: "./src/assets/store-4156934_640.png",
            sizes: "640x631",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
