<template>
    <div class="server">
         <div class="server-box">
             <div class="title"><h2>公司注册流程</h2></div>
            <div class="content">
                 <div class="content-item">
                      <a href="javascript">
                        <div class="logo">
                         <img src="../../../../static/images/001.jpg" alt="" class="logo-img">
                          </div>
                          <h4>步骤一</h4>
                          <p>与客户洽谈签订注册公司确认单</p>
                      </a>
                 </div>
             </div>
             <div class="content">
                 <div class="content-item">
                      <a href="javascript:;">
                        <div class="logo">
                            <img src="../../../../static/images/002.jpg" alt="" class="logo-img">
                        </div>
                         <h4>步骤二</h4>
                         <p>与客户洽谈签订注册公司确认单</p>
                      </a>
                 </div>
             </div>
              <div class="content">
                 <div class="content-item">
                     <a href="javascript:;">
                      <div class="logo">
                        <img src="../../../../static/images/004.jpg" alt="" class="logo-img">
                      </div>
                      <h4>步骤三</h4>
                      <p>与客户洽谈签订注册公司确认单</p>
                      </a>
                 </div>
             </div>
              <div class="content">
                 <div class="content-item">
                  <a href="javascript:;">
                      <div class="logo">
                        <img src="../../../../static/images/003.png" alt="" class="logo-img">
                      </div>
                      <h4>步骤四</h4>
                      <p>与客户洽谈签订注册公司确认单</p>
                   </a>   
                 </div>
             </div>
              <div class="content">
                 <div class="content-item">
                  <a href="javascript:;">
                      <div class="logo">
                        <img src="../../../../static/images/005.png" alt="" class="logo-img">
                      </div>
                      <h4>步骤五</h4>
                      <p>与客户洽谈签订注册公司确认单</p>
                  </a>
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
        position: relative;
        &::before {
                content:'<';
                position: absolute;
                top: 190px;
                left: -26px;
                width: 60px;
                height: 60px;
                font-size: 36px;
                cursor: pointer;
                color: #b0b0b0;
            };
         &::after {
                content:'>';
                position: absolute;
                top: 190px;
                right: -52px;
                width: 60px;
                height: 60px;
                font-size: 36px;
                cursor: pointer;
                color: #b0b0b0;
            }; 
        .title{
            width: 1180px;
            height: 114px;
            line-height: 114px;
            text-align: center;
        }
        .content{
           .content-item{
               a{
                 text-decoration: none;
               }
               width: 202px;
               height: 202px;
               float: left;
               margin-left: 16px;
               margin-right: 16px;
               .logo{
                  .logo-img{
                    width: 202px;
                    height: 202px;
                    border-radius: 101px;
                    box-sizing: border-box;
                    display: block;
                    border: 5px solid #b0b0b0;
                  }
               }
               h4{
                text-align: center;
                padding: 15px;
                color: #b0b0b0;
               }
               p{
                font-size: 14px;
                text-align: center;
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