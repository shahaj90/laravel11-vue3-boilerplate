module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        "plugin:vue/recommended",
        "eslint:recommended",
        "plugin:prettier/recommended",
        "prettier/vue",
        "prettier",
    ],
    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        "vue/max-attributes-per-line": ["error", { singleline: 3 }],
        "prettier/prettier": ["error", { singleQuote: true, tabWidth: 2 }],
        "no-unused-vars": [
            1,
            {
                args: "after-used",
                argsIgnorePattern: "^_",
            },
        ],
    },
};
