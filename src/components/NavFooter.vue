<template>
 <div class="py-3">
    <div class="container">
      <div class="row">

          <!-- <p><a herf="http://localhost:8080/Blogin">后台</a></p> -->
        <div class="col-md-12 text-center d-md-flex justify-content-between align-items-center">
          <ul class="nav d-flex justify-content-center">
            <li class="nav-item" > <a class="nav-link active" href="javascript:;" @click="ifManager">ManageEnter</a> </li>
            <li class="nav-item"> <a class="nav-link" href="#">About</a> </li>
          </ul>
          <p class="mb-0 py-1">© 2018-2019 Dictionay. All rights reserved</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      

    }
  },
  methods:{
    ifManager(){
      axios.post("/users/ifManager").then((response)=>{
        var res=response.data;
        if(res.status=="0"){
          const {href} = this.$router.resolve({ path: '/Bindex'})
          window.open(href, '_blank');
        }else{
          if(res.status=="1001"){
            alert("朋友，没有登录！");
          }else{
            alert("朋友，你不是管理员，没有权限进入管理模块！");
          }
          
        }
      });
      
    },
    
  },
  
}
</script>
