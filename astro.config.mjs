import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Fully static site — works out of the box on Vercel, Netlify, and Cloudflare Pages.
// No adapter needed since there is no server-rendered output.
export default defineConfig({
  site: "https://clydehan.dev",
  output: "static",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
