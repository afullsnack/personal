/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

await import("./src/env.js");
// import Nextra from "nextra";
import { withContentlayer } from "next-contentlayer";

/** @type {import("next").NextConfig} */
// const config = {};
//
const nextConfig = { reactStrictMode: true, swcMinify: true };

export default withContentlayer(nextConfig);
