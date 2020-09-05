<template>
  <div id="about">
  <van-nav-bar
          title="关于"
          left-arrow
          @click-left="back"
  />
    <div class="content">
      <p>本站仅为业余时间练习前后端联调作品，如有任何疑问，请联系250438930(微信qq同)</p>
      <p>github地址：<a href="https://github.com/tramcctw">https://github.com/tramcctw</a></p>
    </div>
  </div>
</template>

<script>
  import {publics} from "../../common/mixin";

  export default {
    name: "About",
    mixins:[publics],
  }
</script>

<style scoped>
  #about{
    font-size: 16px;
    position: relative;
    height: 100vh;
    width: 100vw;
    background-color: #fff;
    z-index: 999;
  }

  #about .content{
    padding: 20px;
    box-sizing: border-box;
  }
</style>