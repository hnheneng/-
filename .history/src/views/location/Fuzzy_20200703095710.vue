<template>
 <div>
 <div class="box1 w-1 dis-1 al-1">
      <div class="font1" @click="licke">成都▼</div>
      <div class="sousuo">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          background="rgb(242,242,242)"
        
        />
      </div>
      <div class="font2" @click="topo">取消</div>
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
       city: "",
      value: "",
     }
   },
   methods: {
   licke(){
    this.$router.push('./location')
    },
    topo(){
      this.$router.push('/')
    }
   },
   mounted() {},
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box1 {
  height: 55px;
  background: rgb(242, 242, 242);
  position: fixed;
  z-index: 99;
}
.font1 {
  margin-left: 20px;
  font-size: 14px;
}
.sousuo {
  height: 40px;
  width: 220px;
  margin-left: 12px;
  margin-top: -12px;
}
.font2 {
  font-size: 14px;
  margin-left: 20px;
}
</style>