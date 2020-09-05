<template>
  <div class="cart" @click="cartClick">
    <van-icon name="cart-o" size="5vw" color="#fff"/>
  </div>
</template>

<script>
  export default {
    name: "CartIco",
    props:{
      item:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      cartClick(){
        this.$toast({
          message:'添加成功',
          duration:500
        })
        // console.log(this.item)
        this.$store.commit('addCart',this.item)
      }
    },
  }
</script>

<style scoped>
  .cart{
    width: 30px;
    height: 30px;
    background-color: #3bb86a;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>