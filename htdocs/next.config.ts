import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React Strict Modeで潜在的なバグを検出しやすく
  reactStrictMode: true,

  // 出力形式を静的ファイルエクスポートに指定
  output: "export",

  // URLの末尾にスラッシュを付与
  trailingSlash: true,

  // 画像の静的最適化を無効
  images: {
    disableStaticImages: true,
    unoptimized: true,
  },

  compiler: {
    // プロダクション環境ではコンソール出力を削除
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error", "warn"],
          }
        : false,
  },

  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: [
            {
              loader: "@svgr/webpack",
              options: {
                dimensions: false,
              },
            },
          ],
          as: "*.js",
        },
      },
    },
  },

  // webpackの設定を拡張
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              dimensions: false,
            },
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
