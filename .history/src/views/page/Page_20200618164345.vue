<template>
 <div>
<van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" to='./page'>商城</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart-o" badge="3">购物车</van-tabbar-item>
  <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
</van-tabbar>
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
         active: 0,
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

</style>