import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: './',
  define: {
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for segment analytics lib to work
    // global: {},
  //   resolve: {
  //     alias: [
  //       {
  //           find: /^jss-plugin-(.*)$/,
  //           replacement: resolve(__dirname, './node_modules/jss-plugin-$1/src/index.js'),
  //       },
  //     ],
  //   },
  },
});