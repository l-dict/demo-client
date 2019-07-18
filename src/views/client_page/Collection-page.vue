<template>
<body>
   <nav-header></nav-header> 
  <div class="py-1 text-center text-white h-150 align-items-center" style="background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(&quot;https://static.pingendo.com/cover-bubble-dark.svg&quot;); background-position: center center, center center; background-size: cover, cover; background-repeat: repeat, repeat;">
    <div class="container">
      <div class="row pi-draggable" draggable="true">
        <div class="col-md-6">
          <form class="form-inline pi-draggable w-100 pt-1  pb-1 d-flex w-100 justify-content-center">
            <div class="input-group">
              <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Word">
              <div class="input-group-append"><button class="btn btn-primary" type="button"><i class="fa fa-search"></i></button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-6 d-flex w-100 justify-content-left">
          <a href="" class="nav-link "><i class="fa fa-calendar-plus-o fa-fw"></i>新增</a>
          <a href="" class="nav-link "><i class="fa fa-calendar-times-o fa-fw"></i>删除已选</a>
          <a href="#" class="nav-link "><i class="fa fa-calendar-check-o fa-fw"></i>选中</a>
        </div>
      </div>
      <div>
        <nav class="navbar navbar-expand-md  " style="background-image: linear-gradient(rgb(150, 118, 203), rgba(150, 118, 203, 0.5)); background-position:top; background-size: 100%; background-repeat: repeat;">
          <div class="container">
            <div class="row pi-draggable w-100">
              <div class="col-md-6">
                <ul class="list-inline pi-draggable mb-0 w-100 justify-content-between ">
                  <li class="list-inline-item col-1 pl-0">No.</li>
                  <li class="list-inline-item col-4">word</li>
                  <li class="list-inline-item col-2">Edit</li>
                </ul>
              </div>
              <div class="col-md-6 navbar-collapse collapse">
                <ul class="navbar-nav w-100 justify-content-between list-inline pi-draggable ml-4">
                  <li class="list-inline-item col-1 ml-5">No.</li>
                  <li class="list-inline-item col-4">word</li>
                  <li class="list-inline-item col-2 ml-2">Edit</li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div class="row pi-draggable">
          <div class="col-md-6 border-bottom pr-3 pl-0" >
            <ul class=" d-flex w-100 justify-content-between list-inline pi-draggable">
              <li class="list-inline-item col-1"><a class="checksbox-btn"><i class="fa fa-fw fa-lg nav-link fa-check-square-o "></i></a></li>
              <li class="list-inline-item col-2 text-right pr-0">100</li>
              <li class="list-inline-item col-4 p-0">word</li>
              <li class="list-inline-item col-1 pl-0 mr-2"><i class="fa fa-fw fa-lg nav-link fa-bitbucket" data-placement="top" href="#" title="delete" data-toggle="tooltip"></i></li>
              <li class="list-inline-item col-1 pl-1 mr-5"> <i class="fa fa-fw fa-lg nav-link fa-language" data-placement="top" data-toggle="tooltip" href="#" title="查看"></i> </li>
            </ul>
          </div>
        </div>
        <div class="row pi-draggable" draggable="true">
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
        </div>
      </div>
    </div>
  </div>
   <nav-footer></nav-footer>
  <pingendo onclick="window.open('https://pingendo.com/', '_blank')" style="cursor:pointer;position: fixed;bottom: 20px;right:20px;padding:4px;background-color: #00b0eb;border-radius: 8px; width:220px;display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:14px;color:white">Made with Pingendo Free&nbsp;&nbsp;<img src="https://pingendo.com/site-assets/Pingendo_logo_big.png" class="d-block" alt="Pingendo logo" height="16"></pingendo>
  
</body>
</template>
<script>
    import '@/assets/theme.css' 
    import NavHeader from '@/components/NavHeader.vue'
    import NavFooter from '@/components/NavFooter.vue'
    import axios from 'axios'
    export default {
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            NavHeader:NavHeader,
            NavFooter:NavFooter
        }
    
    }
</script>
