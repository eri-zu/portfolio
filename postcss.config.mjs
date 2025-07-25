export default {
  plugins: {
    "@tailwindcss/postcss": {},
    ...(process.env.NODE_ENV === "production"
      ? {
          autoprefixer: {},
          "postcss-sort-media-queries": {
            sort: "mobile-first",
          },
        }
      : {}),
  },
};
