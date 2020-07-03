<template>
 <div>

<Map></Map>
div
<div><Rotation></Rotation></div>
<div><Fresh></Fresh></div>

</div>
</template>

<script>
import Map from '../components/home/Map'
import Rotation from '../components/home/Rotation'
import Fresh  from '../components/home/Fresh'
 export default {
   name: '',
   props: {
 },
   components: {
     Map,Rotation,Fresh

   },
   data () {
     return {

     }
   },
   methods: {
       asdas(){
         this.$api.asdas().then(res=>{
           this.$store.commit('setName',res.data.slides)
           this.$store.commit('lickName',res.data.category)
           this.$store.commit('imgName',res.data.advertesPicture.PICTURE_ADDRESS)
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
     return this.$store.state.slides
      },
    category(){
      return this.$store.state.category
    },
    advertesPicture(){
      return this.$store.state.advertesPicture
    }  
   }
 }
</script>

<style scoped lang='scss'>

</style>
