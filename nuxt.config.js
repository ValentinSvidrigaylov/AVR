const base = 'gh-pages' === process.env.NODE_ENV ? '/nuxt_test/' : '/';

export default {
   target: 'static',
   router: {
		base,
	},
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  script: [
   {src: '/bootstrap.bundle.min.js',},
   {src: '/components/ToTopButton/ToTopButton.client.js',},
   {src: '/components/ThemeButton/ThemeButton.client.js',},
   
  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
	'@/assets/css/main.scss',
	'@/components/ThemeButton/ThemeButton.css',
	'@/components/ToTopButton/ToTopButton.css'
  ],
  styleResources: {
	scss: ['~/assets/css/variables.scss']
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
	{ src: "@/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", mode: "client" }
  ], 

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
	'@nuxtjs/style-resources'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
	  publicPath: '/static/',
  }
}
