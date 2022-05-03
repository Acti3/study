import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
export default new VueRouter({
    routes:[
        {
            path:'/shopcart',
            component:ShopCart,
            name:'shopcart'
        },
        {
            path:'/addcartsuccess',
            component:AddCartSuccess,
            name:'addcartsuccess'
        },
        {
            path:'/home',
            component:Home,
            name:'home'
        },
        {
            path:'/login',
            component:Login,
            meta: {
                isHideFooter: true
              }
        },
        {
            path:'/register',
            component:Register,
            meta: {
                isHideFooter: true
              }
        },
        {
            path:'/search/:keyword?',
            component:Search,
            name:'search'
        },
        {
            path:'*',
            redirect:'/home'
        },
        {
            path:'/detail/:skuid',
            component:Detail,
            name:'detail'
        }
    ],
    //滚动行为
    scrollBehavior(){
        return{y:0}
    }
})