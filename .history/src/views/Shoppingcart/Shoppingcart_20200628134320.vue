<template>
  <div>
    <van-nav-bar title="我的购物车" left-arrow />
    <div class="ww dis-1 sb">
      <div class="dis-1 ju-1 al-1 fd-l mt-10">
        <div v-if="checkAll===false">
          <van-checkbox v-model="checkAll" @click="clickedAll">全选</van-checkbox>
        </div>
        <div v-else-if="checkAll===true">
          <van-checkbox v-model="checkAll" @click="clickedAll">取消全选</van-checkbox>
        </div>
      </div> 
      <div class=" dis-1 ju-1 al-1 fl-d mr-20">
        <div>合计:</div>
        <div class=" mt-10">请确认订单</div>
      </div>
    </div>
    <div class="dis-1 top1">
      <van-button color="#000080" class="btn">删除</van-button>
      <van-button color="#000080" @click="bun">去结算</van-button>
    </div>
    <!-- 循环出来的数据 -->
    <div class="selectAll" v-for="(item, index) in shopList" :key="index">
      <div class="upper">
        <van-checkbox v-model="item.check" @click="clickRadio"></van-checkbox>
      </div>
      <div class="centre">
        <img :src="item.image_path" class="image" />
      </div>
      <div class="lower">
        <div class="name">{{ item.name }}</div>
        <div class="price">
          <div>￥{{ item.present_price }}</div>
          <div class="strpper">
            <van-stepper v-model="item.count" integer min="1" max="10" @change="clickAdd(item)" />
          </div>
        </div>
      </div>
    </div>
    <div class="zhanwei3"></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      checkAll: false,
      shopList: [],
      ass:[],
      arr:[]
    };
  },
  methods: {
    // 去结算
  //  bun (){
  //      if( checkAll === false){
  //            this.$dialog.alert({
  //             message: "请选择商品", 
  //           })
  //      }else{
  //        this.$router.push('./order')
  //      }
  //  },
     // 删除
    bun() {
      this.ass = this.shopList.filter(item => {
        return item.check === true;
      });
      if (this.ass.length > 0) {
        this.$dialog
          .confirm({
            title: "提示",
            message: "您确定要删除吗？"
          })
          .then(() => {
            this.ass.map(item => {
              this.arr.push(item.cid);
            });
            this.$api
              .deleteShop(this.arr)
              .then(res => {
                this.$toast.success("删除成功");
                this.getData();
              })
              .catch(err => {});
          })
          .catch(() => {});
      } else {
        this.$toast({
          message: "你还没有选择要删除的内容",
          icon: "warning-o",
        });
      }
    },
    // 单选
    clickRadio(item, index) {
      item.check = !this.checkAll;
      console.log(item.check);
      this.shopList.filter(item => {
        return item.check;
      });
    },
    // 购物车加减商品
    clickAdd(item) {
      this.$api
        .editCart(item.count, item.cid, item.mallPrice)
        .then(res => {
          if (res.code === 200) {
            this.$toast(res.msg);
            console.log(res);
          } else {
            this.$toast("修改失败");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 全选
    clickedAll() {
      console.log(this.checkAll);
      this.shopList.map(item => {
        item.check = this.checkAll;
      });
    },

    // 查询获取购物车数据
    getCard() {
      this.$api
        .getCard()
        .then(res => {
          this.shopList = res.shopList;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
    //
  },
  mounted() {
    this.getCard();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.ww {
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #eee;
}
.top1 {
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.btn {
  margin-right: 20px;
}
.selectAll {
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #f8f8f8;
}
.price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}
.name {
  width: 180px;
  white-space: nowrap; /*内容超宽后禁止换行显示*/
  overflow: hidden; /*超出部分隐藏*/
  text-overflow: ellipsis;
}
.centre {
  width: 100px;
  height: 100px;
  border: 1px solid #f8f8f8;
}
.image {
  width: 80px;
  height: 80px;
  display: block;
  margin: 10px auto;
}
.zhanwei3 {
  height: 50px;
}
</style>
