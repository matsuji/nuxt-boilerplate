const globImporter = require('node-sass-glob-importer')

export default {
  srcDir: 'src/',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-boilerplate',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '@/assets/scss/style.scss', lang: 'scss' }],

  styleResources: {
    scss: [
      '@/assets/scss/partials/base/_variables.scss',
      '@/assets/scss/partials/base/_mixins.scss'
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { loaders: { scss } }) {
      const sassOptions = scss.sassOptions || {}
      sassOptions.importer = globImporter()
      scss.sassOptions = sassOptions
    }
  }
}
