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
          <div class="btn1">
            <div class="aaa" @click="collection" v-if="flag === true">
              <div>点击收藏❤</div>
            </div>
            <div
              class="bun"
              @click="intp"
              v-else-if="flag === false || this.isCollection === 1"
            >
              取消收藏❤
            </div>
          </div>
        </div>
      </div>
      <div class="box-1 dis-1 al-1 sb">
        <div class="font4">有赞的官方</div>
        <div class="font4">官方</div>
        <div class="font4">进入店铺></div>
      </div>

      <van-tabs color='transparent'>
        <van-tab title="商品详情"> <div v-html="user.detail"></div></van-tab>
        <van-tab title="商品评论">
          <div v-for="(item, index) in ars" :key="index">
            <div class="deb po-1">
              <div class="img">
                <img
                  :src="item.comment_avatar || item.user[0].avatar"
                  alt=""
                  class="img1"
                />
              </div>
              <div class="nmrs">
                {{ item.comment_nickname || item.user[0].nickname }}:
              </div>
              <div class="po-2 item-time">{{ item.comment_time }}</div>
              <div class="po-2 van1">
                <van-rate
                  v-model="item.rate"
                  disabled
                  disabled-color="#E03204"
                  size="10px"
                />
              </div>

              <div class="po-2 item-1">评价了:{{ item.content }}</div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button
          color="#be99ff"
          type="warning"
          text="加入购物车"
          @click="clickItem"
        /><van-action-sheet v-model="show" title="商品">
          <div class="content">
            <div class="dis-1 mm">
              <div>
                <img :src="user.image" alt width="100" height="100" />
              </div>
              <div class="dis-1 fl-d">
                <div class="mt-20">{{ user.name }}</div>
                <div class=" mt-10">￥{{ user.present_price }}</div>
              </div>
            </div>
            <div class="mmmm dis-1 sb al-1">
              <div>
                <div>购买数量:</div>
                <div class="dis-1 mt-10">
                  <div class="hui">剩余 {{ user.amount }} 件</div>
                  <div class=" ml-20">每人限购50件</div>
                </div>
              </div>
              <div>
                <van-stepper
                v-model="this.value"
                  theme="round"
                  button-size="22"
                  disable-input
                  min="0"
                  max="50"
                  @click="add(item)"
                />
              </div>
            </div>
            <div>
              <van-button type="danger" size="large" @click="Buy">立即购买</van-button>
            </div>
          </div>
        </van-action-sheet>
        <van-goods-action-button
          color="#7232dd"
          type="danger"
          text="立即购买"
          @click="show = true"
        />
      </van-goods-action>
      <div></div>
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
      ids: "",
      user: {},
      obj: {},
      show: false,
      flag: true,
      username: "",
      box: "",
      ars: {},
      oobj:'',
      flagy:false,
    
    };
  },
  methods: {
    collection() {
      if (this.username === "") {
        this.$dialog
          .confirm({
            message: "您还没有登录，是否要登录？",
          })
          .then((res) => {
            this.$router.push("/sigon");
          })
          .catch(() => {
            // on cancel
          });
      } else if (this.username !== "") {
        (this.flag = false),
          this.$api.collections(this.user).then((res) => {
            this.$utils.collection(this.user);
            this.$toast.success(res.msg);
            // console.log(res);
          });
      }
    },
    into() {
      this.$router.push("./");
    },
    intp() {
      this.flag = true;
      this.$api.cancelCollection(this.box).then((res) => {
        //  console.log(res);
        this.$toast.success(res.msg);
       
      });
    },
    clickItem() {
      this.$api
        .addShop({ id: this.user.id })
        .then((res) => {
          this.$toast.success(res.msg);
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  //  立即购买
    Buy(){
      this.$router.push({name:'Order',query:{oobj:this.user,flagy:this.flagy,count:this.count}})
   },
  //  加减
    add(item){
      this.$api.editCart({
        count:this.value,
        id:this.cid,
        mallPrice:this.mallPrice
      }).then(res=>{
        console.log(res);
        }).catch(err=>{
        console.log(err);
      })
    }
  },
  mounted() {
    this.ids = this.$route.query.id;
    // console.log(this.ids);
    this.username = localStorage.getItem("username");
    this.$api
      .goods(this.ids)
      .then((res) => {
        this.ars = res.goods.comment;
        this.user = res.goods.goodsOne;
        this.box = res.goods.goodsOne.id;
        // console.log(this.ars);
      })
      .catch((err) => {
        console.log(err);
      });
    this.$api
      .isCollection(this.ids)
      .then((res) => {
        this.isCollection = res.isCollection;
        if (res.isCollection === 1) {
          this.flag = false;
        } else {
          this.flag = true;
        }
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
.mmmm {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #eee;
 
}
.box {
  width: 100%;
  height: 90px;
  border-bottom: 1px solid rgb(240, 240, 240);
  border-top: 1px solid rgb(240, 240, 240);
}
.content {
  padding: 16px 16px;
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
.mm {
  border-bottom: 1px solid #eee;
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
.deb {
  width: 100%;
  display: flex;
  height: 140px;
}
.img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 20px;
}
.img1 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.nmrs {
  margin-left: 10px;
  margin-top: 20px;
}
.van1 {
  left: 50px;
  top: 46px;
}
.item-time {
  right: 10px;
  top: 20px;
}
.item-1 {
  left: 20px;
  top: 70px;
}
</style>
