<template>
 <div>
    <div class="bbtt"></div>
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
      this.$api.recommend().then(res=>{
        console.log(res.data);
      })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
 .bbtt {
   width: 300px;
   height: 200px;
   background: red;
 }
</style>
