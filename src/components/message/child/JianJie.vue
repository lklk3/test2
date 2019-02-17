<template>
    <div class="company">
       <div class="title">
           <div class="left">公司简介</div>
           <div class="right">党情位置：jsliang>公司简介</div>
       </div>
       <div class="content clearfix">
           <div class="tt">
               <p>
               jsliang 前端有限公司自创立以来，一直以打造国内领先的媒体整合营销传播和教育产品提供商为战略目标，经过8年的发展，逐渐形成一套整合了丰富媒体资源和多元增值服务的产业体系。
               </p>
               <p>目前，公司业务涉及传统媒体制作发行、营销传播策划、线下活动推广、互联网运营及无线增值服务等多种行业。主营业务涵盖杂志发行、教育产品开发与运营、广告及活动策划、电子商务、无线增值等多个方向。</p>
           </div>
           <img src="../../../../static/images/hezuo.jpg" alt="">
       </div>
       <div class="ttt clearfix">
           <p>我们以"客户至上、诚信为本、智慧创业"作为企业发展思想，实施"精品化制作、品牌化服务"，以提供强势媒体平台、走创新路线为客户提供最全面的营销传播解决方案，并在全过程关注服务质量和客户满意度，贴心服务。未来，公司将稳健发展，贡献于社会，追求企业和社会效益的良性循环。</p>
           <img src="../../../../static/images/qq1.jpg" alt="">
       </div>
    </div>
</template>
<script>
    export default {
        name:'jianjie',
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
        img{
            float: right;
            display: block;
        }
        .tt{
            width: 610px;
            float: left;
            p{
              text-indent: 40px;
              line-height: 24px;
              padding-top: 10px;
            }
        }
    }
    .ttt{
        p{
              text-indent: 40px;
              line-height: 24px;
              padding-top: 10px;
            }
    }
   }
    
</style>