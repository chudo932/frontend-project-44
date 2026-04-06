import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/eol-last': 'error',
      '@stylistic/object-curly-spacing': ['error', 'always'],
    },
  },
]
