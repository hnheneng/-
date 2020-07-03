<template>
 <div>
    <div class="box dis-1 w-1 po-1 ju-1 al-1">
       <div class="font1 po-2" @click="init">＜</div>
       <div class="fz-14">我的订单</div>
    </div>

    <div>
    <van-tabs animated swipe-threshold='5'>
  <van-tab title="全部">
     <div v-for="(item,index) in list" :key="index">
       <div>{{list.order_list[0].order_id}}</div>
     </div>
 
  </van-tab>
  <van-tab title="待支付">内容 2</van-tab>
  <van-tab title="待发货">内容 3</van-tab>
  <van-tab title="待收货">内容 4</van-tab>
  <van-tab title="已完成">内容 5</van-tab>
   </van-tabs>
    </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
        list:[]
     }
   },
   methods: {
    init(){
        this.$router.push('/membership')
    }
   },
   mounted() {
     this.$api.getMyOrder().then(res=>{
       this.list= res.list
         console.log(res);
     }).catch(err=>{
         console.log(err);
     })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

.box {
    height: 40px;
    border: 1px solid #eee;
}
.font1 {
    left: 20px;
    color: skyblue;
    font-size: 20px;
}
</style>