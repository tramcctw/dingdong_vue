<template>
  <div id="nav-class">
    <div v-for="item in data">
      <img :src="getImage(item)" alt="">
      <div>{{item.name}}</div>
    </div>
  </div>
</template>

<script>
  import {getOneClass} from "network/home";

  export default {
    name: "NavClass",
    data(){
      return {
        data:[]
      }
    },
    mounted() {
      getOneClass().then(res=>{
        this.data = res.data
        // console.log(this.data)
      })
    },
    methods:{
      getImage(item){
        return JSON.parse(item.image)[0].url
      }
    }
  }
</script>

<style scoped>
  #nav-class{
    /*background-color: #eee;*/
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5px;
    box-sizing: border-box;
    font-size: 12px;
    text-align: center;
  }

  #nav-class>div{
    margin: 0 6px 12px 6px;
  }
  #nav-class img{
    width: 50px;
  }
</style>