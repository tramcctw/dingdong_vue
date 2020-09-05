<template>
  <div id="assets">
      <div class=item>
        <h4>0</h4>
        <p>优惠券</p>

      </div>
      <div class="item">
        <h4>12</h4>
        <p>积分</p>
      </div>
    <div class="item">
      <h4>999.8</h4>
      <p>余额(元)</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Assets"
  }
</script>

<style scoped>
  #assets{
    font-size: 16px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  #assets .item{
    flex: 1;
    text-align: center;
  }

</style>