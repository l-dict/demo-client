 <template>
    <div class="py-1 text-center text-white h-150 align-items-center" style="background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(&quot;https://static.pingendo.com/cover-bubble-dark.svg&quot;); background-position: center center, center center; background-size: cover, cover; background-repeat: repeat, repeat;">
    <div class="container py-0">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <h4 class="mb-4 display-3">Dictionary Manage</h4>
          <p class="lead mb-2"><small>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.Welcome!</small> </p>
          <div class="row">
            <div class="col-md-12 mx-5 pl-5 pt-2">
              <form class="form-inline">
                <div class="form-group">
                  <input type="text" class="form-control" id="inputnameinline" placeholder="name" v-model="managerName"> </div>
                <div class="form-group">
                  <input tabindex="2" type="password" class="form-control " id="inputpasswordinline" placeholder="Password"v-model="managerPwd" @keyup.enter="login"> </div>
                  <div class="form-group">
                  <button href="javascript:;" type="submit" class="btn btn-primary" @click="login">Log in</button> </div>
                
              </form>
              <div class="row">
                <div class="error-wrap mx-3 my-1">
            <small class="pi-draggable" v-show="errorTip"><span class="badge badge-pill badge-warning">!</span>用户名或者密码错误</small>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
 </template>
 <script>
 import axios from 'axios'
 import { mapState } from 'vuex'
 export default {
    data(){
    return{
      managerName:'',
      managerPwd:'',
      errorTip:false,
      
    }
  },
  methods:{
      login(){
      //用户名或密码判断是否为空
      if(!this.managerName || !this.managerPwd){  
                  this.errorTip = true; //显示用户名或密码错误提示框
                  return;
                }
      //用axios指定路由
      axios.post("/managers/login",{//数据用post方法发起请求
        managerName:this.managerName,
        managerPwd:this.managerPwd
      }).then((response)=>{   //接收响应
        let res = response.data;//响应报文的data数据
        if(res.status == "0"){//响应报文返回的状态码为0说明请求成功
          this.errorTip = false;  //警告文字不显示  
        }else{
          this.errorTip = true;
        }
      });
    },
  }
 }
 </script>
 
 
 
  