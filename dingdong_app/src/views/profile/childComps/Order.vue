<template>
  <div id="order" @click="goCart">
    <div class="my-order">
      <van-icon class="logo" name="records" color="#FFD944" size="7vw"/>
      <p class="info-order">我的订单</p>
      <p class="foo-order">查看全部订单</p>
      <i class="icon">
        <van-icon name="arrow" size="5vw" color="#909090"/>
      </i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Order",
    methods:{
      goCart(){
        this.$router.push('/cart')
      }
    }
  }
</script>

<style scoped>
  #order{
    height: 40px;
    border-top:15px solid #f1f1f1;
  }

  #order .my-order{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #f2f2f2;
  }


  #order .my-order .info-order{
    margin-left: -50px;
    font-size: 13px;
  }
  #order .my-order .foo-order{
    color: #909090;
    font-size: 13px;
    position: relative;
    left: 85px;
  }

  #order .my-order .icon{
    margin-top: 3px;
    margin-left: 40px;
  }

</style>