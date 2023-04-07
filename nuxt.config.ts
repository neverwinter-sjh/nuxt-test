import { checker } from 'vite-plugin-checker'

// 개발 환경 변수
const isDevelopment = process.env.NODE_ENV === 'development'

// 라우터에서 제외할 경로
const ignoreRouterArray: string[] = []

// 개발 환경, 빌드 환경에 따라 값을 설정한다.
if (isDevelopment) {
  // 개발 환경
} else {
  // 빌드 환경

  // 뷰어 페이지는 라우터에서 제외한다.
  ignoreRouterArray.push('src/pages/viewer/**')
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
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
