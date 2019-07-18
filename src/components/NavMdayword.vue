<template>
    <div>
      <div v-if="daywordList">
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
          <a href="" class="nav-link " href="javascript:void(0)" data-toggle="modal" data-target="#addDaywordModal"><i class="fa fa-calendar-plus-o fa-fw" ></i>新增</a>
          <a href="" class="nav-link " href="javascript:void(0)" data-placement="top" data-toggle="modal" title="删除选中" data-target="#deletcheckModal" @click="delDayword(item)"><i class="fa fa-calendar-times-o fa-fw"></i>删除已选</a>
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
                  <li class="list-inline-item col-9 text-left">WORD</li>
                  <li class="list-inline-item col-1">EDIT</li>
                </ul>
              </div>
              <div class="col-md-6 navbar-collapse collapse">
                <ul class="list-inline pi-draggable mb-0 w-100 justify-content-between ">
                  <li class="list-inline-item col-4 ">WORD</li>
                  <li class="list-inline-item col-6 text-right">EDIT</li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div class="row pi-draggable">
        <!-- 重复部分 -->
          <div class="col-md-6 border-bottom pr-3 pl-0"  v-for="(item, index) in daywordList">
            <ul class=" d-flex w-100 justify-content-between list-inline pi-draggable m-1 ">
              <li class="list-inline-item col-1" >{{index}}</li>
              <li class="list-inline-item col-5 text-left p-0" style="width: 300px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{item.dayword}}&nbsp;:&nbsp;{{item.content}}</li>
              <li class="list-inline-item col-1 ">
              <a class="btn btn-outline-primary border-0 " href="javascript:void(0)" data-placement="top" data-toggle="modal" title="编辑" data-target="#editModal" ><i class="fa fa-fw nav-link fa-pencil-square p-0"></i></a></li>
              <li class="list-inline-item col-1 ">
              <a class="btn btn-outline-primary border-0 " href="javascript:void(0)" data-placement="top" data-toggle="modal" title="删除" data-target="#deletcheckModal" ><i class="fa fa-fw nav-link fa-bitbucket p-0"></i></a></li>
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
            <div class="modal-footer border-0"> <button type="button" class="btn btn-primary" data-dismiss="modal" @click="delDayword">Yes,delet</button> <button type="button" class="btn btn-secondary" data-dismiss="modal">No,cancel</button> </div>
          </div>
        </div>
      </div>
      <!-- 编辑确认模态框 -->
      <div  class="modal" id="editModal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">1#单词</h5><button type="button" class="close" data-dismiss="modal"> <span>×</span> </button>
            </div>
            <div class="modal-body">
              <div class="d-flex w-100 justify-content-between align-items-center">
            <text>编辑者</text><text>{{currentdate}}</text>
          </div>
          <textarea class="form-control" id="form32" rows="3" placeholder="content" v-model="content"></textarea>
            </div>
            <div class="modal-footer"><button type="button" class="btn btn-primary" @click="editDayword">Save changes</button> <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button> </div>
          </div>
        </div>
      </div>

      <!-- 新增模态框 -->
  <div class="modal pi-draggable text-dark" id="addDaywordModal" tabindex="-1" aria-labelledby="myModalLabel" style="display: none;" aria-hidden="true" >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
              <h5 class="modal-title">DaywordAdd</h5><button type="button" class="close" data-dismiss="modal"> <span>×</span> </button>
        </div>
        <div class="modal-body">
            <div class="error-wrap mx-3 my-1" v-if="errorTip">
              <small class="pi-draggable" v-show="errorTip"><span class="badge badge-pill badge-warning">!</span>{{tip}}</small>
            </div>
          <form id="c_form-h" class="pi-draggable" draggable="true">
            <input type="text"  v-model="dayword" v-text="dayword" class="form-control pl-0 mb-3"  placeholder="Dayword 12个字符以内" >
            <textarea class="form-control pl-0" id="form32" rows="3" v-model="content" v-text="content" placeholder="Content 200字符以内"></textarea>
          </form>
        </div>
        <div class="modal-footer"><button type="button" class="btn btn-primary" @click="addDayword">Save changes</button> <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button> </div>
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
      daywordList:[],
      editItem:{},
      //modalConfirm:false,
      currentdate:"",
      msg:"加载中......",
      dayword:"",
      content:"",
      errorTip:false,
      checkedFlag:false,
      tip:""

    }
  },
  mounted(){
            this.init();
            this.getDate;
  },
  methods:{
    init(){
      axios.get("/words/daywordList").then((response)=>{
        let res = response.data;
        if(res.status==0){
          if(res.result.count==0){
             this.msg="没有每日单词！";
          }else{
            this.checkedFlag=true;
            this.daywordList = res.result.daywordlist;
          }
        }else{
          this.msg="抱歉，出错啦！";
        }
      });
    },
    getDate(){
                var date = new Date();
                var seperator1 = "-";
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                this.currentdate = year + seperator1 + month + seperator1 + strDate;
                
            },
    checkInput(){
              //用户名或密码判断是否为空
              if(!this.dayword || !this.content){  
                  this.errorTip = true; //显示用户名或密码错误提示框
                  return this.tip="单词或内容不能为空！";
                }else{
                  if(this.dayword.length>12){  
                  this.errorTip = true; //显示用户名或密码错误提示框
                  return this.tip="用户名只能在12个字符以内！";
                  }else{
                  if(this.content.length>200){  
                  this.errorTip = true; //显示用户名或密码错误提示框
                  return this.tip="密码只能在200个字符以内！";
                }
                }
      
                }

            },
    delDaywordConfirm(item){
                this.editItem = item;
                //this.modalConfirm = true;
            },
    delDayword(){
              axios.post("/words/daywordDel",{
                dayword:this.editItem.dayword,
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
    addDayword(){
      this.checkInput();
      if(dayword){
        axios.post("/words/daywordAdd",{
                dayword:this.dayword,
                content:this.content,
                date:this.currentdate
              }).then((response)=>{
                  let res = response.data;
                  if(res.status == '0'){
                    alert("添加成功！");
                    this.init();
                  }else{
                    if(res.status == '2'){
                    alert("添加失败，该单词已存在！");
                  }else{
                    alert("添加失败！");
                  } 
                  }
              });

      }else{
        this.errorTip = true; //显示用户名或密码错误提示框
        return this.tip="单词不能为空！";

      }
      


    }

  },
        
}
</script>

