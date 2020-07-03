<template>
 <div>

   <div class="box dis-1 al-1 ju-1 w-1">
       <div class="font1 fz-16">热销商品</div>
   </div>
    <div class="box2">
    
    </div>

 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       hotGoods:{
        type: Array,
        default: () => []
       }
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

.font1 {
    color: red;
}
.box2 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: white;
}
</style>