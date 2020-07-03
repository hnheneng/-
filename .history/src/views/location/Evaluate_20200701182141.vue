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
            <div v-for="(item, index) in arr" :key="index">
              <div class="box5 dis-1 al-1 po-1">
                <div class="img">
                  <img
                    :src="item.image_path"
                    alt="dsa"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div class="font2 po-2">{{ item.name }}</div>
                <div class="bder po-2 dis-1 al-1 ju-1" @click="Jump(item)">
                  <van-icon name="chat" color="red" />
                  <div class="font0">评论晒单</div>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="已评价">

          </van-tab>
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
      active: 0,
      arr: [],
      ppt:[]
    };
  },
  methods: {
    logo() {
      this.$router.push("./membership");
    },
    Jump(item) {
      this.$router.push({ name: "Center", query: { item: item } });
    },
  },
  mounted() {
    // 查询未评价
    this.$api
      .tobeEvaluated()
      .then((res) => {
        this.arr = res.data.list;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // 查询已评价
    this.$api.alreadyEvaluated().then(res=>{
      // this.ppt = res
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
.box5 {
  width: 330px;
  height: 100px;
  border-bottom: 1px solid #eee;
}
.img {
  width: 80px;
  height: 80px;
  border: 1px solid #eee;
}
.font2 {
  top: 10px;
  left: 100px;
}
.font0 {
  color: red;
  margin-left: 5px;
}
.bder {
  width: 80px;
  height: 15px;
  border: 2px solid red;
  border-radius: 10px;
  right: 2px;
  bottom: 5px;
}
</style>
