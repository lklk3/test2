<template>
    <div>
      <div id="myChone" :style="{width: '540px', height: '450px'}"></div>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
         mounted(){
            this.drawLine();
        },
        methods: {
            drawLine(){
                let myChart = this.$echarts.init(document.getElementById('myChone'))
                myChart.setOption({
    legend: {
        data: ["高度(km)与气温(°C)变化关系"]
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: true
            },
            magicType: {
                show: false,
                type: ["line", "bar"]
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            },
            mark: {
                show: true
            }
        }
    },
    calculable: true,
    tooltip: {
        trigger: "axis"
    },
    xAxis: [
        {
            type: "value",
            name: "°C"
        }
    ],
    yAxis: [
        {
            type: "category",
            name: "km",
            axisLine: {
                onZero: false
            },
            boundaryGap: false,
            data: ["0", "10", "20", "30", "40", "50", "60", "70", "80"]
        }
    ],
    series: [
        {
            name: "高度(km)与气温(°C)变化关系",
            type: "line",
            smooth: true,
            data: [0, 15, 21, 26, 27, 30, 31, 33, 36]
        }
    ],
    title: {
        text: "Analytics",
        x: "left"
    }
})
            }
          }
    }
</script>
<style>
    
</style>