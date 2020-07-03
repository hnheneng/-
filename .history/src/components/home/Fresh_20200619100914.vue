<template>
  <div>
      <div class="box">
          <div class="dv1 dis-1"></div>
          <div class="mt-20"><img :src="advertesPicture" alt="" width="350px" height="40px"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {
    category() {
      return this.$store.state.category;
    },
    advertesPicture(){
      return this.$store.state.advertesPicture
    } 
  },
};
</script>

<style scoped lang="scss">
.box {
    width: 100%;
    height: 210px;
    background: rgb(238,238,238);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.dv1 {
    width: 360px;
    height: 110px;
    background: white;
    border-radius: 20px;
}
</style>
