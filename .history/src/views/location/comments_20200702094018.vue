<template>
 <div>

   <div class="from w-1 dis-1 al-1 ju-1 po-1">
      <div class="po-2 font1" @click="Jump">＜</div>
      <div class="fz-14">评价中心</div>
    </div>

     <div class="box w-1 po-1">
               <div class=" ml-20 mt-10"><van-rate v-model="arr.rate" /></div>
               <div class="font2 po-2">{{arr.comment_time}}</div>
               <div class="font3 po-2">评价内容：{{arr.content}}</div>
               </div>

          <div v-for="(item,index) in arr.goods" :key="index">
                <div class="dis-1 po-1">
               <div class="img"><img :src="item.image_path" alt="dsa" width="100%" height="100%"></div> 
               <div class="mt-20 ml-20">{{item.name}}</div>
               <div class="yuan" @click="logi"><van-icon name="shopping-cart-o" color='#FFB6C1' size='15px'/></div>
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
     arr:{},
     }
   },
   methods: {
   Jump(){
       this.$router.push('/evaluate')
   }
   },
   mounted() {
    this.arr = this.$route.query.item
    console.log(this.arr);
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
  color: skyblue;
  left: 20px;
  font-size: 20px;
}
.img {
  width: 100px;
  height: 80px;
  border: 1px solid white;
  margin-left: 5px;
}
.font2 {
  right: 50px;
  top: 30px;
}
.box {
  height: 80px;
  border-bottom: 1px solid #eee;
}
.font3 {
  top: 50px;
  left: 20px;
}
.yuan {
  width: 40px;
  height: 40px;
  background: rgb(255,230,226);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  top: 20px;
}
</style>