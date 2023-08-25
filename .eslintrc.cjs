module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "standard-with-typescript",
        "prettier"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react",
        "react-hooks",
        "import",
        "unused-imports",
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/no-unused-vars": "off",
        "import/order": [
            "error",
            {
                groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
                alphabetize: { order: "asc", caseInsensitive: true },
                pathGroups: [
                    {
                        pattern: "react**",
                        group: "external",
                        position: "before",
                    }
                ],
                pathGroupsExcludedImportTypes: ["react"]
            }
        ],
        "unused-imports/no-unused-imports": "error",
    },
    "ignorePatterns": ["vite-env.d.ts", "vite.config.ts"],
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}
