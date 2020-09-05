import {request} from "./request";

export function getSwiper() {
  return request({
    url:'/getSwipers'
  })
}

export function getOneClass() {
  return request({
    url:'/getOneClass'
  })
}

export function getBannerGoods() {
  return request({
    url:'/getBannerGoods'
  })
}

export  function getGuessGoods(query) {
  return request({
    url:'/getGuessGoods',
    params:query
  })
}