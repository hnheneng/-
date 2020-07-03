<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" width="100%" height="300px" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
  methods: {
    asdas(){
        this.$api.asdas().then(res=>{
            console.log(res)
        })
    }
  },
  mounted() {
    this.asdas();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang="scss"></style>
