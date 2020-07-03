<template>
  <div>

    <div class="from po-1 w-1 dis-1 al-1 ju-1">
      <div class="font1 fz-20 po-2" @click="font">＜</div>
      <div class="fz-14">最近浏览</div>
    </div>
    
     <div v-for="(item,index) in ars" :key="index">
         <div class="box w-1 dis-1 al-1 ju-1 po-1">
          <div class="img1"><img :src="item.image" alt="" width="100%" height="100%"></div>
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
        nickname:'',
        ars:[]
    };
  },
  methods: {
    font() {
      this.$router.push("/membership");
    },
  },
  mounted() {
    this.nickname = localStorage.getItem("nickname");
    this.ars = JSON.parse(localStorage.getItem("views"));
    console.log(this.ars);
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.from {
  height: 40px;
  border-bottom: 1px solid #eee;
}
.font1 {
  left: 20px;
  color: skyblue;
}
.box {
    height: 80px;
    border-bottom: 1px solid #eee;
}
.img1 {
    width: 60px;
    height: 60px;
    border: 1px solid #eee;
}
</style>
