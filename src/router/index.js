import Vue from 'vue'
import Router from 'vue-router'

/*登录页面引入*/
import Login from '../components/login/login'
import Register from '../components/login/register'
import ForgetPassword from '../components/login/forgetPassword'

/*查询页面引入*/
import SearchOrder from '../components/seachOrder/seachOrder'

/*下单页面引入*/
import CreateOrder from '../components/getOrder/createOrder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{
        title:''
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta:{
        title:''
      }
    },
    {
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: ForgetPassword,
      meta:{
        title:''
      }
    },
    {
      path: '/searchOrder',
      name: 'searchOrder',
      component: SearchOrder,
      meta:{
        title:'运单查询'
      }
    },
    {
      path: '/createOrder',
      name: 'createOrder',
      component: CreateOrder,
      meta:{
        title:'我要下单'
      }
    }
  ]
})
