<template>
  <div class="from">
    <Map></Map>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div><Rotation></Rotation></div>
      <div><Fresh></Fresh></div>
        <div><Product></Product></div>
    </van-pull-refresh>
    <div>
      <!-- <Refresh></Refresh> -->
      <!-- <div><Rotation></Rotation></div>
<div><Fresh></Fresh></div> -->
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import Map from "../components/home/Map";
import Rotation from "../components/home/Rotation";
import Fresh from "../components/home/Fresh";
import Product  from '../components/home/Product '
export default {
  name: "",
  props: {},
  components: {
    Map,
    Rotation,
    Fresh,
    Product
    
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    asdas() {
      this.$api.asdas().then((res) => {
        this.$store.commit("setName", res.data.slides);
        this.$store.commit("lickName", res.data.category);
        this.$store.commit("imgName", res.data.advertesPicture.PICTURE_ADDRESS);
        this.$store.commit('shudaName',res.data.recommend);
        this.$store.commit('PriceName',res.data.recommend.value);
        console.log(res);
      });
    },

    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    },
  },
  mounted() {
    this.asdas();
  },
  watch: {},
  computed: {
    slides() {
      return this.$store.state.slides;
    },
    category() {
      return this.$store.state.category;
    },
    advertesPicture() {
      return this.$store.state.advertesPicture;
    },
    recommendation(){
      return this.$store.state.recommendation
    },
    Price(){
      return this.$$store.state.Price
    }
  },
};
</script>

<style scoped lang="scss">
.from {
  width: 100%;
  height: 2000px;
}
</style>
