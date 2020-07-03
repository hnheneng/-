<template>
 <div class="box">
   <div class="hn">
       <div class="fz-16 ml-20">商品推荐</div>
   </div>
    <div>
         <van-swipe :loop="false" :width="300">
  <van-swipe-item>1</van-swipe-item>
 
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
    margin-left: 3px;
    border-bottom: 1px solid rgb(240,240,240);
}
</style>