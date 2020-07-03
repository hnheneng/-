<template>
 <div class="box">
     <!-- 商品推荐 -->
   <div class="hn">
       <div class="fz-16 ml-20">商品推荐</div>
   </div>
  <!-- 轮播 -->
 <div class="box1">
  <van-swipe :loop="false" :width="125" :show-indicators= 'false'>
  <van-swipe-item  :width="125" v-for="(item,index) in recommendation" :key="index">
  <div class="box-1">
  <img :src="item.image" alt="" width="110px" height="80px">
  <div class="font1">{{item.goodsName}}</div>
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
    width: 100%;
    height: 40px;
    background: white;
    display: flex;
    align-items: center;

    border-bottom: 1px solid rgb(240,240,240);
}
.box1{
    width: 100%;
    background: white;

    }
.box-1 {
    width: 124px;
    height: 160px;
    border: 1px solid rgb(240,240,240);
    border-top:none ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.font1 {
    max-width: 110px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}

</style>