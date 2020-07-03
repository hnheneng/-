<template>
 <div>
<van-tabbar v-model="active"  active-color="#FF0000">
  <van-tabbar-item icon="home-o" to='./'>商城</van-tabbar-item>
  <van-tabbar-item icon="orders-o" @click="pice">分类</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart-o" :badge="lbw.length" @click="pica">购物车</van-tabbar-item>
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
         lbw:[]
     }
   },
   methods: {
    logo(){
      this.$router.push('/membership')
    },
    pice(){
      this.$router.push('/classification')
    },
    pica(){
      this.$router.push('/shoppingcart')
    }
   },
   mounted() {
     this.$api.getCard().then(res=>{
       this.lbw = res.shopList
       console.log(res);
     }).catch(err=>{
       console.log(err);
     })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>