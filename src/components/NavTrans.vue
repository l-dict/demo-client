<template>
    <div class='text-large2'>
        <div class="list-group pi-draggable " >
            <a class="list-group-item list-group-item-action rounded-0">
                <div class="d-flex w-100 justify-content-between border-primary border rounded">
                    <input id="trans-input" class="w-100" v-model="word" placeholder="Input you English">    
                </div> 
            </a>
            <a href="javascript:;" class="btn btn-outline-primary btn-submit pi-draggable" @click="translate" >Click me and Translate<i class="fa fa-exchange  fa-fw"></i> </a>
            <div class="list-group-item list-group-item-action flex-column align-items-start active rounded-0" v-show="transShow" >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1" > {{doc.word}}&nbsp;&nbsp;&nbsp;&nbsp;<small v-if="doc.phonetic">[{{doc.phonetic}}]</small></h5>
                <i class="fa fa-heart nav-link btn btn-primary pi-draggable btn-primary border-0 shadow-none" herf="javascript:;" data-placement="buttom" data-toggle="tooltip" title="收藏" @click="addCollection1"></i>
              </div>
              <div class="w-100 text-left"> 
                <p class="mb-0" v-for="value in transArr">{{value}}</p>
                <small>
                    <p>{{doc.definition}}</p>
                    <p v-if="doc.exchange" >现在分词/过去式/过去分词/单复数/第三人称：{{doc.exchange}}&nbsp;&nbsp;</p>
                    <span v-if="doc.collins">柯林斯星级:{{doc.collins}}&nbsp;&nbsp;</span>
                    <span v-if="doc.oxford">牛津三千核心词汇&nbsp;&nbsp;</span>
                    <span v-if="doc.tag" v-text="tag"></span>
                    <span v-if="doc.bnc!='0'||doc.frq!='0'"  >高频词汇&nbsp;&nbsp;</span> </small>
              </div>
            </div>
            <div class="list-group-item list-group-item-action flex-column align-items-start active rounded-0"  v-show="errorTip" >
                <div class="error-wrap mx-3 my-1">
                <small class="pi-draggable text-dnpm ark"><span class="badge badge-pill badge-warning">!</span>{{tip}}</small>
                </div>
              </div>
            
        </div>
    </div>
    <!-- <modal v-bind:mdShow="mdShow" v-on:close="closeModal">
          <p slot="message">
             请先登录,否则无法收藏!
          </p>
          <div slot="btnGroup">
              <a class="btn" href="javascript:;" @click="mdShow = false">关闭</a>
          </div>
      </modal>
      <modal v-bind:mdShow="mdShowCollection" v-on:close="closeModal">
        <p slot="message">
          <svg class="icon-status-ok">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok"></use>
          </svg>
          <span>收藏成功!</span>
        </p>
        <div slot="btnGroup">
          <a class="btn" href="javascript:;" @click="mdShowCollection = false">继续</a>
        </div>
      </modal> -->
      </template>
<script>
import axios from 'axios'
export default {
     data(){
        return{ 
            transArr:[],
            doc:"",
            transShow:false,
            errorTip:false,
            msg:"",
            tip:""
    }
  },
  
  methods:{
      
      translate(){
        
        
        if(!this.word){  
            this.errorTip=true;
                   //显示输入不能为空
                  return this.tip = "输入不能为空";
        }else{
            var word1 = this.word.replace(/(^\s*)|(\s*$)/g,"");//去除前后空格
             var reg = /^[\u4e00-\u9fa5]+/;//只有字母
            if(false){//输入非字母s
                this.errorTip=true;
                return this.tip = "输入有误,只能输入英文字母";
            }else{
                //用axios指定路由
            axios.post("/words/transWord",{//数据用post方法发起请求
             word:word1,
            }).then((response)=>{   //接收响应
            let res = response.data;//响应报文的data数据
            if(res.status == "0"){//响应报文返回的状态码为0说明请求成功
            this.transShow=true;
            this.errorTip = false;  //警告文字不显示   
            this.doc = res.result.doc;//响应报文里的装载的查询结果doc绑定给给页面的doc
         
            this.transArr=res.result.doc.translation.split("\n");
            switch(res.result.doc.tag){
                case "zk":
                this.tag="中考";
                break;
                case "gk":
                this.tag="高考";
                break;
                case "cet4":
                this.tag="CET4";
                break;
                case "zk gk":
                this.tag="中考 高考";
                break;
                case "zk cet4":
                this.tag="中考 ";
                break;
                case "gk cet4":
                this.tag="高考 CET4";
                break;
                default:
                this.tag="中考 高考 CET4";

            }

            }else{
                
                this.transShow=false;
                this.errorTip = true;
                this.tip = res.msg;
            }
       });

            }
        }
        

      },
      addCollection1(){
                axios.post("/words/addCollection",{
                    word:this.doc.word,
                  }).then((res)=>{
                      var res = res.data;
                      if(res.status==0){
                      console.log("收藏加入成功");
                      alert("收藏加入成功");
    //                     // this.mdShowCollection = true;
    //                     this.$store.commit("updateCollectionCount",1);
                      }else{
                           if(res.status==1001){
                            alert("未登录！");
                            console.log(res.msg);
                        }
                      }
                  });   

    },
  }

}
</script>

