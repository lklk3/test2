<template>
    <div class="bbo">
       <div class="boo-box">
           <div class="logo">
               BooNav
           </div>
           <table>
               <tr>
                   <td>NEWS</td>
                   <td>NEWS</td>
                   <td>NEWS</td>
                   <td>NEWS</td>
                   <td>NEWS</td>
               </tr>
                 <tr>
                   <td>NEWS</td>
                   <td>NEWS</td>
                   <td>NEWS</td>
                   <td>NEWS</td>
                   <td>NEWS</td>
               </tr>
                <tr>
                   <td>NEWS</td>
                   <td>NEWS</td>
                   <td>NEWS</td>
                   <td>NEWS</td>
               </tr>
                <tr>
                   <td>NEWS</td>
                   <td>NEWS</td>
                   <td>NEWS</td>
                   <td>NEWS</td>
               </tr>
           </table>
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
  .bbo{
    height: 290px;
    width: 100%;
    background: #202124;
    border-bottom: 40px solid #1c1d20;
    .boo-box{
        width: 1140px;
        height: 210px;
        margin: 0 auto;
        color: #fff;
        padding-top: 80px;
        .logo{
            width: 106px;
            height: 32px;
            line-height: 32px;
            background: red;
            text-align: center;
            float: left;
            margin-right: 80px;
        }
        table{
            tr{
                line-height: 32px;
            }
            td{
                padding: 0 120px 0 0;
                font-size: 14px;
            }
        }
    }
  }  
</style>