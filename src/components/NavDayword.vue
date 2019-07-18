<template>
    <div>
        <div class="row">
            <div class="col-lg-8 p-md-3 p-3 d-flex flex-column justify-content-center" style="">
                <div class="d-flex w-100 justify-content-between">
                    <h2>{{dayDoc.dayword}}</h2>
                    <small class="pt-1">{{currentdate}}</small>
                </div>
                <p class="mb-2"><span>{{dayDoc.content}}</span></p>
                <a class="btn btn-outline-primary pi-draggable" href="#"  data-placement="buttom" data-toggle="tooltip" title="收藏" @click="addCollection" >CollecteThisWord<i class="fa fa-heart fa-fw"></i> </a>
            </div>
            <div class="col-lg-4 p-3  justify-content-center ">
               <div id="carousel2" class="carousel slide" data-ride="carousel" data-interval="5000">
                    <div class="carousel-inner">
                        <div class="carousel-item active"> <img class="d-block w-100" src="https://static.pingendo.com/img-placeholder-1.svg"> </div>
                        <div class="carousel-item"> <img class="d-block w-100" src="https://static.pingendo.com/img-placeholder-2.svg"> </div>
                        <div class="carousel-item"> <img class="d-block w-100" src="https://static.pingendo.com/img-placeholder-3.svg"> </div>
                        <div class="carousel-item"> <img class="d-block w-100" src="https://static.pingendo.com/img-placeholder-4.svg"> </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel2" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span></a>
                    <a class="carousel-control-next" href="#carousel2" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span></a>
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
            currentdate:"",
            dayDoc:""
             
    }
  },
  mounted(){
            this.getDate();
            this.getOneDayword();
        },
methods:{
            getDate(){
                var date = new Date();
                var seperator1 = "/";
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

            getOneDayword(){
                axios.get("/words/getDayword").then((response)=>{
                let res = response.data;
                this.dayDoc = res.result;
                });
            },

            addCollection(){
                axios.post("/words/addCollection",{
                    word:this.dayDoc.dayword,
                  }).then((res)=>{
                      var res = res.data;
                      if(res.status==0){
                      alert("朋友，单词收藏成功！");
                      console.log("收藏成功");
                      }else{
                        if(res.status==1001){
                            alert("朋友，未登录！");
                            console.log(res.msg);
                        }
                        if(res.status==2){
                            alert("朋友，请勿重复收藏！");
                            console.log(res.msg);
                        }
                      }
                  });   

    },
}
}

</script>

