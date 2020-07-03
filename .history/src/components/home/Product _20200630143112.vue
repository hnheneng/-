<template>
  <div class="box">
    <!-- 商品推荐 -->
    <div class="hn">
      <div class="fz-16 ml-20">商品推荐</div>
    </div>
    <!-- 轮播 -->
    <div class="box1">
      <van-swipe :loop="false" :width="125" :show-indicators="false">
        <van-swipe-item
          :width="125"
          v-for="(item, index) in recommend"
          :key="index">
          <div class="box-1">
            <img :src="item.image" alt="" width="110px" height="80px" />

            <div class="font1">{{ item.goodsName }}</div>

            <div class="mimi dis-1 al-1">
              <p class="font2 fz-16 ">￥{{ item.price }}</p>
              <p class="font3">￥{{ item.price }}</p>
            </div>

            <div class="dis-1">
              <div class="box-3" >
                <i class="lbw iconfont icon-gouwuche" @click="clickItem(index)"></i>
              </div>
              <div class="box-4 dis-1 al-1 ju-1" @click="goDetail(index)">
                查看详情
              </div>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
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
      id: "",
    };
  },

  methods: {
    goDetail(index) {
      this.$router.push({
        name: "Details",
        query: { id: this.recommend[index].goodsId },
        
      });
       this.$utils.goDetail(this.recommend[index])
        console.log(this.recommend[index].goodsId);
    
    },
      // 加入购物车
    clickItem(index) {
      this.$api
        .addShop({id:this.recommend[index].goodsId})
        .then(res => {
          this.$toast.success(res.msg);
          console.log(res);
        })
        .catch(err => { 
          console.log(err);
        });
    },
  },
  mounted() {},
  watch: {},
  computed: {
    recommend() {
      return this.$store.state.recommend;
    },
    price() {
      return this.$store.state.price;
    },
  },
};
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  background: rgb(238, 238, 238);
}
.hn {
  width: 100%;
  height: 40px;
  background: white;
  display: flex;
  align-items: center;

  border-bottom: 1px solid rgb(240, 240, 240);
}
.box1 {
  width: 100%;
  background: white;
}
.box-1 {
  width: 124px;
  height: 160px;
  border: 1px solid rgb(240, 240, 240);
  border-top: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.font1 {
  max-width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.font2 {
  text-align: left;
}
.font3 {
  text-decoration: line-through;
  color: rgb(153, 153, 153);
  margin-left: 5px;
}
.mimi {
  text-align: left;
}
.box-3 {
  width: 30px;
  height: 25px;
  background: rgb(254, 202, 58);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box-4 {
  width: 60px;
  height: 25px;
  background: rgb(255, 76, 56);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: white;
}
.lbw {
  color: white;
}
</style>
