module.exports = {
  plugin: ['stylelint-scss'],
  extends: ['stylelint-config-standard'],
  extends: ['stylelint-config-prettier'],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    'string-quotes': 'single' // シングルクォーテーションに揃える
  }
}
