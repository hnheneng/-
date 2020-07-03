<template>
 <div class="box">
     <!-- 商品推荐 -->
   <div class="hn">
       <div class="fz-16 ml-20">商品推荐</div>
   </div>
  <!-- 轮播 -->
 <div class="box1">
  <van-swipe :loop="false" :width="120">
  <van-swipe-item v-for="(item,index) in recommendation" :key="index">
  <div class="box-1">
      <div class="box-2">  <img :src="item.image" alt="" width="80px" height="50px"></div>
  </div>
  </van-swipe-item>
 
</van-swipe>
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

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {
   recommendation(){
      return this.$store.state.recommendation
    }
   }
 }
</script>

<style scoped lang='scss'>
.box {
    width: 100%;
    background: rgb(238,238,238);
}
.hn {
    width: 98%;
    height: 40px;
    background: white;
    display: flex;
    align-items: center;
    margin-left: 5px;
    border-bottom: 1px solid rgb(240,240,240);
}
.box1{
    width: 98%;
    background: white;
    margin-left: 5px;
    margin-top: 2px;
    border-top: none;
}
.box-1 {
    width: 110px;
    height: 100px;
    border: 1px solid #ccc;
}
.box-2 {
    width: 110px;
}
</style>