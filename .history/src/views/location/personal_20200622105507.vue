<template>
  <div>
    <div class="box w-1 dis-1 al-1 po-1 ju-1">
      <div class="btn po-2" @click="imto">〈</div>
      <div class="fz-16">个人资料</div>
    </div>
    <div class="box2 w-1">
      <p class="ml-20">asdasd</p>
    </div>
    <div class="box1 dis-1 al-1 w-1 po-1">
      <div class="ml-20">头像</div>
      <div class="box2-1 dis-1 al-1 po-2">
        <div>
          <img
            :src="user.avatar"
            alt=""
            width="60px"
            height="60px"
            class="img2"
          />
        </div>
        <div class="ml-20">〉</div>
      </div>
    </div>
    <van-form>
      <van-field
        v-model="username"
        label="用户名"
        
      />
      <van-field
        v-model="nickname"
        type="nickname"
        name="昵称"
        label="昵称"
      />
      <van-field v-model="gender" type="gender" name="性别" label="性别" />
      <van-field name="邮箱" label="邮箱" placeholder="请输入邮箱" />
      <van-field
        v-model="msg"
        type="gender"
        name="出生年月"
        label="出生年月"
      />
    </van-form>
    
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
      gender: "",
      id: "",
      nickname: "",
      username: "",
      msg:''
    };
  },
  methods: {
    imto() {
      this.$router.push("./membership");
    },
  },
  mounted() {
    this.$api
      .queryUser()
      .then((res) => {
        this.user = res.userInfo;
         this.username = res.userInfo.username
         this.nickname = res.userInfo.nickname
         this.gender = res.userInfo.gender
         this.year = res.userInfo.year
         this.month = res.userInfo.month
         this.day = res.userInfo.day
         this.msg = `${this.year}年${this.month}月${this.day}日`
        console.log(res);
      });
      
    this.$api
      .saveUser({
       
      })
      .then((res) => {
      console.log(res);
      }).catch(err=>{
          
      });
      
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.box {
  height: 40px;
  border-bottom: 1px solid rgb(240, 240, 240);
}
.btn {
  left: 25px;
  color: blue;
}
.box1 {
  height: 80px;
  border-bottom: 1px solid rgb(240, 240, 240);
}
.box2 {
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(240, 240, 240);
}
.img2 {
  border-radius: 50%;
}

.box2-1 {
  right: 20px;
}
</style>
