<template>
 <div>
     <div class="box fz-16">会员中心</div>
     <div class="back1 fl-d w-1 dis-1 al-1 ju-1 po-1">
      <div><img :src="user.avatar" alt="" width="100px" height="100px" class="img"></div> 
      <div class="fz-16 color mt-10">欢迎你 : {{user.nickname}}</div>
      <div class="fz-16 color mt-10">退出登录</div>
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
</style>