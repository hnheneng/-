<template>
  <div>
    <div class="box dis-1 w-1 po-1 ju-1 al-1">
      <div class="font1 po-2" @click="init">＜</div>
      <div class="fz-14">我的订单</div>
    </div>

    <div>
      <van-tabs animated swipe-threshold="5">
        <van-tab title="全部">
          <div class="from dis-1 ju-1 fl-d al-1">
            <div v-for="(item, index) in list" :key="index">
              <div class="box3 dis-1 w-1 fl-d al-1">
                <div class="box1 dis-1 sb">
                  <div class="font3">订单编号:{{ item.order_id }}</div>
                  <div class="font2">交易完成</div>
                </div>

                <div v-for="(item1, index1) in item.order_list" :key="index1">
                  <div class="boxx dis-1 po-1 al-1">
                    <div class="img1">
                      <img
                        :src="item1.image_path"
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div class="font5 po-2">{{ item1.name }}</div>
                    <div class="font6 po-2">￥{{ item1.present_price }}</div>
                    <div class="font7 po-2">×{{ item1.count }}</div>
                  </div>
                </div>

                <div class="dev po-1">
                   <div></div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="待支付">内容 2</van-tab>
        <van-tab title="待发货">内容 3</van-tab>
        <van-tab title="待收货">内容 4</van-tab>
        <van-tab title="已完成">内容 5</van-tab>
      </van-tabs>
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
    init() {
      this.$router.push("/membership");
    },
  },
  mounted() {
    this.$api
      .getMyOrder()
      .then((res) => {
        this.list = res.list;

        console.log(res);
        console.log(this.list);
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
.box {
  height: 40px;
  border: 1px solid #eee;
}
.dev {
 width: 340px;
 height: 60px;
 border-top: 1px solid #eee;
}
.font1 {
  left: 20px;
  color: skyblue;
  font-size: 20px;
}

.font2 {
  color: orange;
}
.box3 {
  width: 360px;
  // height: 180px;
  background: white;
  border-radius: 10px;
  margin-top: 10px;
}
.box1 {
  width: 340px;
  margin-top: 10px;
  border-bottom: 1px solid #eee;
  height: 20px;
}
.from {
  background: rgb(240, 240, 240);
}
.boxx {
  width: 340px;
  height: 80px;
}
.img1 {
  width: 60px;
  height: 60px;
  border: 1px solid #eee;
  border-radius: 5px;
}
.font5 {
  top: 10px;
  left: 70px;
}
.font6 {
  right: 10px;
  top: 10px;
}
.font7 {
  right: 15px;
  top: 30px;
  color: #999;
}
</style>
