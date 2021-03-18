import Vue from 'vue';
import Vuex from 'vuex';

import {userStore} from "./user.store"
import {messageStore} from "./message.store"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userStore,
    messageStore
  },
});
