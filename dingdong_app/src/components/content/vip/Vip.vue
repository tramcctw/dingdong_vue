<template>
  <div id="vip">
    <div class="font">
      <p>加入绿卡会员，预计每年节省806元</p>
      <p>5折开通</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Vip"
  }
</script>

<style scoped>
  #vip{
    padding: 10px;
    box-sizing: border-box;
    background-color: #f8f4f5;
    font-size: 15px;
  }

  #vip .font{
    display: flex;
    flex-wrap: nowrap;
    background-image: linear-gradient(to right, #3ABA60 , #55D26F);
    height: 50px;
    align-items: center;
    justify-content: space-evenly;
    color: #fff;
    box-sizing: border-box;
    border-radius: 8px;
  }
</style>