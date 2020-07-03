<template>
  <div>
    <div class="dis-1 al-1 ju-1 w-1 from">
      <div class="con po-2" @click="logo">＜</div>
      <div class="fz-16">订单结算</div>
    </div>
    <div class="box w-1 po-1">
      <div class="box-2 h-1">
        <div class="box-1 po-2"><van-icon name="location-o" size="26px" /></div>
      
      </div>
    </div>
    <!-- 购物车数据 -->
    
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
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.from {
  height: 40px;
  position: relative;
  border-bottom: 1px solid #ccc;
}
.con {
  left: 20px;
  color: skyblue;
  font-size: 26px;
}
.box {
  height: 72px;
  display: flex;
}
.box-1 {
  top: 10px;
}

.box-2 {
  width: 100%;
}
.box_ {
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #eee;
}
.img {
  width: 80px;
  height: 60px;
  border: 1px solid #ccc;
}
</style>
