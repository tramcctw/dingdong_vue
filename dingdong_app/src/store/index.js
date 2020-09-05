import Vuex  from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  profile:'',
  address:[],
  cartList:[],
}

const store = new Vuex.Store({
  state,
  mutations:{
    setProfile(state,payload){
      state.profile = payload
    },
    addAddress(state,payload){
      if(state.address.length === 0){
        payload.id = 1
      }else{
        let id = state.address[state.address.length-1].id + 1
        payload.id = id
      }
      state.address.push(payload)
    },
    addCart(state,payload){
      let index = state.cartList.findIndex(item=>item.id === payload.id)
      if(index !== -1){
        state.cartList[index].count ++
      }else{
        Vue.set(payload,'count',1)   //注意这里应该使用set不然不会加入响应式系统里面
        Vue.set(payload,'isChecked',true)
        state.cartList.push(payload)
      }

    }
  },
  getters:{
    getProfile(state){
      return state.profile
    },
  },
  actions:{},
  modules:{}
})

export default store