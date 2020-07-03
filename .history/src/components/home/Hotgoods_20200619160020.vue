<template>
 <div>
   <div class="box dis-1 al-1 ju-1 w-1">
       <div class="img1">3F</div>
       <div class="font1 fz-16">热销推荐</div>
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

   }
 }
</script>

<style scoped lang='scss'>
.box {
    height: 50px;
    background: rgb(237,237,237);
}
.img1 {
    width: 20px;
    height: 20px;
    background: red;
    border-radius: 50% 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}
.font1 {
    color: red;
}
</style>