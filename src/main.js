// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import axios from 'axios'
import Vuex from 'vuex'
// import infiniteScroll from  'vue-infinite-scroll'

// Vue.use(infiniteScroll);
Vue.use(Vuex);
 const store = new Vuex.Store({
   state: {
     nickName:''
   },
   mutations: {//改变状态
     //更新用户信息
     updateUserInfo(state, nickName) {
       state.nickName = nickName;
     },
   }
 });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
 
  

})
