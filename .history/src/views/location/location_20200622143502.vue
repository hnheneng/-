<template>
 <div>
  <div class="box dis-1 al-1 w-1 po-1 ju-1">
    <div class="fz-16 font1" @click="kolo">〈</div>
    <div></div>
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
    kolo(){
      this.$router.push('./')
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
.box {
  height: 40px;
  background: white;
  border-bottom: 1px solid rgb(240,240,240);
}
.font1 {
  position: absolute;
  left: 10px;
}
</style>
