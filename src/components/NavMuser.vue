<template>
    <div>
      <div v-if="flag">
      <!-- 搜索框和删除、全选、 -->
      <div class="row pi-draggable" draggable="true">
        <!-- 搜索框 -->
        <div class="col-md-6">
          <form class="form-inline pi-draggable w-100 pt-1  pb-1 d-flex w-100 justify-content-center">
            <div class="input-group">
              <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Word">
              <div class="input-group-append"><button class="btn btn-primary" type="button"><i class="fa fa-search"></i></button>
              </div>
            </div>
          </form>
        </div>
        <!-- 编辑区 -->
        <div class="col-md-6 d-flex w-100 justify-content-left">
          <a href="" class="nav-link "><i class="fa fa-calendar-plus-o fa-fw"></i>新增</a>
          <a href="" class="nav-link " href="javascript:void(0)" data-placement="top" data-toggle="modal" title="删除选中" data-target="#deletcheckModal" @click="delUser(item)"><i class="fa fa-calendar-times-o fa-fw"></i>删除已选</a>
          <a href="javascript:;" class="nav-link " ><i class="fa fa-calendar-check-o fa-fw"></i>选中</a>
        </div>
      </div>
      <div>
        <!-- 表头 -->
        <nav class="navbar navbar-expand-md  " style="background-image: linear-gradient(rgb(150, 118, 203), rgba(150, 118, 203, 0.5)); background-position:top; background-size: 100%; background-repeat: repeat;">
          <div class="container">
            <div class="row pi-draggable w-100">
              <div class="col-md-6">
                 <ul class="list-inline pi-draggable mb-0 w-100 justify-content-between ">
                  <li class="list-inline-item col-9 text-left">USER</li>
                  <li class="list-inline-item col-1">EDIT</li>
                </ul>
              </div>
              <div class="col-md-6 navbar-collapse collapse">
                <ul class="list-inline pi-draggable mb-0 w-100 justify-content-between ">
                  <li class="list-inline-item col-4 ">USER</li>
                  <li class="list-inline-item col-6 text-right">EDIT</li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div class="row pi-draggable">
        <!-- 重复部分 -->
          <div class="col-md-6 border-bottom pr-3 pl-0"  v-for="(item, index) in usersList">
            <ul class=" d-flex w-100 justify-content-between list-inline pi-draggable m-1 ">
              <li class="list-inline-item col-1" >{{index}}</li>
              <li class="list-inline-item col-6 text-left p-0" style="width: 300px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{item.userName}}&nbsp;:&nbsp;{{item.userPwd}}</li>
              <li class="list-inline-item col-1 ">
              <a class="btn btn-outline-primary border-0 " href="javascript:void(0)" data-placement="top" data-toggle="modal" title="删除" data-target="#deletcheckModal" @click="delCartConfirm(item)"><i class="fa fa-fw nav-link fa-bitbucket p-0"></i></a></li>
              <li class="list-inline-item col-2">
                <input type="checkbox" class="checkbox-info my-1 mr-sm-2" >
              </li>
            </ul>
          </div>
        </div>
        <!-- 页码 -->
        <!-- <div class="row pi-draggable" draggable="true">
          <div class="col-md-12 d-flex  justify-content-center">
            <ul class="pagination pi-draggable mt-1 mb-1" draggable="true">
              <li class="page-item"> <a class="page-link" href="#"> <span>«</span></a> </li>
              <li class="page-item active"> <a class="page-link" href="#">1</a> </li>
              <li class="page-item"> <a class="page-link" href="#">2</a> </li>
              <li class="page-item"> <a class="page-link" href="#">3</a> </li>
              <li class="page-item"> <a class="page-link" href="#">4</a> </li>
              <li class="page-item"> <a class="page-link" href="#"> <span>»</span></a> </li>
            </ul>
          </div>
        </div> -->
      </div>
      </div>
      <!-- 提示框 -->
      <div class="list-group-item list-group-item-action flex-column align-items-start active rounded-0" v-else>
        <div class="error-wrap mx-3 my-1">
          <small class="pi-draggable"><span class="badge badge-pill badge-warning">{{msg}}</span></small>
        </div>
      </div>
      <!-- 删除确认模态框 -->
      <div  class="modal" id="deletcheckModal">
        <div class="modal-dialog align-items-center mt-5"   role="document" style="width: 300px;">
          <div class="modal-content">
            <div class="modal-header p-0  border-0">
              <button type="button" class="close" data-dismiss="modal"> <span class="mr-2">×</span> </button>
            </div>
            <div class="modal-body">
              <p class="m-0 text-dark">Are U sure to delete the word?</p>
            </div>
            <div class="modal-footer border-0"> <button type="button" class="btn btn-primary" data-dismiss="modal" @click="delUser">Yes,delet</button> <button type="button" class="btn btn-secondary" data-dismiss="modal">No,cancel</button> </div>
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
      usersList:[],
      editItem:{},
      //modalConfirm:false,
      msg:"加载中......",
      checkedFlag:false,
      flag:false

    }
  },
  mounted(){
            this.getUsersList();
  },
  methods:{
    getUsersList(){
      axios.get("/users/usersList").then((response)=>{
        let res = response.data;
        if(res.status==0){
            if(res.result.count==0){
                          this.msg="暂时还没有用户呢......";
                      }else{
                          this.flag=true;
                          this.usersList = res.result.userslist;
                      }
        }else{
          if(res.status==1001){
            this.msg="抱歉，你没有登录！";
          }else{
            this.msg="抱歉，系统出错啦！";
          }
        }
      });
    },
    delUser(){
              axios.post("/users/userDel",{
                userName:this.editItem.userName,
              }).then((response)=>{
                  let res = response.data;
                  if(res.status == '0'){
                    alert("删除成功！");
                    this.init();
                  }else{
                    alert("删除失败！");
                  }
              });
            },

  },
        
}
</script>

