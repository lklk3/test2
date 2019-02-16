<template>
    <div class="server">
         <div class="server-box">
             <div class="title"><h2>我们的服务</h2></div>
             <div class="content">
                 <div class="content-item">
                     <div class="logo">
                       <span class="iconfont icon-gongsi00"></span>
                     </div>
                     <div class="tt">公司注册</div>
                     <p>线上提交材料，为您快速注册公司</p>
                     <div class="look">查看详情</div>
                     <div class="bottom">已有<span class="co">10000+</span>个企业选择</div>
                 </div>
                 <div class="content-item">
                     <div class="logo">
                     <span class="iconfont icon-qian"></span></div>
                     <div class="tt">公司注册</div>
                     <p>线上提交材料，为您快速注册公司</p>
                     <div class="look">查看详情</div>
                     <div class="bottom">已有<span class="co">10000+</span>个企业选择</div>
                 </div>
                 <div class="content-item">
                     <div class="logo">
                     <span class="iconfont icon-navicon-hzsp"></span></div>
                     <div class="tt">公司注册</div>
                     <p>线上提交材料，为您快速注册公司</p>
                     <div class="look">查看详情</div>
                     <div class="bottom">已有<span class="co">10000+</span>个企业选择</div>
                 </div>
                 <div class="content-item">
                     <div class="logo">
                     <span class="iconfont icon-guanfangzhuce"></span></div>
                     <div class="tt">公司注册</div>
                     <p>线上提交材料，为您快速注册公司</p>
                     <div class="look">查看详情</div>
                     <div class="bottom">已有<span class="co">10000+</span>个企业选择</div>
                 </div>
                 <div class="content-item">
                     <div class="logo">
                     <span class="iconfont icon-zhuceyonghu"></span></div>
                     <div class="tt">公司注册</div>
                     <p>线上提交材料，为您快速注册公司</p>
                     <div class="look">查看详情</div>
                     <div class="bottom">已有<span class="co">10000+</span>个企业选择</div>
                 </div>
             </div>
         </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>
<style lang="less" scoped>
.server{
    background-color: #f5f5f5;
   .server-box{
        width: 1180px;
        height: 485px;
        margin: 0 auto; 
        .title{
            width: 1180px;
            height: 114px;
            line-height: 114px;
            text-align: center;
        }
        .content{
           .content-item{
               width: 220px;
               height: 310px;
               background: #fff;
               float: left;
               margin-left: 8px;
               margin-right: 8px;
               position: relative;
               .logo{
                  position: absolute;
                  width: 90px;
                  height: 90px;
                  line-height: 90px;
                  border-radius: 45px;
                  background: #f5f5f5;
                  top: 30px;
                  left: 67px;
                  text-align: center;
                  color: #595758;
                  span{
                    font-size: 30px;
                  }
               }
              .tt{
                position: absolute;
                top: 132px;
                width: 100%;
                text-align: center;
                padding-bottom: 16px;
              }
              p{
                position: absolute;
                top: 167px;
                font-size: 12px;
                width: 100%;
                text-align: center;
                color: #b0b0b0;
              }
              .look{
                position: absolute;
                top: 215px;
                width: 100px;
                height: 30px;
                line-height: 30px;
                color: #fff;
                left: 60px;
                background: #fd5a66;
                text-align: center;
              }
              .bottom{
                position: absolute;
                bottom: 38px;
                left: 46px;
                font-size: 12px;
                color: #b0b0b0;
              }

           }  
        } 
     }  
}
 .co{
     color: red;
      }  
</style>