<template>
  <div id="goods-list">
    <goods-list v-for="(item,index) in goods" :goods="item" :key="index"/>
  </div>
</template>

<script>
  import {getGuessGoods} from "network/home";
  import GoodsList from "components/content/goods/GoodsList";

  export default {
    name: "GuessGoods",
    components:{
      GoodsList
    },
    data(){
      return {
        goodsParams:{
          current:1,  //页码
          pageSize:21,    //每页21条数据
        },
        goods:[]
      }
    },
    created() {
      getGuessGoods(this.goodsParams).then(res=>{
        this.goods = res.data
        // console.log(this.goods)
      })
    }
  }
</script>

<style scoped>
  #goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>