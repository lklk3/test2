<template>
    <div class="panner">
        <div class="panner-box">
            <div class="title">
                <h2>合作伙伴</h2>
            </div>
            <div class="center">
                <img src="../../../../static/images/panner.jpg" alt="">
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
   .panner{
      background: #f5f5f5;
      border-bottom: 1px solid #dcdcdc;
      .panner-box{
        margin: 0 auto;
        width: 1180px;
        height: 445px;
        .title{
            height: 110px;
            line-height: 110px;
            width: 100%;
            text-align: center;
        }
        .center{
            padding-left: 16px;
            padding-right: 16px;
            padding-bottom: 40px;
        }
      }
   } 
</style>