<template>
  <div id="goods-list">
    <img :src="JSON.parse(goods.propaganda)[0].url" alt="" @load="imgLoad" @click="btnClick(goods.id)">
    <div class="title">
      <p class="name">
        <span>{{goods.name}}</span>
      </p>
      <div class="price">
        <span>￥:{{goods.price}}</span>
        <cart-ico class="ico" :item='goods'/>
      </div>
    </div>
  </div>
</template>

<script>
  import CartIco from "../cart/CartIco";
  export default {
    name: "GoodsList",
    components:{
     CartIco
    },
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imgLoad(){
        this.$bus.$emit('imgLoad')
      },
      btnClick(id){
        this.$router.push('/detail/'+id)
      }
    }
  }
</script>

<style scoped>
  #goods-list{
    font-size: 14px;
    height: 300px;
    width: 172.5px;
    border: 1px solid #f1f1f1;
    margin-bottom:10px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 5px;
  }
  #goods-list img{
    /*width: 100vw;*/
    width: 136px;
    height: 130px;
    margin-top: 20px;
  }

  .title .name{
    height: 100px;
    text-align: center;
    padding: 5px;
    box-sizing: border-box;
    /*line-height: 100px;*/
  }

  .title .name span{
    position: relative;
    top: 30px;
  }

  .title .price{
    display: flex;
    justify-content: space-around;
    width: 172.5px;
    color: #fd6069;
  }

  .ico{
    position: relative;
    top: -8px;
  }

</style>