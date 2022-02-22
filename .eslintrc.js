// eslint-disable-next-line no-undef
module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 13,
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error'],
    'arrow-spacing': ['error'],
    'brace-style': ['error'],
    'space-in-parens': ['error'],
    'key-spacing': ['error'],
    'keyword-spacing': ['error'],
    'no-var': 'error',
    'prefer-const': 'error',
    'no-multi-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'complexity': ['error', 13],
    'camelcase': ['warn'],
    'array-bracket-spacing': [2, 'never'],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, { 'before': false, 'after': true }],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'consistent-return': 0,
    'consistent-this': 0,
    'constructor-super': 0,
    'curly': [2, 'all'],
    'default-case': 2,
    'dot-location': [2, 'property'],
    'dot-notation': [2, { 'allowKeywords': true }],
    'eol-last': 2,
    'eqeqeq': [2, 'allow-null'],
    'func-names': 0,
    'func-style': 0,
    'space-infix-ops': 2
  }
};
