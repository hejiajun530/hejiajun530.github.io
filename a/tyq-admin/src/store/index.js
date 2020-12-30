import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 存储数据
    routeList: []
  },
  mutations,
  actions,
  getters: {
    // 数据包装
  }
})

export default store;