<template>
 <div>
     <div class="box fz-16">会员中心</div>
     <div class="back1 fl-d w-1 dis-1 al-1 ju-1 po-1">
      <div><img :src="user.avatar" alt="" width="100px" height="100px" class="img"></div> 
      <div class="fz-16 color mt-10">欢迎你 : {{user.nickname}}</div>
      <div class="fz-16 color mt-10">退出登录</div>
      <div class="icon fz-20 color po-2"><i class="iconfont icon-shezhi"></i></div>
     </div>
     <div class="box2 w-1 dis-1">
         <div class="jack">
             <van-icon name="balance-pay" />
            <div>代付款</div>
         </div>
          <div class="jack"><van-icon name="free-postage" /></div>
           <div class="jack"><van-icon name="points" /></div>
            <div class="jack"><van-icon name="thumb-circle-o" /></div>
             <div class="jack"><van-icon name="like-o" /></div>
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
       user:[]
     }
   },
   methods: {
       
   },
   mounted() {
    this.$api.queryUser().then(res=>{
        this.user = res.userInfo
        console.log(res)
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
    width: 100%;
    height: 50px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
.back1 {
    height: 250px;
    background: rgb(227,12,123);
}
.img {
   border-radius: 50% 50%;
}
.icon {
    right: 10px;
    top: 10px;

}
.box2 {
    height: 80px;
    background: white;
}
.jack {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 30px;
}
</style>