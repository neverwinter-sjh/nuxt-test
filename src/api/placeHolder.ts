// 개발 API에서 데이터 가공 처리
export const useFetchPlaceholder = () => {
  return useApiFetch('/posts', {
    method: 'GET',
  }).then(res => toRaw(res.data.value))
}
