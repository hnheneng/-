<template>
 <div>
   <div class="box dis-1 al-1 ju-1 po-1 w-1">
    <div class="font1 po-2" @click="ling">〈</div>
    <div class="fz-16">地址列表</div>
   </div>
   <div v-if="list.length<=0">
     <div class="font2 fz-16">你还没有收货地址</div>
     <div><van-address-list
  v-model="chosenAddressId"
  :list="list"
  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
/></div>
     </div>
     <div v-else>
  <van-address-list
  v-model="chosenAddressId"
  :list="list"
  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
/>
</div>
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
     ling(){
       this.$router.push('/membership')
     },
       onAdd() {
       this.$router.push('/address')
    },
    onEdit(item,index) {
         this.$router.push({name:'Modify',query:{obj:JSON.stringify(item)}})
    },
   },
   mounted() {
   this.$api.getAddress().then(res=>{
      this.list = res.address
     console.log(res);
   }).catch(err=>{
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
.font2 {
  margin-top: 20px;
  margin-left: 80px;
  color: #ccc;
}
</style>