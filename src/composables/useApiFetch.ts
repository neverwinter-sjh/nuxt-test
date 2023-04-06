import { useFetch } from '#app'

type useFetchType = typeof useFetch

/**
 * useFetch의 기본 옵션을 설정하는 함수
 * @param path URL 경로
 * @param options fetch 옵션
 * @returns useFetch 함수
 */
export const useApiFetch: useFetchType = (path, options = {}) => {
  const config = useRuntimeConfig()

  // baseURL을 설정한다.
  options = {
    ...options,
    baseURL: config.public.baseURL,
    headers: {
      ...options.headers,
      authorization: 'sdf0923804234',
    },
    onRequest: request => {
      // console.log('onRequest', request)
    },
    onResponse: response => {
      // console.log('onResponse', response)
      console.log(response)
    },
  }

  return useFetch(path, options)
}
