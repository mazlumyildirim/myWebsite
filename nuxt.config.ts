// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  css: [
    '@/assets/scss/main.scss'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  googleFonts: {
    display: 'swap'
  },
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: true,
        sansSerif: [100, 300, 500, 700],
        'Roboto+Condensed': true,
      }
    }],
  ],
})
