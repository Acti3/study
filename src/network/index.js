import { request } from "./request"
import { mockrequest } from './mockAjax'
//三级联动接口
export const reqCategoryList = () => request({ url: '/product/getBaseCategoryList', method: 'get' })
//banner
export const reqBannerList = () => mockrequest({ url: 'banner', method: 'get' })
//floor
export const reqFloorList = () => mockrequest({ url: 'floor', method: 'get' })

//search
export const reqSearchInfo = (params) => request({ url: '/list', method: 'post', data: params })

//获取产品详情信息
export const reqGoodsInfo = (skuId) => request({ url: `/item/${skuId}`, method: 'get' })

//将产品添加带购物车
export const reqAddShopCart = (skuId, skuNum) => request({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

//获取购物车列表数据接口
export const reqCartList = () => request({ url: '/cart/cartList', method: 'get' })

//获取验证码

export const reqGetCode = (phone) =>request({url:`/user/passport/sendCode/${phone}`,method:'get'})

//用户注册
export const reqUserRegister = (data)=>request({url:'/user/passport/register',data,method:'post'})

//用户登录

export const reqUserLogin = (data)=>request({url:'/user/passport/login',data,method:'post'})

//获取用户信息（通过token向数据库yao）

export const reqUserInfo = ()=>request({url:'/user/passport/auth/getUserInfo',method:'get'})

//退出登录

export const reqLogout = ()=>request({url:'/user/passport/logout',method:'get'})