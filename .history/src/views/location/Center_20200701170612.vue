<template>
 <div>
  <div class="from w-1 dis-1 al-1 ju-1 po-1">
    <div class="po-2 font1" @click="Jump">＜</div>
    <div class="fz-14">评价中心</div>
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
</style>