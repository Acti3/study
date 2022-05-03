import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout } from "@/network";

const state ={
    code:'',
    token:localStorage.getItem('TOKEN'),
    userInfo:{}
};
const actions = {
    //获取验证码
    getCode(context,phone){
        reqGetCode(phone).then(res=>{
            context.commit('GETCODE',res.data)
            // console.log(res.data)
        })
    },
    //用户注册
    userRegister(context,user){
       return new Promise((resolve)=>{
            reqUserRegister(user).then(res=>{
                if(res.code==200){
                    resolve("ok")
                }
                else{
                    resolve('falie')
                }
            })
        })
    },
    //用户登录
    userLogin(context,user){
        return new Promise((resolve)=>{
            reqUserLogin(user).then(res=>{
                if(res.code==200){
                    context.commit("USERLOGIN",res.data.token)
                    localStorage.setItem("TOKEN",res.data.token)
                    resolve("ok")
                }else{
                    resolve("faile")
                }
            })
        })
    },
    //获取信息
    userInfo(context){
        reqUserInfo().then(res=>{
            context.commit('USERINFO',res.data)
            console.log(res)
        })
    },
    //退出
    userLogout(context){
        reqLogout().then(res=>{
            if(res.data == 200){
                context.commit('CLEAR')
            }
        })
    }
};
const mutations = {
    GETCODE(state,code){
        state.code = code
    },
    USERLOGIN(state,token){
        state.token = token
    },
    USERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    CLEAR(){
        state.token=''
        state.userInfo={}
        localStorage.removeItem('TOKEN')
    }
};
const getters = {

};
export default{
    state,
    actions,
    mutations,
    getters
}