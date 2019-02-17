<template>
    <div class="item-left">
        <ul>
            <li class="bd">关于公司</li>
            <li><router-link to="/jianjie">公司简介</router-link></li>
            <li><router-link to="/wenhua">企业文化</router-link></li>
            <li><router-link to="/jingyin">诚聘精英</router-link></li>
            <li class="pp"><router-link to="/lianxi">联系方式</router-link></li>
        </ul>
        <div><img src="../../../../static/images/pop.jpg" alt=""></div>
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
   .item-left{
    ul{
        border: 1px solid #d2d2d2;
        overflow: hidden;
        border-radius: 10px;
        margin-bottom: 20px;
        li{
            float: left;
            height: 45px;
            line-height: 45px;
            width: 100%;
            display: block;
            text-align: center;
            padding-top: 5px;
            border-bottom: 1px dashed #eee;
            &.bd{
                background: #dbdbdb;
            }
            &.pp{
               border-bottom: none; 
            }
            a{
                text-decoration: none;
                color: #333;
            }
        }
    }
   } 
</style>