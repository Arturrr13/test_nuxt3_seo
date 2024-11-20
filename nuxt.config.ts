// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./assets/css/addStyles.scss";`,
        }
      }
    },
    //base: '/la/test/nuxt_apiTest/'
  },
  app: {
    //baseURL: '/la/test/nuxt_apiTest/',
    // cdnURL: '../'
  },
  css: ['~/assets/css/_fonts.scss']
})
