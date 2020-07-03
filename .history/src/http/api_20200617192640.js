// 用来封装所有的请求
import service from './index'

export default {
    login() {
    //    所有的方法必须return
        return service.post()
    },
     all(){
        return service.get()
     }
}