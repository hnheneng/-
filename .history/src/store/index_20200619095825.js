import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slides:[],
    category:[],
    advertesPicture:[]
  },
  mutations: {
    setName(state,data){
      state.slides = data
    },
    lickName(state,data){
      state.category = data
    },
    imgName(state,data){
      state.advertesPicture= data
    },
  },
  actions: {
  },
  modules: {
  }
})
