<template>
 <div>
  <div class="from dis-1 ju-1 al-1 w-1 po-1">
    <div class="font1 po-2" @click="logo">＜</div>
    <div>评价中心</div>
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
</style>