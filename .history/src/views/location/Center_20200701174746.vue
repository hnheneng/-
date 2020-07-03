<template>
  <div>
    <div class="from w-1 dis-1 al-1 ju-1 po-1">
      <div class="po-2 font1" @click="Jump">＜</div>
      <div class="fz-14">评价中心</div>
    </div>

    <div class="box2 w-1 dis-1 al-1 po-1">
      <div class="img">
        <img :src="ars.image_path" alt="asd" width="100%" height="100%" />
      </div>
      <div class="font2 po-2">商品评分</div>
      <van-rate v-model="value" color="#DC143C" />
    </div>

    <div class="dev">
      <!-- <div><input type="text" class="ipt" placeholder="请说说你的感受"></div> -->
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        class="ipt po-1"
        placeholder="说说你购买的感受吧"
      ></textarea>
      <div class="btn"><van-uploader :after-read="afterRead" /></div>
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
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file);
      },
      ars: {},
      value: 1,
    };
  },
  methods: {
    Jump() {
      this.$router.push("/evaluate");
    },
  },
  mounted() {
    this.ars = this.$route.query.item;
    console.log(this.ars);
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.from {
  height: 40px;
  border-bottom: 1px solid #eee;
}
.font1 {
  color: skyblue;
  left: 20px;
  font-size: 20px;
}
.box2 {
  height: 120px;
}
.img {
  width: 100px;
  height: 80px;
  border: 1px solid white;
  margin-left: 30px;
}
.font2 {
  top: 20px;
  left: 140px;
}
.dev {
  width: 100%;
  background: rgb(247, 247, 247);
  text-align: center;
}
.ipt {
  width: 360px;
  height: 80px;
  border-style: none none none none;
  background-color: rgb(247, 247, 247);
  padding-top: 5px;
}
.btn {
    text-align: left;
}
</style>
