export default defineEventHandler(event => {
  event.node.req
  return {
    api: 'works',
  }
})
