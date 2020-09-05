import {request} from "./request";

export function getDetail(id) {
  return request({
    url:'/getDetail',
    params:{
      id
    }
  })
}