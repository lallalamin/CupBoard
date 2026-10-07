import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    
    // This is for PWA showing icon on home screen
    VitePWA({
      registerType: "autoUpdate",

      manifest: {
        name: "Your App Name",
        short_name: "Kitchen",
        display: "standalone",
        background_color: "#FFF9EE",
        theme_color: "#FFF9EE",

        icons: [
          {
            src: "/CupBoardLogo.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/CupBoardLogo.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    })
  ],
})


