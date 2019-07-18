<template>
   <body id="top">
       <nav-mheader></nav-mheader>
  <div class="py-1 text-center text-white h-150 align-items-center" style="background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(&quot;https://static.pingendo.com/cover-bubble-dark.svg&quot;); background-position: center center, center center; background-size: cover, cover; background-repeat: repeat, repeat;">
    <div class="container">
      <div class="row">
        <div class="col-md-12" style="">
          <div class="pi-wrapper pi-draggable">
            <ul class="nav nav-pills">
              <li class="nav-item" style=""><a href="" class="nav-link active" data-toggle="pill" data-target="#tabone"><i class="fa fa-plug"></i>每日一词</a> </li>
              <li class="nav-item" style=""> <a class="nav-link" href="" data-toggle="pill" data-target="#tabtwo"><i class="fa fa-users"></i>用户管理</a> </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane fade active show" id="tabone" role="tabpanel">
                <nav-mdayword></nav-mdayword>
              </div>
              <div class="tab-pane fade" id="tabtwo" role="tabpanel">
                <nav-muser></nav-muser>
              </div>
              <div class="tab-pane fade" id="tabword" role="tabpanel"> hello </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      <nav-footer></nav-footer>
        <a href="#top" style="cursor:pointer;position: fixed;bottom: 20px;right:20px;padding:0px;background-color: #9676cb;border-radius: 8px; width:30px; height:30px;display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:14px;color:white"><i class="fa fa-lg fa-angle-double-up"  height="20"></i></a>
</body> 
</template>
<script>
    import '@/assets/theme.css' 
    import NavMheader from '@/components/NavMheader.vue'
    import NavMdayword from '@/components/NavMdayword.vue'
    import NavMuser from '@/components/NavMuser.vue'
    import NavFooter from '@/components/NavFooter.vue'
    import axios from 'axios'
    export default {
        data(){
            return{
              
            }
        },
        components:{
            NavMheader:NavMheader,
            NavMdayword:NavMdayword,
            NavMuser:NavMuser,
            NavFooter:NavFooter
        },
        
        methods:{
          
        }

    
    }
</script>
