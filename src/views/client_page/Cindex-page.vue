<template>
<body id="top">
   <nav-header></nav-header> 
  <div class="py-1 text-center text-white h-150 align-items-center" style="background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(&quot;https://static.pingendo.com/cover-bubble-dark.svg&quot;); background-position: center center, center center; background-size: cover, cover; background-repeat: repeat, repeat;">
    <div class="container">
      <div class="row">
        <div class="col-md-12" >
          <div class="pi-wrapper pi-draggable">
            <ul class="nav nav-tabs">
              <li class="nav-item"> <a href="" class="nav-link active" data-toggle="pill" data-target="#tabone"><i class="fa fa-home"></i> 翻译</a> </li>
              <li class="nav-item"> <a class="nav-link" href="" data-toggle="pill" data-target="#tabtwo"><i class="fa fa-plug"></i>每日一词</a> </li>
              <li class="nav-item"  v-if="checkNickName"> <a href="" class="nav-link" data-toggle="pill" data-target="#tabthree"><i class="fa fa-heart"></i> 我的收藏</a> </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane fade active show" id="tabone" role="tabpanel">
                <nav-trans></nav-trans>
              </div>
              <div class="tab-pane fade" id="tabtwo" role="tabpanel">
                <div class="py-1 pi-draggable">
                  <div class="container">
                     <nav-dayword></nav-dayword>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tabthree" role="tabpanel">
                  <div class="container"> 
                    <nav-collection></nav-collection>
                  </div>
                </div>
              </div>
              </div>
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
    import NavHeader from '@/components/NavHeader.vue'
    import NavFooter from '@/components/NavFooter.vue' 
    import NavTrans from '@/components/NavTrans.vue' 
    import NavDayword from '@/components/NavDayword.vue' 
    import NavCollection from '@/components/NavCollection.vue' 

    import axios from 'axios'
    export default {
        data(){
            return{
                msg:'hello vue',
                checkNickName:false
            }
        },
        mounted(){
        this.checkLogin();
        },
        components:{
            NavHeader:NavHeader,
            NavFooter:NavFooter,
            NavTrans:NavTrans ,
            NavDayword:NavDayword ,
            NavCollection:NavCollection 
        },
        methods:{
          checkLogin(){
            axios.get("/users/checkLogin").then((response)=>{
              var res = response.data;
              var path = this.$route.pathname;
              if(res.status=="0"){
                this.checkNickName = true;
                    }else{
                      //未登录不能显示
                      alert("朋友，你未登录！");
                    }
                });
            },
        },    
    
    }
</script>
