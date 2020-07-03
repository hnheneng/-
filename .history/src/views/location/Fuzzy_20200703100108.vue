<template>
 <div>
 <div class="box1 w-1 dis-1 al-1">
      <div class="font1" @click="licke">成都市▼</div>
      <div class="sousuo">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          background="rgb(242,242,242)"
        
        />
      </div>
      <div class="font2" @click="topo">取消</div>
     </div>

     <div class="content">
      <div class="search-bg">
        <div v-if="value === ''">
          <div v-if="this.arr.length === '' ">暂无搜索历史</div>
          <div v-else>
            <div class="searchHistory">
              <div class="h-top">
                <div>搜索历史</div>
                <div @click="dels" class="icon">
                  <van-icon name="delete" size="20" />
                </div>
              </div>
              <div class="box">
                <div class="box-history">
                  <div v-for="(item1,index1) in arr" :key="index1" class="history">
                    <div @click="click" class="bhfont">{{item1}}</div>
                    <div @click="del(index1)">
                      <van-icon name="close" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <!-- 如果搜索出来没有商品 提示没有商品 -->
          <div v-if="searchlist.length < 1 || value === ' ' ">
            <van-cell>暂无历史记录</van-cell>
          </div>
          <!-- 如果搜索出了商品  -->
          <div v-else class="aaa">
            <!-- 循环显示商品信息 -->
            <van-cell v-for="item in searchlist" :key="item.id">
              <div class="mysearch-list" @click="goDetail(item)">
                <img :src="item.image" class="search-img" />
                <div v-html="item.names" class="goods-name"></div>
              </div>
            </van-cell>
          </div>
        </div>
      </div>
    </div>
 </div>
</template>


<script>
export default {
  name: "Searched",
  props: {},
  components: {},
  data() {
    return {
      value: "",
      searchlist: [],
      arr: [],
      list:""
    };
  },
  methods: {
    getSearch() {
      if (this.value !== "") {
        this.$api.search(this.value)
        .then(res => {
            res.data.list.map(item => {
              this.$set(item, "names", item.name);
            });
            this.searchlist = res.data.list;
            console.log(this.searchlist);
            //高亮
            this.searchlist.map(item => {
              let replaceReg = new RegExp(this.value, "g"); // 匹配关键字正则
              let replaceString =
                '<span class="highlights-text">' + this.value + "</span>"; // 高亮替换v-html值
              item.names = item.names.replace(replaceReg, replaceString); // 开始替换
            });
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    goDetail(item) {
      this.$router.push({
        path: "/details",
        query: { id: item.id }
      });
      
      
    },
    // 删全部
    dels() {
      this.arr = []
      localStorage.setItem('value',JSON.stringify(this.arr))
    },
    // 删单个
    del(index1) {
      this.arr.splice(index1,1)
      localStorage.setItem('value',JSON.stringify(this.arr))
    },
    click() {
      this.value = item1
    },
    back(){
        this.$router.go(-1)
    }
  },

  mounted() {
    this.value = this.$route.query.value;
    this.getSearch();
    this.arr = JSON.parse(localStorage.getItem("value"));
  },
  watch: {
    value(val, oldVal) {
      if (this.value === val) {
        this.getSearch();
      }
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.box1 {
  height: 55px;
  background: rgb(242, 242, 242);
  position: fixed;
  z-index: 99;
}
.font1 {
  margin-left: 20px;
  font-size: 14px;
}
.sousuo {
  height: 40px;
  width: 220px;
  margin-left: 12px;
  margin-top: -12px;
}
.font2 {
  font-size: 14px;
  margin-left: 20px;
}
</style>