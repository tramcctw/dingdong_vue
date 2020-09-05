<template>
  <div id="video">
    <van-nav-bar
            title="video"
            left-arrow
            @click-left="back"
    />
    <div class="video">
      <video controls loop autoplay>
        <source src="../../assets/video/video.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Vedio",
    methods:{
      back(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  #video{
    height: 100vh;
    width: 100vw;
    background-color: #fff;
    z-index: 999;
  }
  #video .video{
    width: 100vw;
    position: absolute;
    top: 46px;
    bottom: 0;
    background-color: #fff;
    z-index: 9999;
  }

  #video .video video{
    width: 100vw;
    display: block;
  }
</style>