// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
	useTabs: true,
	singleQuote: true,
	trailingComma: "es5",
	tabWidth: 2,
	printWidth: 100,
	semi: true,
	bracketSpacing: true,
	bracketSameLine: false,
}