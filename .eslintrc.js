module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    settings: {},
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json',
        parser: {
            ts: '@typescript-eslint/parser',
            '<template>': 'espree',
        },
    },
    plugins: ['@typescript-eslint', 'import'],
    rules: {
        'import/named': 'off',
        'import/no-named-as-default': 'off',
        eqeqeq: 'error',
    },
};
