<template>
  <div class="from">
    <div class="box"><Map></Map></div>
    <div class="hn">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div><Rotation></Rotation></div>
      <div><Fresh></Fresh></div>
      <div><Product></Product></div>
      <div><Snacks :floor1="floor1"></Snacks></div>
      <div><Freshfruit :floor2="floor2"></Freshfruit></div>
      <div><Nutritious :floor3="floor3"></Nutritious></div>
      <div><Hotgoods :hotGoods="hotGoods"></Hotgoods></div>
    </van-pull-refresh>
    </div>
    <div>
      <!-- <Refresh></Refresh> -->
      <!-- <div><Rotation></Rotation></div>
<div><Fresh></Fresh></div> -->
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import Map from "../components/home/Map";
import Rotation from "../components/home/Rotation";
import Fresh from "../components/home/Fresh";
import Product from "../components/home/Product ";
import Snacks from "../components/home/Snacks";
import Freshfruit from "../components/home/Freshfruit";
import Nutritious from "../components/home/Nutritious";
import Hotgoods from "../components/home/Hotgoods";
export default {
  name: "",
  props: {},
  components: {
    Map,
    Rotation,
    Fresh,
    Product,
    Snacks,
    Freshfruit,
    Nutritious,
    Hotgoods,
  },
  data() {
    return {
      isLoading: false,
      floor1: [],
      floor2: [],
      floor3: [],
      hotGoods: [],
    };
  },
  methods: {
    asdas() {
      this.$api.asdas().then((res) => {
        this.$store.commit("setName", res.data.slides);
        this.$store.commit("lickName", res.data.category);
        this.$store.commit("imgName", res.data.advertesPicture.PICTURE_ADDRESS);
        this.$store.commit("shudaName", res.data.recommend);
        this.$store.commit("PriceName", res.data.recommend);
        (this.floor1 = res.data.floor1),
          (this.floor2 = res.data.floor2),
          (this.floor3 = res.data.floor3),
          (this.hotGoods = res.data.hotGoods),
          // 分类数据
          localStorage.setItem("category",JSON.stringify(this.category))
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
    recommend() {
      return this.$store.state.recommend;
    },
    price() {
      return this.$store.state.price;
    },
  },
};
</script>

<style scoped lang="scss">
.from {
  width: 100%;
  height: 4020px;
  overflow: auto;
  &::-webkit-scrollbar{
    display:none;
}
}

</style>
