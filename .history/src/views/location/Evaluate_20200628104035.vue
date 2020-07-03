<template>
 <div>
     <!-- 评价 -->
  <div class="from dis-1 ju-1 al-1 w-1 po-1">
    <div class="font1 po-2" @click="logo">＜</div>
    <div class="fz-16">评价中心</div>
  </div>
  <!-- 图片 -->
   <div><img src="./evaluate.jpg" alt="" width="100%" height="200px"></div>
    <!-- 评价 -->
   <div class="box">
       <van-tabs v-model="active">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>

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

     }
   },
   methods: {
    logo(){
        this.$router.push('./membership')
    }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.from {
    height: 40px;
}
.font1{
    left: 20px;
    color: skyblue;
    font-size: 18px;
}
.box {
    width: 300px;
    height: 30px;
    border-radius: 5px;
    background: slateblue;
}
</style>