<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data(){
      return {
        bscroll:null
      }
    },
    props:{
      probeType:{
        type:Number,
        default:3
      }
    },
    mounted() {
      this.bscroll = new BScroll('.wrapper',{
        probeType:this.probeType,
        click:true
      })
    },
    methods:{
      refresh(){
        this.bscroll && this.bscroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>