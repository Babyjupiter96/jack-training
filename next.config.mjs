/**
 * Static export for GitHub Pages (project subpath). basePath switches on via
 * the GITHUB_PAGES env var the deploy workflow sets; local dev stays at root.
 */
const repo = "jack-training";
const onGitHubPages = process.env.GITHUB_PAGES === "true";
const base = onGitHubPages ? `/${repo}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: base,
  assetPrefix: base || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: base,
  },
};

export default nextConfig;
