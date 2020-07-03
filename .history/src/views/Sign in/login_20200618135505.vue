<template>
 <div>
   <div class="dis-1  ju-1">
      <img src="./12123.jpg" alt="" class="img1"/>
        <div class="box">
            <div class="font1 fz-26">登录&nbsp;&nbsp;&nbsp;/ 注册</div>
       <van-cell-group>
  <van-field v-model="value" label="文本" placeholder="请输入用户名" />
</van-cell-group>
   <!-- 短信验证码 -->
  <van-field
  v-model="sms"
  center
  clearable
  label="短信验证码"
  placeholder="请输入短信验证码"
>
  <template #button>
    <van-button size="small" type="primary">发送验证码</van-button>
  </template>
</van-field>
 <!-- 验证码 -->
 <div class="dis-1 al-1 ju-1">
  <van-field
    v-model="cods"
    name="验证码"
    label="验证码"
    placeholder=" 请填写验证码"
  />
  <div v-html="code" @click="verify"></div>
  </div>
  <div class="dis-1">
      <van-button type="primary">登录</van-button>
      <van-button type="danger">注册</van-button>
  </div>

            </div>  
    </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
     username:'',
     password:"",
     phone:'',
     sms:'',
     code:'',
     cods:'',
     
     }
   },
   methods: {
   verify(){
       this.$api.verify().then(res=>{
           this.code = res
         console.log(res)
     }).catch(err=>{
        console.log(err)
     })
   }
   },
   mounted() {
    this.verify()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.img1 {
    position:absolute;
    z-index:-1;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
}
.box {
    width: 350px;
    height: 500px;
    background: rgb(255, 255, 255,);
    margin-top: 100px;
}
.font1 {
    margin-top: 20px;
    margin-left: 30px;
}
</style>