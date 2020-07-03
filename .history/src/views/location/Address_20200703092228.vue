<template>
  <div>
    <div class="box w-1 dis-1 al-1 ju-1 po-1">
      <div class="font1 po-2 " @click="int">〈</div>
      <div class="fz-16">编辑地址</div>
    </div>

    <van-address-edit
      :area-list="area"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import area from "../../../server/可能要用的js文件/area";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      area: area,
      searchResult: [],
      address:''
        
    };
  },
  methods: {
    int() {
      this.$router.push("/edit");
    },

    onSave(content) {
      // Toast("保存成功");
      // this.$router.push('./edit')
      this.content.address = content.province+content.city+content.county+content.addressDetail
      console.log(this.content.address);
      console.log(content);
      this.content = this.content
      this.$api.address({

        name:content.name,
        tel:content.tel,
        address:this.content.address,
        isDefault:content.isDefault,
        province:content.province,
        city:content.city,
        county:content.county,
        addressDetail:content.addressDetail,
        areaCode:content.areaCode,
        id:content.id
      }).then (res=>{
        console.log(content);
        console.log(res);
        if(res.code===200){
          Toast("保存成功");
          // this.$router.push('./edit')
        }else{
          Toast("保存失败");
        }
      }).catch (err=>{
        console.log(err);
      })
    },
    onDelete() {
      Toast("delete");
    },
    
  },
  mounted() {
    
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.box {
  height: 40px;
  background: white;
  border-bottom: 1px solid rgb(240, 240, 240);
}
.font1 {
  left: 10px;
  font-size: 14px;
  color: skyblue;
}
</style>
