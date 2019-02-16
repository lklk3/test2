<template>
    <div class="content">
       <div class="content-box">
           <div class="content_item clearfix" v-for="item,index in conlist" :key="index">
              <div class="left">
                  <img :src="'../../../static/images/'+item.img" alt="">
              </div>
              <div class="right">
                <div class="right-content">
                  <div class="title">
                      <h2>{{item.title1}}</h2>
                  </div>
                  <div class="r-center">
                      <p>{{item.p1}}</p>
                      <p>{{item.p2}}</p>
                  </div>
                  <div class="bot">
                      <span class="bott" :class="{active:index==inn}" @click="changecolor(index)">Continue Reading </span>
                  </div>
                  </div>
              </div>
           </div>
           
           <div class="bottom">
               <div class="left">
                   Previous
               </div>
               <div class="right">
                   Next
               </div>
           </div>
       </div> 
    </div>
</template>
<script>
    export default {
        data(){
            return {
              conlist:[
                  {
                    img:"pic1.jpg",
                    title1:"Duis aute irure dolor in henderit in voluptate.",
                    p1:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
                    p2:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..."
                  },
                  {
                    img:"pic2.jpg",
                    title1:"Duis aute irure dolor in henderit in voluptate.",
                    p1:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
                    p2:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..."
                  },
                  {
                    img:"pic3.jpg",
                    title1:"Duis aute irure dolor in henderit in voluptate.",
                    p1:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
                    p2:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..."
                  }
              ],
              inn:-1
            }
        },
        methods:{
              changecolor(index){
                this.inn=index
              }
       }
    }
</script>
<style lang="less" scoped>
    .content{
        width: 100%;
        .content-box{
            border: 1px solid #e1e0e0;
            border-bottom: none;
            padding-top: 80px;
            width: 980px;
            margin: 0 auto;
            .content_item{
                margin-bottom: 80px;
               .left{
                    width: 470px;
                    height: 307px;
                    margin-right: 40px;
                    float: left;
               }
               .right{
                   .title{
                        margin-bottom: 48px;
                        .h2{
                            font-size: 28px;
                            display: block;
                            width: 344px;
                          } 
                   }
                   .r-center{
                      p{
                        margin-bottom: 22px;
                        color: #606060;
                      }
                   }
                   .bot{
                       .bott{
                           width: 200px;
                           height: 42px;
                           line-height: 42px;
                           border-radius: 30px;
                           background-color: #fff;
                           border: 2px solid #c3c3c3;
                           padding: 10px;
                           cursor: pointer;
                           color:#999;
                           &.active{
                                color: #58c93a;
                                border: 2px solid #58c93a;
                            }
                       }
                   }
               }
            }
            .bottom{
                width: 100%;
                height: 74px;
                border-top: 1px solid #e1e0e0;
                border-bottom: 1px solid #e1e0e0;
                line-height: 74px;
                .left{
                    float: left;
                    padding-left: 30px;
                }
                .right{
                    float: right;
                    padding-right: 30px;
                }
            }
        }   
    }

</style>