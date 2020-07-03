<template>
 <div>
 <van-pull-refresh v-model="isLoading" @refresh="onRefresh">

</van-pull-refresh>
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
     isLoading: false,
     }
   },
   methods: {
   onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
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