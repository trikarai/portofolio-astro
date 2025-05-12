// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import vue from "@astrojs/vue";

import svelte from "@astrojs/svelte";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  // adapter: node({ mode: "standalone" }),
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), vue(), svelte()],
});
