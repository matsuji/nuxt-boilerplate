module.exports = {
  root: true,
  env: {
    browser: true, // ブラウザ対応
    node: true // Node.js対応
  },
  extends: [
    // 推奨設定
    'eslint:recommended',
    'plugin:vue/recommended',
    'prettier'
  ],
  plugins: ['vue'],
  rules: {
    // ファイル名を複数語で構成するのを切る（ページコンポーネントは単一語であるため）
    'vue/multi-word-component-names': 'off',
    // ホワイトスペースがあるとエラー（htmlテキストと属性は許可）
    'no-irregular-whitespace': 'off',
    'vue/no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: true,
        skipTemplates: false,
        skipHTMLAttributeValues: true,
        skipHTMLTextContents: true
      }
    ],
    // v-htmlを許可
    'vue/no-v-html': 'off',
    // コンポーネントはパスカルケースで
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: []
      }
    ]
  }
}
