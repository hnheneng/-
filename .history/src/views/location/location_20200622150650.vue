<template>
  <div>

  <div class="box dis-1 al-1 w-1 po-1 ju-1">
    <div class="fz-16 font1" @click="kolo">〈</div>
    <div class="fz-16">城市列表</div>
  </div>

  <div class="box1 w-1">
     <van-search v-model="value" placeholder="请输入城市关键字" background="#F2F2F2" />
     <div class="font2">当前城市</div>
  </div>

  <div class="box2 w-1 dis-1 al-1">
    <button class="btn">重庆</button>
  </div>

  <div class="box3 dis-1 w-1 al-1">
    <div class="font2">热门城市</div>
    </div>

    <div class="box4 w-1 dis-1">
     <button class="btn2">北京</button>
     <button class="btn2">上海</button>
     <button class="btn2">杭州</button>
    </div>
    
    <div class="box4 w-1 dis-1">
     <button class="btn2">重庆</button>
     <button class="btn2">成都</button>
     <button class="btn2">厦门</button>
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
    kolo(){
      this.$router.push('./')
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
  background: white;
  border-bottom: 1px solid rgb(240,240,240);
}
.font1 {
  position: absolute;
  left: 10px;
}
.box1 {
  height: 80px;
  background: rgb(242,242,242);
}
.font2 {
  margin-left: 10px;
}
.box2 {
  height: 40px;

}
.btn {
  height: 24px;
  background: white;
  border: 1px solid #ccc;
  width: 80px;
  margin-left: 10px;
  
}
.box3 {
  height: 30px;
  background: rgb(242,242,242);
}
.box4 {
  height: 30px;
  background-color: white;
}
.btn2 {
  width: 100px;
  margin-left: 10px;
  background-color: white;
  border: 1px solid #ccc;
  margin-top: 5px;
}
</style>
