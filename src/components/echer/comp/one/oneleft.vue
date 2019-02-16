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
                        data: ["Antials"],
                        x: "left",
                        itemWidth: 20,
                        textStyle: {
                            fontSize: 20
                        },
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        itemHeight: 14
                    },
                    toolbox: {
                        show: false,
                        feature: {
                            mark: {
                                show: true
                            },
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
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                show: false
                            },
                            splitArea: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            axisLabel: {
                                show: true
                            },
                            scale: true
                        }
                    ],
                    yAxis: [
                        {
                            type: "category",
                            axisLine: {
                                onZero: false,
                                show: false
                            },
                            boundaryGap: false,
                            data: ["june", "july", "angluar"],
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: false
                            }
                        }
                    ],
                    series: [
                        {
                            name: "Antials",
                            type: "line",
                            smooth: true,
                            data: [10, 47, 60],
                            itemStyle: {
                                normal: {
                                    color: "rgb(0, 127, 255)"
                                }
                            }
                        }
                    ],
                    grid: {
                        borderWidth: 0
                    }
                })
            }
          }
    }
</script>
<style>
    
</style>