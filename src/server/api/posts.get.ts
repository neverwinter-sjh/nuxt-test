import axios from './apiConfig'

export default defineEventHandler(async event => {
  console.log('hello get')
  // Method
  // console.log(event.node.req.method)

  // Query
  const query = getQuery(event)

  const data = await axios.get('/posts')

  console.log(data.data)

  return data.data
})
