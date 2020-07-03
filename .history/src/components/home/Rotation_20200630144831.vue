<template>
  <div class="box">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in slides" :key="index">
        <img v-lazy="item.image" width="100%" height="220px" @click="goDetail(item,index)"/>
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
      goDetail(item,index){
         this.$router.push({name:'Details',query:{id:this.slides[index].goodsId}})
         this.$utils.goDetail(this.slides[index])
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
