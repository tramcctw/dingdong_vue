<template>
  <div>
    <van-nav-bar
            title="编辑地址"
            left-arrow
            @click-left="back"
    />
    <div class="edit">
      <van-address-edit
              :area-list="areaList"
              show-search-result
              :search-result="searchResult"
              :area-columns-placeholder="['请选择', '请选择', '请选择']"
              @save="onSave"
      />
    </div>

  </div>
</template>

<script>
  import area from "../../../plugins/area";
  export default {
    name: "AddSit",
    data() {
      return {
        areaList:area,
        searchResult: [],
      };
    },
    methods: {
      onSave(content) {
        let address = {}
        address.name = content.name
        address.tel = content.tel
        address.address = content.province + '/' + content.city + '/' +content.county +'/' + content.addressDetail
        this.$store.commit('addAddress',address)
        console.log(this.$store.state.address)
        this.$router.back()
      },
      back(){
        this.$router.back()
      }
    },
  }
</script>

<style scoped>
  .edit{
    position: fixed;
    top: 46px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: #fff;
  }
</style>