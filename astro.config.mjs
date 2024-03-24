import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

import { seoConfig } from "./utils/seoConfig";

// https://astro.build/config
export default defineConfig({
  site: seoConfig.baseURL,
  integrations: [tailwind(), sitemap(), compress()]
});
