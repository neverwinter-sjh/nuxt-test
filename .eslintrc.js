module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  plugins: [],
  rules: {
    'no-console': [
      'error',
      {
        allow: ['log', 'warn', 'dir', 'timeLog', 'assert', 'clear', 'count', 'countReset', 'group', 'groupEnd', 'table', 'dirxml', 'error', 'groupCollapsed', 'Console', 'profile', 'profileEnd', 'timeStamp', 'context'],
      },
    ],
    'vue/no-multiple-template-root': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'require-await': 'off',
  },
}
