export default defineNuxtConfig({
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/robots.txt']
    }
  },
  site: {
    name: 'Birru - Terapi Wicara dan Tumbuh Kembang Anak',
    url: 'https://birru.co',
    description: 'Kami membantu orang tua memahami dan mengatasi gangguan bahasa bicara untuk membangkitkan keajaiban dalam diri anak mereka.',
    defaultLocale: 'id',
    trailingSlash: true,
  },
  modules: [
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
  ],
  googleFonts: {
    download: false,
    display: 'swap',
    families: {
      'Nunito+Sans': [400],
    },
  },
  sitemap: {
    experimentalCompression: true,
  },
  ogImage: {
    fonts: [
      {
        name: 'Birru Sans',
        weight: 700,
        path: '/fonts/birruSans-Bold.woff',
      },
    ],
  },
  content: {
    documentDriven: true
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
          ? { preset: ['default', { discardComments: { removeAll: true } }] }
          : false, 
    },
  },
  devtools: { enabled: true },
})
