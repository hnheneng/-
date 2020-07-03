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
    
        
      ],
    };
  },
  methods: {
    
  },
  mounted() {
    this.asdas();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang="scss"></style>
