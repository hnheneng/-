<template>
 <div>
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

</style>