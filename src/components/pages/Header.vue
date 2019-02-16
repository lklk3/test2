<template>
    <div class="header">
       <div class="header-box">
           <div class="logo">Blogin</div>
           <div class="title">
               <ul>
                   <li :class="{active:index==indexx}" v-for="item,index in titlelist" @click="changetitle(index)"><a href="javascript:;">{{item}}</a></li>
                 
               </ul>
           </div>
       </div>  
    </div>
</template>
<script>
    export default {
        data(){
            return {
              titlelist:[
                "Journal",
                "About",
                "Work",
                "Contact"
              ],
              indexx:0
            }
        },
        methods:{
            changetitle(index){
              this.indexx=index
            }
        }
    }
</script>
<style lang="less" scoped>
    .header{
        width: 100%;
        height: 130px;
        background-color: #292929;
        border-bottom: 6px solid #1e1e1e;
        .header-box{
            width: 980px;
            height: 130px;
            margin: 0 auto;
            color: #fff;
            .logo{
                position: absolute;
                top: 45px;
                font-size: 30px;
            }
            .title{
                float: right;
                ul{
                    li{
                        float: left;
                        a{  
                             height: 130px;
                             line-height: 130px;
                             text-align: center;
                             padding-right: 30px;
                             padding-left: 30px;
                             border-left: 1px solid #1d1d1d;
                             color: #fff;
                             display: block;
                             text-decoration: none;
                        }
                        a:hover{
                            color: #58c93a;
                            text-decoration: 3px solid red;
                        }
                    }
                }
            }
        }
    }
    .active{
        border-bottom: 6px solid #58c93a;
    }
</style>