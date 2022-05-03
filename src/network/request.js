import axios from 'axios'
//引入进度条
import nprogress from 'nprogress'
//引入进度条样式
import "nprogress/nprogress.css"
//引入store
import store from '@/store'
export function request(config) {
  const instance = axios.create({
      baseURL:'/api',
      timeout:5000,
  })  
 //请求拦截器：在发请求之前请求拦截器可以检测到，可以在请求发出去之前做一些事情
  instance.interceptors.request.use(config=>{
    // if(store.state.detail.uuid_token){
      //请求头添加一个字段，不可以瞎写
    //   config.headers.userTempId = store.state.detail.uuid_token;
    // }
    //添加token
    if(store.state.user.token){
      config.headers.token = store.state.user.token
    }
        //进度条开始
    nprogress.start();
    
     return config
  },err=>{
      console.log(err)
  })
//响应拦截器
  instance.interceptors.response.use(res=>{

    //进度条结束
    nprogress.done();
      return res.data
  },err=>{
      console.log(err)
  })
  return instance(config)
}