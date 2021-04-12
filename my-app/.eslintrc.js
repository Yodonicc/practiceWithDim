module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        // 'plugin:react/recommended',
        // 'airbnb',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'prefer-const': 0,
        indent: ['warn', 4],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    },
};
