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
    <div class="dis-1 al-1">
        <div><img :src="user.avatar" alt="" width="60px" height="60px" class="img2">  </div>
        <div class="ml-20">〉</div>
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
        user:[],
      gender: "",
      year: "",
      month: "",
      day: "",
      id: "",
      nickname: "",
      username:''
    };
  },
  methods: {
    imto() {
      this.$router.push("./membership");
    },
  },
  mounted() {
    this.$api
      .queryUser({
        nickname: this.nickname,
        username:this.username,
        id: this._id,
        gender: this.gender,
        year: this.year,
        month: this.month,
        day: this.day,
      })
      .then((res) => {
        this.user = res.userInfo;
        console.log(res);
      });
    this.$api
      .saveUser({
        gender: this.gender,
        year: this.year,
        month: this.month,
        day: this.day,
        id: this.id,
        nickname: this.nickname,
      })
      .then((res) => {
        console.log(res);
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
    border-bottom: 1px solid  rgb(240, 240, 240);
}
.box2 {
    height: 40px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid  rgb(240, 240, 240);
}
.img2 {
    
    border-radius: 50%;
}
</style>
