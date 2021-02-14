module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'react-app',
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [0],
    'react/state-in-constructor': [0],
    'react/destructuring-assignment': [0],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'no-unused-vars': 'error',
    'max-len': ['error', 140, 2, { ignoreComments: true, ignoreUrls: true }],
    'linebreak-style': ['error', 'unix'],
  },
};
