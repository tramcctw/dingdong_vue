<template>
  <div id="home">
    <search/>
    <!--    导航栏-->
    <scroll class="scroll" ref="scroll">
      <swiper/>
      <!--    轮播图-->
      <nav-class/>
      <!--    分类导航-->
      <vip/>
      <!--    加入vip-->
      <timer/>
      <!--    时间-->
      <banner-goods ref="goodsScroll"/>
      <!--    推荐货物-->
      <Guess/>
<!--      猜你喜欢-->
      <guess-goods class="goods"/>
<!--      猜你喜欢的货物-->
    </scroll>
  </div>
</template>

<script>
  import Search from "components/content/search/Search";
  import Swiper from "./childComps/Swiper";
  import NavClass from "./childComps/NavClass";
  import Vip from "components/content/vip/Vip";
  import Timer from "./childComps/Timer";
  import BannerGoods from "./childComps/BannerGoods";
  import Scroll from "components/common/scroll/Scroll";
  import Guess from "./childComps/Guess";
  import GuessGoods from "./childComps/GuessGoods";
  export default {
    name: "Home",
    components:{
      Search,
      Swiper,
      NavClass,
      Vip,
      Timer,
      BannerGoods,
      Scroll,
      Guess,
      GuessGoods
    },
    created() {
      this.$bus.$on('imgLoad',()=>{
        this.$refs.scroll && this.$refs.scroll.refresh()
      })
    },
  }
</script>

<style scoped>

  #home{
    height: 100vh;
    width: 100vw;
  }

  #home .scroll{
    overflow:hidden;
    height: calc(100vh - 54px - 50px);
    width: 100vw;
  }

  #home .goods{
    width: 100vw;
  }
</style>