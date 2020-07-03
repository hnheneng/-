<template>
  <div class="box">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in slides" :key="index">
        <img v-lazy="item.image" width="100%" height="220px" @click="goDetail(indedx,item.goodsId)"/>
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
      goDetail(index){
         this.$router.push({name:'Details',query:{id:this.slides[index].item.goodsId}})
         this.utils.goDetail(this.slides[index])
      }
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
  margin-top: 55px;
}
</style>
