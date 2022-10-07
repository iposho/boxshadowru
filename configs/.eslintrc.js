module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
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
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    'no-unused-vars': 'error',
    'react/sort-comp': [1],
    'max-len': [
      'error',
      140,
      2,
      {
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'react/prop-types': [0],
    'react/jsx-props-no-spreading': [0],
    'react/react-in-jsx-scope': 'off',
    indent: ['error', 2],
    'object-curly-spacing': [2, 'always'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    quotes: ['error', 'single'],
    'jsx-a11y/anchor-is-valid': [
      'error', {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'react/state-in-constructor': 0,
    'react/destructuring-assignment': 0,
    'no-underscore-dangle': 0,
    'no-unsafe-optional-chaining': 0,
    'react/function-component-definition': 0,
  },
};
