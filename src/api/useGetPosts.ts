// 개발 API에서 데이터 가공 처리
export default function () {
  return useApi('/posts', {
    method: 'GET',
  }).then(res => res.data)
}
