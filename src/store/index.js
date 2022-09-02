import Vue from "vue"
import Vuex from "vuex"

import feedCount from "@/store/modules/feedCount"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    feedCount,
  },
})
