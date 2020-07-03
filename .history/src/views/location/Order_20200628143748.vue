<template>
 <div>
<div class="dis-1 al-1 ju-1 w-1 from">
 <div class="con po-2" @click="logo">＜</div>
 <div class="fz-16">订单结算</div>
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
    logo(){
        this.$router.push('./shoppingcart')
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
    position: relative;
    border-bottom: 1px solid #ccc;
}
.con {
    left: 20px;
    color: skyblue;
    font-size: 26px;
}
</style>
