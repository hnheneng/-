<template>
 <div>
  <div class="w-1 po-1">
    <div class="rdios" @click="into"> 〈 </div>
   <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="user.image" width="100%" height="220px"/>
  </van-swipe-item>
</van-swipe><img :src="user.image" alt="" width="100%" height="220px">

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
    ids:'',
    user:{}
     } 
   },
   methods: {
    
   into(){
       this.$router.push('./')
   }
   },
   mounted() {

    this.ids = this.$route.query.id;
    console.log(this.ids);

    this.$api.goods(this.ids).then(res=>{
      this.user = res.goods.goodsOne
        console.log(res)
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
.rdios {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: rgb(127,127,127);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 12px;
    position: absolute;
    left: 10px;
    top: 20px;
    z-index: 999;
}
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>