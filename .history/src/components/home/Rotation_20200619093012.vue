<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in slides" :key="index">
        <img v-lazy="item.image" width="100%" height="300px" />
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

<style scoped lang="scss"></style>
