// 用来封装所有的请求
import service from './index'

export default {
//    获取首页数据
  asdas (){
    return service.get(`/recommend`)
},
// 搜索
search(value){
    return service.get(`/search?value=${value}`)
},
// 购物车加减商品
editCart({id,mallPrice}){
    return service.post(`/editCart`,{
        id,
        mallPrice
    })
},
// 分类查询
classification(id){
    return service.get(`/classification?mallSubId=${id}`)
},
// 查询获取购物车数据
getCard(){
    return service.post(`/getCard`)
},
// 购物车商品删除
deleteShop(idArr){
    return service.post(`/deleteShop`,{
          idArr
    })
},
// 购物车支付页面
order({address,tel,orderId,totalPrice,idDirect,count}){
    return service.post(`order`,{
        address,tel,orderId,totalPrice,idDirect,count
    })
},
// 单个商品详情
goods(id){
    return service.get(`/goods/one?id=${id}`)
},
// 收藏单个商品
collection(goods){
    return service.post(`/collection`,{
        goods
    })
},
// 取消收藏
cancelCollection(id){
  return service.post(`/cancelCollection`,{
    id
  })
},
// 查询商品是否已收藏
isCollection(id){
    return service.post(`/isCollection`,{
        id
    })
},
// 加入购物车
addShop({id}){
      return service.post(`/addShop`,{
          id
      })
},
// 退出登录
loginOut(){
    return service.post(`/loginOut`,{})
},
// 获取用户信息
queryUser(){
    return service.post(`/queryUser`)
},
// 修改保存用户信息
saveUser({gender,year,month,day,id,nickname}){
    return service.post(`/saveUser`,{
        gender,
        year,
        month,
        day,
        id,
        nickname
    })
},
// 查询用户订单数量
orderNum(){
    return service.get(`/myOrder/orderNum`)
},
// 商品评论
goodsOne({id,rate,content,anonymous,_id,order_id,image}){
   return service.post(`/goodsOne/comment`,{
    id,rate,content,anonymous,_id,order_id,image
   })
},
// 获取登录注册默认验证码
verify(){
    return service.get(`/verify`)
},
// 查询用户收货地址
getAddress(){
    return service.get(`/getAddress`)
},
// 查询默认收货地址
getDefaultAddress(){
    return service.get(`/getDefaultAddress`)
},
// 设置默认收货地址
setDefaultAddress(id){
    return service.post(`/setDefaultAddress`,{
        id
    })
},
// 增加收货地址
address({name,tel,address,isDefault,province,city,county,addressDetail,areaCode,id}){
    return service.post(`/address`,{
        name,tel,address,isDefault,province,city,county,addressDetail,areaCode,id
    })
},
// 删除地址
deleteAddress(id){
    return service.post(`/deleteAddress`,{
        id:_id
    })
},
// 查询我的收藏
collection(){
    return service.get(`/collection/list`)
},
// 注册
register({nickname,password,verify}){
    return service.post(`/register`,{
        nickname,password,verify
    })
},
// 登录
login({nickname,password,verify}){
    return service.post(`/login`,{
        nickname,password,verify
    })
},
// 订单查询
getMyOrder(){
    return service.get(`/getMyOrder`)
},
// 查询已评价
alreadyEvaluated(){
    return service.get(`/alreadyEvaluated`)
},
// 查询未评价
tobeEvaluated(){
    return service.get(`/tobeEvaluated`)
},
// 查询单条评论
evaluateOne({id,_id}){
    return service.post(`/evaluateOne`,{
        id,
        _id
    }
    )
}
}