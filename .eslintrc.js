module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' }, // to enable features such as async/await
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ['eslint:recommended'],
  rules: {
    indent: ['warn', 2],
    'no-empty-interface': false,
  },
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      plugins: ['@feature-sliced/eslint-plugin-messages'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:react/recommended', // React rules
        'plugin:react-hooks/recommended', // React hooks rules
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'prettier',
        '@feature-sliced',
      ],
      processor: '@feature-sliced/messages/fs',
      rules: {
        // We will use TypeScript's types for component props instead
        'react/prop-types': 'off',

        // No need to import React when using Next.js
        'react/react-in-jsx-scope': 'off',

        // Why would you want unused vars?
        '@typescript-eslint/no-unused-vars': ['error'],

        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        'react-hooks/exhaustive-deps': ['warn'],
        'no-console': 'error',
        'no-extra-boolean-cast': 'off',

        // feature-sliced/import-order
        'import/order': 'warn',
      },
    },
  ],
}
