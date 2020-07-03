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
         this.$api.asdas().then(res=>{
           console.log(res)
         })
       }
   },
   mounted() {
      this.asdas()
   },
   watch: {

   },
   computed: {
   slides(){
     return this.$store. state.slides
      }
   }
 }
</script>

<style scoped lang='scss'>

</style>
