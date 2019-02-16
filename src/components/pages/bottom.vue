<template>
    <div class="bottom">
        <div class="bottom-box">
           <div class="logo">
               <h2>Blogin</h2>
           </div>
           <div class="shangbiao">
               © 2014 Blogin.com  -  All Rights Reserved  -  Find more free Templates at Pixelhint.com
           </div>
           <div class="imgg">
               <ul>
                   <li><a href="javascript:;"><img src="../../assets/images/bb_03.jpg" alt=""></a></li>
                   <li><a href="javascript:;"><img src="../../assets/images/bb_05.jpg" alt=""></a></li>
                   <li><a href="javascript:;"><img src="../../assets/images/bb_07.jpg" alt=""></a></li>
                   <li><a href="javascript:;"><img src="../../assets/images/bb_09.jpg" alt=""></a></li>
               </ul>
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
   .bottom{
     background-color: #f8f8f8;
     border-top: 1px solid #e1e0e0;
     .bottom-box{
        width: 980px;
        height: 312px;
        margin: 0 auto;
        position: relative;
        .logo{
            position: absolute;
            top: 78px;
            left: 446px;
        }
        .shangbiao{
            position: absolute;
            top: 145px;
            left: 176px;
        }
        .imgg{
            position: absolute;
            top: 194px;
            left: 370px;
            ul{
                li{
                    float: left;
                    margin-right: 25px;
                }
            }
        }
     }
   } 
</style>