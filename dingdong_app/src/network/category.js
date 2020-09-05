import {request} from "./request";

export function getGoodsTitle() {
    return request({
      url:'/goodsTitle'
    })
}

export function  getCategoryGoods(id) {
    return request({
      url:'/categoryGoods',
      params:{
        id
      }
    })
}