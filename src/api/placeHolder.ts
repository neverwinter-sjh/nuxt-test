import { useApiFetch } from '@/composables/useApiFetch'

export const useFetchPlaceholder = () => {
  return useApiFetch('/posts', {
    method: 'GET',
  })
}
