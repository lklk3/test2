<template>
    <div class="content">
       <div class="left">
           <left-nav></left-nav>
       </div>
       <div class="right">
            <router-view></router-view> 
       </div>
    </div>
</template>
<script>
    import LeftNav from './left.vue'
    export default {
        data(){
            return {

            }
        },
        components:{
            LeftNav
        }
    }
</script>
<style lang="less" scoped>
    .content{
        width: 1140px;
        margin: 0 auto;
        height: 890px;
        margin-top: 20px;
        .left{
            width: 170px;
            height: 500px;
            margin-right: 24px;
            float: left;
        }
        .right{
            float: right;
            width: 946px;
            border-radius: 10px;
            box-sizing: border-box;
            border: 1px solid #d2d2d2;
        }
    }
</style>