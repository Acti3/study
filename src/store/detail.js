import {reqGoodsInfo,reqAddShopCart} from '@/network/index'
import {getUUID} from '@/components/common/utils'
const state = {
    goodsInfo:{},
    //游客零时身份
    uuid_token:getUUID()
};
const actions = {
    GoodsList(context,skuId){
        reqGoodsInfo(skuId).then(res=>{
            context.commit('GOODSLIST',res.data)
        })
    },
    //将产品添加到购物车
    addShopCart(context,{skuId,skuNum}){
        return new Promise((resolve)=>{
            reqAddShopCart(skuId,skuNum).then(res=>{
                if(res.code == 201){
                    resolve('ok')
                }else{
                    resolve('faile')
                }
            })
        })
    }
};
const mutations = {
    GOODSLIST(state,goodsInfo){
        state.goodsInfo = goodsInfo
        // console.log(goodsInfo)
    }
};
//简化数据而生
const getters = {
    categoryView(state){
        return state.goodsInfo.categoryView ||{}
    },
    skuInfo(state){
        return state.goodsInfo.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.goodsInfo.spuSaleAttrList || []
    }
};

export default {
    state,
    actions,
    mutations,
    getters
}