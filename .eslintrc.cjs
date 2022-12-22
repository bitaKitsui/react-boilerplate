module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react"],
  ignorePatterns: ["vite-env.d.ts", "vite.config.ts"],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
