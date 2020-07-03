<template>
 <div>
<van-tabbar v-model="active"  active-color="#FF0000">
  <van-tabbar-item icon="home-o" to='./'>商城</van-tabbar-item>
  <van-tabbar-item icon="orders-o" @click="pice">分类</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart-o" badge="3">购物车</van-tabbar-item>
  <van-tabbar-item icon="manager-o" @click="logo">我的</van-tabbar-item>
</van-tabbar>
<router-view></router-view>
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
    logo(){
      this.$router.push('/membership')
    },
    pice(){
      this.$router.push('./classification')
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