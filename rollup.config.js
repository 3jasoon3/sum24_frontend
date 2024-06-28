import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import copy from "rollup-plugin-copy";

export default {
  input: {
    comic: "src/ts/comic.ts",
    redirect: "src/ts/redirect.ts",
  },
  output: [
    {
      dir: "dist",
      format: "es",
    },
  ],
  plugins: [
    nodeResolve({ browser: true }),
    typescript(),
    terser(),
    copy({
      targets: [{ src: "public/*", dest: "dist" }],
    }),
  ],
};
