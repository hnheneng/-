<template>
 <div>

   <div class="from w-1 dis-1 al-1 ju-1 po-1">
      <div class="po-2 font1" @click="Jump">＜</div>
      <div class="fz-14">评价中心</div>
    </div>

     <div class="box w-1">
       <div>{{arr.goods.image_path}}</div>
         <div class="img"><img :src="arr.goods[0]" alt="dsa"></div>
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
     arr:{}
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