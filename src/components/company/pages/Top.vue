<template>
    <div class="top">
       <div class="top-box">
          <div class="welcome">欢迎来到宗新财务！</div>
          <div class="mobile"><span class="iconfont icon-weibo"></span> <span class="iconfont icon-weixin"></span> <span class="iconfont icon-shouji"></span>移动应用<span class="iconfont icon-iconfontjiantou"></span></div>
          <div class="right">
              <ul>
                  <li><a href="javascript:;"><span class="iconfont icon-dengluyonghu"></span>登录/注册</a>|</li>
                  <li><a href="javascript:;">设为首页</a>|</li>
                  <li><a href="javascript:;">加入收藏</a>|</li>
                  <li><a href="javascript:;">联系我们</a>|</li>
                  <li><a href="javascript:;"><span class="iconfont icon-dianhua"></span>0755-22222&nbsp;&nbsp;&nbsp;1386974521</a></li>
                  
                  <!-- <li>设为首页</li>
                  <li>加入收藏</li>
                  <li>联系我们</li>
                  <li>0755-22222</li>
                  <li>138254...</li> -->
              </ul>
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
    .top{
        background: #2e3a4b;
        color: #b7b7b7;
        font-size: 12px;
        .top-box{
           width: 1180px;
           height: 35px;
           margin: 0 auto;
           line-height: 35px;
           .welcome{
              margin-left: 53px;
              margin-right: 20px;
              float: left;
           }
           .mobile{
              width: 150px;
              height: 35px;
              float: left;
              span{
                padding-right: 6px;
              }
           }
           .right{
              height: 35px;
              float: right;
              ul{
                li{
                    float: left;
                    a{
                        display: inline-block;
                        padding-left: 20px;
                        padding-right: 20px;
                        color: #b7b7b7;
                        text-decoration: none;
                        span{
                          padding-right: 3px;
                        }
                    }
                }
              }
           }  
        }
    }
</style>