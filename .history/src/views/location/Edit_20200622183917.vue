<template>
 <div>
   <div class="box dis-1 al-1 ju-1 po-1 w-1">
    <div class="font1 po-2">〈</div>
   </div>
  <van-address-list
  v-model="chosenAddressId"
  :list="list"
  :disabled-list="disabledList"

  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
/>
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
   chosenAddressId: '1',
   list:[]
     }
   },
   methods: {
       onAdd() {
       this.$router.push('/address')
    },
    onEdit(item, index) {
      this.$router.push('.address')
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
.box {
  height: 40px;
  background: white;
  border-bottom: 1px solid rgb(240,240,240);
}
.font1 {
  font-size: 16px;
  left: 10px;
  color: skyblue;
}
</style>