// eslint.config.js
const tsParser = require('@typescript-eslint/parser')
const eslintPluginTs = require('@typescript-eslint/eslint-plugin')

module.exports = [
  // Ignore folders
  {
    ignores: ['node_modules', 'dist', 'build'],
  },
  // Apply rules to JS and TS files
  {
    files: ['**/*.ts', '**/*.js'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs,
    },
    rules: {
      // TypeScript recommended rules
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',

      // JavaScript rules
      'no-console': 'warn',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
]
