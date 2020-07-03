<template>
 <div>
<div class="from po-1 w-1 dis-1 al-1 ju-1">
 <div class="font1 fz-20 po-2" @click="font">＜</div>
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
    font(){
        this.$router.push('/membership')
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
    left: 20px;
    color: skyblue;
}
</style>