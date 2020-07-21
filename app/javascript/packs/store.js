import Vue from "vue";
import Vuex from "vuex";
import router from "./router.js";
import axios from "vue-axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    bookInfo: {},
    bookInfoBool: false,
    signedIn: "", // このステートの[True/False]でログイン状態の表示如何を決定
  },
  mutations: {
    fetchSignedIn(state) {
      // ログイン時，BooleanがlocalStorageに保存される。
      state.signedIn = !!localStorage.signedIn;
    },
  },
  actions: {
    // ログイン時等において，[$store.dispatch('doFetchSignedIn')]で次のメソッドを呼び出し，[signedIn]を更新する。
    doFetchSignedIn({ commit }) {
      commit("fetchSignedIn");
    },
  },
});
