<template>
    <div class="company">
       <div class="title">
           <div class="left">企业文化</div>
           <div class="right">党情位置：jsliang>企业文化</div>
       </div>
       <div class="content clearfix">
           <h4>企业使命</h4>
           <p>加快中国教育信息化进程</p>
           <h4>企业愿景</h4>
           <p>打造业界领先的教育产品提供商</p>
            <h4>企业价值观</h4>
            <p>团结—尊重员工个性，加强团队协作</p>
            <p>务实—基于事实的决策与业务管理</p>
            <p>诚信—建立信任与负责任的人际关系</p>
            <p>创新—追求速度和效率，专注于对公司有影响的创新</p>
            <img src="../../../../static/images/qq2.jpg" alt="">
       </div>
    </div>
</template>
<script>
    export default {
        name:'wenhua',
        data(){
            return {

            }
        }
    }
</script>
<style lang="less" scoped>
   .company{
    padding: 20px;
    .title{
      height: 30px;
      border-bottom: 1px dashed #999; 
      margin-bottom: 20px; 
      .left{
        float: left;
      }
      .right{
        float: right;
      }
    }
    .content{
       p{
         line-height: 40px;
         text-indent: 20px;
       }       
    }
   
   }
    
</style>