<template>
    <div class="reasion">
         <div class="reasion-box">
             <ul class="box-item">
                 <li>
                     <div>
                         <div class="title">
                            <h2>为什么选择我们</h2>
                        </div>
                        <div class="con">
                        <div class="content">
                         12年正规公司，深圳政府与香港政府机构鼎力推荐，大陆8个分支机构，香港3个办公地点，近300人专业顾问团队，注册、变更、报税、财务、批文一条龙。
                         <div class="san"></div>
                         </div>
                         <div class="cneter">
                             <div class="center-box">公司素质</div>
                         </div>
                         <div class="circle">
                            <div class="circle-box">
                                <ul>
                                    <li class="active"></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        
                     </div>
                 </li>
             </ul>
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
   .reasion{
      width: 100%;
      height: 450px;
      background: url(../../../../static/images/bgbg.jpg);
      .reasion-box{
        width: 1180px;
        height: 450px;
        margin: 0 auto;
        position: relative;
         &::before {
                content:'<';
                position: absolute;
                top: 172px;
                left: 60px;
                width: 60px;
                height: 100px;
                line-height: 100px;
                text-align: center;
                font-size: 36px;
                cursor: pointer;
                color: #b0b0b0;
                background: rgba(0,0,0,.5);
            };
         &::after {
                content:'>';
                position: absolute;
                top: 172px;
                right: 60px;
                width: 60px;
                height: 100px;
                line-height: 100px;
                text-align: center;
                font-size: 36px;
                cursor: pointer;
                color: #b0b0b0;
                background: rgba(0,0,0,.5);
            };
        .title{
            width: 100%;
            height: 130px;
            line-height: 130px;
            text-align: center;
            color: #fff;
        }
        .con{
            width: 100%;
            height: 80px;
            .content{
                width: 720px;
                height: 60px;
                padding: 10px;
                font-size: 16px;
                line-height: 32px;
                margin: 0 auto;
                background: #fff;
                border-radius: 10px;
                color: #575757;
                position: relative;
                .san{
                width: 24px;
                height: 24px;
                background: #fff;
                position: absolute;
                top: 68px;
                left: 360px;
                transform: rotate(45deg);
            }
            }  
        }
        .cneter{
            height: 160px;
            width: 100%;
            text-align: center;
            padding-top: 36px;
            .center-box{
                width: 124px;
                height: 124px;
                border-radius: 62px;
                line-height: 124px;
                background: #34b3e0;
                margin: 0 auto;
                color: #fff;
                font-weight: 900;
                font-size: 16px;
            }
        }
        .circle{
            width: 100%;
            height: 80px;
            text-align: center;
            .circle-box{
                margin: 0 auto;
                width: 220px;
                height: 70px;
                text-align: center;
                ul{
                    padding-left: 50px;
                    li{
                        float: left;
                        margin-right: 10px;
                        width: 8px;
                        height: 8px;
                        border-radius: 4px;
                        background: #fff;
                        &.active{
                            background: #333;
                        }
                    }
                }
                }
            }
      }
   } 
</style>