import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://lb-football-crest.netlify.app",
  integrations: [tailwind(), sitemap(), compress()]
});
