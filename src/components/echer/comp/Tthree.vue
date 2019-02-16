<template>
    <div class="to">
          <div class="to-box">
             <div class="left">
                 <three-nav></three-nav>
             </div>
             <div class="right">
                 <div class="top">
                    <span>Support Requests</span>
                    <div class="vv">view</div>
                 </div>
                 <div class="bo">
                    <table-vue></table-vue>
                 </div>
             </div>
          </div>
    </div>
</template>
<script>
    import ThreeNav from './one/oneleft.vue'
    import TableVue from './table.vue'
    export default {
        data(){
            return {
              
            }
        },
        components:{
           ThreeNav,
           TableVue
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
                .top{
                  width: 100%;
                  height: 110px;
                  border-bottom: 1px solid #efeff0;
                  position: relative;
                  span{
                    padding-top: 45px;
                    padding-left: 50px;
                    font-size: 16px;
                    font-weight: none;
                    display: block;
                    color: #262b2e;
                  }
                  .vv{
                    border: 1px solid #e9e9ea;
                    padding-left: 20px;
                    padding-right: 20px;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    position: absolute;
                    top: 45px;
                    right: 50px;
                    color: #7b7e80; 
                  }

                }
            }
        }
    }
</style>