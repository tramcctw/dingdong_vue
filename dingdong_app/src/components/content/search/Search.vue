<template>
  <div id="search">
    <van-sticky :offset-top="0">
      <van-search
              placeholder="请输入搜索关键词"
              shape="round"
      />
    </van-sticky>
  </div>
</template>

<script>
  export default {
    name: "Search",
  }
</script>

<style scoped>
  #search{
    position: relative;
    z-index: 9;
  }
</style>