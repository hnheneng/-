<template>
  <div>

    <div class="from po-1 w-1 dis-1 al-1 ju-1">
      <div class="font1 fz-20 po-2" @click="font">＜</div>
      <div class="fz-14">最近浏览</div>
    </div>
    
     <div v-for="(item,index) in ars" :key="index">
         <div class="box w-1 dis-1 al-1 ju-1 po-1">
          <div class="img1 po-2"><img :src="item.image" alt="" width="100%" height="100%"></div>
          <div class="font2 po-2">{{item.goodsName}}</div>
          <div class="in dis-1 po-2 al-1">
             <div class="font4"> ￥{{item.mallPrice}}</div>
             <div class="font3"> {{item.price}}</div>
          </div>
          <div><van-icon name="close" /></div>
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
    height: 100px;
    border-bottom: 1px solid #eee;
}
.img1 {
    width: 80px;
    height: 80px;
    border: 1px solid #eee;
    left: 20px;
}
.font2 {
    font-size: 12px;
    left: 120px;
    color: orange;
    top: 10px;
}
.font4 {
    color: red;
    font-size: 14px;
}
.font3 {
    text-decoration: line-through;
}
.in {
    left: 120px;
    top: 50px;
}
</style>
