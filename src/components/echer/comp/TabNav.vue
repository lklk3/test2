<template>
    <div class="nav">
       <div class="nav-box">
           <div class="left">
              <div class="center">
                  Audience Overview
                  <p>Roseville,CA</p>
              </div>
           </div>
           <div class="right">
               <div class="cen">
                   <ul>
                       <li><a href="javascript:;">center</a></li>
                       <li><a href="javascript:;">center</a></li>
                       <li><a href="javascript:;">center</a></li>
                       <li><a href="javascript:;">center</a></li>
                       <li><a href="javascript:;">center</a></li>
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
    .nav{
        height: 172px;
        width: 100%;
        background: #f5f8f9;
        .nav-box{
            width: 1140px;
            height: 172px;
            margin: 0 auto;
            .left{
                width: 300px;
                height: 172px;
                font-size: 32px;
                float: left;
                color: #262b2e;
                position: relative;
                .center{
                   position: absolute;
                   top: 45px;
                   left: 0;
                   p{
                     padding-top: 10px;
                     font-size: 18px;
                   }
                }
            }
            .right{
                float: right;
                .cen{
                   height: 172px;
                   line-height: 172px;
                   ul{
                    li{
                        float: left;
                        padding-left: 34px;
                        padding-top: 20px;
                        a{
                            text-decoration: none;
                            color: #262b2e;
                        }
                        a:hover{
                            text-decoration: underline;
                            color: #cccfd0;
                        }
                    }
                   }
                }
            }
        }
    }
</style>