<template>
  <div id="login">
    <van-nav-bar
            title="登录"
            left-arrow
            @click-left="back"
    />
    <div class="form">
      <van-field
              v-model="tel"
              name="手机号"
              label="手机号"
              placeholder="手机号"
              :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <div class="verify">
        <van-field
                v-model="number"
                name="验证码"
                label="验证码"
                placeholder="验证码"
                :rules="[{ required: true, message: '请填写验证码' }]"
        />
        <van-button class="btnCode" size="small" type="primary" @click="verify" :disabled="checked">
          <span v-if="count < 60">({{count}}s)</span>获得验证码
        </van-button>
      </div>

      <div style="margin: 16px;">
        <van-button round block type="info" color="#07c160" native-type="submit" @click="submit">
          提交
        </van-button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        tel: '',
        number: '',
        passd:'',
        timer:null,
        count:60,
        setTimer:null
      };
    },
    methods: {
      onSubmit(values) {
        console.log('submit', values);
      },
      back(){
        this.$router.push('/home')
      },
      verify(){
        let reg =  /^1[34578]\d{9}$/;
        if(reg.test(this.tel)){
          this.getNumber()
          this.$dialog.alert({
            title:'您的验证码是',
            message:this.passd
          })
        }else{
          this.$toast({
            message:'手机号码错误',
            duration:1000
          })
        }
      },
      submit(){
        if(this.tel){
          if(this.number){
            if(this.number == this.passd){
              this.$router.replace('/profile')
              this.$store.commit('setProfile','/profile')
              sessionStorage.setItem('token',this.tel)
            }else{
              this.$dialog.alert({
                message:'验证码错误'
              })
            }
          }else{
            this.$dialog.alert({
              message:'请输入验证码'
            })
          }
        }else{
          this.$dialog.alert({
            message:'请输入手机号'
          })
        }
      },
      getNumber(){
        if(this.timer){
          return
        }
        this.passd = parseInt(Math.random()*10000)

        this.setTimer = setInterval(()=>{
          this.count --
        },1000)

        this.timer = setTimeout(()=>{
          clearInterval(this.setTimer)
          this.count = 60
          this.timer = null
        },60000)
      }
    },
    activated() {
      clearTimeout(this.timer)
      clearInterval(this.setTimer)
    },
    computed:{
      checked(){
        if(this.count === 60){
          return false
        }else{
          return true
        }
      }
    }
  }
</script>

<style scoped>
  #login .form{
    position: fixed;
    top: 46px;
    bottom: 0;
    background-color: #fff;
    z-index: 99;
  }
  #login .verify{
    display: flex;
  }
  #login .verify .btnCode{
    margin-right: 20px;
    width: 170px;
    height: 30px;
    border-radius: 20px;
    margin-top: 6px;
    text-align: center;
    line-height: 30px;
  }
</style>