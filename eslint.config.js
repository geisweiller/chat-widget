import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'import': importPlugin,
      'prettier': prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-shadow': ['error', {
        builtinGlobals: false,
        hoist: 'all',
        allow: ['top']
      }],
      'prettier/prettier': 'error',
      'id-blacklist': [
        'error',
        'sb', 'event'
      ],
      'id-length': ['error', {
        min: 2,
        properties: 'never',
        exceptions: [
          '$', '_',
          'i', 'j',
          'a', 'b',
          'x', 'y'
        ]
      }],
      'no-confusing-arrow': ['error', {
        allowParens: true
      }],
      'no-param-reassign': ['error'],
      'no-magic-numbers': ['warn', {
        ignore: [-1, 0, 1, 2, 10],
        ignoreArrayIndexes: true,
        detectObjects: false
      }],
      'no-return-await': ['off'],
      'no-useless-return': ['off'],
      'func-name-matching': ['off'],
      "new-cap": ["error", { "capIsNew": false }],
      'no-sync': ['off'],
      'newline-per-chained-call': ['off', {
        ignoreChainWithDepth: 4
      }],
      'template-curly-spacing': ['error', 'never'],
      'object-shorthand': ['error', 'always'],
      'object-curly-newline': ['error', {
        ObjectExpression: {
          minProperties: 1
        },
        ObjectPattern: {
          multiline: true
        }
      }],
      'prefer-rest-params': ['off'],
      'valid-jsdoc': ['off'],
      'no-unused-expressions': ['off'],
      'no-restricted-globals': ['error', 'escape', 'unescape', 'event', 'top'],
      'no-restricted-imports': ['error', {
        'name': 'lodash',
        'message': 'Please import from \'utils\' instead. '
      }],
      'react-hooks/set-state-in-effect': 'off',
      'sort-imports': ['off'],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          pathGroups: [
            {
              pattern: '{react,react-dom/**}',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'class-methods-use-this': ['off'],
    },
  },
)