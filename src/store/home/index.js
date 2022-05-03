import { reqCategoryList ,reqBannerList,reqFloorList} from '@/network'

//home小仓库
const state = {
    categoryList: [],
    bannerList:[],
    floor:[]
};
const actions = {
    //    async categoryList(){
    //         let result =await reqCategoryList();
    //         console.log(result)
    //     }
    categoryList(context) {
        reqCategoryList().then(res => {
            // console.log(res)
            // console.log(this.floorList)
            context.commit("CATEGORYLIST", res.data)
        })
    },
    bannerList(context){
        reqBannerList().then(res=>{
            // console.log(res)
            context.commit("BANNERLIST",res.data)
        })
    },
    floorList(context){
        reqFloorList().then(res=>{
            // console.log(res,context)
            context.commit("FLOORLIST",res.data)
            // console.log(res)
        })
    }
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
        // console.log(categoryList)
    },
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
     FLOORLIST(state,floorList){
         state.floor = floorList
        //  console.log(state.floorList)
     }
};
const getters = {};
export default {
    state,
    actions,
    mutations,
    getters
}