import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import layout from '../layout/layout.vue'
import helloWorld from '../components/HelloWorld.vue'
import VuexTest from '../views/VuexTest.vue'
import Demo1 from '../views/Demo1.vue'
import ChaZhi from '../views/Vue/ChaZhi.vue'
import Vbind from '../views/Vue/Vbind.vue'
import Computed from '../views/Vue/Computed.vue'
import Es6 from '../views/JS/ES6.vue'
import Von from '../views/Vue/Von.vue'
import Vif from '../views/Vue/Vif.vue'
import Vfor from '../views/Vue/Vfor.vue'
import CaseShopingCar from '../views/Vue/CaseShopingCar.vue'

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
  },
  {
    path:'/Vue',
    component:layout,
    children:[
      {
        path:'/Vue/ChaZhi',
        name:'chazhi',
        component:ChaZhi
      },
      {
        path:'/Vue/Vbind',
        name:'Vbind',
        component:Vbind
      },
      {
        path:'/Vue/Computed',
        name:'Computed',
        component:Computed
      },
      {
        path:'/Vue/Von',
        name:'Von',
        component:Von
      },
      {
        path:'/Vue/Vif',
        name:'Vif',
        component:Vif
      },
      {
        path:'/Vue/Vfor',
        name:'Vfor',
        component:Vfor
      },
      {
        path:'/Vue/CaseShopingCar',
        name:'CaseShopingCar',
        component:CaseShopingCar
      }
    ]
  },
  {
    path:'Js',
    component:layout,
    children:[
      {
        path:'/Js/Es6',
        name:'Es6',
        component:Es6
      },
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
