<template>
    <div class="to">
          <div class="to-box">
             <div class="left">
                 <circle-nav></circle-nav>
             </div>
             <div class="right">
                 <tiao-two></tiao-two>
             </div>
          </div>
    </div>
</template>
<script>
    import CircleNav from './echear/circle.vue'
    import TiaoTwo from './echear/tiaotwo.vue'
    export default {
        data(){
            return {
              
            }
        },
        components:{
            CircleNav,
            TiaoTwo
        }
        
    }
</script>
<style lang="less" scoped>
    .to{
        width: 100%;
        height: 450px;
        background: #f5f8f9;
        padding-bottom: 20px;
        .to-box{
            width: 1140px;
            height: 450px;
            margin: 0 auto;
            background: #f5f8f9;
            .left{
                width: 540px;
                height: 450px;
                background: #fff;
                float: left;
            }
            .right{
                width: 560px;
                height: 450px;
                background: #fff;
                float: right;
            }
        }
    }
</style>