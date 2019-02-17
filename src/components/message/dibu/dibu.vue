<template>
    <div class="dibu">
       <div class="jishao">
           <p>jsliang 前端有限公司 版权所有</p>
           <p>Copyright@ 2019. ALL Rights Reserved</p>
           <p>友情链接: 梁峻荣的 GitHub</p>
       </div>
           <div class="zui">粤ICP备16084737号-1</div>
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
    .dibu{
        width: 100%;
        height: 204px;
        .jishao{
            height: 140px;
            width: 100%;
            text-align: center;
            background: #1360b0;
            color: #fff;
            p{
                padding-top: 18px;
            }
        }
        .zui{
            text-align: center;
            padding-top: 20px;
        }
    } 
</style>