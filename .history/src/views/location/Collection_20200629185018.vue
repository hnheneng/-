<template>
 <div>
   <div class="dis-1 w-1 al-1 ju-1 po-1 cctv">
      <div class="font1 po-2" @click="init">＜</div>
      <div class="fz-14">我的收藏</div>
   </div>

    <div v-for="(item,index) in arr" :key="index">
      <div class="box w-1 dis-1 po-1"></div>
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
         arr:[]
     }
   },
   methods: {
     init (){
       this.$router.push('/membership')
     }
   },
   mounted() {
       this.$api.collection().then(res=>{
         console.log(res);
         this.arr = res
       }).catch (err=>{
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
.cctv{
  height: 40px;
  border-bottom: 1px solid #eee;
}
.font1 {
  left: 20px;
  color: skyblue;
  font-size: 20px;
}
.box {
  height: 120px;
  justify-content: center;
  align-items: center;
}
</style>