module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier", "plugin:storybook/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json"
  },
  overrides: [
    {
      files: ['*.stories.@(ts|tsx|js)'],
      extends: ['plugin:storybook/recommended']
    },
    {
      files: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
      extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react']
    }
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  plugins: ["react", "jest-dom", "testing-library"],
  ignorePatterns: ["vite-env.d.ts", "vite.config.ts"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/consistent-type-assertions": "off"
  }
};