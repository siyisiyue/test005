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
import VModel from '../views/Vue/VModel.vue'
// import Prop from '../views/Vue/Prop.vue'
// import Slot from '../views/Vue/Slot.vue'
// import Router from '../views/Vue/VueRouter.vue'
import Mobile from '../views/Mobile/Mobile.vue'
import Home from '../views/Mobile/Home/home.vue'
import Cart from '../views/Mobile/Cart/ShoppingCart.vue'
import Category from 'views/Mobile/category/Category.vue'
import Profile from 'views/Mobile/profile/Profile.vue'
import PageAxios from '../views/Vue/PageAxios.vue'
import BetterScrollPage from 'views/plugin/BetterScroll.vue'


//路由懒加载,
const Prop = () => import('../views/Vue/Prop.vue')
const Slot = () => import('../views/Vue/Slot.vue')
const PageRouter = () => import('../views/Vue/VueRouter.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    redirect: '/helloworld'//重定向
  },
  {
    path: '/Vuex',
    redirect: '/Vuex/jishuqi'//重定向
  },
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/helloworld',
        name: 'helloworld',
        component: helloWorld,
        meta: {
          title: '首页'
        }
      },
    ]
  },
  {
    path: '/Vuex',
    component: layout,
    children: [
      {
        path: '/Vuex/jishuqi',
        name: 'jishuqi',
        component: VuexTest,
        mete: {
          title: '计数器'
        }
      },
      {
        path: '/Vuex/demo1',
        name: 'demo1',
        component: Demo1,
        mete: {
          title: 'demo1'
        }
      }
    ]
  },
  {
    path: '/Vue',
    component: layout,
    children: [
      {
        path: 'ChaZhi',
        name: 'chazhi',
        component: ChaZhi
      },
      {
        path: 'Vbind',
        name: 'Vbind',
        component: Vbind
      },
      {
        path: 'Computed',
        name: 'Computed',
        component: Computed
      },
      {
        path: 'Von',
        name: 'Von',
        component: Von
      },
      {
        path: 'Vif',
        name: 'Vif',
        component: Vif
      },
      {
        path: 'Vfor',
        name: 'Vfor',
        component: Vfor
      },
      {
        path: 'CaseShopingCar',
        name: 'CaseShopingCar',
        component: CaseShopingCar
      },
      {
        path: 'VModel',
        name: 'VModel',
        component: VModel
      }
      ,
      {
        path: 'Prop',
        name: 'Prop',
        component: Prop
      }
      ,
      {
        path: 'Slot',
        name: 'Slot',
        component: Slot
      },
      {
        path: 'Router/:uid',//动态路由
        component: PageRouter,
        meta: {
          title: '路由'
        },
        beforeEnter(to, from, next) {
          console.log("我进来啦")
          next()
        }
      },
      {
        path:'axios',
        component:PageAxios
      }
    ]
  },
  {
    path: '/Js',
    component: layout,
    children: [
      {
        path: '/Js/Es6',
        name: 'Es6',
        component: Es6
      },
    ]
  },
  {
    path: '/Plugins',
    component: layout,
    children: [
      {
        path: '/Plugins/BetterScroll',
        name: 'BetterScroll',
        component: BetterScrollPage
      },
    ]
  },
  {
    path: '/Mobile',
    component: Mobile,
    children: [
      {
        path:'',
        redirect:'home'
      },
      {
        path: 'home',
        component: Home,
      }
      ,
      {
        path: 'cart',
        component: Cart,
      }
      ,
      {
        path: 'profile',
        component: Profile,
      }
      ,
      {
        path: 'category',
        component: Category,
      }
    ]
  },

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,

  routes
})


// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    if (token === 'null' || token === '' || token == null) {
      next('/login');
    } else {
      next();
    }
  }
});

//解决点两下报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
