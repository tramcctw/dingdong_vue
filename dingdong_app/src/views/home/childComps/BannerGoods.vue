<template>
  <div id="goods">
    <div class="item" v-for="(item,index) in goodsList" :key="index">
      <img :src="JSON.parse(item.propaganda)[0].url" alt="">
      <p>{{item.name}}</p>
      <div class="price">
        <div>￥:{{item.price}}</div>
        <cart-ico class="cart" :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {getBannerGoods} from "network/home";
  import CartIco from "components/content/cart/CartIco";

  export default {
    name: "BannerGoods",
    components:{
      CartIco
    },
    data(){
      return {
        goodsList:[]
      }
    },
    created() {
      getBannerGoods().then(res=>{
        // console.log(res.data)
        this.goodsList = res.data
      })
    },
    mounted() {
      document.getElementById('goods').addEventListener('touchstart',e=>{

        // 阻止冒泡事件，否则在better-scroll中无法监听原生的滚动
          e.stopPropagation()
      })
    },
    methods:{
      // addCart(){
      //   console.log('okkk')
      // }
    }
  }
</script>

<style scoped>

  #goods{
    display: flex;
    overflow: auto;
    border-bottom: 6px solid #f8f4f5;
  }

  #goods::-webkit-scrollbar{
    display: none;
  }


  #goods .item{
    padding: 5px;
    box-sizing: border-box;
  }

  #goods img{
    width: 90px;
    height: 100px;
  }
  #goods p{
    text-align: center;
    font-size: 12px;
    margin: 10px 0;
    overflow: hidden;
    height: 27.2px;
  }

  #goods .cart{

    margin-top: -6px;
  }

  #goods .price{
    display: flex;
    font-size: 13px;
    color: #fd6069;
    justify-content: space-between;
  }
</style>