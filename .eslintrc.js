module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'prettier',
    'plugin:storybook/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    },
    tsconfigRootDir: __dirname
  },
  plugins: ['react', 'prettier', 'simple-import-sort', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': 'off',
    'arrow-body-style': 'off',
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id']
      }
    ],
    'jsx-a11y/anchor-is-valid': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx', '.ts']
      }
    ],
    'react/function-component-definition': [
      0,
      {
        namedComponents: 'arrow-function'
      }
    ],
    'react/no-unknown-property': [
      'error',
      {
        ignore: ['jsx']
      }
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)'
          ],
          ['^react', '^next', '^@?\\w'],
          ['^@app'],
          ['^~(/.*|$)'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.?(css|scss)$']
        ]
      }
    ]
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.json']
      }
    }
  }
};
