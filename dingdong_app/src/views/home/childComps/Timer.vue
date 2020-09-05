<template>
  <div id="timer">
    <h2>今日疯抢</h2>
    <div class="time">
      <span class="item">{{getTime.hours}}</span>
      <span class="icon1 icon">:</span>
      <span class="item">{{getTime.minutes}}</span>
      <span class="icon2 icon">:</span>
      <span class="item">{{getTime.seconds}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Timer",
    data(){
      return{
        hours:'',
        minutes:'',
        seconds:''
      }
    },
    created() {
      //计算倒计时
      let dd = new Date()
      let time = dd.getTime()
      let year = dd.getFullYear()
      let month = dd.getMonth() + 1
      let day = dd.getDate()
      let str = year + '/' + month + '/' + day
      let surplus = parseInt((24*3600*1000 - (time - new Date(str+" "+ "00:00:00").getTime()))/1000)
      let currHour = Math.floor(surplus/3600)
      let currMinute = Math.floor(surplus%3600/60)
      let currSeconds = Math.floor(surplus%3600%60)
      setInterval(()=>{
        currSeconds --
        if(currSeconds < 0){
          currSeconds = 59
          currMinute --
          if(currMinute < 0){
            currMinute = 59
            currHour --
          }
        }
        this.hours = currHour
        this.minutes = currMinute
        this.seconds = currSeconds
      },1000)
    },
    computed:{
      getTime(){
        if(this.hours < 10){
          this.hours = '0' + this.hours
        }
        if(this.minutes < 10){
          this.minutes = '0' + this.minutes
        }
        if(this.seconds < 10){
          this.seconds = '0' + this.seconds
        }
        const obj = {}
        obj.hours = this.hours
        obj.seconds = this.seconds
        obj.minutes = this.minutes
        return obj
      }
    }
  }
</script>

<style scoped>
  #timer{
    font-size: 15px;
    display: flex;
    padding: 10px 10px 10px 30px;
    box-sizing: border-box;
  }

  #timer h2{
    font-size: 19px;
    position: relative;
  }

  #timer h2::before{
    content: "";
    position: absolute;
    width: 6px;
    height: 20px;
    border-radius: 3px;
    left: -15px;
    top: 1px;
    background-color: #3ecd60;
  }
  #timer .item{
    width: 25px;
    height: 25px;
    background-color: #fd6069;
    display: block;
    text-align: center;
    line-height: 25px;
    font-weight: bolder;
    color: #fff;
    margin-left: 15px;
  }

  #timer .time{
    display: flex;
    position: relative;
  }

  #timer .time .icon{
    top: 3px;
    color: #fd6069;
    position: absolute;
  }

  #timer .time .icon1{
    left: 45px;
  }

  #timer .time .icon2{
    left: 85px;
  }
</style>