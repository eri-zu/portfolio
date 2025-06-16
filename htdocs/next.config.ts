import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,

  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio/" : "",

  images: {
    disableStaticImages: true,
    unoptimized: true,
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: [
            {
              loader: "@svgr/webpack",
              options: { dimensions: false },
            },
          ],
          as: "*.js",
        },
      },
    },
  },

  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: { dimensions: false },
          },
        ],
      },
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        use: "raw-loader",
      }
    );
    return config;
  },
};

export default nextConfig;
