import axios from 'axios'
import Vant from 'vant'

export function request(config) {
  const instance = axios.create({
    baseURL:'填写node服务端的运行地址',
    timeout:5000
  })

  instance.interceptors.request.use(config=>{
    Vant.Toast.loading({
      message:'加载中...',
      forbidClick:true,
    })
    return config
  },err=>{
    console.log(err)
  })

  instance.interceptors.response.use(res=>{
    Vant.Toast.clear()
    return res.data
  },err=>{
    Vant.Toast.clear()
    console.log(err);
  })

  return instance(config)
}