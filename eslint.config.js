module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	plugins: ['vue', '@typescript-eslint'],
	rules: {},
	extensions: ['.js', '.ts', '.vue'],
}
