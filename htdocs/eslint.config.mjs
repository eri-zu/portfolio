import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';
import unuserdPlugin from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const config = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2022,
        ...globals.node
      },
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module'
      }
    }
  },
  {
    ignores: [
      '**/next-env.d.ts',
      '**/build/',
      '**/bin/',
      '**/obj/',
      '**/out/',
      '**/.next/',
      '!.storybook',
      'node_modules'
    ]
  },
  ...tseslint.configs.recommended,
  ...storybook.configs['flat/recommended'],
  {
    name: 'eslint/recommended',
    rules: js.configs.recommended.rules
  },
  {
    name: 'react/jsx-runtime',
    plugins: {
      react: reactPlugin
    },
    rules: reactPlugin.configs['jsx-runtime'].rules,
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    name: 'react-hooks/recommended',
    plugins: {
      'react-hooks': hooksPlugin
    },
    rules: hooksPlugin.configs.recommended.rules
  },
  {
    name: 'next/core-web-vitals',
    plugins: {
      '@next/next': nextPlugin
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules
    }
  },
  {
    name: 'prettier/config',
    ...eslintConfigPrettier
  },
  {
    name: 'project-custom',
    rules: {
      'import/no-duplicates': 'error',
      'no-nested-ternary': 'off',
      'no-console': 'off',
      'no-unused-expressions': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'eqeqeq': ['error', 'always', { null: 'ignore' }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/explicit-member-accessibility': [
        'warn',
        { accessibility: 'no-public' }
      ],
      '@typescript-eslint/method-signature-style': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/no-unsafe-unary-minus': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-useless-empty-export': 'error',
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/prefer-regexp-exec': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/require-array-sort-compare': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'generic'
        }
      ],
      'no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
          argsIgnorePattern: '^_' // 引数名が`_`で始まる場合は未使用として警告を無視
        }
      ]
    }
  },
  {
    name: 'eslint-plugin-import',
    plugins: {
      import: importPlugin
    },
    rules: {
      'import/order': [
        'error',
        {
          'groups': [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'object',
            'type',
            'index'
          ],
          'newlines-between': 'always',
          'pathGroupsExcludedImportTypes': ['builtin'],
          'alphabetize': {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ]
    }
  },
  {
    name: 'eslint-plugin-unused-imports',
    plugins: {
      'unused-imports': unuserdPlugin
    },
    rules: {
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': 'off'
    }
  }
];

export default config;
