import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import { VitePWA } from "vite-plugin-pwa";

import { seoConfig } from "./utils/seoConfig";
import { manifest } from "./utils/pwaConfig";

export default defineConfig({
  site: seoConfig.baseURL,
  integrations: [tailwind(), sitemap(), compress()],
  vite: {
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        manifest,
        workbox: {
          globDirectory: "dist",
          globPatterns: ["**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}"],
          navigateFallback: null
        }
      })
    ]
  }
});
