/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  printWidth: 100,
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  trailingComma: "none",
};