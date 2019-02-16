<template>
    <div class="friend">
        <div class="friend-box">
            <div class="link">
                友情链接
            </div>
            <ul>
                <li>综信大型工商财税</li>
                <li>深圳业信会计师事务所</li>
                <li>综信国际商务有限公司</li>
                <li>深圳综融财富咨询有限公司</li>
                <li>深圳前海综信会计代理有限公司</li>
                <li>综信大型工商财税</li>
                <li>深圳市综信企业投资管理顾问有限公司</li>
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
   .friend{
      width: 100%;
      background: #f5f5f5;
      border-bottom: 1px solid #dcdcdc;
      .friend-box{
        width: 1180px;
        height: 85px;
        margin: 0 auto;
        color: #595757;
        .link{
           width: 80px;
           height: 28px;
           line-height: 28px;
           padding-top: 20px;
           padding-left: 12px;
        }
        ul{
            li{
                float: left;
                font-size: 12px;
                padding-left: 12px;
                padding-right: 12px;
            }
        }
      }
   } 
</style>