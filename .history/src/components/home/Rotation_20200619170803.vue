<template>
  <div class="box">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in slides" :key="index">
        <img v-lazy="item.image" width="100%" height="220px" />
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
        
    };
  },
  methods: {
    
  },
  mounted() {
  
  },
  watch: {},
  computed: {
    slides(){
     return this.$store.state.slides
      }
  },
};
</script>

<style scoped lang="scss">
.box {
  margin-top: 55x;
}
</style>
