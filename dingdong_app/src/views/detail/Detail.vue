<template>
  <div id="detail">
    <van-sticky :offset-top="0">
    <van-nav-bar
      title="商品详情"
      left-arrow
      @click-left="back"
    />
    </van-sticky>
    <scroll class="scroll" ref="scroll">
      <img :src="getImage" alt="" @load="imgLoad">

      <div class="goods-info">
        <h4 class="title">{{detailGoods && detailGoods[0].name}}</h4>
        <p class="dec">{{detailGoods && detailGoods[0].bewrite}}</p>
        <p class="price">￥:{{detailGoods && detailGoods[0].price}}</p>
        <div class="info-timer">
          <span class="circle"></span>
          <div class="time">最快29分钟送达</div>
        </div>
      </div>
      <vip/>

      <div class="comment">
        <h4>评论</h4>
        <div class="user">
          <van-icon name="wap-home" color="#48C568" size="20"/>
          <h5>用户名</h5>
          <div class="time">{{getCurr}}</div>
        </div>
        <div class='star'>
          <van-icon name="star" color="#AAAAAA" size="15"/>
          <van-icon name="star" color="#AAAAAA" size="15"/>
          <van-icon name="star" color="#AAAAAA" size="15"/>
          <van-icon name="star" color="#AAAAAA" size="15"/>
          <van-icon name="star" color="#AAAAAA" size="15"/>
          <span class="satisfiy">很满意</span>
        </div>
        <div class="load">查看更多(660)</div>
      </div>

      <norms :goods-norms="norms"/>

      <img :src="getImage" alt="" @load="imgLoad">

      <bottom-line/>

    </scroll>
    <van-goods-action class="bottomBar">
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button color="#be99ff" type="warning" text="加入购物车" @click="addCart"/>
      <van-goods-action-button color="#7232dd" type="danger" text="立即购买" @click="buy"/>
    </van-goods-action>
  </div>
</template>

<script>
  import {getDetail} from "network/detail";
  import Vip from "components/content/vip/Vip";
  import Scroll from "components/common/scroll/Scroll";
  import {getTime} from "common/current";
  import Norms from "./childComps/Norms";
  import BottomLine from "components/content/bottomLine/BottomLine";

  export default {
    name: "Detail",
    components:{
      Vip,
      Scroll,
      Norms,
      BottomLine
    },
    data(){
      return {
        detailGoods:null,
        norms:{}
      }
    },
    created() {
      // console.log(this.$route.params.id)
      getDetail(this.$route.params.id).then(res=>{
        this.detailGoods = res.data

        this.norms.weight = this.detailGoods[0].weight
        this.norms.conditions = this.detailGoods[0].conditions
        this.norms.sort = this.detailGoods[0].sort_id
        console.log(this.detailGoods)
      })
    },
    computed:{
      getImage(){
        if(this.detailGoods){
          return JSON.parse(this.detailGoods[0].carousel)[0].url
        }else{
          return ''
        }
      },
      getCurr(){
        return getTime()
      }
    },
    methods:{
      back(){
        this.$router.back()
      },
      imgLoad(){
        this.$refs.scroll && this.$refs.scroll.refresh()
      },
      addCart(){
        this.$toast({
          message:'添加成功',
          duration:500
        })
        this.$store.commit('addCart',this.detailGoods[0])
      },
      buy(){
        this.$toast({
          message:'添加成功',
          duration:500
        })
        this.$store.commit('addCart',this.detailGoods[0])
        this.$router.push('/cart')
      }
    }
  }
</script>

<style scoped>

  #detail{
    position: relative;
    z-index: 999;
  }
  #detail img {
    width: 100vw;
  }

  #detail .goods-info{
    padding-left: 15px;
    box-sizing: border-box;
  }

  #detail .goods-info .title{
    font-size: 15px;
  }

  #detail .goods-info .dec{
    margin-top: 4px;
    font-size: 13px;
    color: #878787;
  }

  #detail .goods-info .price{
    height: 40px;
    line-height: 40px;
    color: #f00;
    font-weight: bolder;
    font-size: 15px;
  }

  #detail .goods-info .time{
    font-size: 12px;
    height: 40px;
    line-height: 40px;
    border-top: 1.5px solid #F8F4F5;
    text-indent: 1.6em;
  }

  #detail .goods-info .circle{
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #cbcbcb;
    position: relative;
    top: 27px;
  }

  #detail .scroll{
    position: fixed;
    top: 46px;
    bottom: 50px;
    left: 0;
    right: 0;
  }

  #detail .comment{
    padding-left: 15px;
    padding-bottom: 10px;
    box-sizing: border-box;
  }

  #detail .comment h4{
    font-size:15px;
    margin-top: 15px;
  }

  #detail .comment .user{
    display: flex;
    margin-top: 10px;
    align-items: center;
    position: relative;
  }

  #detail .comment .user h5{
    font-weight: normal;
    font-size: 14px;
    position: absolute;
    left: 32px;
  }

  #detail .comment .user .time{
    position: absolute;
    left: 220px;
    font-weight: normal;
    font-size: 12px;
  }
  #detail .comment .star{
    position: relative;
    left: 32px;
    margin-bottom: 20px;
  }

  #detail .comment .star .satisfiy{
    margin-left: 10px;
    font-size: 14px;
    font-weight: normal;
  }

  #detail .comment .load{
    margin: 0 auto;
    width: 128px;
    height: 31px;
    font-size: 12px;
    color: #727272;
    border: 1px solid #e8e8e8;
    border-radius: 20px;
    text-align: center;
    line-height: 31px;
    /*margin: 0 auto;*/
  }

  #detail .bottomBar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

</style>