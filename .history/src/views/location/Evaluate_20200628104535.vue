<template>
  <div>
    <!-- 评价 -->
    <div class="from dis-1 ju-1 al-1 w-1 po-1">
      <div class="font1 po-2" @click="logo">＜</div>
      <div class="fz-16">评价中心</div>
    </div>
    <!-- 图片 -->
    <div><img src="./evaluate.jpg" alt="" width="100%" height="200px" /></div>
    <!-- 评价 -->
    <div class="box">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        active:0
    };
  },
  methods: {
    logo() {
      this.$router.push("./membership");
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.from {
  height: 40px;
}
.font1 {
  left: 20px;
  color: skyblue;
  font-size: 18px;
}
.box {
  width: 340px;
  height: 40px;
  border-radius: 5px;
  background: slategray;
  margin-left: 20px;
  position: relative;
  top: -20px;
}
</style>
