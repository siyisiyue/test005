import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import layout from '../layout/layout.vue'
import helloWorld from '../components/HelloWorld.vue'
import VuexTest from '../views/VuexTest.vue'
import Demo1 from '../views/Demo1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name:'Login',
    component:Login,
    meta:{
      title:'登录'
    }
  },
  {
    path:'/',
    component:layout,
    children:[
      {
        path:'/',
        name:'helloworld',
        component:helloWorld,
        meta:{
          title:'首页'
        }
      },
    ]
  },
  {
    path:'/Vuex',
    component:layout,
    children:[
      {
        path:'/Vuex/jishuqi',
        name:'jishuqi',
        component:VuexTest,
        mete:{
          title:'计数器'
        }
      },
      {
        path:'/Vuex/demo1',
        name:'demo1',
        component:Demo1,
        mete:{
          title:'demo1'
        }
      }
    ]
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    if (token === 'null' || token === ''||token==null) {
      next('/login');
    } else {
      next();
    }
  }
});
export default router
