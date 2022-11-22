import request from '~/request'

export const testRequest = (params) => {
  return request.get(`/prod-api/operation-c/address/getByParentCode/${params}`)
}
