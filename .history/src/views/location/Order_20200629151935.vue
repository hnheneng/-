<template>
  <div>
    <div class="dis-1 al-1 ju-1 w-1 from">
      <div class="con po-2" @click="logo">＜</div>
      <div class="fz-16">订单结算</div>
    </div>
    <div class="box w-1 po-1">
      <div class="box-2 h-1">
        <div class="box-1 po-2"><van-icon name="location-o" size="26px" /></div>
        <div class="bobo dis-1  ml-20 mt-10">
          <div class="fz-14">收货人:{{ list.name }}</div>
          <div class="tel fz-14 ml-20">{{ list.tel }}</div>
          <div></div>
        </div>
        <div class="bcbc dis-1">
          收货地址：{{ list.province }}{{ list.city }}{{ list.county }}
          <div class="inina">＞</div>
        </div>

        <div class="font5">(收货不便时,可选择待收货服务)</div>

        <div>
          <img src="./caitiao.jpg" alt="" width="100%" />
        </div>
      </div>
    </div>
    <!-- 购物车数据 -->
    <div v-for="(item, index) in arr" :key="index">
      <div class="box_ dis-1 al-1 ju-1 po-1">
        <div class="img po-2">
          <img :src="item.image_path" alt="asd"  width="100%" height="100%"/>
        </div>
        <div class="co po-2">
          <div>{{item.name}}</div>
          <div class=" mt-10">￥{{item.mallPrice}}</div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      list: {},
      arr: [],
    };
  },
  methods: {
    logo() {
      this.$router.push("./shoppingcart");
    },
  },
  mounted() {
    this.$api
      .getDefaultAddress()
      .then((res) => {
        this.list = res.defaultAdd;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    this.$api
      .getCard()
      .then((res) => {
        this.arr = res.shopList;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {},
  computed: {
    
  },
};
</script>

<style scoped lang="scss">
.from {
  height: 40px;
  position: relative;
  border-bottom: 1px solid #ccc;
}
.bcbc {
  margin-left: 30px;
  margin-top: 10px;
}
.con {
  left: 20px;
  color: skyblue;
  font-size: 26px;
}
.font5 {
  color: orange;
  margin-left: 30px;
}
.co{
  color: red;
  left: 140px;
}
.box {
  display: flex;
}
.box-1 {
  top: 20px;
}

.box_ {
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #eee;
}
.tel {
  margin-left: 120px;
}
.img {
  width: 80px;
  height: 60px;
  border: 1px solid #ccc;
  left: 20px;
}
.bobo {
  margin-left: 30px;
}
.inina {
  font-size: 20px;
  margin-left: 140px;
  color: #ccc;
}
</style>
