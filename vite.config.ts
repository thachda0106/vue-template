import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tsconfigPathsPlugin from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPathsPlugin(), vue()],
});
