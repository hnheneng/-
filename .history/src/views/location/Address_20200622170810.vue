<template>
 <div>

   <div class="box w-1 dis-1 al-1 ju-1 po-1">
    <div class="font1 po-2 ">〈</div>
    <div class="fz-16">编辑地址</div>
   </div>  
    
    <van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
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
      areaList,
      searchResult: [],
     }
   },
   methods: {
      onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
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
    border-bottom: 1px solid rgb(240,240,240 );
}
.font1 {
    left: 10px;
    font-size: 14px;
    color: skyblue;
}
</style>