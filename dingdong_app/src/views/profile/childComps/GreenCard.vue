<template>
  <div id="greenCard" @click="cardClick">
    <van-icon class="icon" name="vip-card-o" color="#76D348" size="7vw" />
    <div class="card_title">我的绿卡</div>
    <van-icon class="icon" name="arrow" size="5vw" color="#C7C7C7"/>
  </div>
</template>

<script>
  export default {
    name: "GreenCard",
    methods:{
      cardClick(){
        this.$toast({
          message:'此功能暂未开启。'
        })
      }
    }
  }
</script>

<style scoped>
  #greenCard{
    height: 50px;
    margin-top: 15px;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 0 25px;
    justify-content: space-between;
    font-size: 16px;
  }

  #greenCard .card_title{
    position: relative;
    left: -100px;
    color: #889AA4;
  }
</style>