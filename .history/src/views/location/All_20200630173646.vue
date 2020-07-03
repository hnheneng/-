<template>
 <div>
    <div class="box dis-1 w-1 po-1 ju-1 al-1">
       <div class="font1 po-2" @click="init">＜</div>
       <div class="fz-14">我的订单</div>
    </div>

    <div>
       <van-tabs v-model="activeName">
  <van-tab title="标签 1" name="a">内容 1</van-tab>
  <van-tab title="标签 2" name="b">内容 2</van-tab>
  <van-tab title="标签 3" name="c">内容 3</van-tab>
  <van-tab title="标签 2" name="b">内容 2</van-tab>
  <van-tab title="标签 3" name="c">内容 3</van-tab>
</van-tabs>
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
    init(){
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

.box {
    height: 40px;
    border: 1px solid #eee;
}
.font1 {
    left: 20px;
    color: skyblue;
    font-size: 20px;
}
</style>