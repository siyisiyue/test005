import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    count: 0
  },
 //只有mutations中定义的函数才有权利才有修改state的权利
  mutations: {
    changeLogin(state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    },
    increment(state) {
      state.count++;
    },
    add(state) {
      //mutations里不能写异步的方法
      // setTimeout(() => {
      //   state.count++
      // }, 1000);
      state.count++
    },
    addN(state,step){
      state.count+=step
    },
    sub(state){
      state.count--
    }
  },
  //actions专门来处理异步操作
  actions: {
    //在actions中不能直接修改state中的数据，必须通过content.commit某个mutations才行
    addAsync(content){
      setTimeout(() => {
        content.commit("add")
      }, 1000);
    },
    //带参数
    addNAsync(content,step){
      setTimeout(() => {
        content.commit('addN',step)
      }, 1000);
    }
  },
  modules: {
  }
})
