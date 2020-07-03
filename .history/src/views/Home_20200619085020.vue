<template>
 <div>
<Map></Map>
<div><Rotation></Rotation></div>
</div>

</template>

<script>
import Map from '../components/home/Map'
import Rotation from '../components/home/Rotation'
 export default {
   name: '',
   props: {
 },
   components: {
     Map,Rotation

   },
   data () {
     return {

     }
   },
   methods: {
       asdas(){
         this.$api.recommend().then(res=>{
           console.log(res)
         })
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

</style>
