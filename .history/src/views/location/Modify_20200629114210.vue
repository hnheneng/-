<template>
  <div>
    <div class="tbn">
      <div class="po-2 zzz" @click="logo">＜</div>
      <div class="fz-16">修改地址</div>
    </div>

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
      @change-detail="onChangeDetail"
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
      addressInfo: {},
      searchResult: [],
      area: area,
    };
  },
  methods: {
    logo() {
      this.$router.push("/edit");
    },
    onSave() {
      Toast("");
    },
    onDelete() {
      Toast("");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [];
      } else {
        this.searchResult = [];
      }
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
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
