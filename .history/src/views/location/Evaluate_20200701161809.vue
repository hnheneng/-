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
        <div class="box1">
        <van-tabs v-model="active">
        <van-tab title="待评价">
           <div v-for=""></div>

        </van-tab>
        <van-tab title="已评价">内容 2</van-tab> 
    </van-tabs>
    </div>
    
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
        active:0,

    };
  },
  methods: {
    logo() {
      this.$router.push("./membership");
    },
  },
  mounted() {
    this.$api.tobeEvaluated().then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },
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
  height: 45px;
  border-radius: 5px;
  background: white;
  margin-left: 20px;
  position: relative;
  top: -20px;
  box-shadow: 1px 1px 6px #999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box1 {
  width: 320px;
  height: 100%;
}
</style>
