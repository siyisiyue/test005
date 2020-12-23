import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    count: 0,
    list: [],
    inputValue: '',
    nextId: 5,
    viewKey: 'all'
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
    addN(state, step) {
      state.count += step
    },
    sub(state) {
      state.count--
    },
    initList(state, list) {
      state.list = list
    },
    setInputValue(state, val) {
      state.inputValue = val
    },
    addList(state) {
      const obj = {
        id: state.nextId,
        info: state.inputValue,
        done: false
      }
      state.list.push(obj)
      state.nextId++
      state.inputValue = ''
    },
    removeListById(state, id) {
      const index = state.list.findIndex(x => x.id === id)
      if (index >= 0) {
        state.list.splice(index, 1)
      }
    },
    changeStatus(state, param) {
      const index = state.list.findIndex(x => x.id === param.id)
      if (index !== -1) {
        state.list[index].done = param.done
      }
    },
    clearDone(state) {
      state.list = state.list.filter(x => x.done == false)
    },
    changeView(state, viewKey) {
      state.viewKey = viewKey
    }
  },
  //actions专门来处理异步操作
  actions: {
    //在actions中不能直接修改state中的数据，必须通过content.commit某个mutations才行
    addAsync(content) {
      setTimeout(() => {
        content.commit("add")
      }, 1000);
    },
    //带参数
    addNAsync(content, step) {
      setTimeout(() => {
        content.commit('addN', step)
      }, 1000);
    },
    getList(content) {
      axios.get('/list.json').then(({ data }) => {
        content.commit('initList', data)
      })
    }
  },
  modules: {
  },
  //getter用于对 store 中的数据进行加工处理形成新的数据。
  //getter不会修改 store 里的原数据，只起到一个包装器的作用 
  //1.Getter 可以对Store中已有的数据加工处理之后形成新的数据，类似Vue的计算属性
  //2.Store 中数据发生变化，Getter的数据也会跟着变化
  //使用getter的第一种方式：this.$store.getters.showNum
  //使用getter的第二种方式：import {mapGetters} from 'vuex'
  getters: {
    showNum(state) {
      return '当前最新的数量是【' + state.count + '】'
    },
    showDoneNum(state) {
      // let num =0
      // state.list.forEach(x => {
      //   if (!x.done) {
      //     num++
      //   }
      // });

      let num = state.list.filter(x => x.done == false).length
      return num + "条剩余"
    },
    getPrimary: (state) => (key) => {
      return state.viewKey == key ? "primary" : "default"
    },
    
    getView(state){
      switch (state.viewKey) {
        case 'done':
          return state.list.filter(x => x.done == true)
          break;
        case 'undone':
          return state.list.filter(x => x.done == false)
          break;
        default:
          return state.list
          break;
      }
    }
  }
})
