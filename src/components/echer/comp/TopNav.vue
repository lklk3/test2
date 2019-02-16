<template>
    <div class="top">
      <div class="topbox">
          <div class="logo">options</div>
          <div class="logoout">
              <span></span>
              <span></span>
              <div class="lo">options</div>
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
   .top{
       width: 100%;
       height: 100px;
       .topbox{
          width: 1140px;
          height: 100px;
          margin: 0 auto;
          position: relative;
          .logo{
             width: 106px;
             height: 34px;
             line-height: 34px;
             text-align: center;
             background: red;
             position: absolute;
             left: 0;
             top: 32px;
             color: #fff;
          }
          .logoout{
             height: 34px;
             line-height: 34px;
             width: 200px;
             position: absolute;
             right: 0;
             top: 32px;
             color: #fff;
             span{
                width: 34px;
                height: 34px;
                background: pink;
                display: inline-block;
             }
             .lo{
                float: right;
                text-align: center;
                width: 110px;
                height: 34px;
                background: red;
             }
          }
       }
   } 
</style>