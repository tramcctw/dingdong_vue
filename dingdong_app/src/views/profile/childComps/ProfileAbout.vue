<template>
  <div id="about" @click="goAbout">
    <van-icon  class="icon" name="warning" color="#76D348" size="7vw" />
    <div class="card_title">关于</div>
    <van-icon class="icon" name="arrow" size="5vw" color="#C7C7C7"/>
  </div>
</template>

<script>
  export default {
    name: "ProfileAbout",
    methods:{
      goAbout(){
        this.$router.push('/about')
      }
    }
  }
</script>

<style scoped>
  #about{
    height: 50px;
    margin-top: 15px;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 0 25px;
    justify-content: space-between;
    font-size: 16px;
  }

  #about .card_title{
    position: relative;
    left: -110px;
    color: #889AA4;
  }

</style>