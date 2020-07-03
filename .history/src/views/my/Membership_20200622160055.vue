<template>
  <div>
    <div class="box fz-16">会员中心</div>

    <div class="back1 fl-d w-1 dis-1 al-1 ju-1 po-1">
      <div>
        <img
          :src="user.avatar"
          alt=""
          width="100px"
          height="100px"
          class="img"
        />
      </div>
      <div class="fz-16 color mt-10">欢迎你 : {{ user.nickname }}</div>
      <div class="fz-16 color mt-10" @click="sogin">退出登录</div>
      <div class="icon fz-20 color po-2">
        <i class="iconfont icon-shezhi" @click="imto"></i>
      </div>
    </div>

    <div class="box2 w-1 dis-1">
      <div class="jack">
        <van-icon name="balance-pay" />
        <div class="fz-14 mt-10">待付款</div>
      </div>
      <div class="jack">
        <van-icon name="free-postage" />
        <div class="fz-14 mt-10">待发货</div>
      </div>
      <div class="jack">
        <van-icon name="points" />
        <div class="fz-14 mt-10">待收货</div>
      </div>
      <div class="jack">
        <van-icon name="thumb-circle-o" />
        <div class="fz-14 mt-10">评价</div>
      </div>
      <div class="jack">
        <van-icon name="like-o" />
        <div class="fz-14 mt-10">已完成</div>
      </div>
    </div>

    <div class="box3 po-1">
     <div class="icon"><van-icon name="records" /> 全部订单</div>
     <div class="icon1 po-2">〉</div>
    </div>
    
    <div class="box4">
    <div class="box-1 dis-1 al-1  po-1">
    <div class="fz-14"><van-icon name="star-o" /> 收藏商品
    </div>
    <div class="icon1 po-2">〉</div>
    </div>

    <div class="box-1  dis-1 al-1  po-1">
        <div class="fz-14"><van-icon name="location-o" /> 地址管理
    </div>
    <div class="icon1 po-2">〉</div>
    </div>

    <div class="box-2 dis-1 al-1  po-1">
       <div class="fz-14"><van-icon name="eye-o" /> 最近浏览
    </div>
    <div class="icon1 po-2">〉</div>
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
      user: [],
    };
  },
  methods: {
    sogin(){
      this.$api.loginOut().then(res=>{
        console.log(res);
        this.$message({
          msg: res.data.msg,
          type: 'success'
        });
          localStorage.removeItem('user')
          this.$router.push('/login')
      })
    },
    imto(){
      this.$router.push('./personal')
    }
  },
  mounted() {
    this.$api.queryUser().then((res) => {
      this.user = res.userInfo;
      console.log(res);
    });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  height: 50px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.back1 {
  height: 250px;
  background: rgb(227, 12, 123);
}
.img {
  border-radius: 50% 50%;
}
.icon {
  right: 10px;
  top: 10px;
}
.box2 {
  height: 80px;
  background: white;
}
.jack {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
.box3 {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    border-top: 1px solid rgb(240, 240, 240);
    border-bottom: 1px solid rgb(240, 240, 240);
}
.icon {
    font-size: 14px;
    margin-left: 20px;
}
.icon1 {
    font-size: 14px;
    right: 20px;
}
.box4 {
    margin-top: 20px;
    width: 100%;
    height: 120px;
    border-top: 1px solid rgb(240, 240, 240);
    border-bottom: 1px solid rgb(240, 240, 240);
}
.box-1 {
    width: 350px;
    height: 40px;
    margin-left: 25px;
    border-bottom: 1px solid rgb(240, 240, 240);
}
.box-2 {
    width: 350px;
    height: 40px;
    margin-left: 25px;
    
}
</style>
