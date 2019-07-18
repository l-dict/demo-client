<template>
  <body name="top">
  <nav-mlogin></nav-mlogin>
<!-- 自定义的footer组件 -->
<nav-footer></nav-footer>
  <a href="#top" style="cursor:pointer;position: fixed;bottom: 20px;right:20px;padding:0px;background-color: #9676cb;border-radius: 8px; width:30px; height:30px;display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:14px;color:white"><i class="fa fa-lg fa-angle-double-up"  height="20"></i></a>
</body>
</template>


   

<script>
  import '@/assets/theme.css'
  import NavFooter from '@/components/NavFooter.vue'
  import NavMlogin from '@/components/NavMlogin.vue'
   export default {
        data(){
            return{
                wordsList:[]
            }
        },
        components:{
            NavFooter:NavFooter,
            NavMlogin:NavMlogin
        },
   }

</script>

