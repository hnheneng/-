<template>
 <div>
   <div class="dis-1 w-1 al-1 ju-1 po-1 cctv">
      <div class="font1 po-2" @click="init">＜</div>
      <div class="fz-14">我的收藏</div>
   </div>

    <div v-for="(item,index) in arr" :key="index">
      <div class="box w-1 dis-1 po-1">
         <div class="boxx"><img :src="item.image_path" alt="" width="100%" height="100%"></div>
         <div class="font2 po-2">{{item.name}}</div>
         <div class="font3 po-2">￥{{item.present_price}}</div>
      </div>
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
         this.arr = res.data.list
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
  height: 100px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eee;
}
.boxx {
  height: 80px;
  width: 80px;
  border: 1px solid #eee;
  position: absolute;
  left: 20px;
}
.font2 {
  top: 10px;
}
.font3 {
  top: 60px;
}
</style>