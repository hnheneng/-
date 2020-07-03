<template>
 <div>
  
  <div class="box1 w-1 dis-1 al-1">
   <div class="font1"> {{city}}  ▼</div>
     <div class="sousuo">
       <van-search v-model="value" placeholder="请输入搜索关键词" background='rgb(242,242,242)' />
     </div>
     <div class="font2">搜索</div>
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
      city:'',
      value:''
     }
   },
   methods: {
    
   },
   mounted() {
     let _this = this
   AMap.plugin('AMap.Geolocation', function() {
  var geolocation = new AMap.Geolocation({
    // 是否使用高精度定位，默认：true
    enableHighAccuracy: true,
    // 设置定位超时时间，默认：无穷大
    timeout: 10000,
    // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
    buttonOffset: new AMap.Pixel(10, 20),
    //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    zoomToAccuracy: true,     
    //  定位按钮的排放位置,  RB表示右下
    buttonPosition: 'RB'
  })

  geolocation.getCurrentPosition()
  AMap.event.addListener(geolocation, 'complete', onComplete)
  AMap.event.addListener(geolocation, 'error', onError)

  function onComplete (data) {
    // data是具体的定位信息
    // console.log(data);
    _this.city = data.addressComponent.city
  }

  function onError (data) {
    // 定位出错
  }
})
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box1 {
  height: 55px;
  background: rgb(242,242,242);
}
.font1 {
  margin-left: 20px;
  font-size: 14px;
}
.sousuo {
  height: 40px;
  width: 220px;
  margin-left: 16px;
  margin-top: -12px;
}
.font2 {
  font-size: 14px;
  margin-left: 20px;
}
</style>