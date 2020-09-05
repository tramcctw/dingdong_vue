<template>
  <div>
    <div class="order_tab">
      <div class="item" @click="goOrderDetail(1)">
        <van-icon class="icon"  name="cash-on-deliver" size="8vw" color="#878787"/>
        <div class="item_title">待支付</div>
      </div>
      <div class="item" @click="goOrderDetail(2)">
        <van-icon class="icon"  name="paid" size="8vw" color="#878787"/>
        <div class="item_title">待发货</div>
      </div>
      <div class="item" @click="goOrderDetail(3)">
        <van-icon class="icon"  name="debit-pay" size="8vw" color="#878787"/>
        <div class="item_title">待收货</div>
      </div>
      <div class="item" @click="goOrderDetail(4)">
        <van-icon class="icon" name="comment-o" size="8vw" color="#878787"/>
        <div class="item_title">待评价</div>
      </div>
      <div class="item">
        <van-icon class="icon active" name="refund-o" size="8vw" color="#878787"/>
        <div class="item_title">退款</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderTab",
    methods:{
      goOrderDetail(index){
        this.$router.push('/orderDetail/' + index)
      }
    }
  }
</script>

<style scoped>
  .order_tab{
    font-size: 14px;
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 7.5px solid #f1f1f1;
  }

  .order_tab .item{
    flex: 1;
    text-align: center;
  }

</style>