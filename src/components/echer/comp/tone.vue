<template>
    <div class="to">
          <div class="to-box">
              <div class="left">
          
              </div>
              <div class="right">
                  
              </div>
          </div>
    </div>
</template>
<script>

    export default {
        data(){
            return {

            }
        },
        components:{
                   }
    }
</script>
<style lang="less" scoped>
    .to{
        width: 100%;
        height: 388px;
        background: #f5f8f9;
        padding-bottom: 20px;
        .to-box{
            width: 1140px;
            height: 388px;
            margin: 0 auto;
            background: #fff;
            .left{
                width: 680px;
                height: 380px;
                float: left;
            }
            .right{
                width: 450px;
                height: 380px;
                float: left;
            }
        }
    }
</style>