<template>
  <div>
    <div class="dis-1  ju-1">
      <img src="./12123.jpg" alt="" class="img1" />
      <div class="box">
        <div class="font1 fz-26">登录&nbsp;&nbsp;&nbsp;/ 注册</div>
        <van-cell-group>
          <van-field v-model="username" placeholder="USERNAME" />

          <van-field v-model="password" placeholder="PASSWORD" />

          <van-field
            v-model="phone"
            label="手机号码"
            placeholder="请输入用户名"
          />
        </van-cell-group>
        <!-- 短信验证码 -->
        <van-field
          v-model="sms"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
          <template #button>
            <van-button size="small" type="primary">发送验证码</van-button>
            <van-count-down millisecond :time="time" format="ss" />
          </template>
        </van-field>
        <!-- 验证码 -->
        <div class="dis-1 al-1 ju-1">
          <van-field
            v-model="cods"
            name="验证码"
            label="验证码"
            placeholder=" 请填写验证码"
          />
          <div v-html="code" @click="verify"></div>
        </div>
        <div class="dis-1">
          <van-button type="primary" @click="login">登录</van-button>
          <van-button type="danger" @click="register">注册</van-button>
        </div>
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
      username: "",
      password: "",
      phone: "",
      sms: "",
      code: "",
      cods: "",
    };
  },
  methods: {
    verify() {
      this.$api
        .verify()
        .then((res) => {
          this.code = res;
          //   console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    register() {
      this.$api
        .register({
          nickname: this.username,
          password: this.password,
          verify: this.cods,
        })
        .then((res) => {
          if (res.code === 200) {
            this.$dialog.alert({
              message: "注册成功",
            }),
              localStorage.setItem("usename", "this.username");
            console.log(res);
          } else if (res.code === -2) {
            this.$dialog.alert({
              message: "验证码错误",
            });
          } else if (res.code === -1) {
            this.$dialog.alert({
              message: res.msg,
            });
          } else {
            this.$dialog.alert({
              message: res.msg,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    login(){
        this.$api.login({
            nickname:this.username,
            password:this.password,
            verify:this.cods
        }).then(res=>{
            if(res.code ===200){
                this.$dialog.alert({
                    message:res.msg
                })
            }
            else if (res.code === -1){
                this.$dialog.alert({
                    message:res.msg
                })
            }
            else if (res.code === -2){
                 this.$dialog.alert({
              message: "验证码错误",
            });
            }else{
                this.$dialog.alert({
                    message:res.msg
                })
            }
        })
    }
  },
  mounted() {
    this.verify();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.img1 {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.box {
  width: 350px;
  height: 500px;
  background: rgb(255, 255, 255);
  margin-top: 100px;
}
.font1 {
  margin-top: 20px;
  margin-left: 30px;
}
</style>
