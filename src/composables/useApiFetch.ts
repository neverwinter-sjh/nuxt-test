import { useFetch } from '#app'

type useFetchType = typeof useFetch

/**
 * useFetch wrapper
 * @param path URL 경로
 * @param options fetch 옵션
 * @returns useFetch 함수
 */
export const useApiFetch: useFetchType = (path, options = {}) => {
  const config = useRuntimeConfig()

  options.baseURL = config.public.baseURL
  return useFetch(path, options)
}
