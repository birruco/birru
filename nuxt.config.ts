import dayjs from 'dayjs'

export default defineNuxtConfig({
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/robots.txt']
    }
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
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=1366, initial-scale=1',
    }
  },
  site: {
    name: 'Birru: Home-to-School Speech Therapy',
    url: 'https://birru.co',
    description: 'Kami membantu anak-anak dengan masalah komunikasi dan belajar menguasai bahasa pertama mereka.',
    defaultLocale: 'id',
    trailingSlash: true,
  },
  googleFonts: {
    download: false,
    display: 'swap',
    families: {
      'Nunito+Sans': [400],
    },
  },
  sitemap: {
    experimentalCompression: true,
    defaults: {
      lastmod: dayjs().format('YYYY-MM-DDThh:mm:ssZ')
    },
    exclude: [
      '/_nuxt/**',
      '/_ipx/**',
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
})
