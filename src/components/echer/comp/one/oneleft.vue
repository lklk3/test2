<template>
    <div class="tt">
      <div id="myChone" :style="{width: '490px', height: '260px'}"></div>
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
                    title : {
                        text: '25134',
                        x:'center',
                        y:'30px',
                        subtext: 'Follows'
                    },
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
                            type: "category",
                            axisLine: {
                                onZero: false,
                                show: false
                            },
                            boundaryGap: false,
                            data: ["june", "july", "angluar"],
                            splitLine: {
                                show: false
                            },
                            splitArea: {
                                show: false
                            },
                            axisLabel: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: "value",
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            axisLabel: {
                                show: false
                            },
                            scale: true,
                            splitLine: {
                                show: true
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
<style lang="less" scoped>
   .tt{
     padding-top: 100px;
     padding-left: 30px;
   } 
</style>