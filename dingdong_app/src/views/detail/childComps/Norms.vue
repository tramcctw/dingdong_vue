<template>
  <div id="norms">
    <h5>规格</h5>
<!--    <div>{{goodsNorms}}</div>-->
    <div class="contain">
      <div>净含量</div>
      <div>{{weight}}</div>
    </div>
    <div class="sort">
      <div>保存条件</div>
      <div>{{conditions}}</div>
    </div>
    <div class="time">
      <div>保质期</div>
      <div>{{sort}}天</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Norms",
    data(){
      return {
        weight:null,
        conditions:null,
        sort:null,
      }
    },
    props:{
      goodsNorms:{
        type:Object,
        default(){
          return null
        }
      }
    },
    mounted() {
      // // console.log(this.conditions)
      //
      // console.log(this.goodsNorms)
      setTimeout(()=>{
        this.conditions = this.goodsNorms.conditions
        this.sort = this.goodsNorms.sort
        this.weight = this.goodsNorms.weight
      },100)

    }
  }
</script>

<style scoped>

  #norms h5,.contain,.sort,.time{
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    box-sizing: border-box;
  }

  .contain,.sort,.time{
    display: flex;
    border-top: 1px solid #f1f1f1;
  }

  .contain>div,.time>div{
    margin-right: 100px;
  }
  .sort>div{
    margin-right: 90px;
  }
  #norms h5{
    font-weight: bolder;
    font-size: 15px;
  }
  #norms {
    font-size: 13px;
    border-top: 10px solid #f8f4f5;
    border-bottom: 10px solid #f8f4f5;
  }
</style>