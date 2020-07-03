<template>
 <div>
   <div class="dis-1  ju-1">
      <img src="./12123.jpg" alt="" class="img1"/>
        <div class="box">
            <div class="font1 fz-26">登录&nbsp;&nbsp;&nbsp;/ 注册</div>
            <van-form>
  <van-field
    v-model="username"
   placeholder="USERNAME"
    :rules="[{ required: true, message: '请填写用户名' }]"/>
  <van-field v-model="password" type="password"
    placeholder="PASSWORD"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
    <van-field
    v-model="username"
    name="手机号码"
    label="手机号码"
    placeholder="仅注册需要"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="短信验证码"
    label="短信验证码"
    placeholder="仅注册需要"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
</van-form>
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

     }
   },
   methods: {

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
    background: white;
    margin-top: 100px;
}
.font1 {
    margin-top: 20px;
    margin-left: 30px;
}
</style>