import Vue from 'vue'
import Vuex from 'vuex'
import { todostore } from "./todostore";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todostore:todostore
  }
})
