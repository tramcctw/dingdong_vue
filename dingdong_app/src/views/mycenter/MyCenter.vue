<template>
  <div id="center">
    <van-nav-bar
            title="个人中心"
            left-arrow
            @click-left="back"
    />
    <van-form>
      <van-field
              name="头像"
              label="头像"
              placeholder='小目标还没有实现~'
              :disabled="true"
              @click="feedBack"
      />
      <van-field
              name="昵称"
              label="昵称"
              placeholder="叮咚"
              :disabled="true"
              @click="feedBack"
      />
      <van-field
              name="手机号"
              label="手机号"
              :placeholder="getTel"
              :disabled="true"
              @click="feedBack"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" @click="logout">
          退出登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  import {publics} from "../../common/mixin";

  export default {
    name: "MyCenter",
    mixins:[publics],
    methods:{
      feedBack(){
        this.$toast({
          message:'小目标还没有实现~'
        })
      },
      logout(){
        this.$dialog.confirm({
          title:'提示：',
          message:'您确认要退出登陆吗'
        }).then(()=> {
          sessionStorage.removeItem('token');
          this.$store.state.profile = '';
          this.$store.state.cartList = []
          this.$router.push({
            path:'/'
          });
        })
      }
    },
    computed:{
      getTel(){
        return  sessionStorage.getItem('token')
      }
    }
  }
</script>

<style scoped>
  #center{
    height: 100vh;
    width: 100vw;
    background-color: #fff;
    position: relative;
    z-index: 999;
  }

</style>