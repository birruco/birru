// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    'nuxt-og-image',
    '@nuxtjs/tailwindcss'
  ],
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'Nunito+Sans': [400]
    }
  },
})
