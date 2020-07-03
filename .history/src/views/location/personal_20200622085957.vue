<template>
 <div>
     <div class="box w-1 dis-1 al-1 po-1 ju-1">
       <div class="btn po-2" @click="imto"> 〈 </div>
       <div class="fz-16">个人资料</div>
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
      gender:'',
      year:'',
      month:"",
      day:"",
      id:"",
      nickname:''
     }
   },
   methods: {
   imto(){
       this.$router.push('./membership')
   },
   
   },
   mounted() {

       this.$api.saveUser({
          gender:this.gender,
          year:this.year,
          month:this.month,
          day:this.day,
          id:this.id,
          nickname:this.nickname
       }).then(res=>{
           console.log(res);
       })
   
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
 .box {
     height: 40px;
     border-bottom: 1px solid rgb(240,240,240);
 }
 .btn {
     left: 25px ;
     color: blue;
 }
</style>