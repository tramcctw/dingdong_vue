<template>
  <div id="cart">
    <van-sticky :offset-top="0">
    <van-nav-bar
            title="购物车"
            left-arrow
            @click-left="back"
    />
    </van-sticky>

    <div class="content">
      <div v-if="$store.state.cartList.length === 0" class="empty">
        <img src="~assets/backImg/cart.png" alt="">
      </div>

      <div class="stroll"  v-if="$store.state.cartList.length === 0">
        <div class="go" @click="goHome">去逛逛</div>
      </div>

      <div class="goods" v-for="(item,index) in this.$store.state.cartList" :key="item.id">
        <div>
          <van-checkbox v-model="item.isChecked" checked-color="#07c160" @click="checkClick"></van-checkbox>
        </div>
        <div>
          <img :src="goodsImg(item)" alt="">
        </div>
        <div class="title">
          <p class="name">{{item.name}}</p>
          <div class="params">
            <p class="price">￥: {{item.price}}</p>
            <div class="count">
              <span class="left" @click="sub(index)">-</span>
              <span>{{item.count}}</span>
              <span class="right" @click="add(index)">+</span>
            </div>
          </div>
        </div>
      </div>

      <div class="guessLike">
        <div class="title"><span>·</span> 猜你喜欢 <span>·</span></div>
        <div class="guess-goods">
          <goods-list v-for="(item,index) in goodsList" :goods="item" :key="index"/>
        </div>
      </div>

      <div class="acounts">
        <div>
          <van-checkbox @click="sumClick" v-model="checked" class="icon"  checked-color="#07c160"></van-checkbox>
        </div>
        <div class="price">
          <p>￥:{{getPrice}}</p>
          <div class="compute" @click="pay()">去计算</div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import {publics} from "../../common/mixin";
  import {getCartGoods} from "network/cart";
  import GoodsList from "components/content/goods/GoodsList";
  export default {
    name: "Cart",
    components:{
      GoodsList,
    },
    data(){
      return{
        radio:'',
        goodsList:[],
        page:{
          current:1,    //显示第一个
          pageSize:10   //规定每页显示十条数据
        },
        checked:true,
      }
    },
    created() {
      console.log(this.$store.state.cartList)
      getCartGoods(this.page).then(res=>{
        this.goodsList = res.data
      })
    },
    mixins:[publics],
    methods:{
      goHome(){
        this.$router.push('/home')
      },
      goodsImg(item){
        if(item.propaganda){
          return JSON.parse(item.propaganda)[0].url
        }else{
          return JSON.parse(item.carousel)[0].url
        }
      },
      add(index){
        this.$store.state.cartList[index].count ++
      },
      sub(index){
        this.$store.state.cartList[index].count --
        if(this.$store.state.cartList[index].count < 1){
          this.$store.state.cartList.splice(index, 1);
        }
      },
      checkClick(){
        for(let obj of this.$store.state.cartList){
          if(obj.isChecked === false){
            return  this.checked = false
          }
        }
        this.checked = true
      },

      sumClick(){
        if(this.checked === true){
          for(let obj of this.$store.state.cartList){
            obj.isChecked = true
          }
        }else{
          for(let obj of this.$store.state.cartList){
            obj.isChecked = false
          }
        }
      },
      pay(){
          if(sessionStorage.getItem('token') && this.checkGoods()){
            this.$toast.loading({
              message: "支付中，请耐心等待...",
              forbidClick: true,
              overlay:true,
              duration: 3000
            });
            setTimeout(() => {
              this.$toast.success({
                message: "支付成功",
                duration: 1500
              });
            }, 3000);
          }else if(sessionStorage.getItem('token') && this.checkGoods() === false){
            this.$dialog.confirm({
              message:'您还没有选择商品~'
            })
          }else {
            this.$dialog.confirm({
              title:'友情提示:',
              message:'经检测，您还没有登录，现在去登录~'
            }).then(()=>{
              this.$router.push('/login')
            })
          }
      },
      checkGoods(){
        for(let obj of this.$store.state.cartList){
          if(obj.isChecked === true){
            return true
          }
        }
        return false
      }
    },
    computed:{
      getPrice(){
        let sum = 0
        for(let obj of this.$store.state.cartList){
          if(obj.isChecked === true){
            sum += obj.price*obj.count
          }
        }
        return sum.toFixed(2)
      }
    }
  }
</script>

<style scoped>

  #cart .empty{
    width: 100vw;
    height: 234px;
    /*padding: 10vw;*/
    box-sizing: border-box;
    background-color: #f5f5f5;
    text-align: center;
  }

  #cart .goods{
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #f5f5f5;
    box-sizing: border-box;
  }

  #cart .goods img{
    position: relative;
    left: -5px;
  }

  #cart .goods .params{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }

  #cart .goods .params .count{
    font-size: 14px;
  }

  #cart .goods .params .count span:nth-child(2){
    display: inline-block;
    width: 33px;
    height: 20px;
    background-color: #f9f9f9;
    text-align: center;
    line-height: 20px;
    margin: 0 10px;
  }

  #cart .goods .params .count .left,.right{
    font-size: 16px;
    color: #9b9b9b;
  }

  #cart .goods .title .name{
    font-size: 12px;
    width: 245px;
    position: relative;
    top: -15px;
  }

  #cart .content{
    position: absolute;
    top: 46px;
    bottom: 88px;
    overflow: auto;
  }

  .goods img{
    width: 54.5px;
    height: 70px;
  }

  #cart .stroll{
    background-color: #f5f5f5;
  }

  #cart .go{
    height: 35px;
    width: 150px;
    margin: 0 auto;
    background-color: #45c763;
    border-radius: 25px;
    line-height: 35px;
    color: #fff;
    font-size: 14px;
    text-align: center;
  }

  #cart .guessLike{
    font-size: 16px;
    background-color: #f1f1f1;
    /*padding: 5px;*/
    box-sizing: border-box;
  }

  #cart .guessLike .title{
    height: 50px;
    line-height: 50px;
    text-align: center;
  }

  #cart .guessLike .title span{
    font-size: 20px;
    font-weight: bolder;
    position: relative;
    top: 3px;
  }

  #cart .guessLike .guess-goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  #cart .acounts{
    height: 38px;
    position: fixed;
    bottom: 50px;
    left: 0;
    right: 0;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    box-sizing: border-box;
    line-height: 38px;
  }

  #cart .acounts .icon{
    position: relative;
    top: 10px;
  }

  #cart .acounts .price{
    font-size: 16px;
    display: flex;
    justify-content: space-around;
    width: 223px;
  }

  #cart .acounts .price .compute{
    width: 74px;
    height: 30px;
    background-color: red;
    text-align: center;
    line-height: 30px;
    border-radius: 20px;
    font-size: 14px;
    color: #fff;
    position: relative;
    top: 5px;
  }
</style>