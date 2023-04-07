export default defineEventHandler(event => {
  console.log('hello post')
  // get config
  const config = useRuntimeConfig()

  console.log('>>> config :', config)

  // Method
  // console.log(event.node.req.method)

  // error handling
  /*
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be an integer',
    })
  }
  */

  throw createError({
    statusCode: 400,
    statusMessage: '에러 메시지',
  })

  return {
    post: 'works',
  }
})
