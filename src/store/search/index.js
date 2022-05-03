import {reqSearchInfo} from '@/network'
//search小仓库
const state={
    searchList:{}
};
const actions={
    searchList(context,params={}){
        reqSearchInfo(params).then(res=>{
            // console.log(res.data)
            context.commit("SEARCHLIST",res.data)
        })
    }
};  
const mutations={
    SEARCHLIST(state,searchList){
        state.searchList = searchList
    }
};
const getters={
    goodsList(state){
        return state.searchList.goodsList;
    },
    trademarkList(state){
        return state.searchList.trademarkList;
    },
    attrsList(state){
        return state.searchList.attrsList;
    }
};
export default{
    state,
    actions,
    mutations,
    getters
}