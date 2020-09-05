<template>
  <div id="orderDetail">
    <van-nav-bar
            title="叮咚买菜"
            left-arrow
            @click-left="back"
    />
    <van-tabs v-model="active" swipeable animated>
      <van-tab title="全部">
        <div class="order">
          <img src="~assets/backImg/empty1.jpeg" alt="">
          <div>暂时没有相关订单~</div>
        </div>
      </van-tab>
      <van-tab title="待支付">
        <div class="order">
          <img src="~assets/backImg/empty1.jpeg" alt="">
          <div>暂时没有相关订单~</div>
        </div>
      </van-tab>
      <van-tab title="待发货">
        <div class="order">
          <img src="~assets/backImg/empty1.jpeg" alt="">
          <div>暂时没有相关订单~</div>
        </div>
      </van-tab>
      <van-tab title="待收货">
        <div class="order">
          <img src="~assets/backImg/empty1.jpeg" alt="">
          <div>暂时没有相关订单~</div>
        </div>
      </van-tab>
      <van-tab title="待评价">
        <div class="order">
          <img src="~assets/backImg/empty1.jpeg" alt="">
          <div>暂时没有相关订单~</div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>

  import {publics} from "../../common/mixin";

  export default {
    name: "OrderDetail",
    data(){
      return {
        active:0
      }
    },
    mixins:[publics],
    created() {
      this.active = parseInt(this.$route.params.id)
    }
  }
</script>

<style scoped>

  #orderDetail{
    height: 100vh;
  }
  #orderDetail .order{
    background-color: #f5f5f5;
    text-align: center;
    font-size: 14px;
    color: #a3a3a3;
    height: calc(100vh - 90px - 50px);
  }
</style>