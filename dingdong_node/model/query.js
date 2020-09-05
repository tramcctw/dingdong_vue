const db = require('../config/db')

const querys = {

    // 执行查询数据库
    query(sql,arr){
      return new Promise((resolve,reject)=>{
        db.query(sql,arr,function (data) {
          resolve(data)
        })
      })
    },


    //获得轮播图数据
    getSwipers:async function(){
      let sql = "select * from swipers where removes=1"
      let arr = []
      return this.query(sql,arr)
    },

    // 获得分类导航
    getOneClass:async function(){
      let sql = "select id,name,image from sort where shows=1 and removes=1 and one_sort=1"
      let arr = []
      return this.query(sql,arr)
    },

    //获得横幅数据
    getBannnerGoods:async function(){
      let sql = "select id,name,price,vip_price,propaganda from goods where buy=1 and removes=1 and shows=1"
      let arr = []
      return this.query(sql,arr)
    },

    //获得猜你喜欢的数据
    getGuessGoods:async function(data){
      let start = (data.current - 1) * data.pageSize
      let pageSize = parseInt(data.pageSize)
      let sql = "select id,name,price,vip_price,propaganda from goods where one_live=1 and removes=1 and shows=1 limit ?,?"
      let arr = []
      arr.push(start)
      arr.push(pageSize)
      return this.query(sql,arr)
    },

    //获得详情页数据
    getDetail:async function(data){
      let sql = "select * from goods where id=?"
      let arr = []
      arr.push(data.id)
      return this.query(sql,arr)
    },

    //获得分类标题
    getGoodsTitle:async function(){
      let sql = "select id,name from sort where shows=1 and removes=1"
      let arr = []
      return this.query(sql,arr)
    },

    //获得分类的相应的商品
    getCategoryGoods:async function(data){
      let sql = "select id,name,bewrite,price,vip_price,propaganda from goods where shows=1 and removes=1 and sort_id=?"
      let arr = []
      arr.push(data)
      return this.query(sql,arr)
    },

    //获得购物车猜你喜欢的商品
    getCartGoods:async function(data){
      let start = (data.current - 1) * data.pageSize
      let pageSize = parseInt(data.pageSize)
      let sql = "select id,name,price,vip_price,propaganda from goods where car=1 and removes=1 and shows=1 limit ?,?"
      let arr = []
      arr.push(start)
      arr.push(pageSize)
      return this.query(sql,arr)
    }
}



module.exports = querys