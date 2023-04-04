import { checker } from 'vite-plugin-checker'
import { resolve } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  components: false,
  srcDir: 'src/',
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  css: ['vuetify/lib/styles/main.sass', '@/assets/css/global.scss'],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    plugins: [
      checker({
        vueTsc: true,
      }),
    ],
  },
  build: {
    transpile: ['vuetify'],
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
})
