<template>
  <div>
    <div class="dis-1 al-1 ju-1 w-1 from">
      <div class="con po-2" @click="logo">＜</div>
      <div class="fz-16">订单结算</div>
    </div>
    <div class="box w-1 po-1">
    
    
      
      <div class="box-2 h-1">
         <div   class="box-1 po-2"> <van-icon name="location-o" size="26px" /></div>
<!-- 联系人卡片 -->
<van-contact-card
  :type="cardType"
  :name="currentContact.name"
  :tel="currentContact.tel"
  @click="showList = true"
/>

      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      list: [],
        chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
    };
  },
  methods: {
    logo() {
      this.$router.push("./shoppingcart");
    },
      
  
  },
  mounted() {
    this.$api
      .getAddress()
      .then((res) => {
        this.list = res.address;
        console.log(res.address);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {},
  computed: {
  }     
};
</script>

<style scoped lang="scss">
.from {
  height: 40px;
  position: relative;
  border-bottom: 1px solid #ccc;
}
.con {
  left: 20px;
  color: skyblue;
  font-size: 26px;
}
.box {
  height: 72px;
  display: flex;
}
.box-1 {
    top: 10px;
}
  
.box-2 {
  width: 100%;
}
</style>
