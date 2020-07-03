<template>
  <div>
    
    <div class="w-1 po-1">
      <div class="rdios" @click="into">〈</div>
      <!-- 轮播 -->
      <van-swipe :autoplay="3000">
        <van-swipe-item>
          <img v-lazy="user.image_path" width="100%" height="400px" />
        </van-swipe-item>
        <van-swipe-item>
          <img v-lazy="user.image" width="100%" height="400px" />
        </van-swipe-item>
      </van-swipe>
      <div class="box">
        <div class="font1">{{ user.name }}</div>
        <div class="font2">{{ user.orl_price }}￥</div>
        <div class="font3"></div>
        <div class="box1 dis-1">
          <div class="font4">运费：{{ user.__v }}</div>
          <div class="font4">剩余：1000</div>
          <div class="font4">收藏</div>
        </div>
      </div>
      <div class="box-1 dis-1 al-1 sb">
        <div class="font4">有赞的官方</div>
        <div class="font4">官方</div>
        <div class="font4">进入店铺></div>
      </div>
       
      <van-tabs v-model="active">
        <van-tab title="商品详情"> <div v-html="user.detail"></div></van-tab>
        <van-tab title="商品评论">商品评论</van-tab>
      </van-tabs>
      <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" />
  <van-goods-action-icon icon="shop-o" text="店铺" />
  <van-goods-action-button color="#be99ff" type="warning" text="加入购物车" /><van-action-sheet v-model="show" title="标题">
  <div class="content">内容</div>
</van-action-sheet>
  <van-goods-action-button color="#7232dd" type="danger" text="立即购买"  @click="show = true"/>
</van-goods-action>
    <div>                                                                                                                                            </div>       
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
      ids: "",
      user: {},
      active: 0,
      show:false,
    };
  },
  methods: {
    into() {
      this.$router.push("./");
    },
  },
  mounted() {
    this.ids = this.$route.query.id;
    console.log(this.ids);

    this.$api
      .goods(this.ids)
      .then((res) => {
        this.user = res.goods.goodsOne;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.rdios {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgb(127, 127, 127);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  position: absolute;
  left: 10px;
  top: 20px;
  z-index: 999;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.box {
  width: 100%;
  height: 90px;
  border-bottom: 1px solid rgb(240, 240, 240);
  border-top: 1px solid rgb(240, 240, 240);
}
.content  {
  padding: 16px 161px;
}
.font1 {
  font-size: 14px;
  margin-left: 10px;
  margin-top: 10px;
}
.font2 {
  color: orange;
  margin-top: 10px;
  margin-left: 10px;
}
.font3 {
  width: 356px;
  height: 1px;
  background: rgb(240, 240, 240);
  margin-left: 10px;
  margin-top: 10px;
}

.box1 {
  justify-content: space-between;
  margin-left: 10px;
  width: 356px;
  margin-top: 4px;
}
.font4 {
  color: #ccc;
}
.box-1 {
  width: 100%;
  height: 40px;
  border-top: 1px solid rgb(240, 240, 240);
  margin-top: 20px;
  border-bottom: 1px solid rgb(240, 240, 240);
}
</style>
