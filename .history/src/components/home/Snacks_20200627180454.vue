<template>
  <div>
    <div class="box dis-1 al-1 ju-1 w-1">
      <div class="img1">1F</div>
      <div class="font1 fz-16">休闲食品</div>
    </div>
    <div class="box2">
      <div v-for="(item, index) in floor1" :key="index">
        <div :class="[{ left: index <= 0 }, { right: index >= 1 }]">
          <img :src="item.image" @click="clicked(item.goodsId)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    floor1: {
      type: Array,
      default: () => [],
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    // 跳转详情页并传id
    clicked(goodsId) {
      // console.log();
      this.$router.push({ name: "Details", query: { id: goodsId } });
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.box {
  height: 50px;
  background: rgb(237, 237, 237);
}
.img1 {
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50% 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
.font1 {
  color: red;
}
.box2 {
  width: 100%;
  background: white;
}
.left {
  float: left;
  width: 50%;
}
.right {
  float: right;
  width: 50%;
  display: flex;
}
img {
  width: 100%;
}
</style>
