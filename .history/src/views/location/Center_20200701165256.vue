<template>
 <div>
  <div class="from w-1 dis-1 al-1 ju-1 po-1">
    <div class="po-2 font1" @click="Jump">＜</div>
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
      Jump(){
          this.$router.push('/evaluate')
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
  border-bottom: 1px solid #eee;
}
.font1 {
    color: skyblue;
    left: 20px;
    font-size: 16px;
}
</style>