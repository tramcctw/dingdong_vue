<template>
  <div id="telFeedBack">
      <div class="tel" @click="contact">
        <van-icon class="icon" name="phone-o" color="#76D348" size="7vw" />
        <div class="card_title">联系电话</div>
        <van-icon  class="icon" name="arrow" size="5vw" color="#C7C7C7"/>
      </div>
      <div class="feedBack" @click="feedClick">
        <van-icon class="icon" name="chat-o" color="#FFD944" size="7vw" />
        <div class="card_title">意见反馈</div>
        <van-icon class="icon" name="arrow" size="5vw" color="#C7C7C7"/>
      </div>
  </div>
</template>

<script>
  export default {
    name: "TelFeedBack",
    methods:{
      contact(){
        this.$dialog.confirm({
          message:'喜欢的小伙伴记得点颗星星，如有疑问，请联系作者，微信：250438930',
          confirmButtonText:'去github'
        }).then(()=>{
          window.location.href = 'https://github.com/tramcctw'
        })
      },
      feedClick(){
        this.$toast({
          message:'此功能暂未开启。'
        })
      }
    }
  }
</script>

<style scoped>
  #telFeedBack{
    font-size: 16px;
    margin-top: 15px;
    background-color:#fff;
    padding: 0 25px;
  }

  #telFeedBack .tel,.feedBack{
    display: flex;
    align-items: center;
    height: 50px;
    justify-content: space-between;
  }

  #telFeedBack .tel{
    border-bottom: 1px solid #f1f1f1;
  }

  #telFeedBack .card_title{
    position: relative;
    left: -100px;
    color: #889AA4;
  }

</style>