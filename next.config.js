/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

await import("./src/env.js");
import Nextra from "nextra";

/** @type {import("next").NextConfig} */
// const config = {};
//
const withNextra = Nextra({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.jsx",
});

export default withNextra;
