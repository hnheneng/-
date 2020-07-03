<template>
 <div>
   <div class="hn">
       <div class="fz-16 ml-20">商品推荐</div>
   </div>
    <div>
        
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
.hn {
    width: 100%;
    height: 40px;
    background: white;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(240,240,240);
}
</style>