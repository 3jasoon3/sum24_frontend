import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
} from "date-fns";

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
    differenceInYears(),
    differenceInMonths(),
    differenceInDays(),
  ],
};
