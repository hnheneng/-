<template>
 <div>
 <div class="box1 w-1 dis-1 al-1">
      <div class="font1" @click="licke">{{ city }} ▼</div>
      <div class="sousuo">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          background="rgb(242,242,242)"
        
        />
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
       city: "",
      value: "",
     }
   },
   methods: {
   licke(){
    this.$router.push('./location')
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