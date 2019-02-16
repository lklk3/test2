<template>
    <div>
       <table>
           <thead>
               <th>TIME</th>
               <th>USER NAME</th>
               <th></th>
               <th>STATUS</th>
           </thead>
           <tbody>
               <tr>
                   <td>9.45</td>
                   <td>info.design.com</td>
                   <td></td>
                   <td><span class="so">solved</span></td>
               </tr>
               <tr>
                   <td>9.45</td>
                   <td>info.design.com</td>
                   <td></td>
                   <td><span class="so">solved</span></td>
               </tr>
               <tr>
                   <td>9.45</td>
                   <td>info.design.com</td>
                   <td></td>
                   <td><span class="so">solved</span></td>
               </tr>
               <tr>
                   <td>9.45</td>
                   <td>info.design.com</td>
                   <td></td>
                   <td><span class="oo">open</span></td>
               </tr>
               <tr>
                   <td>9.45</td>
                   <td>info.design.com</td>
                   <td></td>
                   <td><span class="oo">open</span></td>
               </tr>
           </tbody>
       </table>
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
   table{
      th{
        height: 40px;
        line-height: 40px;
        padding:20px;
      }
      tr{
        height: 40px;
        line-height: 40px;
      }
      td{
        padding: 0 40px;
        text-align: center;
      }
   }
   .so{
     background: #5dd054;
     width: 80px;
     height: 30px;
     line-height: 30px;
     display: block;
     color: #fff;
     text-align: center;
     cursor: pointer;
   }
   .oo{
     background: red;
     width: 80px;
     height: 30px;
     line-height: 30px;
     display: block;
     color: #fff;
     text-align: center;
     cursor: pointer;
   }
</style>