<template>
  <div id="swiper">
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in swiperData" :key="index">
        <img :src="getImage(item)" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  import {getSwiper} from "network/home";

  export default {
    name: "Swiper",
    data(){
      return {
        swiperData:[]
      }
    },
    mounted() {
      getSwiper().then(res=>{
        this.swiperData = res.data
      })
    },
    methods:{
      getImage(item){
        return JSON.parse(item.carousel)[0].url;
      }
    }
  }
</script>

<style scoped>
  #swiper img{
    width: 100vw;
  }
</style>