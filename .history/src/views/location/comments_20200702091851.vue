<template>
 <div>

   <div class="from w-1 dis-1 al-1 ju-1 po-1">
      <div class="po-2 font1" @click="Jump">＜</div>
      <div class="fz-14">评价中心</div>
    </div>

     <div class="box w-1">
               <van-rate v-model="value" />
               <div v-for="(item,index) in arr.goods" :key="index">
               <div class="img"><img :src="item.image_path" alt="dsa" width="100%" height="100%"></div>
         </div>
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
     arr:{},
     value:arr.rate
     }
   },
   methods: {
   Jump(){
       this.$router.push('/evaluate')
   }
   },
   mounted() {
    this.arr = this.$route.query.item
    console.log(this.arr);
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
  border-bottom: 1px solid #eee;
}
.font1 {
  color: skyblue;
  left: 20px;
  font-size: 20px;
}
.img {
  width: 100px;
  height: 80px;
  border: 1px solid white;
  margin-left: 30px;
}
</style>