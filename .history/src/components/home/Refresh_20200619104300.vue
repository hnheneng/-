<template>
 <div>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <p class="pp">刷新成功: {{ count }}</p>
</van-pull-refresh>
 </div>
</template>

<script>
import { Toast } from 'vant';
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
      count: 0,
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
.pp {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;
}
</style>