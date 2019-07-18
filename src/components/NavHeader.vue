<template>
<header class="header">
  <!-- navbar-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container"> 
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" class="fa d-inline fa-lg fa-fw mx-auto">
        <b>Dictionary</b>
      </a> <button class="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar11" aria-expanded="true" style="">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse show" id="navbar11">
        <ul class="navbar-nav  ml-auto">
           <li class="nav-item nav-link text-right mx-3" v-if="nickName">
            <span class="navbar-link" v-text="'Hello, '+nickName+' !'" ></span>
            <!-- <a class="btn btn-outline-primary navbar-btn ml-md-2 border-0 " href="" data-placement="buttom" data-toggle="tooltip" data-target="#tabthree" title="我的收藏"><i class="fa fa-heart fa-fw"></i></a></li> -->
          <li class="nav-item nav-link text-right mx-3" v-if="nickName">
            <a class="btn btn-outline-primary" href="javascript:void(0)" @click="logOut">logout<i class="fa fa-sign-out fa-fw"></i> </a></li>
          <li class="nav-item nav-link text-right mx-3" v-if="nickName">
            <a class="btn btn-outline-primary" href="javascript:void(0)" data-placement="buttom" data-toggle="modal" title="resetPassword" data-target="#editModal" >改密码</a></li>
        
          <li class="nav-item nav-link text-right mx-3"  v-if="!nickName">
            <a class="btn btn-outline-primary border-0 " href="javascript:void(0)" data-placement="buttom" data-toggle="modal" title="点击登陆" data-target="#myModal" @click="loginModalFlag=true"><i class="fa fa-user-circle-o fa-fw"></i>点击登陆</a></li>
          <li class="nav-item nav-link text-right mx-3"  v-if="!nickName">
            <a class="btn btn-outline-primary border-0 " href="javascript:void(0)" data-placement="buttom" data-toggle="modal" title="点击注册" data-target="#regModal"  @click="loginModalFlag=true"><i class="fa fa-user-circle-o fa-fw"></i>点击注册</a></li>
         </ul>
      </div>
    </div>
  </nav>

  <!-- 登陆模态框 -->
  <div class="modal pi-draggable" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" style="display: none;" aria-hidden="true" >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Login</h5> <button type="button" class="close" data-dismiss="modal" aria-hidden="true"> <span>×</span> </button>
        </div>
        <div class="modal-body">
          <div class="error-wrap mx-3 my-1">
            <small class="pi-draggable" v-show="errorTip"><span class="badge badge-pill badge-warning">!</span>{{tip}}</small>
          </div>
          <form id="c_form-h" class="pi-draggable" draggable="true">
            <div class="form-group row border mx-3">
              <span><i class="col-2 col-form-label fa fa-user"></i></span>
              <div class="col-10 pl-0">
                <input type="text" tabindex="1" name="loginname" v-model="userName" class="form-control border-0 pl-0" placeholder="输入用户名长度在20个字符以内" data-type="loginname">
              </div>
            </div>
            <div class="form-group row border mx-3">
              <span><i class="col-2 col-form-label fa fa-unlock-alt"></i></span>
              <div class="col-10 pl-0">
                <input type="password" tabindex="2" name="password" v-model="userPwd" class="form-control border-0 pl-0"  placeholder="输入密码长度在6-12个字符以内" @keyup.enter="login">
              </div>
            </div>
            <div class="form-group row mx-3 border-0">
              <div class="col-12 px-0">
                <a href="javascript:;" class="btn btn-primary btn-submit w-100"  @click="login">登陆</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div> 


    <!-- 注册模态框 -->
  <div class="modal pi-draggable" id="regModal" tabindex="-1" aria-labelledby="myModalLabel" style="display: none;" aria-hidden="true" >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Regist</h5> <button type="button" class="close" data-dismiss="modal" aria-hidden="true"> <span>×</span> </button>
        </div>
        <div class="modal-body">
          <div class="error-wrap mx-3 my-1">
            <small class="pi-draggable" v-show="errorTip"><span class="badge badge-pill badge-warning">!</span>{{tip}}</small>
          </div>
          <form id="c_form-h" class="pi-draggable" draggable="true">
            <div class="form-group row border mx-3">
              <span><i class="col-2 col-form-label fa fa-user"></i></span>
              <div class="col-10 pl-0">
                <input type="text" tabindex="1" name="loginname" v-model="userName" class="form-control border-0 pl-0" placeholder="输入用户名长度在20个字符以内" data-type="registname">
              </div>
            </div>
            <div class="form-group row border mx-3">
              <span><i class="col-2 col-form-label fa fa-unlock-alt"></i></span>
              <div class="col-10 pl-0">
                <input type="password" tabindex="2" name="password" v-model="userPwd" class="form-control border-0 pl-0"  placeholder="输入密码长度在6-12个字符以内" @keyup.enter="regist">
              </div>
            </div>
            <div class="form-group row mx-3 border-0">
              <div class="col-12 px-0">
                <a href="javascript:;" class="btn btn-primary btn-submit w-100"data-dismiss="modal"  @click="regist">注册</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div> 

    <!-- 改密码模态框 -->
  <div class="modal pi-draggable" id="editModal" tabindex="-1" aria-labelledby="myModalLabel" style="display: none;" aria-hidden="true" >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">ResetPassword</h5> <button type="button" class="close" data-dismiss="modal" aria-hidden="true"> <span>×</span> </button>
        </div>
        <div class="modal-body">
          <div class="error-wrap mx-3 my-1">
            <small class="pi-draggable" v-show="errorTip"><span class="badge badge-pill badge-warning">!</span>{{tip}}</small>
          </div>
          <form id="c_form-h" class="pi-draggable" draggable="true">
            <div class="form-group row border mx-3">
              <span><i class="col-2 col-form-label fa fa-user"></i></span>
              <div class="col-10 pl-0">
                {{nickName}}
              </div>
            </div>
            <div class="form-group row border mx-3">
              <span><i class="col-2 col-form-label fa fa-unlock-alt"></i></span>
              <div class="col-10 pl-0">
                <input type="text" tabindex="2" name="password" v-model="userPwd" v-text="userPwd"class="form-control border-0 pl-0"  placeholder="输入密码长度在6-12个字符以内" @keyup.enter="uodateUser">
              </div>
            </div>
            <div class="form-group row mx-3 border-0">
              <div class="col-12 px-0">
                <a href="javascript:;" class="btn btn-primary btn-submit w-100"  @click="updateUser">save the change</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div> 

</header>
</template>
<script>

</script>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  data(){
    return{
      userName:'',
      userPwd:'',
      errorTip:false,
      loginModalFlag:false, 
      tip:''
      
    }
  },
computed:{
       nickName(){
          return this.$store.state.nickName;
        },
},
        
mounted(){
        this.checkLogin();
},
  methods:{
    checkLogin(){
                axios.get("/users/checkLogin").then((response)=>{
                    var res = response.data;
                    var path = this.$route.pathname;
                    if(res.status=="0"){
                      //this.nickName = res.result;
                       this.$store.commit("updateUserInfo",res.result);
                    }
                    // else{
                    //   // if(this.$route.path!="words"){
                    //   //   // this.$router.push("/words");
                    //   // }
                    // }
                });
            },
            checkInput(){
              //用户名或密码判断是否为空
              if(!this.userName || !this.userPwd){  
                  this.errorTip = true; //显示用户名或密码错误提示框
                  return this.tip="用户名或密码不能为空！";
                }else{
                  if(this.userName.length>8){  
                  this.errorTip = true; //显示用户名或密码错误提示框
                  return this.tip="用户名只能在8个字符以内！";
                  }else{
                  if(this.userPwd.length>12||this.userPwd.length<6){  
                  this.errorTip = true; //显示用户名或密码错误提示框
                  return this.tip="密码只能在6-12个字符以内！";
                }
                }
      
                }

            },
    //登陆
    login(){  
      this.checkInput();
      //用axios指定路由
      axios.post("/users/login",{//数据用post方法发起请求
        userName:this.userName,
        userPwd:this.userPwd
      }).then((response)=>{   //接收响应
        let res = response.data;//响应报文的data数据
        if(res.status == "0"){//响应报文返回的状态码为0说明请求成功
          this.errorTip = false;  //警告文字不显示   
          this.loginModalFlag = false; 
          this.$store.commit("updateUserInfo",res.result.userName);
          this.nickName =res.result.userName;
          alert("登录成功！");
          location.reload();
        }else{
          this.errorTip = true;
          if(res.status=="2"){
            return this.tip=res.result;
          }else{
          return this.tip="登录失败！";
          }
        }
      });
    },
    //登出
    logOut(){
      axios.post("/users/logout").then((response)=>{
        let res = response.data; 
        if(res.status=="0"){
        // this.nickName = "";
        this.$store.commit("updateUserInfo",""); 
        location.reload();
        }
      })
     },
     //注册
     regist(){
      this.checkInput();
      axios.post("/users/regist",{//指定路由
        userName:this.userName,  //获取输入的用户名和密码
        userPwd:this.userPwd,     //并且用post方法发起请求
        manager:false
      }).then((response)=>{        
        let res = response.data;
        if(res.status == "0"){
          alert("注册成功");
        }else{
          if(res.status == "2"){   //响应返回的状态码为2
          alert("用户名存在");
          }
          this.errorTip = true;
          return this.tip="用户名已存在，请重置用户名";
      }
      });
    
  },

   //重置密码
  updateUser(){
    if(this.userPwd==""){
      this.errorTip = true; //显示用户名或密码错误提示框
      return this.tip="用户名或密码错误";
    }else{
      if(this.userPwd.length>12||this.userPwd.length<6){
        this.errorTip = true; //显示用户名或密码错误提示框
        return this.tip="密码只能在6-12个字符以内！";
      }else{
        axios.post("/users/updateUser",{
          userPwd:this.userPwd,
        }).then((response)=>{
          if(res.status == "0"){
              alert("修改成功！");
            }else{
              alert("修改失败！");
          }
        });
      }
    }
    

  },

} 
}
</script>

