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
<!-- 联系人列表 -->
<van-popup v-model="showList" position="bottom">
  <van-contact-list
    v-model="chosenContactId"
    :list="list"
    @add="onAdd"
    @edit="onEdit"
    @select="onSelect"
  />
  </van-popup>
  <!-- 联系人编辑 -->
<van-popup v-model="showEdit" position="bottom">
  <van-contact-edit
    :contact-info="editingContact"
    :is-edit="isEdit"
    @save="onSave"
    @delete="onDelete"
  />
</van-popup>

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
      list: {},
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
        // 添加联系人
    onAdd() {
      this.editingContact = { id: this.list.length };
      this.isEdit = false;
      this.showEdit = true;
    },

    // 编辑联系人
    onEdit(item) {
      this.isEdit = true;
      this.showEdit = true;
      this.editingContact = item;
    },

    // 选中联系人
    onSelect() {
      this.showList = false;
    },

    // 保存联系人
    onSave(info) {
      this.showEdit = false;
      this.showList = false;

      if (this.isEdit) {
        this.list = this.list.map((item) =>
          item.id === info.id ? info : item
        );
      } else {
        this.list.push(info);
      }
      this.chosenContactId = info.id;
    },

    // 删除联系人
    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter((item) => item.id !== info.id);
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
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
      cardType() {
      return this.chosenContactId !== null ? 'edit' : 'add';
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter((item) => item.id === id)[0] : {};
    },
  },
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
