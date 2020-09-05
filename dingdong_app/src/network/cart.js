
import {request} from "./request";

export function getCartGoods(params) {
  return request({
    url:'/getCartGoods',
    params:params
  })
}