import { checker } from 'vite-plugin-checker'

const isDevelopment = process.env.NODE_ENV === 'development'

console.log('isDevelopment', isDevelopment)

const ignoreRouterArray: string[] = []

if (!isDevelopment) {
  ignoreRouterArray.push('src/pages/viewer/**')
}

console.log(ignoreRouterArray)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  components: false,
  srcDir: 'src/',
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  css: ['~/assets/css/style.scss'],
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
  ignore: ignoreRouterArray,
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
})
