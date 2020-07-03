<template>
  <div>
    <div class="box w-1 dis-1 al-1 po-1 ju-1">
      <div class="btn po-2" @click="imto">〈</div>
      <div class="fz-16">个人资料</div>
    </div>
    <div class="box1 dis-1 al-1 w-1 po-1">

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
</style>
