<template>
  <div id="address">
    <van-sticky :offset-top="0">
      <van-nav-bar
              title="收货地址"
              left-arrow
              @click-left="back"
      />
    </van-sticky>
    <van-address-list
            v-model="chosenAddressId"
            :list="list"
            default-tag-text="默认"
            @add="onAdd"
    />
  </div>
</template>

<script>
  export default {
    name: "Address",
    data() {
      return {
        chosenAddressId: '1',
        list: [],
      };
    },
    methods: {
      onAdd() {
        this.$router.push('/editAddress')
      },
      back(){
        this.$router.back()
      }
    },
    created() {
      console.log(this.list)
      console.log(this.$store.state.address)
      this.list = this.$store.state.address
      // this.list = this.$store.commit('getAddress')
      // console.log(this.$store.commit('getAddress'))
      // console.log(this.list)
    }
  }
</script>

<style scoped>

</style>