import sassGlobImports from "vite-plugin-sass-glob-import";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/TravelX-Slider",
  plugins: [sassGlobImports()],
});
