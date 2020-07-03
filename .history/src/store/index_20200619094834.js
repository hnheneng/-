import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slides:[],
    category:[]
  },
  mutations: {
    setName(state,data){
      state.slides = data
    },
    lickName(state,data){
      state.category = data
    }
  },
  actions: {
  },
  modules: {
  }
})
