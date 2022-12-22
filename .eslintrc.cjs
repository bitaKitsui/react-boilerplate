module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'xo',
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	settings: {
		react: {
			version: 'detect'
		}
	},
	ignorePatterns: ['vite-env.d.ts', 'vite.config.ts'],
	rules: {
		'react/react-in-jsx-scope': 'off'
	},
};
