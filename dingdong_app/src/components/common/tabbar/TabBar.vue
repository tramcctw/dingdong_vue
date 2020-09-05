<template>
  <div>
    <van-tabbar v-model="active" route active-color="#48C568">
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o" class="cart">
        <div class="count" v-if="$store.state.cartList.length !== 0">
          {{$store.state.cartList.length}}
        </div>
        购物车
      </van-tabbar-item>
      <van-tabbar-item :to="$store.getters.getProfile" icon="manager-o" @click="goProfile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    data(){
      return {
        active:0
      }
    },
    methods:{
      goProfile(){
        if(sessionStorage.getItem('token')){
          if(this.$route.path !== '/profile'){
            this.$store.commit('setProfile','/profile')
            this.$router.push('/profile')
          }
        }else {
          this.$dialog.confirm({
            title:'友情提示:',
            message:'经检测，您还没有登录，现在去登录~'
          }).then(()=>{
            this.$router.push('/login')
          })
        }
      },
    }
  }
</script>

<style scoped>
  .cart{
    position: relative;
  }

  .count{
    position:absolute;
    width: 15px;
    height: 15px;
    background-color: red;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 15px;
    top: 2px;
    left: 50px;
    font-size: 12px;
  }
</style>