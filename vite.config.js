import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "/rentalcar/",
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        // eslint-disable-next-line no-undef
        main: resolve(__dirname, "index.html"),
        // eslint-disable-next-line no-undef
        404: resolve(__dirname, "public/404.html"),
      },
    },
  },
});
