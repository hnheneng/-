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
       "http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175040_1780.jpg",
       'http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175111_9509.jpg',
       'http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175142_6947.jpg'
        
      ],
    };
  },
  methods: {
    asdas(){
        this.$api.asdas().then(res=>{
           
            console.log(res)
            // this.image1 = res.slides[0]
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
