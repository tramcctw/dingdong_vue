<template>
  <div id="category">
    <Search/>
    <div class="shop-goods">
      <ul>
        <li v-for="(item,index) in goodsTitle" @click="titleClick(item.id,index)"
            :class="{'title':true,'active':currentIndex===index}">{{item.name}}</li>
      </ul>

      <div class="goods">
        <div v-for="(item,index) in currentGoods" :key="index" class="item">
          <img :src="JSON.parse(item.propaganda)[0].url" alt="" @click="toDetail(item.id)">
          <div>
            <h3>{{item.name}}</h3>
            <h4>{{item.bewrite}}</h4>
            <p>
              ￥:{{item.price}}
              <cart-ico class="ico" :item="item"/>
            </p>
          </div>
        </div>
        <bottom-line/>
      </div>

    </div>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import Search from "components/content/search/Search";
  import {getGoodsTitle,getCategoryGoods} from "network/category";
  import BottomLine from "components/content/bottomLine/BottomLine";
  import CartIco from "components/content/cart/CartIco";
  export default {
    name: "Category",
    data(){
      return {
        goodsTitle:[],
        currentIndex:0,
        firstId:null,
        currentGoods:null
      }
    },
    components:{
      Scroll,
      Search,
      BottomLine,
      CartIco
    },
    created() {
      getGoodsTitle().then(res=>{
        this.goodsTitle = res.data
        // console.log(this.goodsTitle)
        this.firstId = this.goodsTitle[0].id
      })

      //初始请求的数据
      setTimeout(()=>{
        getCategoryGoods(this.firstId).then(res=>{
          this.currentGoods = res.data
          console.log(this.currentGoods)
        })
      },100)

    },
    methods:{
      //请求对应类型的商品数据
      titleClick(id,index){
        this.currentIndex = index
        getCategoryGoods(id).then(res=>{
          // console.log(res.data)
          this.currentGoods = res.data
        })
      },
      //商品详情页
      toDetail(id){
        console.log(id)
        this.$router.push('/detail/'+id)
      }
    }
  }
</script>

<style scoped>
  #category ul{
    font-size: 16px;
    position: absolute;
    top: 54px;
    bottom: 50px;
    overflow: auto;
  }

  #category .shop-goods{
    display: flex;
  }

  #category ul::-webkit-scrollbar {
    display: none;
  }
  #category .title{
    height: 60px;
    line-height: 60px;
    width: 112px;
    text-align: center;
    background-color: #f1f1f1;
  }

  #category .active{
    background-color: #fff;
  }

  .goods{
    position: fixed;
    top: 54px;
    bottom: 50px;
    width: calc(100vw - 112px);
    overflow: auto;
    margin-left: 112px;
    padding-left: 12.5px;
    box-sizing: border-box;
  }

  .goods::-webkit-scrollbar {
    display: none;
  }

  .goods .item{
    padding-top: 15px;
    border-top: 1px solid #f6f6f6;
    padding-right:10px;
    box-sizing: border-box;
    display: flex;
  }
  .goods .item h3{
    width: 150px;
    font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .goods .item h4{
    width: 150px;
    font-size: 13px;
    color: #a0a0a0;
    font-weight: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .goods .item p{
    font-size: 15px;
    margin-top: 20px;
    color: #f00;
    font-weight: bolder;
    display: flex;
    justify-content: space-between;
  }

  .goods .item p .ico{
    position: relative;
    top: -6px;
  }
  .goods img{
    width: 90px;
    height: 90px;
  }
</style>