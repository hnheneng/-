<template>
 <div>
  <div class="w-1 po-1">
    <div class="rdios" @click="into"> 〈 </div>
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
    ids:''
     } 
   },
   methods: {
   into(){
       this.$router.push('./')
   }
   },
   mounted() {
    this.ids= this.$route.query.id
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.rdios {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: rgb(127,127,127);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 12px;
    position: absolute;
    left: 10px;
    top: 20px;
}
</style>