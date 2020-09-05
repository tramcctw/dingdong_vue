<template>
  <div id="profile">
    <div class="header">
      <div class="avatar">
        <img src="~assets/img/avatar/avatar.jpg" alt="">
      </div>
      <div class="message">
        <p class="vip">会员号:123456</p>
        <p class="phone">手机号：{{tel}}</p>
      </div>
      <i @click="goMyCenter">
        <van-icon name="arrow" size="30px"/>
      </i>
    </div>
    <scroll class="content">
      <!--    我的资产-->
      <assets/>
      <!--    我的订购-->
      <order/>
      <!--    order tabbar-->
      <order-tab/>
      <div class="backColor">
        <code-addre/>
        <!--    代码人生和收获地址-->
        <green-card/>
        <!--    绿卡  -->
        <tel-feed-back/>
        <!--      关于-->
        <profile-about/>

        <div class="version">当前版本：1.1.1</div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Assets from "./childComps/Assets";
  import Order from "./childComps/Order";
  import OrderTab from "./childComps/OrderTab";
  import CodeAddre from "./childComps/CodeAddre";
  import GreenCard from "./childComps/GreenCard";
  import TelFeedBack from "./childComps/TelFeedBack";
  import ProfileAbout from "./childComps/ProfileAbout";
  import Scroll from "components/common/scroll/Scroll";
  export default {
    name: "Profile",
    data(){
      return {
        tel:''
      }
    },
    created() {
      this.tel = sessionStorage.getItem('token')
    },
    components:{
      Assets,
      Order,
      OrderTab,
      CodeAddre,
      GreenCard,
      TelFeedBack,
      ProfileAbout,
      Scroll
    },
    methods:{
      goMyCenter(){
        this.$router.push('/mycenter')
      }
    }
  }
</script>

<style scoped>

  #profile{
    overflow: auto;
  }

  #profile .content{
    height: calc(100vh - 100px - 50px);
    overflow: hidden;
  }
  #profile::-webkit-scrollbar{
    display: none;
  }
  #profile .header{
    width: 100vw;
    height: 100px;
    background-color: #3bb86a;
    display: flex;
    justify-content: space-around;
    color:#fff;
    line-height: 100px;
  }

  #profile .header .avatar{
    border-radius: 50%;
    height: 60px;
    width: 60px;
    overflow: hidden;
    margin-top: 20px;
  }
  #profile .header img{
    height: 60px;
    width: 60px;
  }

  #profile .header .message{
    font-size: 14px;
  }

  #profile .header .vip{
    position: relative;
    top: -15px;
    left: -20px;
  }

  #profile .header .phone{
    position: relative;
    top: -90px;
    left: -20px;
  }

  #profile .header i{
    position: relative;
    top: 3px;
  }

  #profile .backColor{
    background-color: #f1f1f1;
  }

  #profile .version{
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 14px;
    color: #999;
  }


</style>