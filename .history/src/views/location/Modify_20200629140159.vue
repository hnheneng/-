<template>
  <div>
    <div class="tbn">
      <div class="po-2 zzz" @click="logo">＜</div>
      <div class="fz-16">修改地址</div>
    </div>

    <div>
<van-address-edit
  :area-list="area"
  show-postal
  show-delete
  show-set-default
  show-search-result
   :address-info='addressInfo'
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete" 
/>
 
  </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import area from '../../../server/可能要用的js文件/area'
 export default {
   name:'',
   props:{

    },
   data () {
     return {
      searchResult: [],
     addressInfo:{},
      area:area,
   }
   },
   components: {

   },
   methods: {
     logo(){
       this.$router.push('/edit')
     },
     onSave(content) {
        this.content = this.content
        this.$api.address({
         name:content.name,
        tel:content.tel,
        address:`${content.province}${content.city}${content.county}${content.addressDetail}`,
        isDefault:content.isDefault,
        province:content.province,
        city:content.city,
        county:content.county,
        addressDetail:content.addressDetail,
        areaCode:content.areaCode,
        
       }).then(res=>{
         console.log(res);
       }).catch(err=>{
         console.log(err);
       }),
       this.$router.push('/edit')
    },
    onDelete(id) {     
      this.$api.deleteAddress({id:_id}).then(res=>{
        this.$router.push('/edit')
         console.log(res);  
      }).catch(err=>{
          console.log(err);
      })
    },
    
   },
   mounted() {
       this.addressInfo=JSON.parse(this.$route.query.obj)
    
   },
   watch: {

   },
   computed:{}, 
   
 }
</script>

<style scoped lang="scss">
.tbn {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid #eee;
}
.zzz {
  left: 20px;
  color: skyblue;
  font-size: 20px;
}
</style>
