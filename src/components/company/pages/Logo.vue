<template>
    <div class="logo">
       <div class="logo-box">
           <div class="left">
               <h4>综信财务</h4>
               <div class="list">
                   <ul>
                       <li>公司注册、公司变更、办资质<span class="iconfont icon-jiantou"></span></li>
                       <li>
                          代理记账、审计、税务代办
                          <span class="iconfont icon-jiantou"></span>
                       </li>
                       <li>商标注册、著作权、专利<span class="iconfont icon-jiantou"></span></li>
                       <li>企业社保、个人社保、公积金<span class="iconfont icon-jiantou"></span></li>
                       <li>问律师、写合同、法律顾问<span class="iconfont icon-jiantou"></span></li> 
                   </ul>
               </div>
           </div>
           <div class="right">
               <ul>
                   <li><span class="iconfont icon-zizhirenzheng"></span>资质认证</li>
                   <li><span class="iconfont icon-zizhirenzheng"></span>支付安全</li>
                   <li><span class="iconfont icon-ren"></span>专人服务</li>
                   <li><span class="iconfont icon-zan"></span>售后无忧</li>
               </ul>
           </div>  
       </div>
       <div class="nav">
           <div class="anv-box">
               <div class="alltitle">
                   全部服务分类
               </div>
               <div class="right">
                   <ul>
                       <li><a href="javascript:;">首页</a></li>
                       <li><a href="javascript:;">公司注册</a></li>
                       <li><a href="javascript:;">财税代理</a></li>
                       <li><a href="javascript:;">政府批文</a></li>
                       <li><a href="javascript:;">食品卫生</a></li>
                       <li><a href="javascript:;">商标专利</a></li>
                       <li><a href="javascript:;">工作签证</a></li>
                       <li><a href="javascript:;">关于我们</a></li>
                   </ul>
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
    .logo{
        .logo-box{
            width: 1180px;
            height: 80px;
            line-height: 80px;
            background: #fff;
            margin: 0 auto;
            .left{
                color: #34b3e0;
                margin-left: 30px;
                font-size: 30px;
                float: left;
                position: relative;
                .list{
                     position: absolute;
                     top: 120px;
                     left: -30px;
                     z-index:888;
                     ul{
                        li{
                          width: 260px;
                          height: 87px;
                          line-height: 87px;
                          background: #16285b;
                          font-size: 16px;
                          color: #fff;
                          border-bottom: 1px solid #86899f;
                          text-indent:10px;
                          span{
                            margin-right: 10px;
                            float: right;
                          }
                        }
                     }
                }
            }
            .right{
                float: right;
                color: #b0b0b0;
                ul{
                    li{
                        float: left;
                        padding-right: 20px;
                        span{
                          font-weight: bold;
                          margin-right: 3px;
                        }
                    }
                }
            }  
        }
        .anv-box{
             width: 1180px;
             height: 40px;
             margin: 0 auto;
             .alltitle{
                width: 260px;
                height: 40px;
                line-height: 40px;
                background: #34b3e0;
                text-align: center;
                color: #fff;
                float: left;
             }
             .right{
                float: right;
                height: 40px;
                line-height: 40px;
                font-size: 18px;
                ul{
                    li{
                        float: left;
                        a{
                            text-decoration: none;
                            color:#575757;
                            padding-left: 23px;
                            padding-right: 23px;
                        }
                    }
                }
             }
        }
    } 
</style>