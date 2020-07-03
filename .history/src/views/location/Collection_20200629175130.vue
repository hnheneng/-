<template>
  <div class="box">
    <div class="left">
      <van-icon name="arrow-left" class="icon" @click="clickItem" />
      <div class="text">我的收藏</div>
    </div>
    <div class="right" v-for="(item, index) in list" :key="index">
      <div class="upper">
        <img :src="item.image_path" class="img" />
      </div>
      <div class="middle">
        <div class="name">{{ item.name }}</div>
        <div class="present-price">{{ item.present_price }}</div>
      </div>
      <div class="lower">
        <van-icon name="close" class="close" @click="clickDelete" />
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
      list: [],
    };
  },
  methods: {
    // 点击返回上一级页面
    clickItem() {
      this.$router.go(-1);
    },
    // 查询我的收藏
    getCollectionList() {
      this.$api
        .CollectionList()
        .then((res) => {
          this.list = res.data.list;
          console.log(this.list);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 删除
    clickDelete() {
      this.$dialog.alert({
        title: "提示",
        message: "是否确认删除?",
      });
    },
  },
  mounted() {
    this.getCollectionList();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.left {
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d7d7d7;
}
.icon {
  margin-left: 10px;
}
.text {
  margin-left: 37%;
}
.right {
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
}
.upper {
  width: 100px;
  height: 100px;
  border: 1px solid #f8f8f8;
}
.img {
  width: 80px;
  height: 80px;
  display: block;
  margin: 10px auto;
}
.name {
  width: 180px;
  white-space: nowrap; /*内容超宽后禁止换行显示*/
  overflow: hidden; /*超出部分隐藏*/
  text-overflow: ellipsis;
}
.present-price {
  color: #fb6547;
  margin-top: 20px;
}
.lower {
  margin-top: 23.667vw;
}
.close {
  width: 40px;
  height: 40px;
}
</style>
