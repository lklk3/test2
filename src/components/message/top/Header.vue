<template>
    <div class="header">
      <div class="logo">
           <img src="../../../../static/images/c2.jpg" alt="" class="im">
       </div>
       <div class="nav">
           <ul>
               <li>企业首页</li>
               <li>咨询业务</li>
               <li>增值业务</li>
               <li>培训业务</li>
               <li>移动业务</li>
               <li>留言板</li>
           </ul>
       </div>
       <div class="right">
           <div class="left">
               <input type="text" class="inp" placeholder="jsliang">
               <button class="btn">搜索</button>
           </div>
           <div class="leftright">
               <a href="javascript:;">登录</a>
               <a href="javascript:;">注册</a>
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
    .header{
        width: 100%;
        height: 74px;
        background: #0c3f74;
        color: #959eb2;
        position: fixed;
        top: 0;
        left: 0;
        .logo{
            width: 75px;
            height: 75px;
            float: left;
            .im{
                position: absolute;
                top: 8px;
                left: 8px;
            }
        }
        .nav{
            line-height: 74px;
            float: left;
            ul{
                li{
                    float: left;
                    padding: 0 20px;
                }
            }
        }
        .right{
            float: right;
            width: 420px;
            line-height: 74px;
            height: 74px;
            .left{
                width: 270px;
                height: 74px;
                float: left;
                .inp{
                    border: none;
                    border-radius: 3px;
                    width: 190px;
                    padding: 8px 15px 8px 5px;
                }
                .btn{
                    border: none;
                    background: #007bff;
                    padding: 8px;
                    border-radius: 3px;
                    color: #fff;
                }
            }
            .leftright{
                float: right;
                color: #fff;
                padding-right: 20px;
                a{
                    text-decoration: none;
                    color: #959eb2;
                    padding-right: 20px;
                }
            }
        }
    }
</style>