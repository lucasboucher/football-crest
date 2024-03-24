import type { ManifestOptions } from "vite-plugin-pwa";

export const manifest: Partial<ManifestOptions> = {
  name: "Football Crest",
  short_name: "Football Crest",
  description:
    "List of football club badges from the European championships for the 2023/24 season.",
  theme_color: "#6D28D9",
  background_color: "#020617",
  display: "minimal-ui",
  icons: [
    {
      src: "/favicons/favicon-72x72.png",
      type: "image/png",
      sizes: "72x72",
      purpose: "any maskable"
    },
    {
      src: "/favicons/favicon-96x96.png",
      type: "image/png",
      sizes: "96x96",
      purpose: "any maskable"
    },
    {
      src: "/favicons/favicon-128x128.png",
      type: "image/png",
      sizes: "128x128",
      purpose: "any maskable"
    },
    {
      src: "/favicons/favicon-144x144.png",
      type: "image/png",
      sizes: "144x144",
      purpose: "any maskable"
    },
    {
      src: "/favicons/favicon-152x152.png",
      type: "image/png",
      sizes: "152x152",
      purpose: "any maskable"
    },
    {
      src: "/favicons/favicon-192x192.png",
      type: "image/png",
      sizes: "192x192",
      purpose: "any maskable"
    },
    {
      src: "/favicons/favicon-384x384.png",
      type: "image/png",
      sizes: "384x384",
      purpose: "any maskable"
    },
    {
      src: "/favicons/favicon-512x512.png",
      type: "image/png",
      sizes: "512x512",
      purpose: "any maskable"
    }
  ]
};
