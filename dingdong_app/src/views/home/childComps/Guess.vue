<template>
  <div id="guess">
    <h4>猜你喜欢</h4>
  </div>
</template>

<script>
  export default {
    name: "Guess"
  }
</script>

<style scoped>
  #guess{
    height: 50px;
    line-height: 50px;
    position: relative;
    font-size: 18px;
    left: 16px;
  }

  #guess h4{
    margin-left:8px;
  }

  #guess::before{
    position: absolute;
    content: "";
    width: 5px;
    height: 20px;
    border-radius: 6px;
    left: -15px;
    top:14px;
    margin: 0 8px;
    background-color: #3ecd60;
  }
</style>