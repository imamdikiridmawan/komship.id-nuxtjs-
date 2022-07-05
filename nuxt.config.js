import { resolve } from 'path'

export default {
  ssr: true,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  alias: {
    '@': resolve(__dirname, './')
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Komship - Platform Kirim Barang',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './komship.png' },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/swiper@8/swiper-bundle.min.css'
      }
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
        type: 'text/javascript'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
        type: 'text/javascript'
      },
      {
        src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
        type: 'text/javascript'
      }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '../komship.id-nuxtjs-/assets/css/app.css',
    '../komship.id-nuxtjs-/assets/css/css/bootstrap.min.css'
  ],
  script: [
    {
      src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js'
    },
    {
      src: '../komship.id-nuxtjs-/assets/css/js/bootstrap.bundle.min.js',
      type: 'text/javascript'
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js'
    },
    {
      src: 'https://unpkg.com/swiper@8/swiper-bundle.min.js'
    }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '../komship.id-nuxtjs-/plugin/aos.js', mode: 'client' },
    { src: '../komship.id-nuxtjs-/plugin/vue-select.js', mode: 'client' },
    { src: '../komship.id-nuxtjs-/plugin/gtm.js', mode: 'client' },
    { src: '../komship.id-nuxtjs-/plugin/fbPixel.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
    // '@nuxtjs/gtm'
  ],
  // gtm: {
  //   id: 'GTM-T38MLQS'
  // },
  // publicRuntimeConfig: {
  //   gtm: {
  //     id: process.env.GOOGLE_TAG_MANAGER_ID
  //   }
  // },
  // // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // babel configuration
  extend (config, ctx) {},
  babel: { compact: true }
}
