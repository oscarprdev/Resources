/** @type {import("prettier").Config} */
export default {
	plugins: [],
	printWidth: 120,
	tabWidth: 2,
	useTabs: true,
	semi: true,
	singleQuote: true,
	quoteProps: "as-needed",
	jsxSingleQuote: false,
	trailingComma: "es5",
	bracketSpacing: true,
	bracketSameLine: true,
	arrowParens: "avoid",
	endOfLine: "lf",
	singleAttributePerLine: true,
	htmlWhitespaceSensitivity: "css",
	importOrderSeparation: false,
	importOrderSortSpecifiers: true,
	plugins: [
		"prettier-plugin-astro",
		"prettier-plugin-astro-organize-imports",
	],
}
