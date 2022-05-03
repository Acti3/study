import axios from 'axios'
//引入进度条
import nprogress from 'nprogress'
//引入进度条样式
import "nprogress/nprogress.css"
export function mockrequest(config) {
  const instance = axios.create({
      baseURL:'/mock',
      timeout:5000,
  })  
 //请求拦截器：在发请求之前请求拦截器可以检测到，可以在请求发出去之前做一些事情
  instance.interceptors.request.use(config=>{
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