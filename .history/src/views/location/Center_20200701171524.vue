<template>
 <div>
  <div class="from w-1 dis-1 al-1 ju-1 po-1">
    <div class="po-2 font1" @click="Jump">＜</div>
    <div class="fz-14">评价中心</div>
  </div>

  <div class="box2 w-1 dis-1 al-1">
  
       <div>{{ars.name}}</div>
       <div><img :src="ars.item.image_path" alt="asd"></div>
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
      ars:{}
     }
   },
   methods: {
      Jump(){
          this.$router.push('/evaluate')
      }
    
   },
   mounted() {
       this.ars = this.$route.query.item
       console.log(this.ars);
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
.box2 {
    height: 120px;
}
</style>