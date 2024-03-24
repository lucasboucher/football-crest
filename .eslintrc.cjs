module.exports = {
  extends: ["plugin:astro/recommended", "plugin:astro/jsx-a11y-recommended"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"]
      },
      rules: {
        "astro/no-set-text-directive": "error",
        "astro/no-unused-css-selector": "error",
        "astro/prefer-class-list-directive": "error"
      }
    }
  ]
};
