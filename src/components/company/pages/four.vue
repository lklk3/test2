<template>
    <div class="ff">
      <div class="ffbox">
          <div class="itm">
              <div class="itembox">
                 <div class="center">
                     <div class="left">
                         <img src="../../../../static/images/b01.png" alt="">
                     </div>
                     <div class="right">
                         <div class="top"><h4>资质认证</h4></div>
                         <div class="bottom">服务商100%实名审核认证</div>
                     </div>
                 </div>
              </div>
              <div class="itembox">
                 <div class="center">
                     <div class="left">
                         <img src="../../../../static/images/b02.png" alt="">
                     </div>
                     <div class="right">
                         <div class="top"><h4>售后无忧</h4></div>
                         <div class="bottom">服务商100%实名审核认证</div>
                     </div>
                 </div>
              </div>
              <div class="itembox">
                 <div class="center">
                     <div class="left">
                         <img src="../../../../static/images/b03.png" alt="">
                     </div>
                     <div class="right">
                         <div class="top"><h4>资质认证</h4></div>
                         <div class="bottom">服务商100%实名审核认证</div>
                     </div>
                 </div>
              </div>
              <div class="itembox">
                 <div class="center">
                     <div class="left">
                         <img src="../../../../static/images/b04.png" alt="">
                     </div>
                     <div class="right">
                         <div class="top"><h4>资质认证</h4></div>
                         <div class="bottom">服务商100%实名审核认证</div>
                     </div>
                 </div>
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
   .ff{
      width: 100%;
      height: 134px;
      background: #f5f5f5;
      border-bottom: 1px solid #b0b0b0;
      .ffbox{
        width: 1180px;
        height: 134px;
        margin: 0 auto;
        .itm{
            height: 134px;
            margin-left: 136px;
            margin-right: 136px;
            .itembox{
              width: 200px;
              height: 90px;
              float: left;
              padding-top: 44px;
              padding-right: 20px;
              .center{
                height: 44px;
                .left{
                    float: left;
                    padding-right: 5px;
                }
                .right{
                    .bottom{
                        font-size: 12px;
                        line-height: 12px;
                        padding: 5px;
                    }
                }
              }
            }
        }
      }
   } 
</style>