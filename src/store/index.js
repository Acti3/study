import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
import home from './home'
import search from './search'
import detail from './detail'
import shopcart from './shopcart'
import user from './user'
export default new Vuex.Store({
    //实现Vuex仓库模块式开发存储数据
    modules:{
        home,
        search,
        detail,
        shopcart,
        user
    }
})
