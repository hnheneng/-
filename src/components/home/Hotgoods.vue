<template>
 <div>

   <div class="box dis-1 al-1 ju-1 w-1">
       <div class="font1 fz-16">热销商品</div>
   </div>
    <div class="box2">
    <div v-for="(item,index) in hotGoods" :key="index">
        <div class="dv">
         <img :src="item.image" alt="" width="100%" height="160px" @click="goDetail(index)">
         <div class="font2">{{item.name}}</div>
         <div class="dis-1 al-1">
             <div class="fz-16">￥{{item.price}}</div>
             <div class="number2"> ￥{{item.mallPrice}}</div>
         </div>
        </div>
    </div>
    </div>

 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       hotGoods:{
        type: Array,
        default: () => []
       }
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {
        // 跳转详情页并传id
    goDetail(index){
      // console.log();
      this.$router.push({name:'Details',query:{id: this.hotGoods[index].goodsId}});
      this.$utils.goDetail(this.hotGoods[index])
    }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box {
    height: 50px;
    background: rgb(237,237,237);
}

.font1 {
    color: red;
}
.box2 {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background: white;
}
.dv {
    width: 185px;
    height: 220px;
    background: white;
    border: 1px solid rgb(240,240,240);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.font2 {
    max-width: 180px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.number2 {
    color: red;
    text-decoration: line-through;
    margin-top: 3px;
    margin-left: 5px;
}
</style>