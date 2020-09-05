<template>
  <div id="codeAddre">
    <div class="code" @click="goVideo">
      <van-icon class="icon" name="friends" color="#FFD944" size="7vw" />
      <div class="card_title">代码人生</div>
      <van-icon class="icon" name="arrow" size="5vw" color="#C7C7C7"/>
    </div>
    <div class="addre" @click="goAddre">
      <van-icon class="icon" name="label-o" color="#76D348" size="7vw"/>
      <div class="card_title">收货地址</div>
      <van-icon class="icon" name="arrow" size="5vw" color="#C7C7C7"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CodeAddre",
    methods:{
      goAddre(){
        this.$router.push('/address')
      },
      goVideo(){
        this.$router.push('/video')
      }
    }
  }
</script>

<style scoped>

  #codeAddre{
    font-size: 16px;
    padding: 0 25px;
    box-sizing: border-box;
    background-color: #fff;
  }
  #codeAddre .code,.addre{
    height: 50px;
    display: flex;
    line-height: 50px;
    align-items: center;
    justify-content: space-between;
  }

  #codeAddre .code{
    border-bottom: 1px solid #f1f1f1;
    box-sizing: border-box;
  }

  #codeAddre .card_title{
    position: relative;
    left: -100px;
    color: #889AA4;
  }
</style>