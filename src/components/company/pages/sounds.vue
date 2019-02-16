<template>
    <div class="sound">
        <div class="sound-box">
            <div class="title">
                <h2>客户心声</h2>
            </div>
            <div class="center">
                <ul>
                    <li>
                        <a href="javascript:;"><img src="../../../../static/images/a1.jpg" alt=""></a>
                    </li>
                    <li>
                        <a href="javascript:;"><img src="../../../../static/images/a2.jpg" alt=""></a>
                    </li>
                    <li>
                        <a href="javascript:;"><img src="../../../../static/images/a2.jpg" alt=""></a>
                    </li>
                </ul>
            </div>
            <div class="bottom">
                <div class="more">查看更多</div>
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
   .sound{
       width: 100%;
       .sound-box{
          width: 1180px;
          height: 450px;
          margin: 0 auto;
          .title{
            height: 110px;
            text-align: center;
            line-height: 110px;
          }
          .center{
            height: 250px;
            ul{
                li{
                    float: left;
                    padding-left: 10px;
                    padding-right: 10px;
                    a{
                        display: block;
                        width: 370px;
                        height: 250px;
                    }
                }
            }
          }
          .bottom{
             width: 1180px;
             height: 70px;
             padding-top: 35px;
             .more{
                width: 118px;
                margin: 0 auto;
                height: 32px;
                line-height: 32px;
                text-align: center;
                border: 2px solid #d3d3d3;
                color: #d3d3d3;
             }
          }
       }
   } 
</style>