import { checker } from 'vite-plugin-checker'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  components: false,
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  css: ['@/assets/css/global.scss'],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  vite: {
    plugins: [
      checker({
        vueTsc: true,
      }),
    ],
  },
})
